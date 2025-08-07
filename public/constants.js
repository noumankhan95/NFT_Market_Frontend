export const contract_addresses = {
    "nft": "0xcf7ed3acca5a467e9e704c703e8d87f634fb0fc9",
    "marketplace": "0x9fe46736679d2d9a65f0992f2272de9f3c7fa6e0",
    "usdc": "0x5fbdb2315678afecb367f032d93f642f64180aa3",
    "deployer": "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
}

export const erc20abi = [
    { "type": "constructor", "inputs": [], "stateMutability": "nonpayable" },
    {
        "type": "function",
        "name": "allowance",
        "inputs": [
            { "name": "owner", "type": "address", "internalType": "address" },
            { "name": "spender", "type": "address", "internalType": "address" }
        ],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "approve",
        "inputs": [
            { "name": "spender", "type": "address", "internalType": "address" },
            { "name": "value", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "balanceOf",
        "inputs": [
            { "name": "account", "type": "address", "internalType": "address" }
        ],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "burn",
        "inputs": [
            { "name": "account", "type": "address", "internalType": "address" },
            { "name": "amount", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "decimals",
        "inputs": [],
        "outputs": [{ "name": "", "type": "uint8", "internalType": "uint8" }],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "mint",
        "inputs": [
            { "name": "account", "type": "address", "internalType": "address" },
            { "name": "amount", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "name",
        "inputs": [],
        "outputs": [{ "name": "", "type": "string", "internalType": "string" }],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "symbol",
        "inputs": [],
        "outputs": [{ "name": "", "type": "string", "internalType": "string" }],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "totalSupply",
        "inputs": [],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "transfer",
        "inputs": [
            { "name": "to", "type": "address", "internalType": "address" },
            { "name": "value", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "transferFrom",
        "inputs": [
            { "name": "from", "type": "address", "internalType": "address" },
            { "name": "to", "type": "address", "internalType": "address" },
            { "name": "value", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
        "stateMutability": "nonpayable"
    },
    {
        "type": "event",
        "name": "Approval",
        "inputs": [
            {
                "name": "owner",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "spender",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "value",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "Transfer",
        "inputs": [
            {
                "name": "from",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "to",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "value",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "error",
        "name": "ERC20InsufficientAllowance",
        "inputs": [
            { "name": "spender", "type": "address", "internalType": "address" },
            { "name": "allowance", "type": "uint256", "internalType": "uint256" },
            { "name": "needed", "type": "uint256", "internalType": "uint256" }
        ]
    },
    {
        "type": "error",
        "name": "ERC20InsufficientBalance",
        "inputs": [
            { "name": "sender", "type": "address", "internalType": "address" },
            { "name": "balance", "type": "uint256", "internalType": "uint256" },
            { "name": "needed", "type": "uint256", "internalType": "uint256" }
        ]
    },
    {
        "type": "error",
        "name": "ERC20InvalidApprover",
        "inputs": [
            { "name": "approver", "type": "address", "internalType": "address" }
        ]
    },
    {
        "type": "error",
        "name": "ERC20InvalidReceiver",
        "inputs": [
            { "name": "receiver", "type": "address", "internalType": "address" }
        ]
    },
    {
        "type": "error",
        "name": "ERC20InvalidSender",
        "inputs": [
            { "name": "sender", "type": "address", "internalType": "address" }
        ]
    },
    {
        "type": "error",
        "name": "ERC20InvalidSpender",
        "inputs": [
            { "name": "spender", "type": "address", "internalType": "address" }
        ]
    }
]

export const marketabi = [
    {
        "type": "constructor",
        "inputs": [
            {
                "name": "_paymentToken",
                "type": "address",
                "internalType": "contract ERC20"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "buyNFT",
        "inputs": [
            { "name": "_tokenid", "type": "uint256", "internalType": "uint256" },
            { "name": "_nftContract", "type": "address", "internalType": "address" }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "delistNFT",
        "inputs": [
            { "name": "_tokenId", "type": "uint256", "internalType": "uint256" },
            { "name": "_nftContract", "type": "address", "internalType": "address" }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "getListings",
        "inputs": [
            { "name": "_tokenId", "type": "uint256", "internalType": "uint256" },
            { "name": "_nftContract", "type": "address", "internalType": "address" }
        ],
        "outputs": [
            {
                "name": "",
                "type": "tuple",
                "internalType": "struct MarketPlace.Listing",
                "components": [
                    { "name": "owner", "type": "address", "internalType": "address" },
                    { "name": "price", "type": "uint256", "internalType": "uint256" }
                ]
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "listNFT",
        "inputs": [
            { "name": "_tokenId", "type": "uint256", "internalType": "uint256" },
            { "name": "_price", "type": "uint256", "internalType": "uint256" },
            { "name": "_nftContract", "type": "address", "internalType": "address" }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "listings",
        "inputs": [
            { "name": "", "type": "address", "internalType": "address" },
            { "name": "", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [
            { "name": "owner", "type": "address", "internalType": "address" },
            { "name": "price", "type": "uint256", "internalType": "uint256" }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "paymentToken",
        "inputs": [],
        "outputs": [
            { "name": "", "type": "address", "internalType": "contract ERC20" }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "updatePricing",
        "inputs": [
            { "name": "_tokenId", "type": "uint256", "internalType": "uint256" },
            {
                "name": "_nftContract",
                "type": "address",
                "internalType": "address"
            },
            { "name": "_newPrice", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "event",
        "name": "NFTDeListed",
        "inputs": [
            {
                "name": "owner",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "tokenId",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "NFTListed",
        "inputs": [
            {
                "name": "owner",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "tokenId",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            },
            {
                "name": "price",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "NFTSold",
        "inputs": [
            {
                "name": "buyer",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "seller",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "tokenId",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            },
            {
                "name": "nftAddress",
                "type": "address",
                "indexed": false,
                "internalType": "address"
            },
            {
                "name": "price",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "NFTUpdated",
        "inputs": [
            {
                "name": "owner",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "tokenId",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            },
            {
                "name": "newPrice",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    { "type": "error", "name": "MarketPlace__NotListedForSale", "inputs": [] },
    { "type": "error", "name": "MarketPlace__OnlyOwnerCanList", "inputs": [] }
]



export const nftabi = [
    { "type": "constructor", "inputs": [], "stateMutability": "nonpayable" },
    {
        "type": "function",
        "name": "approve",
        "inputs": [
            { "name": "to", "type": "address", "internalType": "address" },
            { "name": "tokenId", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "balanceOf",
        "inputs": [
            { "name": "owner", "type": "address", "internalType": "address" }
        ],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getApproved",
        "inputs": [
            { "name": "tokenId", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "isApprovedForAll",
        "inputs": [
            { "name": "owner", "type": "address", "internalType": "address" },
            { "name": "operator", "type": "address", "internalType": "address" }
        ],
        "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "mintQuote",
        "inputs": [
            { "name": "text", "type": "string", "internalType": "string" },
            { "name": "author", "type": "string", "internalType": "string" }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "name",
        "inputs": [],
        "outputs": [{ "name": "", "type": "string", "internalType": "string" }],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "owner",
        "inputs": [],
        "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "ownerOf",
        "inputs": [
            { "name": "tokenId", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "quoteCount",
        "inputs": [],
        "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "quotesToIds",
        "inputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
        "outputs": [
            { "name": "text", "type": "string", "internalType": "string" },
            { "name": "author", "type": "string", "internalType": "string" }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "renounceOwnership",
        "inputs": [],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "safeTransferFrom",
        "inputs": [
            { "name": "from", "type": "address", "internalType": "address" },
            { "name": "to", "type": "address", "internalType": "address" },
            { "name": "tokenId", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "safeTransferFrom",
        "inputs": [
            { "name": "from", "type": "address", "internalType": "address" },
            { "name": "to", "type": "address", "internalType": "address" },
            { "name": "tokenId", "type": "uint256", "internalType": "uint256" },
            { "name": "data", "type": "bytes", "internalType": "bytes" }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "setApprovalForAll",
        "inputs": [
            { "name": "operator", "type": "address", "internalType": "address" },
            { "name": "approved", "type": "bool", "internalType": "bool" }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "supportsInterface",
        "inputs": [
            { "name": "interfaceId", "type": "bytes4", "internalType": "bytes4" }
        ],
        "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "symbol",
        "inputs": [],
        "outputs": [{ "name": "", "type": "string", "internalType": "string" }],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "tokenURI",
        "inputs": [
            { "name": "tokenId", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [{ "name": "", "type": "string", "internalType": "string" }],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "transferFrom",
        "inputs": [
            { "name": "from", "type": "address", "internalType": "address" },
            { "name": "to", "type": "address", "internalType": "address" },
            { "name": "tokenId", "type": "uint256", "internalType": "uint256" }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "transferOwnership",
        "inputs": [
            { "name": "newOwner", "type": "address", "internalType": "address" }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "event",
        "name": "Approval",
        "inputs": [
            {
                "name": "owner",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "approved",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "tokenId",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "ApprovalForAll",
        "inputs": [
            {
                "name": "owner",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "operator",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "approved",
                "type": "bool",
                "indexed": false,
                "internalType": "bool"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "OwnershipTransferred",
        "inputs": [
            {
                "name": "previousOwner",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "newOwner",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "Transfer",
        "inputs": [
            {
                "name": "from",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "to",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "tokenId",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "error",
        "name": "ERC721IncorrectOwner",
        "inputs": [
            { "name": "sender", "type": "address", "internalType": "address" },
            { "name": "tokenId", "type": "uint256", "internalType": "uint256" },
            { "name": "owner", "type": "address", "internalType": "address" }
        ]
    },
    {
        "type": "error",
        "name": "ERC721InsufficientApproval",
        "inputs": [
            { "name": "operator", "type": "address", "internalType": "address" },
            { "name": "tokenId", "type": "uint256", "internalType": "uint256" }
        ]
    },
    {
        "type": "error",
        "name": "ERC721InvalidApprover",
        "inputs": [
            { "name": "approver", "type": "address", "internalType": "address" }
        ]
    },
    {
        "type": "error",
        "name": "ERC721InvalidOperator",
        "inputs": [
            { "name": "operator", "type": "address", "internalType": "address" }
        ]
    },
    {
        "type": "error",
        "name": "ERC721InvalidOwner",
        "inputs": [
            { "name": "owner", "type": "address", "internalType": "address" }
        ]
    },
    {
        "type": "error",
        "name": "ERC721InvalidReceiver",
        "inputs": [
            { "name": "receiver", "type": "address", "internalType": "address" }
        ]
    },
    {
        "type": "error",
        "name": "ERC721InvalidSender",
        "inputs": [
            { "name": "sender", "type": "address", "internalType": "address" }
        ]
    },
    {
        "type": "error",
        "name": "ERC721NonexistentToken",
        "inputs": [
            { "name": "tokenId", "type": "uint256", "internalType": "uint256" }
        ]
    },
    { "type": "error", "name": "NFT__Not_Minted", "inputs": [] },
    {
        "type": "error",
        "name": "OwnableInvalidOwner",
        "inputs": [
            { "name": "owner", "type": "address", "internalType": "address" }
        ]
    },
    {
        "type": "error",
        "name": "OwnableUnauthorizedAccount",
        "inputs": [
            { "name": "account", "type": "address", "internalType": "address" }
        ]
    }
]