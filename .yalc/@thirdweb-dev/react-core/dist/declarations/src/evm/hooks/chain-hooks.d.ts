import { type Chain } from "@thirdweb-dev/chains";
export declare function useUpdateChainsWithClientId<TChains extends Chain[], TActiveChain extends Chain | TChains[number]["chainId"] | TChains[number]["slug"]>(supportedChains: NonNullable<TChains>, activeChain: TActiveChain, clientId?: string): readonly [Chain[], Chain | TActiveChain];
//# sourceMappingURL=chain-hooks.d.ts.map