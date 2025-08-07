"use client";

import { useEffect } from "react";
import { useWatchContractEvent, usePublicClient } from "wagmi";
import { parseAbiItem } from "viem";
import { useListedNfts, Listing } from "@/store/contracts";
import { contract_addresses, marketabi } from "@/public/constants";

const marketplaceAddress = contract_addresses.marketplace as `0x${string}`;

export function useListedNFTs() {
  const client = usePublicClient();
  const setListings = useListedNfts((s) => s.setListings);
  const addListing = useListedNfts((s) => s.addListing);
  const updatePrice = useListedNfts((s) => s.updatePrice);
  const removeListing = useListedNfts((s) => s.removeListing);
  const transferOwnership = useListedNfts((s) => s.transferOwnership);
  const nftAddress = contract_addresses.nft as `0x${string}`;

  // Fetch past events on load
  useEffect(() => {
    async function syncPastListings() {
      if (!client) return;

      // 1. Get all NFTListed events
      const listedLogs = await client.getLogs({
        address: marketplaceAddress,
        event: parseAbiItem(
          "event NFTListed(address indexed owner, uint256 indexed tokenId, uint256 price)"
        ),
        fromBlock: BigInt(0),
        toBlock: "latest",
      });

      //@ts-ignore
      let listings: Listing[] = listedLogs.map((log) => ({
        owner: log.args.owner,
        tokenId: log.args.tokenId,
        price: log.args.price,
        nftAddress,
      }));

      // 2. Get all NFTSold events to update owner
      const soldLogs = await client.getLogs({
        address: marketplaceAddress,
        event: parseAbiItem(
          "event NFTSold(address indexed buyer, address indexed seller, uint256 indexed tokenId, address nftAddress, uint256 price)"
        ),
        fromBlock: BigInt(0),
        toBlock: "latest",
      });

      soldLogs.forEach((log) => {
        //@ts-ignore
        const { buyer, tokenId, nftAddress: soldNft } = log.args;

        // update owner if listing exists
        //@ts-ignore
        listings = listings?.map((l) =>
          l.tokenId === tokenId &&
          l.nftAddress.toLowerCase() === soldNft?.toLowerCase()
            ? { ...l, owner: buyer }
            : l
        );
      });

      setListings(listings);
    }

    syncPastListings();
  }, [client, setListings]);

  // Live updates for listing
  useWatchContractEvent({
    address: marketplaceAddress,
    abi: marketabi,
    eventName: "NFTListed",
    onLogs(logs) {
      logs.forEach((log) => {
        //@ts-ignore
        const { owner, tokenId, price } = log.args;
        addListing({ owner, tokenId, price, nftAddress });
      });
    },
  });

  // Live updates for price updates
  useWatchContractEvent({
    address: marketplaceAddress,
    abi: marketabi,
    eventName: "NFTUpdated",
    onLogs(logs) {
      logs.forEach((log) => {
        //@ts-ignore
        const { tokenId, newPrice } = log.args;
        updatePrice(tokenId, nftAddress, newPrice);
      });
    },
  });

  // Live updates for delisting
  useWatchContractEvent({
    address: marketplaceAddress,
    abi: marketabi,
    eventName: "NFTDeListed",
    onLogs(logs) {
      logs.forEach((log) => {
        //@ts-ignore
        const { tokenId } = log.args;
        removeListing(tokenId, nftAddress);
      });
    },
  });

  // Ownership transfer after sale
  useWatchContractEvent({
    address: marketplaceAddress,
    abi: marketabi,
    eventName: "NFTSold",
    onLogs(logs) {
      logs.forEach((log) => {
        //@ts-ignore
        const { tokenId, nftAddress, buyer } = log.args;
        transferOwnership(tokenId, nftAddress, buyer);
      });
    },
  });

  return useListedNfts((state) => state.listings);
}
