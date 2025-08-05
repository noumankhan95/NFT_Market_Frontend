import { create } from "zustand";

type NFTItem = {
  tokenId: string;
  nftAddress: string;
  metadataUri?: string;
};

type NftListStore = {
  nfts: NFTItem[];
  addNft: (nft: NFTItem) => void;
  removeNft: (tokenId: string, nftAddress: string) => void;
  clearAll: () => void;
};

export const useNftListStore = create<NftListStore>((set) => ({
  nfts: [],

  addNft: (nft) =>
    set((state) => ({
      nfts: [...state.nfts, nft],
    })),

  removeNft: (tokenId, nftAddress) =>
    set((state) => ({
      nfts: state.nfts.filter(
        (item) => item.tokenId !== tokenId || item.nftAddress !== nftAddress
      ),
    })),

  clearAll: () => set({ nfts: [] }),
}));
