import { create } from "zustand";

export type Listing = {
  owner: string;
  tokenId: bigint;
  price: bigint;
  nftAddress: `0x${string}`;
};

interface ListingsState {
  listings: Listing[];
  setListings: (listings: Listing[]) => void;
  addListing: (listing: Listing) => void;
  updatePrice: (
    tokenId: bigint,
    nftAddress: `0x${string}`,
    newPrice: bigint
  ) => void;
  removeListing: (tokenId: bigint, nftAddress: `0x${string}`) => void;
  transferOwnership: (
    tokenId: bigint,
    nftAddress: `0x${string}`,
    newOwner: string
  ) => void;
}

export const useListedNfts = create<ListingsState>((set) => ({
  listings: [],
  setListings: (listings) => set({ listings }),
  addListing: (newListing) =>
    set((state) => {
      const exists = state.listings.some(
        (l) =>
          l.tokenId === newListing.tokenId &&
          l.nftAddress.toLowerCase() === newListing.nftAddress.toLowerCase()
      );
      return exists ? state : { listings: [...state.listings, newListing] };
    }),
  updatePrice: (tokenId, nftAddress, newPrice) =>
    set((state) => ({
      listings: state.listings.map((l) =>
        l.tokenId === tokenId &&
        l.nftAddress.toLowerCase() === nftAddress.toLowerCase()
          ? { ...l, price: newPrice }
          : l
      ),
    })),
  removeListing: (tokenId, nftAddress) =>
    set((state) => ({
      listings: state.listings.filter(
        (l) =>
          !(
            l.tokenId === tokenId &&
            l.nftAddress.toLowerCase() === nftAddress.toLowerCase()
          )
      ),
    })),
  transferOwnership: (tokenId, nftAddress, newOwner) =>
    set((state) => ({
      listings: state.listings.map((l) =>
        l.tokenId === tokenId &&
        l.nftAddress.toLowerCase() === nftAddress.toLowerCase()
          ? { ...l, owner: newOwner }
          : l
      ),
    })),
}));
