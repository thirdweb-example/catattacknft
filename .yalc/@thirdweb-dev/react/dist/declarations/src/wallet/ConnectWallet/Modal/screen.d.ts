/// <reference types="react" />
import { WalletConfig } from "@thirdweb-dev/react-core";
type Screen = string | WalletConfig;
export declare const ScreenContext: import("react").Context<Screen | undefined>;
export declare function useScreen(): {
    screen: string | WalletConfig;
    setScreen: import("react").Dispatch<import("react").SetStateAction<string | WalletConfig>>;
    initialScreen: string | WalletConfig<import("@thirdweb-dev/react-core").WalletInstance>;
};
export declare function useScreenContext(): Screen;
export {};
//# sourceMappingURL=screen.d.ts.map