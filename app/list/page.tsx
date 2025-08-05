// app/my-nfts/page.tsx
"use client";

import { useReadContract } from "wagmi";
import { nftabi, contract_addresses } from "@/public/constants";
import ListNftCard from "@/Components/ListNftCard";

export default function MyNfts() {
  const nftAddress = contract_addresses.nft as `0x${string}`;

  const { data: count } = useReadContract({
    address: nftAddress,
    abi: nftabi,
    functionName: "quoteCount",
  });

  if (!count) return <p>Loading NFTs...</p>;

  const total = Number(count);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {[...Array(total)].map((_, i) => (
        <ListNftCard key={i} tokenId={i} />
      ))}
    </div>
  );
}
