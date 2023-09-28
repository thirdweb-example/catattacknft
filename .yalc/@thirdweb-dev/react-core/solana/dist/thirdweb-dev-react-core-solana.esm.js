import { Q as QueryClientProviderWithDefault, c as createSOLQueryKeyWithNetwork, r as requiredParamInvariant, n as neverPersist, a as createSOLProgramQueryKey, e as ensureTWPrefix } from '../../dist/required-param-cbbdbc84.esm.js';
export { s as shouldNeverPersistQuery } from '../../dist/required-param-cbbdbc84.esm.js';
import { useMemo, useContext, createContext, useState, useEffect } from 'react';
import { jsx } from 'react/jsx-runtime';
import { ThirdwebSDK } from '@thirdweb-dev/sdk/solana';
import invariant from 'tiny-invariant';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { SignerWallet } from '@thirdweb-dev/wallets/solana/wallets/signer';

const ThirdwebAuthContext = /* @__PURE__ */createContext(undefined);
const ThirdwebAuthProvider = _ref => {
  let {
    value,
    children
  } = _ref;
  // Remove trailing slash from URL if present
  const authContext = useMemo(() => {
    if (!value) {
      return undefined;
    }
    const context = {
      ...value,
      authUrl: value.authUrl?.replace(/\/$/, "")
    };
    return context;
  }, [value]);
  return /*#__PURE__*/jsx(ThirdwebAuthContext.Provider, {
    value: authContext,
    children: children
  });
};
function useThirdwebAuthContext() {
  return useContext(ThirdwebAuthContext);
}

/**
 * Gives access to the ThirdwebSDK instance and other useful hooks to the rest of the app.
 * Requires to be wrapped with a ConnectionProvider and a WalletProvider from @solana/wallet-adapter-react.
 * @example
 * ```tsx
 * import { useWallet } from "@solana/wallet-adapter-react";
 * import { ThirdwebProvider } from "@thirdweb-dev/react/solana";
 *
 * const ThirdwebApp = () => {
 *  const wallet = useWallet();
 *  return (
 *    <ThirdwebSDKProvider network={"devnet"} wallet={wallet}>
 *      <YourApp />
 *    </ThirdwebSDKProvider>
 * )};
 * ```
 */
