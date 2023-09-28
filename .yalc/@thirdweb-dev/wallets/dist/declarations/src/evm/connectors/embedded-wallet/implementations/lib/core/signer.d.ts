import { Bytes, Signer, TypedDataDomain, TypedDataField, providers } from "ethers";
import { Deferrable } from "ethers/lib/utils";
import type { ClientIdWithQuerierType } from "../../interfaces/embedded-wallets/embedded-wallets";
import Provider from "ethereum-provider";
import type { EmbeddedWalletIframeCommunicator } from "../../utils/iFrameCommunication/EmbeddedWalletIframeCommunicator";
export type SignerProcedureTypes = {
    getAddress: void;
    signMessage: {
        message: string | Bytes;
        chainId: number;
        rpcEndpoint: string;
    };
    signTransaction: {
        transaction: Deferrable<providers.TransactionRequest>;
        chainId: number;
        rpcEndpoint: string;
    };
    signTypedDataV4: {
        domain: TypedDataDomain;
        types: Record<string, Array<TypedDataField>>;
        message: Record<string, unknown>;
        chainId: number;
        rpcEndpoint: string;
    };
    connect: {
        provider: Provider;
    };
};
export declare class EthersSigner extends Signer {
    protected querier: EmbeddedWalletIframeCommunicator<SignerProcedureTypes>;
    protected clientId: string;
    protected endpoint: string;
    private DEFAULT_ETHEREUM_CHAIN_ID;
    constructor({ provider, clientId, querier, }: ClientIdWithQuerierType & {
        provider: providers.Provider;
    });
    getAddress(): Promise<string>;
    signMessage(message: string | Bytes): Promise<string>;
    signTransaction(transaction: providers.TransactionRequest): Promise<string>;
    _signTypedData(domain: SignerProcedureTypes["signTypedDataV4"]["domain"], types: SignerProcedureTypes["signTypedDataV4"]["types"], message: SignerProcedureTypes["signTypedDataV4"]["message"]): Promise<string>;
    connect(provider: providers.Provider): EthersSigner;
}
//# sourceMappingURL=signer.d.ts.map