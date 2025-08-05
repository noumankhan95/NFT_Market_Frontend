// components/ListNftCard.tsx
"use client";

import { useState, useEffect } from "react";
import {
  useAccount,
  useReadContract,
  useWriteContract,
  useWaitForTransactionReceipt,
} from "wagmi";
import { nftabi, marketabi, contract_addresses } from "@/public/constants";
import { parseUnits } from "viem";

interface Props {
  tokenId: number;
}

export default function ListNftCard({ tokenId }: Props) {
  const nftAddress = contract_addresses.nft as `0x${string}`;
  const marketplaceAddress = contract_addresses.marketplace as `0x${string}`;
  const { address } = useAccount();

  const [price, setPrice] = useState("0.0");

  const { data: owner } = useReadContract({
    address: nftAddress,
    abi: nftabi,
    functionName: "ownerOf",
    args: [BigInt(tokenId)],
  });

  const { data: tokenUri } = useReadContract({
    address: nftAddress,
    abi: nftabi,
    functionName: "tokenURI",
    args: [BigInt(tokenId)],
  });

  const [metadata, setMetadata] = useState<{
    name: string;
    description: string;
    image: string;
  } | null>(null);

  useEffect(() => {
    if (
      tokenUri &&
      typeof tokenUri === "string" &&
      tokenUri.startsWith("data:application/json;base64,")
    ) {
      const base64 = tokenUri.split(",")[1];
      const json = atob(base64);
      try {
        setMetadata(JSON.parse(json));
      } catch (e) {
        console.error("Failed to parse metadata:", e);
      }
    }
  }, [tokenUri]);

  const { writeContractAsync: approveAsync, isPending: approving } =
    useWriteContract();

  const { writeContractAsync: listAsync, isPending: listing } =
    useWriteContract();

  const handleList = async () => {
    if (!price || !nftAddress || !marketplaceAddress) return;
    try {
      await approveAsync({
        abi: nftabi,
        address: nftAddress,
        functionName: "approve",
        args: [marketplaceAddress, BigInt(tokenId)],
      });

      await listAsync({
        abi: marketabi,
        address: marketplaceAddress,
        functionName: "listNFT",
        args: [BigInt(tokenId), parseUnits(price, 18), nftAddress],
      });
    } catch (err) {
      console.error("Error listing NFT:", err);
    }
  };

  return (
    <div className="border p-4 rounded shadow max-w-md">
      {metadata ? (
        <>
          <img src={metadata.image} alt="NFT" className="w-full h-auto mb-2" />
          <h3 className="text-lg font-bold">{metadata.name}</h3>
          <p className="text-sm text-gray-600">{metadata.description}</p>
        </>
      ) : (
        <p>Loading metadata...</p>
      )}

      <p className="text-xs mt-2">
        <strong>Token ID:</strong> {tokenId}
      </p>
      <p className="text-xs">
        <strong>Owner:</strong>{" "}
        {owner &&
        typeof owner === "string" &&
        address?.toLowerCase() === owner.toLowerCase()
          ? "You"
          : (owner as string)}
      </p>

      {address?.toLowerCase() === (owner as string)?.toLowerCase() && (
        <div className="mt-4 space-y-2">
          <input
            type="number"
            placeholder="Price in USDC"
            className="w-full px-3 py-1 border rounded"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <button
            onClick={handleList}
            className="w-full py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
            disabled={approving || listing}
          >
            {approving || listing ? "Listing..." : "List NFT"}
          </button>
        </div>
      )}
    </div>
  );
}
