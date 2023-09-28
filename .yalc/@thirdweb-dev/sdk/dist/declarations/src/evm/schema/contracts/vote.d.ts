import { z } from "zod";
export declare const VoteSettingsInputSchema: z.ZodObject<{
    voting_delay_in_blocks: z.ZodDefault<z.ZodNumber>;
    voting_period_in_blocks: z.ZodDefault<z.ZodNumber>;
    voting_token_address: z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
    voting_quorum_fraction: z.ZodDefault<z.ZodNumber>;
    proposal_token_threshold: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>>;
}, "strip", z.ZodTypeAny, {
    voting_delay_in_blocks: number;
    voting_period_in_blocks: number;
    voting_token_address: string;
    voting_quorum_fraction: number;
    proposal_token_threshold: string;
}, {
    voting_token_address: string;
    voting_delay_in_blocks?: number | undefined;
    voting_period_in_blocks?: number | undefined;
    voting_quorum_fraction?: number | undefined;
    proposal_token_threshold?: string | number | bigint | import("ethers").BigNumber | undefined;
}>;
export declare const VoteSettingsOuputSchema: z.ZodObject<{
    voting_delay_in_blocks: z.ZodDefault<z.ZodNumber>;
    voting_period_in_blocks: z.ZodDefault<z.ZodNumber>;
    voting_token_address: z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
    voting_quorum_fraction: z.ZodDefault<z.ZodNumber>;
    proposal_token_threshold: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>;
}, "strip", z.ZodTypeAny, {
    voting_delay_in_blocks: number;
    voting_period_in_blocks: number;
    voting_token_address: string;
    voting_quorum_fraction: number;
    proposal_token_threshold: import("ethers").BigNumber;
}, {
    voting_token_address: string;
    proposal_token_threshold: (string | number | bigint | import("ethers").BigNumber) & (string | number | bigint | import("ethers").BigNumber | undefined);
    voting_delay_in_blocks?: number | undefined;
    voting_period_in_blocks?: number | undefined;
    voting_quorum_fraction?: number | undefined;
}>;
export declare const VoteContractInput: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
        data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        data?: any;
    }, {
        name: string;
        data?: any;
    }>]>, z.ZodString]>>;
    external_link: z.ZodOptional<z.ZodString>;
    app_uri: z.ZodOptional<z.ZodString>;
    social_urls: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    voting_delay_in_blocks: z.ZodDefault<z.ZodNumber>;
    voting_period_in_blocks: z.ZodDefault<z.ZodNumber>;
    voting_token_address: z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
    voting_quorum_fraction: z.ZodDefault<z.ZodNumber>;
    proposal_token_threshold: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>>;
}, "strip", z.ZodTypeAny, {
    name: string;
    voting_delay_in_blocks: number;
    voting_period_in_blocks: number;
    voting_token_address: string;
    voting_quorum_fraction: number;
    proposal_token_threshold: string;
    description?: string | undefined;
    image?: any;
    external_link?: string | undefined;
    app_uri?: string | undefined;
    social_urls?: Record<string, string> | undefined;
}, {
    name: string;
    voting_token_address: string;
    description?: string | undefined;
    image?: any;
    external_link?: string | undefined;
    app_uri?: string | undefined;
    social_urls?: Record<string, string> | undefined;
    voting_delay_in_blocks?: number | undefined;
    voting_period_in_blocks?: number | undefined;
    voting_quorum_fraction?: number | undefined;
    proposal_token_threshold?: string | number | bigint | import("ethers").BigNumber | undefined;
}>;
export declare const VoteContractOutput: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodString>;
    external_link: z.ZodOptional<z.ZodString>;
    app_uri: z.ZodOptional<z.ZodString>;
    social_urls: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    voting_delay_in_blocks: z.ZodDefault<z.ZodNumber>;
    voting_period_in_blocks: z.ZodDefault<z.ZodNumber>;
    voting_token_address: z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
    voting_quorum_fraction: z.ZodDefault<z.ZodNumber>;
    proposal_token_threshold: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>;
}, "strip", z.ZodTypeAny, {
    name: string;
    voting_delay_in_blocks: number;
    voting_period_in_blocks: number;
    voting_token_address: string;
    voting_quorum_fraction: number;
    proposal_token_threshold: import("ethers").BigNumber;
    description?: string | undefined;
    image?: string | undefined;
    external_link?: string | undefined;
    app_uri?: string | undefined;
    social_urls?: Record<string, string> | undefined;
}, {
    name: string;
    voting_token_address: string;
    proposal_token_threshold: (string | number | bigint | import("ethers").BigNumber) & (string | number | bigint | import("ethers").BigNumber | undefined);
    description?: string | undefined;
    image?: string | undefined;
    external_link?: string | undefined;
    app_uri?: string | undefined;
    social_urls?: Record<string, string> | undefined;
    voting_delay_in_blocks?: number | undefined;
    voting_period_in_blocks?: number | undefined;
    voting_quorum_fraction?: number | undefined;
}>;
export declare const VoteContractDeploy: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
        data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        data?: any;
    }, {
        name: string;
        data?: any;
    }>]>, z.ZodString]>>;
    external_link: z.ZodOptional<z.ZodString>;
    app_uri: z.ZodOptional<z.ZodString>;
    social_urls: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    voting_delay_in_blocks: z.ZodDefault<z.ZodNumber>;
    voting_period_in_blocks: z.ZodDefault<z.ZodNumber>;
    voting_token_address: z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
    voting_quorum_fraction: z.ZodDefault<z.ZodNumber>;
    proposal_token_threshold: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>>;
    trusted_forwarders: z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>, "many">>;
}, "strip", z.ZodTypeAny, {
    name: string;
    trusted_forwarders: string[];
    voting_delay_in_blocks: number;
    voting_period_in_blocks: number;
    voting_token_address: string;
    voting_quorum_fraction: number;
    proposal_token_threshold: string;
    description?: string | undefined;
    image?: any;
    external_link?: string | undefined;
    app_uri?: string | undefined;
    social_urls?: Record<string, string> | undefined;
}, {
    name: string;
    voting_token_address: string;
    description?: string | undefined;
    image?: any;
    external_link?: string | undefined;
    app_uri?: string | undefined;
    social_urls?: Record<string, string> | undefined;
    voting_delay_in_blocks?: number | undefined;
    voting_period_in_blocks?: number | undefined;
    voting_quorum_fraction?: number | undefined;
    proposal_token_threshold?: string | number | bigint | import("ethers").BigNumber | undefined;
    trusted_forwarders?: string[] | undefined;
}>;
export declare const VoteContractSchema: {
    deploy: z.ZodObject<{
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        image: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
            data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            data?: any;
        }, {
            name: string;
            data?: any;
        }>]>, z.ZodString]>>;
        external_link: z.ZodOptional<z.ZodString>;
        app_uri: z.ZodOptional<z.ZodString>;
        social_urls: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        voting_delay_in_blocks: z.ZodDefault<z.ZodNumber>;
        voting_period_in_blocks: z.ZodDefault<z.ZodNumber>;
        voting_token_address: z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
        voting_quorum_fraction: z.ZodDefault<z.ZodNumber>;
        proposal_token_threshold: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>>;
        trusted_forwarders: z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>, "many">>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        trusted_forwarders: string[];
        voting_delay_in_blocks: number;
        voting_period_in_blocks: number;
        voting_token_address: string;
        voting_quorum_fraction: number;
        proposal_token_threshold: string;
        description?: string | undefined;
        image?: any;
        external_link?: string | undefined;
        app_uri?: string | undefined;
        social_urls?: Record<string, string> | undefined;
    }, {
        name: string;
        voting_token_address: string;
        description?: string | undefined;
        image?: any;
        external_link?: string | undefined;
        app_uri?: string | undefined;
        social_urls?: Record<string, string> | undefined;
        voting_delay_in_blocks?: number | undefined;
        voting_period_in_blocks?: number | undefined;
        voting_quorum_fraction?: number | undefined;
        proposal_token_threshold?: string | number | bigint | import("ethers").BigNumber | undefined;
        trusted_forwarders?: string[] | undefined;
    }>;
    output: z.ZodObject<{
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        image: z.ZodOptional<z.ZodString>;
        external_link: z.ZodOptional<z.ZodString>;
        app_uri: z.ZodOptional<z.ZodString>;
        social_urls: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        voting_delay_in_blocks: z.ZodDefault<z.ZodNumber>;
        voting_period_in_blocks: z.ZodDefault<z.ZodNumber>;
        voting_token_address: z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
        voting_quorum_fraction: z.ZodDefault<z.ZodNumber>;
        proposal_token_threshold: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        voting_delay_in_blocks: number;
        voting_period_in_blocks: number;
        voting_token_address: string;
        voting_quorum_fraction: number;
        proposal_token_threshold: import("ethers").BigNumber;
        description?: string | undefined;
        image?: string | undefined;
        external_link?: string | undefined;
        app_uri?: string | undefined;
        social_urls?: Record<string, string> | undefined;
    }, {
        name: string;
        voting_token_address: string;
        proposal_token_threshold: (string | number | bigint | import("ethers").BigNumber) & (string | number | bigint | import("ethers").BigNumber | undefined);
        description?: string | undefined;
        image?: string | undefined;
        external_link?: string | undefined;
        app_uri?: string | undefined;
        social_urls?: Record<string, string> | undefined;
        voting_delay_in_blocks?: number | undefined;
        voting_period_in_blocks?: number | undefined;
        voting_quorum_fraction?: number | undefined;
    }>;
    input: z.ZodObject<{
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        image: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
            data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            data?: any;
        }, {
            name: string;
            data?: any;
        }>]>, z.ZodString]>>;
        external_link: z.ZodOptional<z.ZodString>;
        app_uri: z.ZodOptional<z.ZodString>;
        social_urls: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        voting_delay_in_blocks: z.ZodDefault<z.ZodNumber>;
        voting_period_in_blocks: z.ZodDefault<z.ZodNumber>;
        voting_token_address: z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
        voting_quorum_fraction: z.ZodDefault<z.ZodNumber>;
        proposal_token_threshold: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        voting_delay_in_blocks: number;
        voting_period_in_blocks: number;
        voting_token_address: string;
        voting_quorum_fraction: number;
        proposal_token_threshold: string;
        description?: string | undefined;
        image?: any;
        external_link?: string | undefined;
        app_uri?: string | undefined;
        social_urls?: Record<string, string> | undefined;
    }, {
        name: string;
        voting_token_address: string;
        description?: string | undefined;
        image?: any;
        external_link?: string | undefined;
        app_uri?: string | undefined;
        social_urls?: Record<string, string> | undefined;
        voting_delay_in_blocks?: number | undefined;
        voting_period_in_blocks?: number | undefined;
        voting_quorum_fraction?: number | undefined;
        proposal_token_threshold?: string | number | bigint | import("ethers").BigNumber | undefined;
    }>;
};
export declare const ProposalOutputSchema: z.ZodObject<{
    proposalId: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>;
    proposer: z.ZodString;
    targets: z.ZodArray<z.ZodString, "many">;
    values: z.ZodArray<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, "many">;
    signatures: z.ZodArray<z.ZodString, "many">;
    calldatas: z.ZodArray<z.ZodString, "many">;
    startBlock: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>;
    endBlock: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>;
    description: z.ZodString;
}, "strip", z.ZodTypeAny, {
    values: import("ethers").BigNumber[];
    description: string;
    proposalId: import("ethers").BigNumber;
    proposer: string;
    targets: string[];
    signatures: string[];
    calldatas: string[];
    startBlock: import("ethers").BigNumber;
    endBlock: import("ethers").BigNumber;
}, {
    values: (string | number | bigint | import("ethers").BigNumber)[];
    description: string;
    proposalId: (string | number | bigint | import("ethers").BigNumber) & (string | number | bigint | import("ethers").BigNumber | undefined);
    proposer: string;
    targets: string[];
    signatures: string[];
    calldatas: string[];
    startBlock: (string | number | bigint | import("ethers").BigNumber) & (string | number | bigint | import("ethers").BigNumber | undefined);
    endBlock: (string | number | bigint | import("ethers").BigNumber) & (string | number | bigint | import("ethers").BigNumber | undefined);
}>;
//# sourceMappingURL=vote.d.ts.map