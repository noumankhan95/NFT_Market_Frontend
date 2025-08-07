"use client";
import { useListedNFTs } from "@/hooks/listEvent";
import ListNftCard from "@/Components/ListNftCard";
import ListedNftCard from "@/Components/BuyNftCard";
import { useReadContract } from "wagmi";
import { nftabi, contract_addresses } from "@/public/constants";
export default function ListedNFTGallery() {
  const listings = useListedNFTs();
  console.log(listings);
  return (
    <div className="flex flex-col p-4 space-y-2">
      <h1 className="bold text-center">NFTs For Sale</h1>
      <div className="w-full flex flex-row space-x-2 flex-wrap justify-evenly space-x-2 space-y-2">
        {listings?.map((listing, idx) => (
          <ListedNftCard
            key={idx}
            owner={listing.owner}
            price={listing.price}
            tokenId={listing.tokenId}
            nftAddress={contract_addresses.nft as `0x${string}`}
          />
        ))}
      </div>
    </div>
  );
}
