import { Ethereum } from "../injected/types";
declare global {
    interface Window {
        phantom?: {
            ethereum?: Ethereum;
        };
    }
}
export declare function getInjectedPhantomProvider(): Ethereum | undefined;
//# sourceMappingURL=getInjectedPhantomProvider.d.ts.map