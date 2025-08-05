"use client";

import { useAccount, useReadContract, useWriteContract } from "wagmi";
import { nftabi, marketabi, contract_addresses } from "@/public/constants";
import { parseUnits, formatUnits, erc20Abi } from "viem";
import { useEffect, useState } from "react";

interface Props {
  tokenId: bigint;
  nftAddress: `0x${string}`;
  price: bigint; // in USDC with 18 decimals
  owner: string;
}

export default function ListedNftCard({
  tokenId,
  nftAddress,
  price,
  owner,
}: Props) {
  const { address } = useAccount();
  const marketplaceAddress = contract_addresses.marketplace as `0x${string}`;
  const usdcaddress = contract_addresses.usdc as `0x${string}`;

  const { data: tokenUri } = useReadContract({
    address: nftAddress,
    abi: nftabi,
    functionName: "tokenURI",
    args: [tokenId],
  });

  const [metadata, setMetadata] = useState<{
    name: string;
    description: string;
    image: string;
  } | null>(null);

  const { writeContractAsync: buyNft, isPending: isBuying } =
    useWriteContract();
  const { writeContractAsync: approveUsdc } = useWriteContract();
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

  const handleBuy = async () => {
    try {
      await approveUsdc({
        abi: erc20Abi,
        address: usdcaddress,
        functionName: "approve",
        args: [marketplaceAddress, price],
      });
      await buyNft({
        abi: marketabi,
        address: marketplaceAddress,
        functionName: "buyNFT",
        args: [tokenId, nftAddress],
      });
    } catch (err) {
      console.error("Buy failed:", err);
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
        <strong>Token ID:</strong> {tokenId.toString()}
      </p>
      <p className="text-xs">
        <strong>Owner:</strong>{" "}
        {address?.toLowerCase() === owner.toLowerCase() ? "You" : owner}
      </p>
      <p className="text-xs">
        <strong>Price:</strong> {formatUnits(price, 18)} USDC
      </p>

      {/* Show BUY button only if user is NOT the owner */}
      {address?.toLowerCase() !== owner.toLowerCase() && (
        <button
          onClick={handleBuy}
          className="mt-4 w-full py-2 bg-green-600 text-white rounded hover:bg-green-700"
          disabled={isBuying}
        >
          {isBuying ? "Buying..." : "Buy NFT"}
        </button>
      )}
    </div>
  );
}
