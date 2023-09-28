/// <reference types="react" />
import { Theme } from "../../design-system";
import type { Chain } from "@thirdweb-dev/chains";
type RenderChain = React.FC<{
    chain: Chain;
    switchChain: () => void;
    switching: boolean;
    switchFailed: boolean;
    close?: () => void;
}>;
export type NetworkSelectorProps = {
    theme: "dark" | "light" | Theme;
    onClose?: () => void;
    chains?: Chain[];
    popularChains?: Chain[];
    recentChains?: Chain[];
    renderChain?: RenderChain;
    onSwitch?: (chain: Chain) => void;
    onCustomClick?: () => void;
};
export declare const NetworkSelector: React.FC<NetworkSelectorProps>;
export {};
//# sourceMappingURL=NetworkSelector.d.ts.map