"use client";
import React, { useEffect, useState } from "react";
import { useAccount, useContractRead, useContractWrite } from "wagmi";
// import { marketContract, nftContract } from "../constants/contracts";
import { formatEther } from "viem";

export default function Marketplace() {
  const { address } = useAccount();
  const [listedNFTs, setListedNFTs] = useState([]);

  // Manually define a list of tokenIds for demo purposes
  const tokenIdsToCheck = [0, 1, 2, 3, 4];

  // useEffect(() => {
  //   const fetchListings = async () => {
  //     const validListings = [];

  //     for (let tokenId of tokenIdsToCheck) {
  //       const { data: listing } = await marketContract.read.getListings([
  //         tokenId,
  //         nftContract.address,
  //       ]);
  //       if (
  //         listing &&
  //         listing.owner !== "0x0000000000000000000000000000000000000000"
  //       ) {
  //         validListings.push({ tokenId, ...listing });
  //       }
  //     }

  //     setListedNFTs(validListings);
  //   };

  //   fetchListings();
  // }, []);

  // const { write: buyNFT } = useContractWrite({
  //   ...marketContract,
  //   functionName: "buyNFT",
  // });

  // const handleBuy = (tokenId) => {
  //   buyNFT({
  //     args: [tokenId, nftContract.address],
  //   });
  // };

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {listedNFTs.length === 0 && (
        <p className="text-gray-500 text-center col-span-full">
          No NFTs listed yet
        </p>
      )}

      {listedNFTs.map((nft, index) => (
        <div key={index} className="border p-4 rounded-lg shadow-md bg-white">
          <p className="text-md font-semibold">
            Token ID:
            {/* {nft.tokenId} */}
          </p>
          <p className="text-sm text-gray-700">
            Owner:
            {/* {nft.owner.slice(0, 6)}...{nft.owner.slice(-4)} */}
          </p>
          <p className="text-sm mb-2">
            Price:
            {/* {formatEther(BigInt(nft.price))} ETH */}
          </p>
          <button
            className="bg-indigo-600 text-white px-4 py-2 rounded mt-2 w-full"
            // onClick={() => handleBuy(nft.tokenId)}
          >
            Buy NFT
          </button>
        </div>
      ))}
    </div>
  );
}
