/// <reference types="react" />
import { ConnectUIProps } from "@thirdweb-dev/react-core";
import { PaperWallet } from "@thirdweb-dev/wallets";
import { RecoveryShareManagement } from "./types";
type PaperOTPLoginUIProps = ConnectUIProps<PaperWallet> & {
    recoveryShareManagement: RecoveryShareManagement;
};
export declare const PaperOTPLoginUI: React.FC<PaperOTPLoginUIProps>;
export {};
//# sourceMappingURL=PaperOTPLoginUI.d.ts.map