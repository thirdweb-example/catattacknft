import { ThirdwebProviderCoreProps, WalletConfig } from "@thirdweb-dev/react-core";
import { ThemeObjectOrType } from "../../design-system";
import { PropsWithChildren } from "react";
import type { Chain } from "@thirdweb-dev/chains";
interface ThirdwebProviderProps<TChains extends Chain[]> extends Omit<ThirdwebProviderCoreProps<TChains>, "createWalletStorage" | "supportedWallets" | "signer" | "theme"> {
    /**
     * Wallets supported by the dApp
     * @defaultValue `[ metamaskWallet(), coinbaseWallet(), walletConnect() ]`
     *
     * @example
     * ```jsx
     * import { metamaskWallet, coinbaseWallet, walletConnect } from "@thirdweb-dev/react";
     *
     * <ThirdwebProvider
     *  supportedWallets={[metamaskWallet(), coinbaseWallet(), walletConnect()]}
     * />
     * ```
     */
    supportedWallets?: WalletConfig<any>[];
    /**
     * theme to use for all thirdweb components
     * @defaultValue "dark"
     */
    theme?: ThemeObjectOrType;
}
/**
 *
 * The `<ThirdwebProvider />` component lets you control what networks you want users to connect to,
 * what types of wallets can connect to your app, and the settings for the [Thirdweb SDK](https://docs.thirdweb.com/typescript).
 *
 * @example
 * You can wrap your application with the provider as follows:
 *
 * ```jsx title="App.jsx"
 * import { ThirdwebProvider } from "@thirdweb-dev/react";
 *
 * const App = () => {
 *   return (
 *     <ThirdwebProvider>
 *       <YourApp />
 *     </ThirdwebProvider>
 *   );
 * };
 * ```
 *
 */
