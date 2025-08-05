'use client'
import { useNftListStore } from "@/store/contracts";

export default function MintedNftList() {
  const { nfts, removeNft, clearAll } = useNftListStore();

  if (nfts.length === 0) return <p>No NFTs minted yet.</p>;

  return (
    <div>
      <h2>Minted NFTs</h2>
      <ul>
        {nfts.map((nft) => (
          <li key={`${nft.nftAddress}-${nft.tokenId}`}>
            Token ID: {nft.tokenId} <br />
            Contract: {nft.nftAddress} <br />
            URI: {nft.metadataUri ?? "—"} <br />
            <button onClick={() => removeNft(nft.tokenId, nft.nftAddress)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <button onClick={clearAll}>Clear All</button>
    </div>
  );
}
