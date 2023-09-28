/// <reference types="react" />
import { Theme } from "../../design-system";
import { type DropDownPosition } from "./Details";
import type { NetworkSelectorProps } from "./NetworkSelector";
import { WelcomeScreen } from "./screens/types";
import { SupportedTokens } from "./defaultTokens";
export type ConnectWalletProps = {
    className?: string;
    theme?: "dark" | "light" | Theme;
    btnTitle?: string;
    /**
     * Set a custom title for the modal
     * @default "Connect"
     */
    modalTitle?: string;
    /**
     * Replace the thirdweb icon next to modalTitle and set your own iconUrl
     *
     * Set to empty string to hide the icon
     */
    modalTitleIconUrl?: string;
    /**
     * render a custom button to display the connected wallet details instead of the default button
     */
    detailsBtn?: () => JSX.Element;
    dropdownPosition?: DropDownPosition;
    auth?: {
        loginOptional?: boolean;
        onLogin?: (token: string) => void;
        onLogout?: () => void;
    };
    style?: React.CSSProperties;
    networkSelector?: Omit<NetworkSelectorProps, "theme" | "onClose" | "chains">;
    /**
     * Hide option to request testnet funds for testnets in dropdown
     *
     * @default false
     */
    hideTestnetFaucet?: boolean;
    /**
     * Whether to show "Switch Network" button if the wallet is connected,
     * but it is not connected to the `activeChain` provided in `ThirdwebProvider`
     *
     * Please, note that if you support multiple networks in your app this prop should
     * be set to `false` to allow users to switch between networks.
     *
     * @default false
     */
    switchToActiveChain?: boolean;
    /**
     * Set the size of the modal - `compact` or `wide` on desktop
     *
     * Modal size is always `compact` on mobile
     *
     * @default "wide"
     */
    modalSize?: "compact" | "wide";
    /**
     * If provided, Modal will show a Terms of Service message at the bottom with below link
     */
    termsOfServiceUrl?: string;
    /**
     * If provided, Modal will show a Privacy Policy message at the bottom with below link
     */
    privacyPolicyUrl?: string;
    /**
     * Customize the welcome screen
     *
     * Either provide a component to replace the default screen entirely
     *
     * or an object with title, subtitle and imgSrc to change the content of the default screen
     */
    welcomeScreen?: WelcomeScreen;
    /**
     * Override the default supported tokens for each network
     *
     * These tokens will be displayed in "Send Funds" Modal
     */
    supportedTokens?: SupportedTokens;
    /**
     * Show balance of ERC20 token instead of the native token  in the "Connected" button when connected to certain network
     *
     * @example
     * ```tsx
     * <ConnectWallet balanceToken={{
     *  1: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599" // show USDC balance when connected to Ethereum mainnet
     * }} />
     * ```
     */
    displayBalanceToken?: Record<number, string>;
};
/**
 * A component that allows the user to connect their wallet.
 *
 * The button must be descendant of `ThirdwebProvider` in order to function.
 */
export declare const ConnectWallet: React.FC<ConnectWalletProps>;
//# sourceMappingURL=ConnectWallet.d.ts.map