export declare const ThirdwebProvider: <TChains extends Chain[] = ({
    readonly name: "Ethereum Mainnet";
    readonly chain: "ETH";
    readonly icon: {
        readonly url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/ethereum/512.png";
        readonly height: 512;
        readonly width: 512;
        readonly format: "png";
    };
    readonly rpc: readonly ["https://ethereum.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet.infura.io/v3/${INFURA_API_KEY}", "wss://mainnet.infura.io/ws/v3/${INFURA_API_KEY}", "https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}", "https://api.mycryptoapi.com/eth", "https://cloudflare-eth.com", "https://ethereum.publicnode.com", "wss://ethereum.publicnode.com", "https://mainnet.gateway.tenderly.co", "wss://mainnet.gateway.tenderly.co"];
    readonly features: readonly [{
        readonly name: "EIP1559";
    }, {
        readonly name: "EIP155";
    }];
    readonly faucets: readonly [];
    readonly nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    readonly infoURL: "https://ethereum.org";
    readonly shortName: "eth";
    readonly chainId: 1;
    readonly networkId: 1;
    readonly slip44: 60;
    readonly ens: {
        readonly registry: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
    };
    readonly explorers: readonly [{
        readonly name: "etherscan";
        readonly url: "https://etherscan.io";
        readonly standard: "EIP3091";
    }, {
        readonly name: "blockscout";
        readonly url: "https://eth.blockscout.com";
        readonly icon: {
            readonly url: "ipfs://QmYtUimyqHkkFxYdbXXRbUqNg2VLPUg6Uu2C2nmFWowiZM";
            readonly width: 551;
            readonly height: 540;
            readonly format: "png";
        };
        readonly standard: "EIP3091";
    }];
    readonly testnet: false;
    readonly slug: "ethereum";
} | {
    readonly name: "Goerli";
    readonly title: "Ethereum Testnet Goerli";
    readonly chain: "ETH";
    readonly rpc: readonly ["https://goerli.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://goerli.infura.io/v3/${INFURA_API_KEY}", "wss://goerli.infura.io/v3/${INFURA_API_KEY}", "https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}", "https://rpc.goerli.mudit.blog/", "https://ethereum-goerli.publicnode.com", "wss://ethereum-goerli.publicnode.com", "https://goerli.gateway.tenderly.co", "wss://goerli.gateway.tenderly.co"];
    readonly faucets: readonly ["https://faucet.paradigm.xyz/", "http://fauceth.komputing.org?chain=5&address=${ADDRESS}", "https://goerli-faucet.slock.it?address=${ADDRESS}", "https://faucet.goerli.mudit.blog"];
    readonly nativeCurrency: {
        readonly name: "Goerli Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    readonly infoURL: "https://goerli.net/#about";
    readonly shortName: "gor";
    readonly chainId: 5;
    readonly networkId: 5;
    readonly ens: {
        readonly registry: "0x112234455c3a32fd11230c42e7bccd4a84e02010";
    };
    readonly explorers: readonly [{
        readonly name: "etherscan-goerli";
        readonly url: "https://goerli.etherscan.io";
        readonly standard: "EIP3091";
    }, {
        readonly name: "blockscout-goerli";
        readonly url: "https://eth-goerli.blockscout.com";
        readonly icon: {
            readonly url: "ipfs://QmYtUimyqHkkFxYdbXXRbUqNg2VLPUg6Uu2C2nmFWowiZM";
            readonly width: 551;
            readonly height: 540;
            readonly format: "png";
        };
        readonly standard: "EIP3091";
    }];
    readonly icon: {
        readonly url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/ethereum/512.png";
        readonly height: 512;
        readonly width: 512;
        readonly format: "png";
    };
    readonly testnet: true;
    readonly slug: "goerli";
} | {
    readonly name: "Base";
    readonly chain: "ETH";
    readonly rpc: readonly ["https://base.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet.base.org/", "https://developer-access-mainnet.base.org/", "https://base.gateway.tenderly.co", "wss://base.gateway.tenderly.co", "https://base.publicnode.com", "wss://base.publicnode.com"];
    readonly faucets: readonly [];
    readonly nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    readonly infoURL: "https://base.org";
    readonly shortName: "base";
    readonly chainId: 8453;
    readonly networkId: 8453;
    readonly icon: {
        readonly url: "ipfs://QmW5Vn15HeRkScMfPcW12ZdZcC2yUASpu6eCsECRdEmjjj/base-512.png";
        readonly height: 512;
        readonly width: 512;
        readonly format: "png";
    };
    readonly explorers: readonly [{
        readonly name: "basescout";
        readonly url: "https://base.blockscout.com";
        readonly icon: {
            readonly url: "ipfs://QmYtUimyqHkkFxYdbXXRbUqNg2VLPUg6Uu2C2nmFWowiZM";
            readonly width: 551;
            readonly height: 540;
            readonly format: "png";
        };
        readonly standard: "EIP3091";
    }, {
        readonly name: "basescan";
        readonly url: "https://basescan.org";
        readonly standard: "none";
    }];
    readonly status: "active";
    readonly testnet: false;
    readonly slug: "base";
} | {
    readonly name: "Base Goerli Testnet";
    readonly chain: "ETH";
    readonly rpc: readonly ["https://base-goerli.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "wss://base-goerli.publicnode.com", "https://base-goerli.publicnode.com", "wss://base-goerli.gateway.tenderly.co", "https://base-goerli.gateway.tenderly.co", "https://goerli.base.org"];
    readonly faucets: readonly ["https://www.coinbase.com/faucets/base-ethereum-goerli-faucet"];
    readonly nativeCurrency: {
        readonly name: "Goerli Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    readonly infoURL: "https://base.org";
    readonly shortName: "basegor";
    readonly chainId: 84531;
    readonly networkId: 84531;
    readonly icon: {
        readonly url: "ipfs://QmW5Vn15HeRkScMfPcW12ZdZcC2yUASpu6eCsECRdEmjjj/base-512.png";
        readonly height: 512;
        readonly width: 512;
        readonly format: "png";
    };
    readonly explorers: readonly [{
        readonly name: "basescout";
        readonly url: "https://base-goerli.blockscout.com";
        readonly icon: {
            readonly url: "ipfs://QmYtUimyqHkkFxYdbXXRbUqNg2VLPUg6Uu2C2nmFWowiZM";
            readonly width: 551;
            readonly height: 540;
            readonly format: "png";
        };
        readonly standard: "EIP3091";
    }, {
        readonly name: "basescan";
        readonly url: "https://goerli.basescan.org";
        readonly standard: "none";
    }];
    readonly testnet: true;
    readonly slug: "base-goerli";
} | {
    readonly name: "Polygon Mainnet";
    readonly chain: "Polygon";
    readonly icon: {
        readonly url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/polygon/512.png";
        readonly height: 512;
        readonly width: 512;
        readonly format: "png";
    };
    readonly rpc: readonly ["https://polygon.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://polygon-mainnet.infura.io/v3/${INFURA_API_KEY}", "https://polygon-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}", "https://polygon-rpc.com/", "https://rpc-mainnet.matic.network", "https://matic-mainnet.chainstacklabs.com", "https://rpc-mainnet.maticvigil.com", "https://rpc-mainnet.matic.quiknode.pro", "https://matic-mainnet-full-rpc.bwarelabs.com", "https://polygon-bor.publicnode.com", "wss://polygon-bor.publicnode.com", "https://polygon.gateway.tenderly.co", "wss://polygon.gateway.tenderly.co"];
    readonly faucets: readonly [];
    readonly nativeCurrency: {
        readonly name: "MATIC";
        readonly symbol: "MATIC";
        readonly decimals: 18;
    };
    readonly infoURL: "https://polygon.technology/";
    readonly shortName: "matic";
    readonly chainId: 137;
    readonly networkId: 137;
    readonly slip44: 966;
    readonly explorers: readonly [{
        readonly name: "polygonscan";
        readonly url: "https://polygonscan.com";
        readonly standard: "EIP3091";
    }];
    readonly testnet: false;
    readonly slug: "polygon";
} | {
    readonly name: "Mumbai";
    readonly title: "Polygon Testnet Mumbai";
    readonly chain: "Polygon";
    readonly icon: {
        readonly url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/polygon/512.png";
        readonly height: 512;
        readonly width: 512;
        readonly format: "png";
    };
    readonly rpc: readonly ["https://mumbai.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://polygon-mumbai.infura.io/v3/${INFURA_API_KEY}", "https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_API_KEY}", "https://rpc-mumbai.maticvigil.com", "https://polygon-mumbai-bor.publicnode.com", "wss://polygon-mumbai-bor.publicnode.com", "https://polygon-mumbai.gateway.tenderly.co", "wss://polygon-mumbai.gateway.tenderly.co"];
    readonly faucets: readonly ["https://faucet.polygon.technology/"];
    readonly nativeCurrency: {
        readonly name: "MATIC";
        readonly symbol: "MATIC";
        readonly decimals: 18;
    };
    readonly infoURL: "https://polygon.technology/";
    readonly shortName: "maticmum";
    readonly chainId: 80001;
    readonly networkId: 80001;
    readonly explorers: readonly [{
        readonly name: "polygonscan";
        readonly url: "https://mumbai.polygonscan.com";
        readonly standard: "EIP3091";
    }];
    readonly testnet: true;
    readonly slug: "mumbai";
} | {
    readonly name: "Arbitrum One";
    readonly chainId: 42161;
    readonly shortName: "arb1";
    readonly chain: "ETH";
    readonly networkId: 42161;
    readonly nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    readonly rpc: readonly ["https://arbitrum.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://arbitrum-mainnet.infura.io/v3/${INFURA_API_KEY}", "https://arb-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}", "https://arb1.arbitrum.io/rpc", "https://arbitrum-one.publicnode.com", "wss://arbitrum-one.publicnode.com"];
    readonly faucets: readonly [];
    readonly explorers: readonly [{
        readonly name: "Arbitrum Explorer";
        readonly url: "https://explorer.arbitrum.io";
        readonly standard: "EIP3091";
    }, {
        readonly name: "Arbiscan";
        readonly url: "https://arbiscan.io";
        readonly standard: "EIP3091";
    }];
    readonly infoURL: "https://arbitrum.io";
    readonly parent: {
        readonly type: "L2";
        readonly chain: "eip155-1";
        readonly bridges: readonly [{
            readonly url: "https://bridge.arbitrum.io";
        }];
    };
    readonly icon: {
        readonly url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/arbitrum/512.png";
        readonly height: 512;
        readonly width: 512;
        readonly format: "png";
    };
    readonly testnet: false;
    readonly slug: "arbitrum";
} | {
    readonly name: "Arbitrum Goerli";
    readonly title: "Arbitrum Goerli Rollup Testnet";
    readonly chainId: 421613;
    readonly shortName: "arb-goerli";
    readonly chain: "ETH";
    readonly networkId: 421613;
    readonly nativeCurrency: {
        readonly name: "Arbitrum Goerli Ether";
        readonly symbol: "AGOR";
        readonly decimals: 18;
    };
    readonly rpc: readonly ["https://arbitrum-goerli.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://arbitrum-goerli.infura.io/v3/${INFURA_API_KEY}", "https://arb-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}", "https://goerli-rollup.arbitrum.io/rpc", "https://arbitrum-goerli.publicnode.com", "wss://arbitrum-goerli.publicnode.com"];
    readonly faucets: readonly [];
    readonly infoURL: "https://arbitrum.io/";
    readonly explorers: readonly [{
        readonly name: "Arbitrum Goerli Rollup Explorer";
        readonly url: "https://goerli-rollup-explorer.arbitrum.io";
        readonly standard: "EIP3091";
    }];
    readonly parent: {
        readonly type: "L2";
        readonly chain: "eip155-5";
        readonly bridges: readonly [{
            readonly url: "https://bridge.arbitrum.io/";
        }];
    };
    readonly icon: {
        readonly url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/arbitrum/512.png";
        readonly height: 512;
        readonly width: 512;
        readonly format: "png";
    };
    readonly testnet: true;
    readonly slug: "arbitrum-goerli";
} | {
    readonly name: "OP Mainnet";
    readonly chain: "ETH";
    readonly rpc: readonly ["https://optimism.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://optimism-mainnet.infura.io/v3/${INFURA_API_KEY}", "https://opt-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}", "https://mainnet.optimism.io", "https://optimism.publicnode.com", "wss://optimism.publicnode.com", "https://optimism.gateway.tenderly.co", "wss://optimism.gateway.tenderly.co"];
    readonly faucets: readonly [];
    readonly nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    readonly infoURL: "https://optimism.io";
    readonly shortName: "oeth";
    readonly chainId: 10;
    readonly networkId: 10;
    readonly explorers: readonly [{
        readonly name: "etherscan";
        readonly url: "https://optimistic.etherscan.io";
        readonly standard: "EIP3091";
    }, {
        readonly name: "blockscout";
        readonly url: "https://optimism.blockscout.com";
        readonly icon: {
            readonly url: "ipfs://QmYtUimyqHkkFxYdbXXRbUqNg2VLPUg6Uu2C2nmFWowiZM";
            readonly width: 551;
            readonly height: 540;
            readonly format: "png";
        };
        readonly standard: "EIP3091";
    }];
    readonly icon: {
        readonly url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/optimism/512.png";
        readonly height: 512;
        readonly width: 512;
        readonly format: "png";
    };
    readonly testnet: false;
    readonly slug: "optimism";
} | {
    readonly name: "Optimism Goerli Testnet";
    readonly chain: "ETH";
    readonly rpc: readonly ["https://optimism-goerli.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://optimism-goerli.infura.io/v3/${INFURA_API_KEY}", "https://opt-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}", "https://goerli.optimism.io", "https://optimism-goerli.publicnode.com", "wss://optimism-goerli.publicnode.com", "https://optimism-goerli.gateway.tenderly.co", "wss://optimism-goerli.gateway.tenderly.co"];
    readonly faucets: readonly ["https://coinbase.com/faucets/optimism-goerli-faucet"];
    readonly nativeCurrency: {
        readonly name: "Goerli Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    readonly infoURL: "https://optimism.io";
    readonly shortName: "ogor";
    readonly chainId: 420;
    readonly networkId: 420;
    readonly explorers: readonly [{
        readonly name: "blockscout";
        readonly url: "https://optimism-goerli.blockscout.com";
        readonly icon: {
            readonly url: "ipfs://QmYtUimyqHkkFxYdbXXRbUqNg2VLPUg6Uu2C2nmFWowiZM";
            readonly width: 551;
            readonly height: 540;
            readonly format: "png";
        };
        readonly standard: "EIP3091";
    }];
    readonly icon: {
        readonly url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/optimism/512.png";
        readonly height: 512;
        readonly width: 512;
        readonly format: "png";
    };
    readonly testnet: true;
    readonly slug: "optimism-goerli";
} | {
    readonly name: "BNB Smart Chain Mainnet";
    readonly chain: "BSC";
    readonly rpc: readonly ["https://binance.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "wss://bsc-ws-node.nariox.org", "wss://bsc.publicnode.com", "https://bsc.publicnode.com", "https://bsc-dataseed4.ninicoin.io", "https://bsc-dataseed3.ninicoin.io", "https://bsc-dataseed2.ninicoin.io", "https://bsc-dataseed1.ninicoin.io", "https://bsc-dataseed4.defibit.io", "https://bsc-dataseed3.defibit.io", "https://bsc-dataseed2.defibit.io", "https://bsc-dataseed1.defibit.io", "https://bsc-dataseed4.bnbchain.org", "https://bsc-dataseed3.bnbchain.org", "https://bsc-dataseed2.bnbchain.org", "https://bsc-dataseed1.bnbchain.org"];
    readonly faucets: readonly [];
    readonly nativeCurrency: {
        readonly name: "BNB Chain Native Token";
        readonly symbol: "BNB";
        readonly decimals: 18;
    };
    readonly infoURL: "https://www.bnbchain.org/en";
    readonly shortName: "bnb";
    readonly chainId: 56;
    readonly networkId: 56;
    readonly slip44: 714;
    readonly explorers: readonly [{
        readonly name: "bscscan";
        readonly url: "https://bscscan.com";
        readonly standard: "EIP3091";
    }];
    readonly icon: {
        readonly url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/binance-coin/512.png";
        readonly height: 512;
        readonly width: 512;
        readonly format: "png";
    };
    readonly testnet: false;
    readonly slug: "binance";
} | {
    readonly name: "BNB Smart Chain Testnet";
    readonly chain: "BSC";
    readonly rpc: readonly ["https://binance-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "wss://bsc-testnet.publicnode.com", "https://bsc-testnet.publicnode.com", "https://data-seed-prebsc-2-s3.bnbchain.org:8545", "https://data-seed-prebsc-1-s3.bnbchain.org:8545", "https://data-seed-prebsc-2-s2.bnbchain.org:8545", "https://data-seed-prebsc-1-s2.bnbchain.org:8545", "https://data-seed-prebsc-2-s1.bnbchain.org:8545", "https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
    readonly faucets: readonly ["https://testnet.bnbchain.org/faucet-smart"];
    readonly nativeCurrency: {
        readonly name: "BNB Chain Native Token";
        readonly symbol: "tBNB";
        readonly decimals: 18;
    };
    readonly infoURL: "https://www.bnbchain.org/en";
    readonly shortName: "bnbt";
    readonly chainId: 97;
    readonly networkId: 97;
    readonly explorers: readonly [{
        readonly name: "bscscan-testnet";
        readonly url: "https://testnet.bscscan.com";
        readonly standard: "EIP3091";
    }];
    readonly icon: {
        readonly url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/binance-coin/512.png";
        readonly height: 512;
        readonly width: 512;
        readonly format: "png";
    };
    readonly testnet: true;
    readonly slug: "binance-testnet";
} | {
    readonly name: "Fantom Opera";
    readonly chain: "FTM";
    readonly rpc: readonly ["https://fantom.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "wss://fantom.publicnode.com", "https://fantom.publicnode.com", "https://rpc.ftm.tools"];
    readonly faucets: readonly [];
    readonly nativeCurrency: {
        readonly name: "Fantom";
        readonly symbol: "FTM";
        readonly decimals: 18;
    };
    readonly infoURL: "https://fantom.foundation";
    readonly shortName: "ftm";
    readonly chainId: 250;
    readonly networkId: 250;
    readonly icon: {
        readonly url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/fantom/512.png";
        readonly height: 512;
        readonly width: 512;
        readonly format: "png";
    };
    readonly explorers: readonly [{
        readonly name: "ftmscan";
        readonly url: "https://ftmscan.com";
        readonly icon: {
            readonly url: "ipfs://QmRqbK449Fo9sJ3xMpkPbg6uV1weQj4yVV1xNMP9cdPmjf";
            readonly width: 73;
            readonly height: 73;
            readonly format: "png";
        };
        readonly standard: "EIP3091";
    }];
    readonly testnet: false;
    readonly slug: "fantom";
} | {
    readonly name: "Fantom Testnet";
    readonly chain: "FTM";
    readonly rpc: readonly ["https://fantom-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "wss://fantom-testnet.publicnode.com", "https://fantom-testnet.publicnode.com", "https://rpc.testnet.fantom.network"];
    readonly faucets: readonly ["https://faucet.fantom.network"];
    readonly nativeCurrency: {
        readonly name: "Fantom";
        readonly symbol: "FTM";
        readonly decimals: 18;
    };
    readonly infoURL: "https://docs.fantom.foundation/quick-start/short-guide#fantom-testnet";
    readonly shortName: "tftm";
    readonly chainId: 4002;
    readonly networkId: 4002;
    readonly icon: {
        readonly url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/fantom/512.png";
        readonly height: 512;
        readonly width: 512;
        readonly format: "png";
    };
    readonly explorers: readonly [{
        readonly name: "ftmscan";
        readonly url: "https://testnet.ftmscan.com";
        readonly icon: {
            readonly url: "ipfs://QmRqbK449Fo9sJ3xMpkPbg6uV1weQj4yVV1xNMP9cdPmjf";
            readonly width: 73;
            readonly height: 73;
            readonly format: "png";
        };
        readonly standard: "EIP3091";
    }];
    readonly testnet: true;
    readonly slug: "fantom-testnet";
} | {
    readonly name: "Avalanche C-Chain";
    readonly chain: "AVAX";
    readonly icon: {
        readonly url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/avalanche/512.png";
        readonly height: 512;
        readonly width: 512;
        readonly format: "png";
    };
    readonly rpc: readonly ["https://avalanche.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://avalanche-mainnet.infura.io/v3/${INFURA_API_KEY}", "https://api.avax.network/ext/bc/C/rpc", "https://avalanche-c-chain.publicnode.com", "wss://avalanche-c-chain.publicnode.com"];
    readonly features: readonly [{
        readonly name: "EIP1559";
    }];
    readonly faucets: readonly [];
    readonly nativeCurrency: {
        readonly name: "Avalanche";
        readonly symbol: "AVAX";
        readonly decimals: 18;
    };
    readonly infoURL: "https://www.avax.network/";
    readonly shortName: "avax";
    readonly chainId: 43114;
    readonly networkId: 43114;
    readonly slip44: 9005;
    readonly explorers: readonly [{
        readonly name: "snowtrace";
        readonly url: "https://snowtrace.io";
        readonly standard: "EIP3091";
    }];
    readonly testnet: false;
    readonly slug: "avalanche";
} | {
    readonly name: "Avalanche Fuji Testnet";
    readonly chain: "AVAX";
    readonly icon: {
        readonly url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/avalanche/512.png";
        readonly height: 512;
        readonly width: 512;
        readonly format: "png";
    };
    readonly rpc: readonly ["https://avalanche-fuji.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://avalanche-fuji.infura.io/v3/${INFURA_API_KEY}", "https://api.avax-test.network/ext/bc/C/rpc", "https://avalanche-fuji-c-chain.publicnode.com", "wss://avalanche-fuji-c-chain.publicnode.com"];
    readonly faucets: readonly ["https://faucet.avax.network/", "https://faucet.avax-test.network/"];
    readonly nativeCurrency: {
        readonly name: "Avalanche";
        readonly symbol: "AVAX";
        readonly decimals: 18;
    };
    readonly infoURL: "https://cchain.explorer.avax-test.network";
    readonly shortName: "Fuji";
    readonly chainId: 43113;
    readonly networkId: 1;
    readonly explorers: readonly [{
        readonly name: "snowtrace";
        readonly url: "https://testnet.snowtrace.io";
        readonly standard: "EIP3091";
    }];
    readonly testnet: true;
    readonly slug: "avalanche-fuji";
} | {
    readonly name: "Localhost";
    readonly chain: "ETH";
    readonly rpc: readonly ["http://localhost:8545"];
    readonly faucets: readonly [];
    readonly nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    readonly icon: {
        readonly url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/ethereum/512.png";
        readonly height: 512;
        readonly width: 512;
        readonly format: "png";
    };
    readonly shortName: "local";
    readonly chainId: 1337;
    readonly networkId: 1337;
    readonly testnet: true;
    readonly slug: "localhost";
})[]>({ supportedWallets, children, theme: _theme, ...restProps }: PropsWithChildren<ThirdwebProviderProps<TChains>>) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=thirdweb-provider.d.ts.map