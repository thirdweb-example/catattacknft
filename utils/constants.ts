import { createThirdwebClient, getContract } from "thirdweb";
import { baseSepolia } from "thirdweb/chains";

export const CLIENT_ID = process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID || "";
export const CHAIN = baseSepolia;
export const CONTRACT_ADDR = "0x5cA3b8E5B82D826aF6E8e9BA9E4E8f95cbC177F4";
export const FACTORY_ADDR = "0x7b5ba9D46b53aae55e2c2E9b38d9AfF9a0b158F8";

export const client = createThirdwebClient({ clientId: CLIENT_ID });
const CAT_ATTACK_ABI = [
  {
    type: "constructor",
    name: "",
    inputs: [
      {
        type: "string",
        name: "_name",
        internalType: "string",
      },
      {
        type: "string",
        name: "_symbol",
        internalType: "string",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "error",
    name: "OperatorNotAllowed",
    inputs: [
      {
        type: "address",
        name: "operator",
        internalType: "address",
      },
    ],
    outputs: [],
  },
  {
    type: "event",
    name: "ApprovalForAll",
    inputs: [
      {
        type: "address",
        name: "_owner",
        indexed: true,
        internalType: "address",
      },
      {
        type: "address",
        name: "_operator",
        indexed: true,
        internalType: "address",
      },
      {
        type: "bool",
        name: "_approved",
        indexed: false,
        internalType: "bool",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "ContractURIUpdated",
    inputs: [
      {
        type: "string",
        name: "prevURI",
        indexed: false,
        internalType: "string",
      },
      {
        type: "string",
        name: "newURI",
        indexed: false,
        internalType: "string",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "DefaultRoyalty",
    inputs: [
      {
        type: "address",
        name: "newRoyaltyRecipient",
        indexed: true,
        internalType: "address",
      },
      {
        type: "uint256",
        name: "newRoyaltyBps",
        indexed: false,
        internalType: "uint256",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "LevelUp",
    inputs: [
      {
        type: "address",
        name: "account",
        indexed: true,
        internalType: "address",
      },
      {
        type: "uint256",
        name: "level",
        indexed: false,
        internalType: "uint256",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "Miaowed",
    inputs: [
      {
        type: "address",
        name: "attacker",
        indexed: true,
        internalType: "address",
      },
      {
        type: "address",
        name: "victim",
        indexed: true,
        internalType: "address",
      },
      {
        type: "uint256",
        name: "level",
        indexed: false,
        internalType: "uint256",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "OperatorRestriction",
    inputs: [
      {
        type: "bool",
        name: "restriction",
        indexed: false,
        internalType: "bool",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "OwnerUpdated",
    inputs: [
      {
        type: "address",
        name: "prevOwner",
        indexed: true,
        internalType: "address",
      },
      {
        type: "address",
        name: "newOwner",
        indexed: true,
        internalType: "address",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "RoyaltyForToken",
    inputs: [
      {
        type: "uint256",
        name: "tokenId",
        indexed: true,
        internalType: "uint256",
      },
      {
        type: "address",
        name: "royaltyRecipient",
        indexed: true,
        internalType: "address",
      },
      {
        type: "uint256",
        name: "royaltyBps",
        indexed: false,
        internalType: "uint256",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "TokensClaimed",
    inputs: [
      {
        type: "address",
        name: "claimer",
        indexed: true,
        internalType: "address",
      },
      {
        type: "address",
        name: "receiver",
        indexed: true,
        internalType: "address",
      },
      {
        type: "uint256",
        name: "tokenId",
        indexed: true,
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "quantityClaimed",
        indexed: false,
        internalType: "uint256",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "TokensLazyMinted",
    inputs: [
      {
        type: "uint256",
        name: "startTokenId",
        indexed: true,
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "endTokenId",
        indexed: false,
        internalType: "uint256",
      },
      {
        type: "string",
        name: "baseURI",
        indexed: false,
        internalType: "string",
      },
      {
        type: "bytes",
        name: "encryptedBaseURI",
        indexed: false,
        internalType: "bytes",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "TransferBatch",
    inputs: [
      {
        type: "address",
        name: "_operator",
        indexed: true,
        internalType: "address",
      },
      {
        type: "address",
        name: "_from",
        indexed: true,
        internalType: "address",
      },
      {
        type: "address",
        name: "_to",
        indexed: true,
        internalType: "address",
      },
      {
        type: "uint256[]",
        name: "_ids",
        indexed: false,
        internalType: "uint256[]",
      },
      {
        type: "uint256[]",
        name: "_values",
        indexed: false,
        internalType: "uint256[]",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "TransferSingle",
    inputs: [
      {
        type: "address",
        name: "_operator",
        indexed: true,
        internalType: "address",
      },
      {
        type: "address",
        name: "_from",
        indexed: true,
        internalType: "address",
      },
      {
        type: "address",
        name: "_to",
        indexed: true,
        internalType: "address",
      },
      {
        type: "uint256",
        name: "_id",
        indexed: false,
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "_value",
        indexed: false,
        internalType: "uint256",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "URI",
    inputs: [
      {
        type: "string",
        name: "_value",
        indexed: false,
        internalType: "string",
      },
      {
        type: "uint256",
        name: "_id",
        indexed: true,
        internalType: "uint256",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "function",
    name: "OPERATOR_FILTER_REGISTRY",
    inputs: [],
    outputs: [
      {
        type: "address",
        name: "",
        internalType: "contract IOperatorFilterRegistry",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "attack",
    inputs: [
      {
        type: "address",
        name: "victim",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "balanceOf",
    inputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "balanceOfBatch",
    inputs: [
      {
        type: "address[]",
        name: "accounts",
        internalType: "address[]",
      },
      {
        type: "uint256[]",
        name: "ids",
        internalType: "uint256[]",
      },
    ],
    outputs: [
      {
        type: "uint256[]",
        name: "",
        internalType: "uint256[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "burn",
    inputs: [
      {
        type: "address",
        name: "account",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "id",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "amount",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "burnBatch",
    inputs: [
      {
        type: "address",
        name: "_owner",
        internalType: "address",
      },
      {
        type: "uint256[]",
        name: "_tokenIds",
        internalType: "uint256[]",
      },
      {
        type: "uint256[]",
        name: "_amounts",
        internalType: "uint256[]",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "claim",
    inputs: [
      {
        type: "address",
        name: "_receiver",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "_tokenId",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "_quantity",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "claimKitten",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "contractURI",
    inputs: [],
    outputs: [
      {
        type: "string",
        name: "",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getBaseURICount",
    inputs: [],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getBatchIdAtIndex",
    inputs: [
      {
        type: "uint256",
        name: "_index",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getDefaultRoyaltyInfo",
    inputs: [],
    outputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
      {
        type: "uint16",
        name: "",
        internalType: "uint16",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getRoyaltyInfoForToken",
    inputs: [
      {
        type: "uint256",
        name: "_tokenId",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
      {
        type: "uint16",
        name: "",
        internalType: "uint16",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getScore",
    inputs: [
      {
        type: "address",
        name: "player",
        internalType: "address",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "isApprovedForAll",
    inputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
      {
        type: "address",
        name: "",
        internalType: "address",
      },
    ],
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "isGamePaused",
    inputs: [],
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "lazyMint",
    inputs: [
      {
        type: "uint256",
        name: "_amount",
        internalType: "uint256",
      },
      {
        type: "string",
        name: "_baseURIForTokens",
        internalType: "string",
      },
      {
        type: "bytes",
        name: "_data",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "batchId",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "multicall",
    inputs: [
      {
        type: "bytes[]",
        name: "data",
        internalType: "bytes[]",
      },
    ],
    outputs: [
      {
        type: "bytes[]",
        name: "results",
        internalType: "bytes[]",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "name",
    inputs: [],
    outputs: [
      {
        type: "string",
        name: "",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "nextTokenIdToMint",
    inputs: [],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "operatorRestriction",
    inputs: [],
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "royaltyInfo",
    inputs: [
      {
        type: "uint256",
        name: "tokenId",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "salePrice",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "address",
        name: "receiver",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "royaltyAmount",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "safeBatchTransferFrom",
    inputs: [
      {
        type: "address",
        name: "from",
        internalType: "address",
      },
      {
        type: "address",
        name: "to",
        internalType: "address",
      },
      {
        type: "uint256[]",
        name: "ids",
        internalType: "uint256[]",
      },
      {
        type: "uint256[]",
        name: "amounts",
        internalType: "uint256[]",
      },
      {
        type: "bytes",
        name: "data",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "safeTransferFrom",
    inputs: [
      {
        type: "address",
        name: "from",
        internalType: "address",
      },
      {
        type: "address",
        name: "to",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "id",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "amount",
        internalType: "uint256",
      },
      {
        type: "bytes",
        name: "data",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setApprovalForAll",
    inputs: [
      {
        type: "address",
        name: "operator",
        internalType: "address",
      },
      {
        type: "bool",
        name: "approved",
        internalType: "bool",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setContractURI",
    inputs: [
      {
        type: "string",
        name: "_uri",
        internalType: "string",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setDefaultRoyaltyInfo",
    inputs: [
      {
        type: "address",
        name: "_royaltyRecipient",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "_royaltyBps",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setOperatorRestriction",
    inputs: [
      {
        type: "bool",
        name: "_restriction",
        internalType: "bool",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setOwner",
    inputs: [
      {
        type: "address",
        name: "_newOwner",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setRoyaltyInfoForToken",
    inputs: [
      {
        type: "uint256",
        name: "_tokenId",
        internalType: "uint256",
      },
      {
        type: "address",
        name: "_recipient",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "_bps",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "startGame",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "stopGame",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "supportsInterface",
    inputs: [
      {
        type: "bytes4",
        name: "interfaceId",
        internalType: "bytes4",
      },
    ],
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "symbol",
    inputs: [],
    outputs: [
      {
        type: "string",
        name: "",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "totalSupply",
    inputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "uri",
    inputs: [
      {
        type: "uint256",
        name: "_tokenId",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "string",
        name: "",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "verifyClaim",
    inputs: [
      {
        type: "address",
        name: "_claimer",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "_tokenId",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "_quantity",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "view",
  },
] as const;
export const contract = getContract({
  client,
  address: CONTRACT_ADDR,
  chain: CHAIN,
  abi: CAT_ATTACK_ABI,
});
