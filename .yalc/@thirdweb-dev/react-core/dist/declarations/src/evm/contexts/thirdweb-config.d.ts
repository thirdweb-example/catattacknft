import { Chain } from "@thirdweb-dev/chains";
import React, { PropsWithChildren } from "react";
interface ThirdwebConfigContext {
    chains: Chain[];
    clientId?: string;
}
export declare const ThirdwebConfigContext: React.Context<ThirdwebConfigContext | undefined>;
export declare const ThirdwebConfigProvider: React.FC<PropsWithChildren<{
    value: ThirdwebConfigContext;
}>>;
export declare function useThirdwebConfigContext(): ThirdwebConfigContext;
export {};
//# sourceMappingURL=thirdweb-config.d.ts.map