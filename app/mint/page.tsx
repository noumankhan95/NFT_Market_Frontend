"use client";

import { useState } from "react";
import { useAccount, useContractWrite } from "wagmi";
import { parseEther } from "viem";
// import { nftContract } from "../constants/contracts"; // export config here

export default function MintQuoteForm() {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  const { address } = useAccount();

  //   const { write: mintQuote, isLoading } = useContractWrite({
  //     ...nftContract,
  //     functionName: "mintQuote",
  //   });

  const handleMint = () => {
    if (!text || !author) return;
    // mintQuote({ args: [text, author] });
  };

  return (
    <div className="p-4 rounded-lg shadow-md bg-white">
      <h2 className="text-lg font-semibold mb-2">Mint New Quote NFT</h2>
      <input
        className="border p-2 w-full mb-2"
        placeholder="Quote"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        className="border p-2 w-full mb-2"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button
        className="bg-indigo-600 text-white px-4 py-2 rounded w-full"
        onClick={handleMint}
        // disabled={isLoading}
      >
        {/* {isLoading ? "Minting..." : "Mint Quote NFT"} */}
        Mint
      </button>
    </div>
  );
}
