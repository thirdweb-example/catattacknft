export declare const FEATURE_NFT_BURNABLE: {
    readonly name: "ERC721Burnable";
    readonly namespace: "nft.burn";
    readonly docLinks: {
        readonly sdk: "sdk.erc721burnable";
        readonly contracts: "erc721burnable";
    };
    readonly abis: readonly [({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[], {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
    }[]];
    readonly features: {};
};
export declare const FEATURE_NFT_REVEALABLE: {
    readonly name: "ERC721Revealable";
    readonly namespace: "nft.drop.revealer";
    readonly docLinks: {
        readonly sdk: "sdk.delayedreveal";
        readonly contracts: "erc721revealable";
    };
    readonly abis: readonly [({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[], ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[], ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[]];
    readonly features: {};
};
export declare const FEATURE_NFT_TIERED_DROP: {
    readonly name: "ERC721TieredDrop";
    readonly namespace: "nft.tieredDrop";
    readonly docLinks: {
        readonly sdk: "sdk.erc721tiereddrop";
        readonly contracts: "";
    };
    readonly abis: readonly [({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[], ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: never[];
        name: string;
        outputs: {
            components: ({
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            })[];
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[]];
    readonly features: {};
};
export declare const FEATURE_NFT_CLAIM_CONDITIONS_V1: {
    readonly name: "ERC721ClaimConditionsV1";
    readonly namespace: "nft.drop.claim";
    readonly docLinks: {
        readonly sdk: "sdk.erc721claimable";
        readonly contracts: "erc721claimconditions";
    };
    readonly abis: readonly [({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[], ({
        anonymous: boolean;
        inputs: ({
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        } | {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        })[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: ({
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        } | {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        })[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[]];
    readonly features: {};
};
export declare const FEATURE_NFT_CLAIM_CONDITIONS_V2: {
    readonly name: "ERC721ClaimConditionsV2";
    readonly namespace: "nft.drop.claim";
    readonly docLinks: {
        readonly sdk: "sdk.erc721claimable";
        readonly contracts: "erc721claimconditions";
    };
    readonly abis: readonly [({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[], ({
        anonymous: boolean;
        inputs: ({
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        } | {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        })[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: ({
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        } | {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        })[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[]];
    readonly features: {};
};
export declare const FEATURE_NFT_CLAIM_PHASES_V1: {
    readonly name: "ERC721ClaimPhasesV1";
    readonly namespace: "nft.drop.claim";
    readonly docLinks: {
        readonly sdk: "sdk.erc721claimable";
        readonly contracts: "erc721claimphases";
    };
    readonly abis: readonly [({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: ({
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        } | {
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        })[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[]];
    readonly features: {};
};
export declare const FEATURE_NFT_CLAIM_PHASES_V2: {
    readonly name: "ERC721ClaimPhasesV2";
    readonly namespace: "nft.drop.claim";
    readonly docLinks: {
        readonly sdk: "sdk.erc721claimable";
        readonly contracts: "erc721claimphases";
    };
    readonly abis: readonly [({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[], ({
        anonymous: boolean;
        inputs: ({
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        } | {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        })[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: ({
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        } | {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        })[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[]];
    readonly features: {};
};
export declare const FEATURE_NFT_CLAIM_CUSTOM: {
    readonly name: "ERC721ClaimCustom";
    readonly namespace: "nft.drop.claim";
    readonly docLinks: {
        readonly sdk: "sdk.erc721claimable";
        readonly contracts: "erc721claimcustom";
    };
    readonly abis: readonly [({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[], ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[]];
    readonly features: {};
};
export declare const FEATURE_NFT_CLAIM_ZORA: {
    readonly name: "ERC721ClaimZora";
    readonly namespace: "nft.drop.claim";
    readonly docLinks: {
        readonly sdk: "sdk.erc721claimable";
        readonly contracts: "erc721claimzora";
    };
    readonly abis: readonly [({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[], ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        anonymous?: undefined;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[]];
    readonly features: {};
};
export declare const FEATURE_NFT_LAZY_MINTABLE: {
    readonly name: "ERC721LazyMintable";
    readonly namespace: "nft.drop";
    readonly docLinks: {
        readonly sdk: "sdk.erc721lazymintable";
        readonly contracts: "lazymint";
    };
    readonly abis: readonly [({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[], ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[]];
    readonly features: {
        readonly ERC721Revealable: {
            readonly name: "ERC721Revealable";
            readonly namespace: "nft.drop.revealer";
            readonly docLinks: {
                readonly sdk: "sdk.delayedreveal";
                readonly contracts: "erc721revealable";
            };
            readonly abis: readonly [({
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                outputs?: undefined;
                stateMutability?: undefined;
            } | {
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[], ({
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                outputs?: undefined;
                stateMutability?: undefined;
            } | {
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[], ({
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                outputs?: undefined;
                stateMutability?: undefined;
            } | {
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[]];
            readonly features: {};
        };
    };
};
export declare const FEATURE_NFT_BATCH_MINTABLE: {
    readonly name: "ERC721BatchMintable";
    readonly namespace: "nft.mint.batch";
    readonly docLinks: {
        readonly sdk: "sdk.erc721batchmintable";
        readonly contracts: "erc721batchmintable";
    };
    readonly abis: readonly [({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[], ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[], {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[]];
    readonly features: {};
};
export declare const FEATURE_NFT_MINTABLE: {
    readonly name: "ERC721Mintable";
    readonly namespace: "nft.mint";
    readonly docLinks: {
        readonly sdk: "sdk.erc721mintable";
        readonly contracts: "erc721mintable";
    };
    readonly abis: readonly [({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[], ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[]];
    readonly features: {
        readonly ERC721BatchMintable: {
            readonly name: "ERC721BatchMintable";
            readonly namespace: "nft.mint.batch";
            readonly docLinks: {
                readonly sdk: "sdk.erc721batchmintable";
                readonly contracts: "erc721batchmintable";
            };
            readonly abis: readonly [({
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                outputs?: undefined;
                stateMutability?: undefined;
            } | {
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[], ({
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                outputs?: undefined;
                stateMutability?: undefined;
            } | {
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[], {
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
            }[]];
            readonly features: {};
        };
    };
};
export declare const FEATURE_NFT_SIGNATURE_MINTABLE_V2: {
    readonly name: "ERC721SignatureMintV2";
    readonly namespace: "nft.signature";
    readonly docLinks: {
        readonly sdk: "sdk.erc721signaturemint";
        readonly contracts: "erc721signaturemint";
    };
    readonly abis: readonly [({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[], ({
        anonymous: boolean;
        inputs: ({
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        } | {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        })[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: ({
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        } | {
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        })[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[]];
    readonly features: {};
};
export declare const FEATURE_NFT_SIGNATURE_MINTABLE_V1: {
    readonly name: "ERC721SignatureMintV1";
    readonly namespace: "nft.signature";
    readonly docLinks: {
        readonly sdk: "sdk.erc721signaturemint";
        readonly contracts: "erc721signaturemint";
    };
    readonly abis: readonly [{
        inputs: ({
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        } | {
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        })[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[]];
    readonly features: {};
};
export declare const FEATURE_NFT_ENUMERABLE: {
    readonly name: "ERC721Enumerable";
    readonly namespace: "nft.query.owned";
    readonly docLinks: {
        readonly sdk: "sdk.erc721enumerable";
        readonly contracts: "erc721enumerable";
    };
    readonly abis: readonly [({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[], {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[]];
    readonly features: {};
};
export declare const FEATURE_NFT_QUERYABLE: {
    readonly name: "ERC721AQueryable";
    readonly namespace: "nft.query.owned";
    readonly docLinks: {
        readonly sdk: "";
        readonly contracts: "";
    };
    readonly abis: readonly [({
        inputs: never[];
        name: string;
        type: string;
        anonymous?: undefined;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[]];
    readonly features: {};
};
export declare const FEATURE_NFT_SUPPLY: {
    readonly name: "ERC721Supply";
    readonly namespace: "nft.query";
    readonly docLinks: {
        readonly sdk: "sdk.erc721supply";
        readonly contracts: "erc721supply";
    };
    readonly abis: readonly [({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[], {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[]];
    readonly features: {
        readonly ERC721Enumerable: {
            readonly name: "ERC721Enumerable";
            readonly namespace: "nft.query.owned";
            readonly docLinks: {
                readonly sdk: "sdk.erc721enumerable";
                readonly contracts: "erc721enumerable";
            };
            readonly abis: readonly [({
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                outputs?: undefined;
                stateMutability?: undefined;
            } | {
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[], {
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
            }[]];
            readonly features: {};
        };
        readonly ERC721AQueryable: {
            readonly name: "ERC721AQueryable";
            readonly namespace: "nft.query.owned";
            readonly docLinks: {
                readonly sdk: "";
                readonly contracts: "";
            };
            readonly abis: readonly [({
                inputs: never[];
                name: string;
                type: string;
                anonymous?: undefined;
                outputs?: undefined;
                stateMutability?: undefined;
            } | {
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                outputs?: undefined;
                stateMutability?: undefined;
            } | {
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            } | {
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    components: {
                        internalType: string;
                        name: string;
                        type: string;
                    }[];
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[]];
            readonly features: {};
        };
    };
};
export declare const FEATURE_NFT_SHARED_METADATA: {
    readonly name: "ERC721SharedMetadata";
    readonly namespace: "nft.sharedmetadata";
    readonly docLinks: {
        readonly sdk: "sdk.sharedmetadata";
        readonly contracts: "SharedMetadata";
    };
    readonly abis: readonly [({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[], ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[]];
    readonly features: {};
};
export declare const FEATURE_NFT_LOYALTY_CARD: {
    readonly name: "ERC721LoyaltyCard";
    readonly namespace: "nft.loyaltyCard";
    readonly docLinks: {
        readonly sdk: "";
        readonly contracts: "";
    };
    readonly abis: readonly [({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[]];
    readonly features: {};
};
export declare const FEATURE_NFT_UPDATABLE_METADATA: {
    readonly name: "ERC721UpdatableMetadata";
    readonly namespace: "nft.metadata";
    readonly docLinks: {
        readonly sdk: "";
        readonly contracts: "";
    };
    readonly abis: readonly [({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[], ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[]];
    readonly features: {};
};
export declare const FEATURE_NFT: {
    readonly name: "ERC721";
    readonly namespace: "nft";
    readonly docLinks: {
        readonly sdk: "sdk.erc721";
        readonly contracts: "erc721";
    };
    readonly abis: readonly [({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[], {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[]];
    readonly features: {
        readonly ERC721Burnable: {
            readonly name: "ERC721Burnable";
            readonly namespace: "nft.burn";
            readonly docLinks: {
                readonly sdk: "sdk.erc721burnable";
                readonly contracts: "erc721burnable";
            };
            readonly abis: readonly [({
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                outputs?: undefined;
                stateMutability?: undefined;
            } | {
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[], {
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: never[];
                stateMutability: string;
                type: string;
            }[]];
            readonly features: {};
        };
        readonly ERC721Supply: {
            readonly name: "ERC721Supply";
            readonly namespace: "nft.query";
            readonly docLinks: {
                readonly sdk: "sdk.erc721supply";
                readonly contracts: "erc721supply";
            };
            readonly abis: readonly [({
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                outputs?: undefined;
                stateMutability?: undefined;
            } | {
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[], {
                inputs: never[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
            }[]];
            readonly features: {
                readonly ERC721Enumerable: {
                    readonly name: "ERC721Enumerable";
                    readonly namespace: "nft.query.owned";
                    readonly docLinks: {
                        readonly sdk: "sdk.erc721enumerable";
                        readonly contracts: "erc721enumerable";
                    };
                    readonly abis: readonly [({
                        anonymous: boolean;
                        inputs: {
                            indexed: boolean;
                            internalType: string;
                            name: string;
                            type: string;
                        }[];
                        name: string;
                        type: string;
                        outputs?: undefined;
                        stateMutability?: undefined;
                    } | {
                        inputs: {
                            internalType: string;
                            name: string;
                            type: string;
                        }[];
                        name: string;
                        outputs: {
                            internalType: string;
                            name: string;
                            type: string;
                        }[];
                        stateMutability: string;
                        type: string;
                        anonymous?: undefined;
                    })[], {
                        inputs: {
                            internalType: string;
                            name: string;
                            type: string;
                        }[];
                        name: string;
                        outputs: {
                            internalType: string;
                            name: string;
                            type: string;
                        }[];
                        stateMutability: string;
                        type: string;
                    }[]];
                    readonly features: {};
                };
                readonly ERC721AQueryable: {
                    readonly name: "ERC721AQueryable";
                    readonly namespace: "nft.query.owned";
                    readonly docLinks: {
                        readonly sdk: "";
                        readonly contracts: "";
                    };
                    readonly abis: readonly [({
                        inputs: never[];
                        name: string;
                        type: string;
                        anonymous?: undefined;
                        outputs?: undefined;
                        stateMutability?: undefined;
                    } | {
                        anonymous: boolean;
                        inputs: {
                            indexed: boolean;
                            internalType: string;
                            name: string;
                            type: string;
                        }[];
                        name: string;
                        type: string;
                        outputs?: undefined;
                        stateMutability?: undefined;
                    } | {
                        inputs: {
                            internalType: string;
                            name: string;
                            type: string;
                        }[];
                        name: string;
                        outputs: {
                            internalType: string;
                            name: string;
                            type: string;
                        }[];
                        stateMutability: string;
                        type: string;
                        anonymous?: undefined;
                    } | {
                        inputs: {
                            internalType: string;
                            name: string;
                            type: string;
                        }[];
                        name: string;
                        outputs: {
                            components: {
                                internalType: string;
                                name: string;
                                type: string;
                            }[];
                            internalType: string;
                            name: string;
                            type: string;
                        }[];
                        stateMutability: string;
                        type: string;
                        anonymous?: undefined;
                    })[]];
                    readonly features: {};
                };
            };
        };
        readonly ERC721Mintable: {
            readonly name: "ERC721Mintable";
            readonly namespace: "nft.mint";
            readonly docLinks: {
                readonly sdk: "sdk.erc721mintable";
                readonly contracts: "erc721mintable";
            };
            readonly abis: readonly [({
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                outputs?: undefined;
                stateMutability?: undefined;
            } | {
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[], ({
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                outputs?: undefined;
                stateMutability?: undefined;
            } | {
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[]];
            readonly features: {
                readonly ERC721BatchMintable: {
                    readonly name: "ERC721BatchMintable";
                    readonly namespace: "nft.mint.batch";
                    readonly docLinks: {
                        readonly sdk: "sdk.erc721batchmintable";
                        readonly contracts: "erc721batchmintable";
                    };
                    readonly abis: readonly [({
                        anonymous: boolean;
                        inputs: {
                            indexed: boolean;
                            internalType: string;
                            name: string;
                            type: string;
                        }[];
                        name: string;
                        type: string;
                        outputs?: undefined;
                        stateMutability?: undefined;
                    } | {
                        inputs: {
                            internalType: string;
                            name: string;
                            type: string;
                        }[];
                        name: string;
                        outputs: {
                            internalType: string;
                            name: string;
                            type: string;
                        }[];
                        stateMutability: string;
                        type: string;
                        anonymous?: undefined;
                    })[], ({
                        anonymous: boolean;
                        inputs: {
                            indexed: boolean;
                            internalType: string;
                            name: string;
                            type: string;
                        }[];
                        name: string;
                        type: string;
                        outputs?: undefined;
                        stateMutability?: undefined;
                    } | {
                        inputs: {
                            internalType: string;
                            name: string;
                            type: string;
                        }[];
                        name: string;
                        outputs: {
                            internalType: string;
                            name: string;
                            type: string;
                        }[];
                        stateMutability: string;
                        type: string;
                        anonymous?: undefined;
                    })[], {
                        inputs: {
                            internalType: string;
                            name: string;
                            type: string;
                        }[];
                        name: string;
                        outputs: {
                            internalType: string;
                            name: string;
                            type: string;
                        }[];
                        stateMutability: string;
                        type: string;
                    }[]];
                    readonly features: {};
                };
            };
        };
        readonly ERC721LazyMintable: {
            readonly name: "ERC721LazyMintable";
            readonly namespace: "nft.drop";
            readonly docLinks: {
                readonly sdk: "sdk.erc721lazymintable";
                readonly contracts: "lazymint";
            };
            readonly abis: readonly [({
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                outputs?: undefined;
                stateMutability?: undefined;
            } | {
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[], ({
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                outputs?: undefined;
                stateMutability?: undefined;
            } | {
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[]];
            readonly features: {
                readonly ERC721Revealable: {
                    readonly name: "ERC721Revealable";
                    readonly namespace: "nft.drop.revealer";
                    readonly docLinks: {
                        readonly sdk: "sdk.delayedreveal";
                        readonly contracts: "erc721revealable";
                    };
                    readonly abis: readonly [({
                        anonymous: boolean;
                        inputs: {
                            indexed: boolean;
                            internalType: string;
                            name: string;
                            type: string;
                        }[];
                        name: string;
                        type: string;
                        outputs?: undefined;
                        stateMutability?: undefined;
                    } | {
                        inputs: {
                            internalType: string;
                            name: string;
                            type: string;
                        }[];
                        name: string;
                        outputs: {
                            internalType: string;
                            name: string;
                            type: string;
                        }[];
                        stateMutability: string;
                        type: string;
                        anonymous?: undefined;
                    })[], ({
                        anonymous: boolean;
                        inputs: {
                            indexed: boolean;
                            internalType: string;
                            name: string;
                            type: string;
                        }[];
                        name: string;
                        type: string;
                        outputs?: undefined;
                        stateMutability?: undefined;
                    } | {
                        inputs: {
                            internalType: string;
                            name: string;
                            type: string;
                        }[];
                        name: string;
                        outputs: {
                            internalType: string;
                            name: string;
                            type: string;
                        }[];
                        stateMutability: string;
                        type: string;
                        anonymous?: undefined;
                    })[], ({
                        anonymous: boolean;
                        inputs: {
                            indexed: boolean;
                            internalType: string;
                            name: string;
                            type: string;
                        }[];
                        name: string;
                        type: string;
                        outputs?: undefined;
                        stateMutability?: undefined;
                    } | {
                        inputs: {
                            internalType: string;
                            name: string;
                            type: string;
                        }[];
                        name: string;
                        outputs: {
                            internalType: string;
                            name: string;
                            type: string;
                        }[];
                        stateMutability: string;
                        type: string;
                        anonymous?: undefined;
                    })[]];
                    readonly features: {};
                };
            };
        };
        readonly ERC721SignatureMintV1: {
            readonly name: "ERC721SignatureMintV1";
            readonly namespace: "nft.signature";
            readonly docLinks: {
                readonly sdk: "sdk.erc721signaturemint";
                readonly contracts: "erc721signaturemint";
            };
            readonly abis: readonly [{
                inputs: ({
                    components: {
                        internalType: string;
                        name: string;
                        type: string;
                    }[];
                    internalType: string;
                    name: string;
                    type: string;
                } | {
                    internalType: string;
                    name: string;
                    type: string;
                    components?: undefined;
                })[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
            }[]];
            readonly features: {};
        };
        readonly ERC721SignatureMintV2: {
            readonly name: "ERC721SignatureMintV2";
            readonly namespace: "nft.signature";
            readonly docLinks: {
                readonly sdk: "sdk.erc721signaturemint";
                readonly contracts: "erc721signaturemint";
            };
            readonly abis: readonly [({
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                outputs?: undefined;
                stateMutability?: undefined;
            } | {
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[], ({
                anonymous: boolean;
                inputs: ({
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                    components?: undefined;
                } | {
                    components: {
                        internalType: string;
                        name: string;
                        type: string;
                    }[];
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                })[];
                name: string;
                type: string;
                outputs?: undefined;
                stateMutability?: undefined;
            } | {
                inputs: ({
                    components: {
                        internalType: string;
                        name: string;
                        type: string;
                    }[];
                    internalType: string;
                    name: string;
                    type: string;
                } | {
                    internalType: string;
                    name: string;
                    type: string;
                    components?: undefined;
                })[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[]];
            readonly features: {};
        };
        readonly ERC721TieredDrop: {
            readonly name: "ERC721TieredDrop";
            readonly namespace: "nft.tieredDrop";
            readonly docLinks: {
                readonly sdk: "sdk.erc721tiereddrop";
                readonly contracts: "";
            };
            readonly abis: readonly [({
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                outputs?: undefined;
                stateMutability?: undefined;
            } | {
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[], ({
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                outputs?: undefined;
                stateMutability?: undefined;
            } | {
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            } | {
                inputs: never[];
                name: string;
                outputs: {
                    components: ({
                        internalType: string;
                        name: string;
                        type: string;
                        components?: undefined;
                    } | {
                        components: {
                            internalType: string;
                            name: string;
                            type: string;
                        }[];
                        internalType: string;
                        name: string;
                        type: string;
                    })[];
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[]];
            readonly features: {};
        };
        readonly ERC721ClaimCustom: {
            readonly name: "ERC721ClaimCustom";
            readonly namespace: "nft.drop.claim";
            readonly docLinks: {
                readonly sdk: "sdk.erc721claimable";
                readonly contracts: "erc721claimcustom";
            };
            readonly abis: readonly [({
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                outputs?: undefined;
                stateMutability?: undefined;
            } | {
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[], ({
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                outputs?: undefined;
                stateMutability?: undefined;
            } | {
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: never[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[]];
            readonly features: {};
        };
        readonly ERC721ClaimZora: {
            readonly name: "ERC721ClaimZora";
            readonly namespace: "nft.drop.claim";
            readonly docLinks: {
                readonly sdk: "sdk.erc721claimable";
                readonly contracts: "erc721claimzora";
            };
            readonly abis: readonly [({
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                outputs?: undefined;
                stateMutability?: undefined;
            } | {
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[], ({
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                anonymous?: undefined;
                outputs?: undefined;
                stateMutability?: undefined;
            } | {
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                outputs?: undefined;
                stateMutability?: undefined;
            } | {
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            } | {
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    components: {
                        internalType: string;
                        name: string;
                        type: string;
                    }[];
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[]];
            readonly features: {};
        };
        readonly ERC721ClaimConditionsV1: {
            readonly name: "ERC721ClaimConditionsV1";
            readonly namespace: "nft.drop.claim";
            readonly docLinks: {
                readonly sdk: "sdk.erc721claimable";
                readonly contracts: "erc721claimconditions";
            };
            readonly abis: readonly [({
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                outputs?: undefined;
                stateMutability?: undefined;
            } | {
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[], ({
                anonymous: boolean;
                inputs: ({
                    components: {
                        internalType: string;
                        name: string;
                        type: string;
                    }[];
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                } | {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                    components?: undefined;
                })[];
                name: string;
                type: string;
                outputs?: undefined;
                stateMutability?: undefined;
            } | {
                inputs: ({
                    internalType: string;
                    name: string;
                    type: string;
                    components?: undefined;
                } | {
                    components: {
                        internalType: string;
                        name: string;
                        type: string;
                    }[];
                    internalType: string;
                    name: string;
                    type: string;
                })[];
                name: string;
                outputs: never[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[]];
            readonly features: {};
        };
        readonly ERC721ClaimConditionsV2: {
            readonly name: "ERC721ClaimConditionsV2";
            readonly namespace: "nft.drop.claim";
            readonly docLinks: {
                readonly sdk: "sdk.erc721claimable";
                readonly contracts: "erc721claimconditions";
            };
            readonly abis: readonly [({
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                outputs?: undefined;
                stateMutability?: undefined;
            } | {
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[], ({
                anonymous: boolean;
                inputs: ({
                    components: {
                        internalType: string;
                        name: string;
                        type: string;
                    }[];
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                } | {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                    components?: undefined;
                })[];
                name: string;
                type: string;
                outputs?: undefined;
                stateMutability?: undefined;
            } | {
                inputs: ({
                    internalType: string;
                    name: string;
                    type: string;
                    components?: undefined;
                } | {
                    components: {
                        internalType: string;
                        name: string;
                        type: string;
                    }[];
                    internalType: string;
                    name: string;
                    type: string;
                })[];
                name: string;
                outputs: never[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[]];
            readonly features: {};
        };
        readonly ERC721ClaimPhasesV1: {
            readonly name: "ERC721ClaimPhasesV1";
            readonly namespace: "nft.drop.claim";
            readonly docLinks: {
                readonly sdk: "sdk.erc721claimable";
                readonly contracts: "erc721claimphases";
            };
            readonly abis: readonly [({
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                outputs?: undefined;
                stateMutability?: undefined;
            } | {
                anonymous: boolean;
                inputs: {
                    components: {
                        internalType: string;
                        name: string;
                        type: string;
                    }[];
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                outputs?: undefined;
                stateMutability?: undefined;
            } | {
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            } | {
                inputs: ({
                    components: {
                        internalType: string;
                        name: string;
                        type: string;
                    }[];
                    internalType: string;
                    name: string;
                    type: string;
                } | {
                    internalType: string;
                    name: string;
                    type: string;
                    components?: undefined;
                })[];
                name: string;
                outputs: never[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[]];
            readonly features: {};
        };
        readonly ERC721ClaimPhasesV2: {
            readonly name: "ERC721ClaimPhasesV2";
            readonly namespace: "nft.drop.claim";
            readonly docLinks: {
                readonly sdk: "sdk.erc721claimable";
                readonly contracts: "erc721claimphases";
            };
            readonly abis: readonly [({
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                outputs?: undefined;
                stateMutability?: undefined;
            } | {
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[], ({
                anonymous: boolean;
                inputs: ({
                    components: {
                        internalType: string;
                        name: string;
                        type: string;
                    }[];
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                } | {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                    components?: undefined;
                })[];
                name: string;
                type: string;
                outputs?: undefined;
                stateMutability?: undefined;
            } | {
                inputs: ({
                    internalType: string;
                    name: string;
                    type: string;
                    components?: undefined;
                } | {
                    components: {
                        internalType: string;
                        name: string;
                        type: string;
                    }[];
                    internalType: string;
                    name: string;
                    type: string;
                })[];
                name: string;
                outputs: never[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[]];
            readonly features: {};
        };
        readonly ERC721SharedMetadata: {
            readonly name: "ERC721SharedMetadata";
            readonly namespace: "nft.sharedmetadata";
            readonly docLinks: {
                readonly sdk: "sdk.sharedmetadata";
                readonly contracts: "SharedMetadata";
            };
            readonly abis: readonly [({
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                outputs?: undefined;
                stateMutability?: undefined;
            } | {
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[], ({
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                outputs?: undefined;
                stateMutability?: undefined;
            } | {
                inputs: {
                    components: {
                        internalType: string;
                        name: string;
                        type: string;
                    }[];
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: never[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            } | {
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[]];
            readonly features: {};
        };
        readonly ERC721LoyaltyCard: {
            readonly name: "ERC721LoyaltyCard";
            readonly namespace: "nft.loyaltyCard";
            readonly docLinks: {
                readonly sdk: "";
                readonly contracts: "";
            };
            readonly abis: readonly [({
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                outputs?: undefined;
                stateMutability?: undefined;
            } | {
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[]];
            readonly features: {};
        };
        readonly ERC721UpdatableMetadata: {
            readonly name: "ERC721UpdatableMetadata";
            readonly namespace: "nft.metadata";
            readonly docLinks: {
                readonly sdk: "";
                readonly contracts: "";
            };
            readonly abis: readonly [({
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                outputs?: undefined;
                stateMutability?: undefined;
            } | {
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[], ({
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                outputs?: undefined;
                stateMutability?: undefined;
            } | {
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[]];
            readonly features: {};
        };
    };
};
//# sourceMappingURL=erc721-features.d.ts.map