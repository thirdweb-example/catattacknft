import { ContractType } from "../../contracts";
import { type providers } from "ethers";
type ResolveContractTypeParams = {
    address: string;
    provider: providers.Provider;
};
export declare function resolveContractType(params: ResolveContractTypeParams): Promise<ContractType>;
export {};
//# sourceMappingURL=contract.d.ts.map