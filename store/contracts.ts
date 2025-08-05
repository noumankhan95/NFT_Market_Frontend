// stores/useListedNfts.ts
import { create } from "zustand";

export type Listing = {
  owner: `0x${string}`;
  tokenId: bigint;
  price: bigint;
};

interface ListedNFTState {
  listings: Listing[];
  addListing: (listing: Listing) => void;
  setListings: (listings: Listing[]) => void;
}

export const useListedNfts = create<ListedNFTState>((set) => ({
  listings: [],
  addListing: (listing) =>
    set((state) => ({
      listings: [...state.listings, listing],
    })),
  setListings: (listings) => set({ listings }),
}));
