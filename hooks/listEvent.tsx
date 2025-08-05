// hooks/useListedNFTs.ts
"use client";

import { useEffect } from "react";
import { useWatchContractEvent, usePublicClient } from "wagmi";
import { parseAbiItem } from "viem";
import { useListedNfts, Listing } from "@/store/contracts";
import { contract_addresses, marketabi } from "@/public/constants";

const marketplaceAddress = contract_addresses.marketplace as `0x${string}`;

export function useListedNFTs() {
  const client = usePublicClient();
  //@ts-ignore
  const addListing = useListedNfts((state) => state.addListing);
  //@ts-ignore

  const setListings = useListedNfts((state) => state.setListings);

  // 1. Fetch past logs once
  useEffect(() => {
    async function fetchPastListings() {
      const logs = await client?.getLogs({
        address: marketplaceAddress,
        event: parseAbiItem(
          "event NFTListed(address indexed owner, uint256 indexed tokenId, uint256 price)"
        ),
        fromBlock: BigInt(0),
        toBlock: "latest",
      });

      //@ts-ignore
      const listings: Listing[] = logs?.map((log) => ({
        // @ts-ignore
        owner: log.args.owner,
        // @ts-ignore
        tokenId: log.args.tokenId,
        // @ts-ignore
        price: log.args.price,
      }));

      setListings(listings);
    }

    fetchPastListings();
  }, [client, setListings]);

  // 2. Subscribe to new listings
  useWatchContractEvent({
    address: marketplaceAddress,
    abi: marketabi,
    eventName: "NFTListed",
    strict: true,
    onLogs(logs) {
      logs.forEach((log) => {
        // @ts-ignore
        const { owner, tokenId, price } = log.args;
        addListing({ owner, tokenId, price });
      });
    },
  });
  //@ts-ignore
  return useListedNfts((state) => state.listings);
}
