import { Theme } from "../../../design-system";
import { ConnectWalletProps } from "../../../wallet/ConnectWallet/ConnectWallet";
import type { SmartContract } from "@thirdweb-dev/sdk";
import type { CallOverrides, ContractInterface } from "ethers";
import { PropsWithChildren } from "react";
type ActionFn = (contract: SmartContract) => any;
interface Web3ButtonProps<TActionFn extends ActionFn> {
    className?: string;
    contractAddress: `0x${string}` | `${string}.eth` | string;
    contractAbi?: ContractInterface;
    overrides?: CallOverrides;
    onSuccess?: (result: Awaited<ReturnType<TActionFn>>) => void;
    onError?: (error: Error) => void;
    onSubmit?: () => void;
    isDisabled?: boolean;
    action: TActionFn;
    type?: "button" | "submit" | "reset";
    theme?: "dark" | "light" | Theme;
    style?: React.CSSProperties;
    connectWallet?: Omit<ConnectWalletProps, "detailsBtn" | "hideTestnetFaucet" | "switchToActiveChain" | "theme">;
}
/**
 * A component that allows the user to call an on-chain function on a contract.
 *
 * The button has to be wrapped in a `ThirdwebProvider` in order to function.
 *
 * @example
 * ```javascript
 * import { Web3Button } from "@thirdweb-dev/react";
 *
 * const App = () => {
 *  return (
 *   <div>
 *     <Web3Button contractAddress="0x..." action={(contract) => contract.erc721.transfer("0x...", 1)} />
 *   </div>
 * )
 * }
 * ```
 *
 *
 * @beta
 */
export declare const Web3Button: <TAction extends ActionFn>(props: PropsWithChildren<Web3ButtonProps<TAction>>) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map