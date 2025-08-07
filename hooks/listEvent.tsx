"use client";

import { useEffect } from "react";
import { useWatchContractEvent, usePublicClient } from "wagmi";
import { parseAbiItem } from "viem";
import { useListedNfts, Listing } from "@/store/contracts";
import { contract_addresses, marketabi } from "@/public/constants";

const marketplaceAddress = contract_addresses.marketplace as `0x${string}`;
const nftAddress = contract_addresses.nft as `0x${string}`;

export function useListedNFTs() {
  const client = usePublicClient();
  const setListings = useListedNfts((s) => s.setListings);
  const addListing = useListedNfts((s) => s.addListing);
  const updatePrice = useListedNfts((s) => s.updatePrice);
  const removeListing = useListedNfts((s) => s.removeListing);
  const transferOwnership = useListedNfts((s) => s.transferOwnership);

  useEffect(() => {
    async function syncPastListings() {
      if (!client) return;

      // 1. Fetch NFTListed events
      const listedLogs = await client.getLogs({
        address: marketplaceAddress,
        event: parseAbiItem(
          "event NFTListed(address indexed owner, uint256 indexed tokenId, uint256 price)"
        ),
        fromBlock: BigInt(0),
        toBlock: "latest",
      });

      let listings: Listing[] = listedLogs.map((log) => {
        const args = log.args as any;
        return {
          owner: args.owner,
          tokenId: BigInt(args.tokenId),
          price: BigInt(args.price),
          nftAddress,
        };
      });
      console.log("listings", listings);
      // 2.   Apply NFTUpdated events
      const updatedLogs = await client.getLogs({
        address: marketplaceAddress,
        event: parseAbiItem(
          "event NFTUpdated(address indexed owner, uint256 indexed tokenId, uint256 indexed newPrice)"
        ),
        fromBlock: BigInt(0),
        toBlock: "latest",
      });

      updatedLogs.forEach((log) => {
        console.log("log",log)
        const args = log.args as any;
        const tokenId = BigInt(args.tokenId);
        const newPrice = BigInt(args.newPrice);

        listings = listings.map((l) =>
          l.tokenId === tokenId ? { ...l, price: newPrice } : l
        );
      });
      console.log("updated listings", listings);

      // 3. Apply NFTSold events
      const soldLogs = await client.getLogs({
        address: marketplaceAddress,
        event: parseAbiItem(
          "event NFTSold(address indexed buyer, address indexed seller, uint256 indexed tokenId, address nftAddress, uint256 price)"
        ),
        fromBlock: BigInt(0),
        toBlock: "latest",
      });

      soldLogs.forEach((log) => {
        const args = log.args as any;
        const tokenId = BigInt(args.tokenId);
        const soldNft = args.nftAddress;
        const buyer = args.buyer;

        listings = listings.map((l) =>
          l.tokenId === tokenId &&
          l.nftAddress.toLowerCase() === soldNft.toLowerCase()
            ? { ...l, owner: buyer }
            : l
        );
      });
      console.log("sold listings", listings);

      // 4. Apply NFTDeListed events
      // const cancelledLogs = await client.getLogs({
      //   address: marketplaceAddress,
      //   event: parseAbiItem(
      //     "event NFTDeListed(address indexed owner, uint256 indexed tokenId)"
      //   ),
      //   fromBlock: BigInt(0),
      //   toBlock: "latest",
      // });

      // cancelledLogs.forEach((log) => {
      //   const args = log.args as any;
      //   const tokenId = BigInt(args.tokenId);

      //   listings = listings.filter((l) => l.tokenId !== tokenId);
      // });
      // console.log("cancelled listings", listings);

      // Final set
      setListings(listings);
    }

    syncPastListings();
  }, [client, setListings]);

  // Live updates
  useWatchContractEvent({
    address: marketplaceAddress,
    abi: marketabi,
    eventName: "NFTListed",
    onLogs(logs) {
      logs.forEach((log) => {
        //@ts-ignore
        const args = log.args as any;
        addListing({
          owner: args.owner,
          tokenId: BigInt(args.tokenId),
          price: BigInt(args.price),
          nftAddress,
        });
      });
    },
  });

  useWatchContractEvent({
    address: marketplaceAddress,
    abi: marketabi,
    eventName: "NFTUpdated",
    onLogs(logs) {
      logs.forEach((log) => {
        //@ts-ignore

        const args = log.args as any;
        updatePrice(BigInt(args.tokenId), nftAddress, BigInt(args.newPrice));
      });
    },
  });

  useWatchContractEvent({
    address: marketplaceAddress,
    abi: marketabi,
    eventName: "NFTDeListed",
    onLogs(logs) {
      logs.forEach((log) => {
        //@ts-ignore

        const args = log.args as any;
        removeListing(BigInt(args.tokenId), nftAddress);
      });
    },
  });

  useWatchContractEvent({
    address: marketplaceAddress,
    abi: marketabi,
    eventName: "NFTSold",
    onLogs(logs) {
      logs.forEach((log) => {
        //@ts-ignore

        const args = log.args as any;
        transferOwnership(BigInt(args.tokenId), args.nftAddress, args.buyer);
      });
    },
  });

  return useListedNfts((state) => state.listings);
}
