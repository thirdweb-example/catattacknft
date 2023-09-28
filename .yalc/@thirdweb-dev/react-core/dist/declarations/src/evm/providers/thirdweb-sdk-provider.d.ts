/// <reference types="react" />
import { ThirdwebSDKProviderProps } from "./types";
import { Chain } from "@thirdweb-dev/chains";
/**
 * A basic wrapper around the Thirdweb SDK.
 *
 * You can use this in order to be able to pass a provider & signer directly to the SDK.
 *
 * @remarks Utilizing this provider will mean hooks for wallet management are not available, if you need those please use the {@link ThirdwebProvider} instead.
 *
 * @public
 */
export declare const ThirdwebSDKProvider: <TChains extends Chain[]>({ signer, children, queryClient, supportedChains: _supportedChains, activeChain, clientId, ...restProps }: import("react").PropsWithChildren<ThirdwebSDKProviderProps<TChains>>) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=thirdweb-sdk-provider.d.ts.map