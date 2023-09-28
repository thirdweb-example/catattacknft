'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var ethers = require('ethers');

/* Autogenerated file. Do not edit manually. */
const _abi = [{
  inputs: [{
    internalType: "address",
    name: "_trustedForwarder",
    type: "address"
  }],
  stateMutability: "nonpayable",
  type: "constructor"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "deployer",
    type: "address"
  }, {
    indexed: true,
    internalType: "address",
    name: "deployment",
    type: "address"
  }, {
    indexed: true,
    internalType: "uint256",
    name: "chainId",
    type: "uint256"
  }, {
    indexed: false,
    internalType: "string",
    name: "metadataUri",
    type: "string"
  }],
  name: "Added",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "deployer",
    type: "address"
  }, {
    indexed: true,
    internalType: "address",
    name: "deployment",
    type: "address"
  }, {
    indexed: true,
    internalType: "uint256",
    name: "chainId",
    type: "uint256"
  }],
  name: "Deleted",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "bytes32",
    name: "role",
    type: "bytes32"
  }, {
    indexed: true,
    internalType: "bytes32",
    name: "previousAdminRole",
    type: "bytes32"
  }, {
    indexed: true,
    internalType: "bytes32",
    name: "newAdminRole",
    type: "bytes32"
  }],
  name: "RoleAdminChanged",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "bytes32",
    name: "role",
    type: "bytes32"
  }, {
    indexed: true,
    internalType: "address",
    name: "account",
    type: "address"
  }, {
    indexed: true,
    internalType: "address",
    name: "sender",
    type: "address"
  }],
  name: "RoleGranted",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "bytes32",
    name: "role",
    type: "bytes32"
  }, {
    indexed: true,
    internalType: "address",
    name: "account",
    type: "address"
  }, {
    indexed: true,
    internalType: "address",
    name: "sender",
    type: "address"
  }],
  name: "RoleRevoked",
  type: "event"
}, {
  inputs: [],
  name: "DEFAULT_ADMIN_ROLE",
  outputs: [{
    internalType: "bytes32",
    name: "",
    type: "bytes32"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "OPERATOR_ROLE",
  outputs: [{
    internalType: "bytes32",
    name: "",
    type: "bytes32"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "_deployer",
    type: "address"
  }, {
    internalType: "address",
    name: "_deployment",
    type: "address"
  }, {
    internalType: "uint256",
    name: "_chainId",
    type: "uint256"
  }, {
    internalType: "string",
    name: "metadataUri",
    type: "string"
  }],
  name: "add",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "_deployer",
    type: "address"
  }],
  name: "count",
  outputs: [{
    internalType: "uint256",
    name: "deploymentCount",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "_deployer",
    type: "address"
  }],
  name: "getAll",
  outputs: [{
    components: [{
      internalType: "address",
      name: "deploymentAddress",
      type: "address"
    }, {
      internalType: "uint256",
      name: "chainId",
      type: "uint256"
    }, {
      internalType: "string",
      name: "metadataURI",
      type: "string"
    }],
    internalType: "struct ITWMultichainRegistry.Deployment[]",
    name: "allDeployments",
    type: "tuple[]"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "uint256",
    name: "_chainId",
    type: "uint256"
  }, {
    internalType: "address",
    name: "_deployment",
    type: "address"
  }],
  name: "getMetadataUri",
  outputs: [{
    internalType: "string",
    name: "metadataUri",
    type: "string"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "bytes32",
    name: "role",
    type: "bytes32"
  }],
  name: "getRoleAdmin",
  outputs: [{
    internalType: "bytes32",
    name: "",
    type: "bytes32"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "bytes32",
    name: "role",
    type: "bytes32"
  }, {
    internalType: "uint256",
    name: "index",
    type: "uint256"
  }],
  name: "getRoleMember",
  outputs: [{
    internalType: "address",
    name: "",
    type: "address"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "bytes32",
    name: "role",
    type: "bytes32"
  }],
  name: "getRoleMemberCount",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "bytes32",
    name: "role",
    type: "bytes32"
  }, {
    internalType: "address",
    name: "account",
    type: "address"
  }],
  name: "grantRole",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "bytes32",
    name: "role",
    type: "bytes32"
  }, {
    internalType: "address",
    name: "account",
    type: "address"
  }],
  name: "hasRole",
  outputs: [{
    internalType: "bool",
    name: "",
    type: "bool"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "forwarder",
    type: "address"
  }],
  name: "isTrustedForwarder",
  outputs: [{
    internalType: "bool",
    name: "",
    type: "bool"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "bytes[]",
    name: "data",
    type: "bytes[]"
  }],
  name: "multicall",
  outputs: [{
    internalType: "bytes[]",
    name: "results",
    type: "bytes[]"
  }],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "_deployer",
    type: "address"
  }, {
    internalType: "address",
    name: "_deployment",
    type: "address"
  }, {
    internalType: "uint256",
    name: "_chainId",
    type: "uint256"
  }],
  name: "remove",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "bytes32",
    name: "role",
    type: "bytes32"
  }, {
    internalType: "address",
    name: "account",
    type: "address"
  }],
  name: "renounceRole",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "bytes32",
    name: "role",
    type: "bytes32"
  }, {
    internalType: "address",
    name: "account",
    type: "address"
  }],
  name: "revokeRole",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "bytes4",
    name: "interfaceId",
    type: "bytes4"
  }],
  name: "supportsInterface",
  outputs: [{
    internalType: "bool",
    name: "",
    type: "bool"
  }],
  stateMutability: "view",
  type: "function"
}];
const _bytecode = "0x60a06040523480156200001157600080fd5b5060405162001bfc38038062001bfc83398101604081905262000034916200021e565b6001600160a01b038116608052620000576000620000516200005e565b6200007a565b5062000250565b6000620000756200008a60201b62000b8f1760201c565b905090565b620000868282620000c3565b5050565b6080516000906001600160a01b0316331415620000ae575060131936013560601c90565b620000756200010660201b62000bb61760201c565b620000da82826200010a60201b62000bba1760201c565b60008281526001602090815260409091206200010191839062000c3f620001ac821b17901c565b505050565b3390565b6000828152602081815260408083206001600160a01b038516845290915290205460ff1662000086576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055620001686200005e565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000620001c3836001600160a01b038416620001cc565b90505b92915050565b60008181526001830160205260408120546200021557508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155620001c6565b506000620001c6565b6000602082840312156200023157600080fd5b81516001600160a01b03811681146200024957600080fd5b9392505050565b6080516119906200026c600039600061055201526119906000f3fe608060405234801561001057600080fd5b50600436106100db5760003560e01c806301ffc9a7146100e057806305d85eda14610108578063248a9ca31461012957806326c5b5161461013c5780632f2ff15d1461015157806336568abe14610164578063572b6c051461017757806359e5fd041461018a5780639010d07c1461019d57806391d14854146101c8578063a217fddf146101db578063ac9650d8146101e3578063ca15c87314610203578063d547741f14610216578063eb07734214610229578063f4c2012d14610249578063f5b541a614610269575b600080fd5b6100f36100ee366004611349565b61027e565b60405190151581526020015b60405180910390f35b61011b61011636600461138f565b6102a9565b6040519081526020016100ff565b61011b6101373660046113aa565b610326565b61014f61014a3660046113d9565b61033b565b005b61014f61015f3660046114b4565b6104a1565b61014f6101723660046114b4565b6104c2565b6100f361018536600461138f565b610550565b61014f6101983660046114e0565b610582565b6101b06101ab36600461151c565b610691565b6040516001600160a01b0390911681526020016100ff565b6100f36101d63660046114b4565b6106b0565b61011b600081565b6101f66101f136600461153e565b6106d9565b6040516100ff919061160e565b61011b6102113660046113aa565b6107cd565b61014f6102243660046114b4565b6107e4565b61023c61023736600461138f565b610800565b6040516100ff9190611670565b61025c6102573660046114b4565b610ad8565b6040516100ff91906116f8565b61011b60008051602061191483398151915281565b60006001600160e01b03198216635a05180f60e01b14806102a357506102a382610c54565b92915050565b6000806102b66004610c89565b905060005b8181101561031f5760006102d0600483610c93565b6001600160a01b038616600090815260026020908152604080832084845290915290209091506102ff90610c89565b6103099085611721565b93506103189050600182611721565b90506102bb565b5050919050565b60009081526020819052604090206001015490565b6103556000805160206119148339815191526101d6610c9f565b806103785750610363610c9f565b6001600160a01b0316846001600160a01b0316145b61039d5760405162461bcd60e51b815260040161039490611739565b60405180910390fd5b6001600160a01b038416600090815260026020908152604080832085845290915281206103ca9085610c3f565b9050806104095760405162461bcd60e51b815260206004820152600d60248201526c19985a5b1959081d1bc8185919609a1b6044820152606401610394565b610414600484610ca9565b5081511561044e5760008381526003602090815260408083206001600160a01b03881684528252909120835161044c928501906112b0565b505b82846001600160a01b0316866001600160a01b03167f58089736ce1376be8f64c745948361e7908eb6fe512f9e69c0b041f7a70b535c8560405161049291906116f8565b60405180910390a45050505050565b6104aa82610326565b6104b381610cb5565b6104bd8383610cc9565b505050565b6104ca610c9f565b6001600160a01b0316816001600160a01b0316146105425760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b6064820152608401610394565b61054c8282610ceb565b5050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0390811691161490565b61059c6000805160206119148339815191526101d6610c9f565b806105bf57506105aa610c9f565b6001600160a01b0316836001600160a01b0316145b6105db5760405162461bcd60e51b815260040161039490611739565b6001600160a01b038316600090815260026020908152604080832084845290915281206106089084610d09565b90508061064a5760405162461bcd60e51b815260206004820152601060248201526f6661696c656420746f2072656d6f766560801b6044820152606401610394565b81836001600160a01b0316856001600160a01b03167fdc1791450b87438fe3505803e0a117aca5918e9d01a3afb374160b3a36cbf53260405160405180910390a450505050565b60008281526001602052604081206106a99083610c93565b9392505050565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b6060816001600160401b038111156106f3576106f36113c3565b60405190808252806020026020018201604052801561072657816020015b60608152602001906001900390816107115790505b50905060005b828110156107c6576107963085858481811061074a5761074a61176c565b905060200281019061075c9190611782565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610d1e92505050565b8282815181106107a8576107a861176c565b602002602001018190525080806107be906117cf565b91505061072c565b5092915050565b60008181526001602052604081206102a390610c89565b6107ed82610326565b6107f681610cb5565b6104bd8383610ceb565b606060008061080f6004610c89565b905060005b81811015610878576000610829600483610c93565b6001600160a01b0387166000908152600260209081526040808320848452909152902090915061085890610c89565b6108629085611721565b93506108719050600182611721565b9050610814565b50816001600160401b03811115610891576108916113c3565b6040519080825280602002602001820160405280156108de57816020015b604080516060808201835260008083526020830152918101919091528152602001906001900390816108af5790505b5092506000805b82811015610acf5760006108fa600483610c93565b6001600160a01b038816600090815260026020908152604080832084845290915281209192509061092a90610c89565b6001600160a01b038916600090815260026020908152604080832086845290915281209192509061095a90610d43565b905060005b82811015610ab75760405180606001604052808383815181106109845761098461176c565b60200260200101516001600160a01b031681526020018581526020016003600087815260200190815260200160002060008585815181106109c7576109c761176c565b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002080546109fa906117ea565b80601f0160208091040260200160405190810160405280929190818152602001828054610a26906117ea565b8015610a735780601f10610a4857610100808354040283529160200191610a73565b820191906000526020600020905b815481529060010190602001808311610a5657829003601f168201915b5050505050815250898781518110610a8d57610a8d61176c565b6020908102919091010152610aa3600187611721565b9550610ab0600182611721565b905061095f565b50505050600181610ac89190611721565b90506108e5565b50505050919050565b60008281526003602090815260408083206001600160a01b03851684529091529020805460609190610b09906117ea565b80601f0160208091040260200160405190810160405280929190818152602001828054610b35906117ea565b8015610b825780601f10610b5757610100808354040283529160200191610b82565b820191906000526020600020905b815481529060010190602001808311610b6557829003601f168201915b5050505050905092915050565b6000610b9a33610550565b15610bac575060131936013560601c90565b503390565b905090565b3390565b610bc482826106b0565b61054c576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055610bfb610c9f565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60006106a9836001600160a01b038416610d50565b60006001600160e01b03198216637965db0b60e01b14806102a357506301ffc9a760e01b6001600160e01b03198316146102a3565b60006102a3825490565b60006106a98383610d9f565b6000610bb1610b8f565b60006106a98383610d50565b610cc681610cc1610c9f565b610dc9565b50565b610cd38282610bba565b60008281526001602052604090206104bd9082610c3f565b610cf58282610e2d565b60008281526001602052604090206104bd90825b60006106a9836001600160a01b038416610eb0565b60606106a9838360405180606001604052806027815260200161193460279139610fa3565b606060006106a983611080565b6000818152600183016020526040812054610d97575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556102a3565b5060006102a3565b6000826000018281548110610db657610db661176c565b9060005260206000200154905092915050565b610dd382826106b0565b61054c57610deb816001600160a01b031660146110dc565b610df68360206110dc565b604051602001610e07929190611825565b60408051601f198184030181529082905262461bcd60e51b8252610394916004016116f8565b610e3782826106b0565b1561054c576000828152602081815260408083206001600160a01b03851684529091529020805460ff19169055610e6c610c9f565b6001600160a01b0316816001600160a01b0316837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45050565b60008181526001830160205260408120548015610f99576000610ed4600183611894565b8554909150600090610ee890600190611894565b9050818114610f4d576000866000018281548110610f0857610f0861176c565b9060005260206000200154905080876000018481548110610f2b57610f2b61176c565b6000918252602080832090910192909255918252600188019052604090208390555b8554869080610f5e57610f5e6118ab565b6001900381819060005260206000200160009055905585600101600086815260200190815260200160002060009055600193505050506102a3565b60009150506102a3565b60606001600160a01b0384163b61100b5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608401610394565b600080856001600160a01b03168560405161102691906118c1565b600060405180830381855af49150503d8060008114611061576040519150601f19603f3d011682016040523d82523d6000602084013e611066565b606091505b5091509150611076828286611277565b9695505050505050565b6060816000018054806020026020016040519081016040528092919081815260200182805480156110d057602002820191906000526020600020905b8154815260200190600101908083116110bc575b50505050509050919050565b606060006110eb8360026118dd565b6110f6906002611721565b6001600160401b0381111561110d5761110d6113c3565b6040519080825280601f01601f191660200182016040528015611137576020820181803683370190505b509050600360fc1b816000815181106111525761115261176c565b60200101906001600160f81b031916908160001a905350600f60fb1b816001815181106111815761118161176c565b60200101906001600160f81b031916908160001a90535060006111a58460026118dd565b6111b0906001611721565b90505b6001811115611228576f181899199a1a9b1b9c1cb0b131b232b360811b85600f16601081106111e4576111e461176c565b1a60f81b8282815181106111fa576111fa61176c565b60200101906001600160f81b031916908160001a90535060049490941c93611221816118fc565b90506111b3565b5083156106a95760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610394565b606083156112865750816106a9565b8251156112965782518084602001fd5b8160405162461bcd60e51b815260040161039491906116f8565b8280546112bc906117ea565b90600052602060002090601f0160209004810192826112de5760008555611324565b82601f106112f757805160ff1916838001178555611324565b82800160010185558215611324579182015b82811115611324578251825591602001919060010190611309565b50611330929150611334565b5090565b5b808211156113305760008155600101611335565b60006020828403121561135b57600080fd5b81356001600160e01b0319811681146106a957600080fd5b80356001600160a01b038116811461138a57600080fd5b919050565b6000602082840312156113a157600080fd5b6106a982611373565b6000602082840312156113bc57600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b600080600080608085870312156113ef57600080fd5b6113f885611373565b935061140660208601611373565b92506040850135915060608501356001600160401b038082111561142957600080fd5b818701915087601f83011261143d57600080fd5b81358181111561144f5761144f6113c3565b604051601f8201601f19908116603f01168101908382118183101715611477576114776113c3565b816040528281528a602084870101111561149057600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b600080604083850312156114c757600080fd5b823591506114d760208401611373565b90509250929050565b6000806000606084860312156114f557600080fd5b6114fe84611373565b925061150c60208501611373565b9150604084013590509250925092565b6000806040838503121561152f57600080fd5b50508035926020909101359150565b6000806020838503121561155157600080fd5b82356001600160401b038082111561156857600080fd5b818501915085601f83011261157c57600080fd5b81358181111561158b57600080fd5b8660208260051b85010111156115a057600080fd5b60209290920196919550909350505050565b60005b838110156115cd5781810151838201526020016115b5565b838111156115dc576000848401525b50505050565b600081518084526115fa8160208601602086016115b2565b601f01601f19169290920160200192915050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101561166357603f198886030184526116518583516115e2565b94509285019290850190600101611635565b5092979650505050505050565b60006020808301818452808551808352604092508286019150828160051b87010184880160005b838110156116ea57888303603f19018552815180516001600160a01b03168452878101518885015286015160608785018190526116d6818601836115e2565b968901969450505090860190600101611697565b509098975050505050505050565b6020815260006106a960208301846115e2565b634e487b7160e01b600052601160045260246000fd5b600082198211156117345761173461170b565b500190565b6020808252601990820152783737ba1037b832b930ba37b91037b9103232b83637bcb2b91760391b604082015260600190565b634e487b7160e01b600052603260045260246000fd5b6000808335601e1984360301811261179957600080fd5b8301803591506001600160401b038211156117b357600080fd5b6020019150368190038213156117c857600080fd5b9250929050565b60006000198214156117e3576117e361170b565b5060010190565b600181811c908216806117fe57607f821691505b6020821081141561181f57634e487b7160e01b600052602260045260246000fd5b50919050565b76020b1b1b2b9b9a1b7b73a3937b61d1030b1b1b7bab73a1604d1b8152600083516118578160178501602088016115b2565b7001034b99036b4b9b9b4b733903937b6329607d1b60179184019182015283516118888160288401602088016115b2565b01602801949350505050565b6000828210156118a6576118a661170b565b500390565b634e487b7160e01b600052603160045260246000fd5b600082516118d38184602087016115b2565b9190910192915050565b60008160001904831182151516156118f7576118f761170b565b500290565b60008161190b5761190b61170b565b50600019019056fe97667070c54ef182b0f5858b034beac1b6f3089aa2d3188bb1e8929f4fa9b929416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212200cbe894f1a8d0e6ad5fd993456e6c9cb577b457b73cd7cf422a1b9be12623f6564736f6c634300080c0033";
const isSuperArgs = xs => xs.length > 1;
class TWMultichainRegistry__factory extends ethers.ContractFactory {
  constructor() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }
  deploy(_trustedForwarder, overrides) {
    return super.deploy(_trustedForwarder, overrides || {});
  }
  getDeployTransaction(_trustedForwarder, overrides) {
    return super.getDeployTransaction(_trustedForwarder, overrides || {});
  }
  attach(address) {
    return super.attach(address);
  }
  connect(signer) {
    return super.connect(signer);
  }
  static bytecode = _bytecode;
  static abi = _abi;
  static createInterface() {
    return new ethers.utils.Interface(_abi);
  }
  static connect(address, signerOrProvider) {
    return new ethers.Contract(address, _abi, signerOrProvider);
  }
}

exports.TWMultichainRegistry__factory = TWMultichainRegistry__factory;
