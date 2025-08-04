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
    <div className="p-4 rounded-lg shadow-md bg-white mt-2 w-3/4 lg:w-2/4 mx-auto">
      <input
        className="border p-2 mb-2 w-full outline-none"
        placeholder="Price in ETH"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button
        className="bg-indigo-600 text-white px-4 py-2 rounded w-full"

        // onClick={handleList}
      >
        List NFT
      </button>
    </div>
  );
}