const ThirdwebSDKProvider = _ref => {
  let {
    children,
    network,
    queryClient,
    wallet,
    authConfig
  } = _ref;
  const [sdk, setSDK] = useState(null);
  useEffect(() => {
    if (network) {
      const _sdk = ThirdwebSDK.fromNetwork(network);
      if (wallet && wallet.publicKey) {
        _sdk.wallet.connect(wallet);
      }
      _sdk._network = network;
      setSDK(_sdk);
    } else {
      setSDK(null);
    }
    // disabled wallet on purpose because we handle that below
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [network]);
  useEffect(() => {
    if (wallet && wallet.publicKey && sdk && sdk._network === network) {
      sdk.wallet.connect(wallet);
      return;
    }
  }, [network, sdk, wallet]);
  const ctxValue = useMemo(() => ({
    sdk,
    desiredNetwork: network || "unknown",
    _inProvider: true
  }), [sdk, network]);
  return /*#__PURE__*/jsx(QueryClientProviderWithDefault, {
    queryClient: queryClient,
    children: /*#__PURE__*/jsx(ThirdwebAuthProvider, {
      value: authConfig,
      children: /*#__PURE__*/jsx(ThirdwebSDKContext.Provider, {
        value: ctxValue,
        children: children
      })
    })
  });
};
const ThirdwebSDKContext = /* @__PURE__ */createContext({
  sdk: null,
  desiredNetwork: "unknown"
});
function useSDK() {
  const ctxValue = useContext(ThirdwebSDKContext);
  invariant(ctxValue._inProvider, "useSDK must be used within a ThirdwebSDKProvider");
  if (!ctxValue.sdk || ctxValue.sdk._network !== ctxValue.desiredNetwork) {
    return null;
  }
  return ctxValue.sdk;
}

function programAccountTypeQuery(sdk, address) {
  const network = sdk?.network;
  return {
    queryKey: createSOLQueryKeyWithNetwork(["program", address, "type"], network || null),
    queryFn: async () => {
      requiredParamInvariant(sdk, "sdk is required");
      requiredParamInvariant(address, "Address is required");
      return await sdk.registry.getProgramType(address);
    },
    enabled: !!sdk && !!network && !!address,
    // this cannot change as it is unique by address & network
    cacheTime: Infinity,
    staleTime: Infinity
  };
}

/**
 * @internal
 */
function useProgramAccountType(address) {
  const sdk = useSDK();
  return useQuery(programAccountTypeQuery(sdk, address));
}

function programQuery(queryClient, sdk, address, type) {
  const network = sdk?.network;
  return {
    queryKey: neverPersist(createSOLQueryKeyWithNetwork(["program-instance", {
      address,
      type
    }], network || null)),
    queryFn: async () => {
      requiredParamInvariant(sdk, "sdk is required");
      requiredParamInvariant(address, "Address is required");

      // if the type is not passed in explicitly then we'll try to resolve it
      if (!type) {
        // why do we call `fetchQuery` here instead of calling the sdk directly?
        // while we can never persist the program itself to the cache we can persist the type!
        // (and this will be triggered by fetching the query on the queryClient)
        type = await queryClient.fetchQuery(programAccountTypeQuery(sdk, address));
      }
      switch (type) {
        case "nft-collection":
          return await sdk.getNFTCollection(address);
        case "nft-drop":
          return await sdk.getNFTDrop(address);
        case "token":
          return await sdk.getToken(address);
        default:
          throw new Error("Unknown account type");
      }
      // this is the magic that makes the type inference work
    },

    enabled: !!sdk && !!network && !!address,
    // this cannot change as it is unique by address & network
    cacheTime: Infinity,
    staleTime: Infinity
  };
}

/**
 * Get an SDK instance to interact with any program
 * @param address - the address of the program to get an interface for
 * @param type - optionally, pass in the program type to get static typing
 *
 * @example
 * ```jsx
 * import { useProgram } from "@thirdweb-dev/react/solana";
 *
 * export default function Component() {
 *   const { program } = useProgram("{{program_address}}").program;
 *
 *   // Now you can use the program in the rest of the component
 *
 *   // For example, we can make a transaction
 *   async function functionCall() {
 *     await program.call("mint", ...);
 *   }
 *
 *   ...
 * }
 * ```
 *
 * @public
 */
function useProgram(address, type) {
  const queryClient = useQueryClient();
  const sdk = useSDK();
  const queryResult = useQuery(programQuery(queryClient, sdk, address, type));
  return {
    ...queryResult,
    program: queryResult.data
  };
}

function programMetadataQuery(program) {
  return {
    queryKey: createSOLProgramQueryKey(program || null, ["metadata"]),
    queryFn: async () => {
      invariant(program, "sdk is required");
      return await program.getMetadata();
    },
    enabled: !!program
  };
}

/**
 * @internal
 */
function useProgramMetadata(program) {
  return useQuery(programMetadataQuery(program));
}

function nftGetAllQuery(program, queryParams) {
  return {
    queryKey: createSOLProgramQueryKey(program, ["getAll", queryParams]),
    queryFn: async () => {
      requiredParamInvariant(program, "program is required");
      return program.getAll(queryParams);
    },
    enabled: !!program
  };
}

/**
 * Get the metadata for every NFT on an NFT program
 * @param program - The NFT program to get NFTs metadata from
 *
 * @example
 * ```jsx
 * import { useProgram, useNFTs } from "@thirdweb-dev/react/solana";
 *
 * export default function Component() {
 *   const { program } = useProgram("{{program_address}}");
 *   const { data: metadata, isLoading } = useNFTs(program);
 *
 *   return (
 *     <pre>{JSON.stringify(metadata)}</pre>
 *   )
 * }
 * ```
 *
 * @public
 */
function useNFTs(program, queryParams) {
  return useQuery(nftGetAllQuery(program, queryParams));
}

/**
 * Transfer NFTs from the connected wallet to another wallet
 * @param program - The NFT program instance to transfer NFTs on
 *
 * @example
 * ```jsx
 * import { useProgram, useTransferNFT } from "@thirdweb-dev/react/solana";
 *
 * export default function Component() {
 *   const { program } = useProgram("{{program_address}}");
 *   const { mutateAsync: transfer, isLoading, error } = useTransferNFT(program);
 *
 *   return (
 *     <button
 *       onClick={() => transfer({
 *         receiverAddress: "{{wallet_address}}",
 *         tokenAddress: "..."
 *       })}
 *     >
 *       Transfer
 *     </button>
 *   )
 * }
 * ```
 *
 * @public
 */
function useTransferNFT(program) {
  const queryClient = useQueryClient();
  return useMutation(async _ref => {
    let {
      tokenAddress,
      receiverAddress
    } = _ref;
    requiredParamInvariant(program, "program is required");
    return await program.transfer(receiverAddress, tokenAddress);
  }, {
    onSettled: () => queryClient.invalidateQueries(createSOLProgramQueryKey(program))
  });
}

/**
 * Burn an NFT owned by the connected wallet
 * @param program - The NFT program instance to burn NFTs on
 *
 * @example
 * ```jsx
 * import { useProgram, useBurnNFT } from "@thirdweb-dev/react/solana";
 *
 * export default function Component() {
 *   const { program } = useProgram("{{program_address}}");
 *   const { mutateAsync: burn, isLoading, error } = useBurnNFT(program);
 *
 *   return (
 *     <button
 *       onClick={() => burn("...")}
 *     >
 *       Burn
 *     </button>
 *   )
 * }
 * ```
 *
 * @public
 */
function useBurnNFT(program) {
  const queryClient = useQueryClient();
  return useMutation(async nftAddress => {
    requiredParamInvariant(program, "program is required");
    return await program.burn(nftAddress);
  }, {
    onSettled: () => queryClient.invalidateQueries(createSOLProgramQueryKey(program))
  });
}

function nftRoyaltyQuery(program) {
  return {
    queryKey: createSOLProgramQueryKey(program, ["royalty"]),
    queryFn: async () => {
      requiredParamInvariant(program, "program is required");
      return await program.getRoyalty();
    },
    enabled: !!program
  };
}

/**
 * Get the royalty for an NFT program
 * @param program - The NFT program to get the royalty for
 *
 * @example
 * ```jsx
 * import { useProgram, useRoyalty } from "@thirdweb-dev/react/solana";
 *
 * export default function Component() {
 *   const { program } = useProgram("{{program_address}}");
 *   const { data: royalty, isLoading } = useRoyaltySettings(program);
 *
 *   return (
 *     <p>{royalty}</p>
 *   )
 * }
 * ```
 *
 * @public
 */
function useRoyaltySettings(program) {
  return useQuery(nftRoyaltyQuery(program));
}

/**
 * Update the royalty for an NFT program
 * @param program - The NFT program instance to update the royalty for
 *
 * @example
 * ```jsx
 * import { useProgram, useUpdateRoyaltySettings } from "@thirdweb-dev/react/solana";
 *
 * export default function Component() {
 *   const { program } = useProgram("{{program_address}}");
 *   const { mutateAsync: updateRoyalties, isLoading, error } = useUpdateRoyaltySettings(program);
 *
 *   return (
 *     <button
 *       onClick={() => updateRoyalties(300)}
 *     >
 *       Update Royalties
 *     </button>
 *   )
 * }
 * ```
 *
 * @public
 */
function useUpdateRoyaltySettings(program) {
  const queryClient = useQueryClient();
  return useMutation(async _ref => {
    let {
      sellerFeeBasisPoints,
      updateAll
    } = _ref;
    requiredParamInvariant(program, "program is required");
    return await program.updateRoyalty(sellerFeeBasisPoints, updateAll);
  }, {
    onSettled: () => queryClient.invalidateQueries(createSOLProgramQueryKey(program))
  });
}

function nftCreatorsQuery(program) {
  return {
    queryKey: createSOLProgramQueryKey(program, ["creators"]),
    queryFn: async () => {
      requiredParamInvariant(program, "program is required");
      return await program.getCreators();
    },
    enabled: !!program
  };
}

/**
 * Get the creators for an NFT program
 * @param program - The NFT program to get the creators for
 *
 * @example
 * ```jsx
 * import { useProgram, useCreators } from "@thirdweb-dev/react/solana";
 *
 * export default function Component() {
 *   const { program } = useProgram("{{program_address}}");
 *   const { data: creators, isLoading } = useCreators(program);
 *
 *   return (
 *     <pre>{JSON.stringify(creators)}</pre>
 *   )
 * }
 * ```
 *
 * @public
 */
function useCreators(program) {
  return useQuery(nftCreatorsQuery(program));
}

/**
 * Update the creators for an NFT program
 * @param program - The NFT program instance to update the creators for
 *
 * @example
 * ```jsx
 * import { useProgram, useUpdateCreators } from "@thirdweb-dev/react/solana";
 *
 * export default function Component() {
 *   const { program } = useProgram("{{program_address}}");
 *   const { mutateAsync: updateCreators, isLoading, error } = useUpdateCreators(program);
 *
 *   return (
 *     <button
 *       onClick={() => updateCreators([{ address: "0x...", share: 10 }])}
 *     >
 *       Update Creators
 *     </button>
 *   )
 * }
 * ```
 *
 * @public
 */
function useUpdateCreators(program) {
  const queryClient = useQueryClient();
  return useMutation(async _ref => {
    let {
      creators,
      updateAll
    } = _ref;
    requiredParamInvariant(program, "program is required");
    return await program.updateCreators(creators, updateAll);
  }, {
    onSettled: () => queryClient.invalidateQueries(createSOLProgramQueryKey(program))
  });
}

function nftTotalSupplyQuery(program) {
  return {
    queryKey: createSOLProgramQueryKey(program, ["supply"]),
    queryFn: async () => {
      requiredParamInvariant(program, "program is required");
      return program.totalSupply();
    },
    enabled: !!program
  };
}

/**
 * Get the total supply of NFTs on the program
 * @param program - The NFT program to get the total supply of
 *
 * @example
 * ```jsx
 * import { useProgram, useTotalSupply } from "@thirdweb-dev/react/solana";
 *
 * export default function Component() {
 *   const { program } = useProgram("{{program_address}}");
 *   const { data: supply, isLoading } = useTotalSupply(program);
 *
 *   return (
 *     <pre>{JSON.stringify(supply)}</pre>
 *   )
 * }
 * ```
 *
 * @public
 */
function useTotalSupply(program) {
  return useQuery(nftTotalSupplyQuery(program));
}

/**
 * Mint NFTs on your NFT program
 * @param program - The NFT program to mint NFTs to
 *
 * @example
 * ```jsx
 * import { useProgram, useMintNFT } from "@thirdweb-dev/react/solana";
 *
 * export default function Component() {
 *   const { program } = useProgram("{{program_address}}");
 *   const { mutateAsync: mintNFT, isLoading, error } = useMintNFT(program);
 *
 *   return (
 *     <button onClick={() => mintNFT({ metadata: { name: "First NFT" } })}>
 *       Mint
 *     </button>
 *   )
 * }
 * ```
 *
 * @public
 */
function useMintNFT(program) {
  const queryClient = useQueryClient();
  return useMutation(async data => {
    invariant(program, "program is required");
    if (!data.to) {
      return await program.mint(data.metadata);
    }
    return await program.mintTo(data.to, data.metadata);
  }, {
    onSettled: () => queryClient.invalidateQueries(createSOLProgramQueryKey(program))
  });
}

/**
 * Mint additional supply for an NFT on your NFT program
 * @param program - The NFT program to mint additional NFTs to
 *
 * @example
 * ```jsx
 * import { useProgram, useMintNFTSupply } from "@thirdweb-dev/react/solana";
 *
 * export default function Component() {
 *   const { program } = useProgram("{{program_address}}");
 *   const { mutateAsync: mintSupply, isLoading, error } = useMintNFTSupply(program);
 *
 *   return (
 *     <button onClick={() => mintSupply({ nftAddress: "111...", amount: 10 })}>
 *       Mint Additional Supply
 *     </button>
 *   )
 * }
 * ```
 *
 * @public
 */
function useMintNFTSupply(program) {
  const queryClient = useQueryClient();
  return useMutation(async data => {
    requiredParamInvariant(program, "program is required");
    if (!data.to) {
      return await program.mintAdditionalSupply(data.nftAddress, data.amount);
    }
    return await program.mintAdditionalSupplyTo(data.to, data.nftAddress, data.amount);
  }, {
    onSettled: () => queryClient.invalidateQueries(createSOLProgramQueryKey(program))
  });
}

/**
 * Lazy mint NFTs on an NFT Drop program
 * @param program - The NFT Drop program instance to lazy mint on
 *
 * @example
 * ```jsx
 * import { useProgram, useLazyMintNFT } from "@thirdweb-dev/react/solana";
 *
 * export default function Component() {
 *   const { program } = useProgram("{{program_address}}");
 *   const { mutateAsync: lazyMint, isLoading, error } = useLazyMintNFT(program);
 *
 *   return (
 *     <button onClick={() => lazyMint({ name: "My NFT", description: "..." })}>
 *       Claim
 *     </button>
 *   )
 * }
 * ```
 *
 * @public
 */
function useLazyMint(program, onProgress) {
  const queryClient = useQueryClient();
  return useMutation(async data => {
    requiredParamInvariant(program, "program is required");
    let options;
    if (onProgress) {
      options = {
        onProgress
      };
    }
    return await program.lazyMint(data.metadatas, options);
  }, {
    onSettled: () => queryClient.invalidateQueries(createSOLProgramQueryKey(program))
  });
}

function dropTotalClaimedSupplyQuery(program) {
  return {
    queryKey: createSOLProgramQueryKey(program, ["totalClaimedSupply"]),
    queryFn: async () => {
      requiredParamInvariant(program, "program is required");
      return await program.totalClaimedSupply();
    },
    enabled: !!program
  };
}

/**
 * Get the total claimed supply of NFTs on an NFT Drop
 * @param program - The NFT Drop program to get the claimed supply on
 *
 * @example
 * ```jsx
 * import { useProgram, useDropTotalClaimedSupply } from "@thirdweb-dev/react/solana";
 *
 * export default function Component() {
 *   const { program } = useProgram("{{program_address}}");
 *   const { data: claimedSupply, isLoading } = useDropTotalClaimedSupply(program);
 *
 *   return (
 *     <p>{claimedSupply}</p>
 *   )
 * }
 * ```
 *
 * @public
 */
function useDropTotalClaimedSupply(program) {
  return useQuery(dropTotalClaimedSupplyQuery(program));
}

function dropUnclaimedSupplyQuery(program) {
  return {
    queryKey: createSOLProgramQueryKey(program, ["totalUnclaimedSupply"]),
    queryFn: async () => {
      requiredParamInvariant(program, "program is required");
      return await program.totalUnclaimedSupply();
    },
    enabled: !!program
  };
}

/**
 * Get the total unclaimed supply of NFTs on an NFT Drop
 * @param program - The NFT Drop program to get the unclaimed supply on
 *
 * @example
 * ```jsx
 * import { useProgram, useDropTotalUnclaimedSupply } from "@thirdweb-dev/react/solana";
 *
 * export default function Component() {
 *   const { program } = useProgram("{{program_address}}");
 *   const { data: unclaimedSupply, isLoading } = useDropTotalUnclaimedSupply(program);
 *
 *   return (
 *     <p>{unclaimedSupply}</p>
 *   )
 * }
 * ```
 *
 * @public
 */
function useDropUnclaimedSupply(program) {
  return useQuery(dropUnclaimedSupplyQuery(program));
}

/**
 * Claim NFTs from an NFT Drop program
 * @param program - The NFT Drop program instance to claim from
 *
 * @example
 * ```jsx
 * import { useProgram, useClaimNFT } from "@thirdweb-dev/react/solana";
 *
 * export default function Component() {
 *   const { program } = useProgram("{{program_address}}");
 *   const { mutateAsync: claim, isLoading, error } = useClaimNFT(program);
 *
 *   return (
 *     <button onClick={() => claim({amount: 1})}>
 *       Claim
 *     </button>
 *   )
 * }
 * ```
 *
 * @public
 */
function useClaimNFT(program) {
  const queryClient = useQueryClient();
  return useMutation(async data => {
    invariant(program, "program is required");
    if (!data.to) {
      return await program.claim(data.amount);
    }
    return await program.claimTo(data.to, data.amount);
  }, {
    onSettled: () => queryClient.invalidateQueries(createSOLProgramQueryKey(program))
  });
}

function claimConditionsQuery(program) {
  return {
    queryKey: createSOLProgramQueryKey(program, ["claimConditions"]),
    queryFn: async () => {
      invariant(program, "program is required");
      return await program.claimConditions.get();
    },
    enabled: !!program
  };
}

/**
 * Get the current claim conditions on an NFT Drop
 * @param program - The NFT Drop program to get the claim conditions for
 *
 * @example
 * ```jsx
 * import { useProgram, useClaimConditions } from "@thirdweb-dev/react/solana";
 *
 * export default function Component() {
 *   const { program } = useProgram("{{program_address}}");
 *   const { data: claimConditions, isLoading } = useClaimConditions(program);
 *
 *   return (
 *     <p>{claimConditions?.price.displayValue}</p>
 *   )
 * }
 * ```
 *
 * @public
 */
function useClaimConditions(program) {
  return useQuery(claimConditionsQuery(program));
}

/**
 * Set Claim Conditions to an NFT Drop program
 * @param program - The NFT Drop program to set claim conditions for
 *
 * @example
 * ```jsx
 * import { useProgram, useSetClaimConditions } from "@thirdweb-dev/react/solana";
 *
 * export default function Component() {
 *   const { program } = useProgram("{{program_address}}");
 *   const { mutateAsync: setClaimConditions, isLoading, error } = useSetClaimConditions(program);
 *
 *   return (
 *     <button onClick={() => setClaimConditions(metadata)}>
 *       Set Claim Conditions
 *     </button>
 *   )
 * }
 * ```
 *
 * @public
 */
function useSetClaimConditions(program) {
  const queryClient = useQueryClient();
  return useMutation(async metadata => {
    invariant(program, "program is required");
    return await program.claimConditions.set(metadata);
  }, {
    onSettled: () => queryClient.invalidateQueries(createSOLProgramQueryKey(program))
  });
}

function tokenSupplyQuery(program) {
  return {
    queryKey: createSOLProgramQueryKey(program, ["totalSupply"]),
    queryFn: async () => {
      invariant(program, "program is required");
      return await program.totalSupply();
    },
    enabled: !!program
  };
}

/**
 * Get the total circulating supply of a token
 * @param program - The token program to get the supply of
 *
 * @example
 * ```jsx
 * import { useProgram, useMintToken } from "@thirdweb-dev/react/solana";
 *
 * export default function Component() {
 *   const { program } = useProgram("{{program_address}}");
 *   const { data: totalSupply, isLoading } = useTokenSupply(program);
 *
 *   return (
 *     <p>{totalSupply}</p>
 *   )
 * }
 * ```
 *
 * @public
 */
function useTokenSupply(program) {
  return useQuery(tokenSupplyQuery(program));
}

function tokenBalanceQuery(program, walletAddress) {
  return {
    queryKey: createSOLProgramQueryKey(program, ["balanceOf", {
      walletAddress
    }]),
    queryFn: async () => {
      requiredParamInvariant(program, "program is required");
      requiredParamInvariant(walletAddress, "Wallet address is required");
      return await program.balanceOf(walletAddress);
    },
    enabled: !!program && !!walletAddress
  };
}

/**
 * Get the token balance of a specified wallet
 * @param program - The token program to get the balance on
 * @param walletAddress - The address of the wallet to get the balance of
 *
 * @example
 * ```jsx
 * import { useProgram, useTokenBalance } from "@thirdweb-dev/react/solana";
 *
 * export default function Component() {
 *   const { program } = useProgram("{{program_address}}");
 *   const { data: balance, isLoading } = useTokenBalance(program, "{{wallet_address}}");
 *
 *   return (
 *     <p>{balance}</p>
 *   )
 * }
 * ```
 *
 * @public
 */
function useTokenBalance(program, walletAddress) {
  return useQuery(tokenBalanceQuery(program, walletAddress));
}

/**
 * Mint tokens on your token program
 * @param program - The program instance of the program to mint on
 *
 * @example
 * ```jsx
 * import { useProgram, useMintToken } from "@thirdweb-dev/react/solana";
 *
 * export default function Component() {
 *   const { program } = useProgram("{{program_address}}");
 *   const { mutateAsync: mint, isLoading, error } = useMintToken(program);
 *
 *   return (
 *     <button onClick={() => mint({ to: "{{wallet_address}}", amount: 1 })}>
 *       Mint
 *     </button>
 *   )
 * }
 * ```
 *
 * @public
 */
function useMintToken(program) {
  const queryClient = useQueryClient();
  return useMutation(async params => {
    requiredParamInvariant(program, "program is required");
    // TODO switch this to use mintTo once that is exposed
    return await program.mint(params.amount);
  }, {
    onSettled: () => queryClient.invalidateQueries(createSOLProgramQueryKey(program))
  });
}

/**
 * Transfer tokens from the connected wallet to another wallet
 * @param program - The program instance of the program to mint on
 *
 * @example
 * ```jsx
 * import { useProgram, useTransferToken } from "@thirdweb-dev/react/solana";
 *
 * export default function Component() {
 *   const { program } = useProgram("{{program_address}}");
 *   const { mutateAsync: transfer, isLoading, error } = useTransferToken(program);
 *
 *   return (
 *     <button onClick={() => transfer({ to: "{{wallet_address}}", amount: 1 })}>
 *       Transfer
 *     </button>
 *   )
 * }
 * ```
 *
 * @public
 */
function useTransferToken(program) {
  const queryClient = useQueryClient();
  return useMutation(async _ref => {
    let {
      amount,
      receiverAddress
    } = _ref;
    requiredParamInvariant(program, "program is required");
    return await program.transfer(receiverAddress, amount);
  }, {
    onSettled: () => queryClient.invalidateQueries(createSOLProgramQueryKey(program))
  });
}

/**
 * Hook to securely login to a backend with the connected wallet. The backend
 * authentication URL must be configured on the ThirdwebProvider.
 *
 * @param config - Configuration for the login.
 * @returns - A function to invoke to login with the connected wallet.
 *
 * @beta
 */
function useLogin() {
  const queryClient = useQueryClient();
  const authConfig = useThirdwebAuthContext();
  const signer = useSDK()?.wallet.getSigner();
  const login = useMutation({
    mutationFn: async () => {
      invariant(authConfig, "Please specify an authConfig in the ThirdwebProvider");
      invariant(signer, "You need a connected wallet to login.");
      invariant(authConfig.authUrl, "Please specify an authUrl in the authConfig.");
      const wallet = new SignerWallet(signer);
      const address = await wallet.getAddress();
      let res = await fetch(`${authConfig.authUrl}/payload`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          address
        })
      });
      if (!res.ok) {
        throw new Error(`Failed to get payload with status code ${res.status}`);
      }
      let payloadData;
      try {
        ({
          payload: payloadData
        } = await res.json());
      } catch {
        throw new Error(`Failed to get payload`);
      }
      const payload = await doLoginWithPayload(wallet, payloadData);
      res = await fetch(`${authConfig.authUrl}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          payload
        }),
        credentials: "include"
      });
      if (!res.ok) {
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        throw new Error(`Login request failed with status code ${res.status}`);
      }
      queryClient.invalidateQueries(ensureTWPrefix(["user"]));
    }
  });
  return {
    login: () => login.mutateAsync(),
    isLoading: login.isLoading
  };
}
async function doLoginWithPayload(wallet, payload) {
  const message = generateMessage(payload);
  const signature = await wallet.signMessage(message);
  return {
    payload,
    signature
  };
}

// generate straight from auth
function generateMessage(payload) {
  const typeField = payload.type === "evm" ? "Ethereum" : "Solana";
  const header = `${payload.domain} wants you to sign in with your ${typeField} account:`;
  let prefix = [header, payload.address].join("\n");
  prefix = [prefix, payload.statement].join("\n\n");
  if (payload.statement) {
    prefix += "\n";
  }
  const suffixArray = [];
  if (payload.uri) {
    const uriField = `URI: ${payload.uri}`;
    suffixArray.push(uriField);
  }
  const versionField = `Version: ${payload.version}`;
  suffixArray.push(versionField);
  if (payload.chain_id) {
    const chainField = `Chain ID: ` + payload.chain_id || "1";
    suffixArray.push(chainField);
  }
  const nonceField = `Nonce: ${payload.nonce}`;
  suffixArray.push(nonceField);
  const issuedAtField = `Issued At: ${payload.issued_at}`;
  suffixArray.push(issuedAtField);
  const expiryField = `Expiration Time: ${payload.expiration_time}`;
  suffixArray.push(expiryField);
  if (payload.invalid_before) {
    const invalidBeforeField = `Not Before: ${payload.invalid_before}`;
    suffixArray.push(invalidBeforeField);
  }
  if (payload.resources) {
    suffixArray.push([`Resources:`, ...payload.resources.map(x => `- ${x}`)].join("\n"));
  }
  const suffix = suffixArray.join("\n");
  return [prefix, suffix].join("\n");
}

/**
 * Hook to logout the connected wallet from the backend.
 * The backend logout URL must be configured on the ThirdwebProvider.
 *
 * @returns - A function to invoke to logout.
 *
 * @beta
 */
function useLogout() {
  const queryClient = useQueryClient();
  const authConfig = useThirdwebAuthContext();
  const logout = useMutation({
    mutationFn: async () => {
      invariant(authConfig, "Please specify an authConfig in the ThirdwebProvider");
      invariant(authConfig.authUrl, "Please specify an authUrl in the authConfig.");
      await fetch(`${authConfig.authUrl}/logout`, {
        method: "POST"
      });
      queryClient.invalidateQueries(ensureTWPrefix(["user"]));
    }
  });
  return {
    logout: logout.mutateAsync,
    isLoading: logout.isLoading
  };
}

/**
 * Hook to get the currently logged in user.
 *
 * @returns - The currently logged in user or null if not logged in, as well as a loading state.
 *
 * @beta
 */
function useUser() {
  const authConfig = useThirdwebAuthContext();
  const {
    data: user,
    isLoading
  } = useQuery(ensureTWPrefix(["user"]), async () => {
    invariant(authConfig, "Please specify an authConfig in the ThirdwebProvider");
    invariant(authConfig.authUrl, "Please specify an authUrl in the authConfig.");

    // We include credentials, so we can getUser even if API is on different URL
    const res = await fetch(`${authConfig.authUrl}/user`, {
      credentials: "include"
    });
    return await res.json();
  }, {
    enabled: !!authConfig
  });
  return {
    user,
    isLoggedIn: !!user,
    isLoading
  };
}

function balanceQuery(sdk) {
  const address = sdk?.wallet?.getAddress();
  const network = sdk?.network;
  return {
    queryKey: createSOLQueryKeyWithNetwork(["wallet-balance", {
      address
    }], network),
    queryFn: () => {
      invariant(sdk, "sdk is required");
      return sdk.wallet.getBalance();
    },
    enabled: !!sdk && !!address && !!network
  };
}

/**
 * Get the currently connected wallet balance
 *
 * @returns the balance of the connected wallet
 */
function useBalance() {
  const sdk = useSDK();
  return useQuery(balanceQuery(sdk));
}

export { ThirdwebAuthProvider, ThirdwebSDKProvider, balanceQuery, claimConditionsQuery, dropTotalClaimedSupplyQuery, dropUnclaimedSupplyQuery, nftCreatorsQuery, nftGetAllQuery, nftRoyaltyQuery, nftTotalSupplyQuery, programAccountTypeQuery, programMetadataQuery, programQuery, tokenBalanceQuery, tokenSupplyQuery, useBalance, useBurnNFT, useClaimConditions, useClaimNFT, useCreators, useDropTotalClaimedSupply, useDropUnclaimedSupply, useLazyMint, useLogin, useLogout, useMintNFT, useMintNFTSupply, useMintToken, useNFTs, useProgram, useProgramAccountType, useProgramMetadata, useRoyaltySettings, useSDK, useSetClaimConditions, useThirdwebAuthContext, useTokenBalance, useTokenSupply, useTotalSupply, useTransferNFT, useTransferToken, useUpdateCreators, useUpdateRoyaltySettings, useUser };
