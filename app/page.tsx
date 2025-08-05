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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <h1>NFTs For Sale</h1>
      {listings.map((listing, idx) => (
        <ListedNftCard
          key={idx}
          owner={listing.owner}
          price={listing.price}
          tokenId={listing.tokenId}
          nftAddress={contract_addresses.nft as `0x${string}`}
        />
      ))}
    </div>
  );
}
