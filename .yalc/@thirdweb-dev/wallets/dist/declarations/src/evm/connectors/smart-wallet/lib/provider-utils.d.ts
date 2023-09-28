import { AccountAPI } from "./account";
import { providers } from "ethers";
import { ERC4337EthersProvider } from "./erc4337-provider";
import { ProviderConfig } from "../types";
/**
 * wrap an existing provider to tunnel requests through Account Abstraction.
 * @param originalProvider the normal provider
 * @param config see ClientConfig for more info
 * @param originalSigner use this signer as the owner. of this wallet. By default, use the provider's signer
 */
export declare function create4337Provider(config: ProviderConfig, accountApi: AccountAPI, originalProvider: providers.BaseProvider): Promise<ERC4337EthersProvider>;
//# sourceMappingURL=provider-utils.d.ts.map