import { InjectedConnector, InjectedConnectorOptions } from "../injected";
import type { Chain } from "@thirdweb-dev/chains";
import { AsyncStorage } from "../../../core/AsyncStorage";
type TrustConnectorConstructorArg = {
    chains?: Chain[];
    connectorStorage: AsyncStorage;
    options?: InjectedConnectorOptions;
};
export declare class TrustConnector extends InjectedConnector {
    constructor(arg: TrustConnectorConstructorArg);
}
export {};
//# sourceMappingURL=index.d.ts.map