import type { BaseContract, Signer, utils } from "ethers";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export interface DefaultOperatorFiltererInitInterface extends utils.Interface {
    functions: {};
    events: {
        "OperatorRestriction(bool)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "OperatorRestriction"): EventFragment;
}
export interface OperatorRestrictionEventObject {
    restriction: boolean;
}
export type OperatorRestrictionEvent = TypedEvent<[
    boolean
], OperatorRestrictionEventObject>;
export type OperatorRestrictionEventFilter = TypedEventFilter<OperatorRestrictionEvent>;
export interface DefaultOperatorFiltererInit extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: DefaultOperatorFiltererInitInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {};
    callStatic: {};
    filters: {
        "OperatorRestriction(bool)"(restriction?: null): OperatorRestrictionEventFilter;
        OperatorRestriction(restriction?: null): OperatorRestrictionEventFilter;
    };
    estimateGas: {};
    populateTransaction: {};
}
//# sourceMappingURL=DefaultOperatorFiltererInit.d.ts.map