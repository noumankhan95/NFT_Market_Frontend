"use client";

import { useState } from "react";
import { useContractWrite, useAccount } from "wagmi";
// import { marketContract } from "../constants/contracts";
import { parseEther } from "viem";

export default function ListNFTForm() {
  const [price, setPrice] = useState("");
  const { address } = useAccount();

  //   const { write: listNFT } = useContractWrite({
  //     ...marketContract,
  //     functionName: "listNFT",
  //   });

  //   const handleList = () => {
  //     if (!price) return;
  //     listNFT({
  //       args: [tokenId, parseEther(price), nftContract.address],
  //     });
  //   };

  return (
    <div>
      <input
        className="border p-2 mb-2 w-full"
        placeholder="Price in ETH"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button
        className="bg-green-600 text-white px-4 py-2 rounded w-full"
        // onClick={handleList}
      >
        List NFT
      </button>
    </div>
  );
}
