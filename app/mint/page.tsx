"use client";

import { useState } from "react";
import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { nftabi } from "@/public/constants"; // ensure this has `mintQuote`
import { contract_addresses } from "@/public/constants"; // contains your NFT address

export default function MintQuoteNFT() {
  const [author, setAuthor] = useState("");
  const [quote, setQuote] = useState("");
  const [txHash, setTxHash] = useState<`0x${string}` | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const nftAddress = contract_addresses.nft as `0x${string}`;

  const {
    writeContractAsync,
    isPending,
    data: hash,
    error,
  } = useWriteContract();

  const { isSuccess: isConfirmed, isLoading: isWaiting } =
    useWaitForTransactionReceipt({
      hash,
    });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!author || !quote) return;

    setSubmitted(true);

    try {
      const txHash = await writeContractAsync({
        abi: nftabi,
        address: nftAddress,
        functionName: "mintQuote",
        args: [quote, author], // ✅ assuming your contract is (string quote, string author)
      });

      setTxHash(txHash); // ✅ THIS is what `useWaitForTransactionReceipt` needs
    } catch (err) {
      console.error("Mint failed:", err);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white border rounded-lg shadow my-10">
      <h2 className="text-xl font-semibold mb-4">Mint Quote NFT</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Author
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Albert Einstein"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Quote
          </label>
          <textarea
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            value={quote}
            onChange={(e) => setQuote(e.target.value)}
            placeholder="Imagination is more important than knowledge."
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          disabled={isPending || isWaiting}
        >
          {isPending || isWaiting ? "Minting..." : "Mint Quote NFT"}
        </button>
      </form>

      {submitted && !isConfirmed && !error && (
        <p className="mt-4 text-blue-500">
          Waiting for transaction confirmation...
        </p>
      )}

      {isConfirmed && txHash && (
        <p className="mt-4 text-green-600">
          ✅ NFT minted! Tx:{" "}
          <a
            href={`https://explorer.testnet.io/tx/${txHash}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            {txHash.slice(0, 10)}...
          </a>
        </p>
      )}

      {error && <p className="mt-4 text-red-600">❌ Error: {error.message}</p>}
    </div>
  );
}
