import type { Ethereum } from "../connectors/injected/types";
interface WindowWithEthereum extends Window {
    ethereum: Ethereum;
}
export declare function assertWindowEthereum(w: Window): w is WindowWithEthereum;
export {};
//# sourceMappingURL=assertWindowEthereum.d.ts.map