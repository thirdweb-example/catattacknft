import { InjectedConnector, InjectedConnectorOptions } from "../injected";
import type { Chain } from "@thirdweb-dev/chains";
import { AsyncStorage } from "../../../core/AsyncStorage";
type ZerionConnectorConstructorArg = {
    chains?: Chain[];
    connectorStorage: AsyncStorage;
    options?: InjectedConnectorOptions;
};
export declare class ZerionConnector extends InjectedConnector {
    constructor(arg: ZerionConnectorConstructorArg);
}
export {};
//# sourceMappingURL=index.d.ts.map