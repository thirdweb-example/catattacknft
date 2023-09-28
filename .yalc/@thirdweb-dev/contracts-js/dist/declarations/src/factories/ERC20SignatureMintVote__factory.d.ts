import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC20SignatureMintVote, ERC20SignatureMintVoteInterface } from "../ERC20SignatureMintVote.js";
type ERC20SignatureMintVoteConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ERC20SignatureMintVote__factory extends ContractFactory {
    constructor(...args: ERC20SignatureMintVoteConstructorParams);
    deploy(_defaultAdmin: string, _name: string, _symbol: string, _primarySaleRecipient: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ERC20SignatureMintVote>;
    getDeployTransaction(_defaultAdmin: string, _name: string, _symbol: string, _primarySaleRecipient: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ERC20SignatureMintVote;
    connect(signer: Signer): ERC20SignatureMintVote__factory;
    static readonly bytecode = "0x6101c06040527f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c960e0523480156200003657600080fd5b5060405162003bc038038062003bc08339810160408190526200005991620004f7565b6040518060400160405280601281526020017105369676e61747572654d696e7445524332360741b815250604051806040016040528060018152602001603160f81b815250858585818181818160059080519060200190620000bd92919062000367565b508051620000d390600690602084019062000367565b50504660a052503060c052620000e8620001ab565b60805250620000f990508362000231565b50508251602080850191909120835191840191909120610160829052610180819052466101205290915060008051602062003ba0833981519152620001838184846040805160208101859052908101839052606081018290524660808201523060a082015260009060c0016040516020818303038152906040528051906020012090509392505050565b6101005230610140526101a05250620001a192508391505062000283565b50505050620005c4565b600060008051602062003ba0833981519152620001c7620002cd565b80516020918201206040805192830193909352918101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b600180546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d7690600090a35050565b600b80546001600160a01b0319166001600160a01b0383169081179091556040517f299d17e95023f496e0ffc4909cff1a61f74bb5eb18de6f900f4155bfa1b3b33390600090a250565b606060058054620002de9062000587565b80601f01602080910402602001604051908101604052809291908181526020018280546200030c9062000587565b80156200035d5780601f1062000331576101008083540402835291602001916200035d565b820191906000526020600020905b8154815290600101906020018083116200033f57829003601f168201915b5050505050905090565b828054620003759062000587565b90600052602060002090601f016020900481019282620003995760008555620003e4565b82601f10620003b457805160ff1916838001178555620003e4565b82800160010185558215620003e4579182015b82811115620003e4578251825591602001919060010190620003c7565b50620003f2929150620003f6565b5090565b5b80821115620003f25760008155600101620003f7565b80516001600160a01b03811681146200042557600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200045257600080fd5b81516001600160401b03808211156200046f576200046f6200042a565b604051601f8301601f19908116603f011681019082821181831017156200049a576200049a6200042a565b81604052838152602092508683858801011115620004b757600080fd5b600091505b83821015620004db5785820183015181830184015290820190620004bc565b83821115620004ed5760008385830101525b9695505050505050565b600080600080608085870312156200050e57600080fd5b62000519856200040d565b60208601519094506001600160401b03808211156200053757600080fd5b620005458883890162000440565b945060408701519150808211156200055c57600080fd5b506200056b8782880162000440565b9250506200057c606086016200040d565b905092959194509250565b600181811c908216806200059c57607f821691505b60208210811415620005be57634e487b7160e01b600052602260045260246000fd5b50919050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516135606200064060003960006129560152600061299801526000612977015260006128db015260006129050152600061292f01526000610ffa0152600061075a01526000610784015260006107ae01526135606000f3fe6080604052600436106101995760003560e01c806379cc6790116100dd57806379cc6790146103ed5780637ecebe001461040d5780638da5cb5b1461042d5780638e539e8c146104425780638f0fefbb14610462578063938e3d7b1461047557806395d89b41146104955780639ab24eb0146104aa578063a457c2d7146104ca578063a9059cbb146104ea578063ac9650d81461050a578063c1b606e214610537578063c3cda52014610576578063d505accf14610596578063dd62ed3e146105b6578063e8a3d485146105d6578063f1127ed8146105eb57600080fd5b806306fdde031461019e578063079fe40e146101c9578063095ea7b3146101f657806313af40351461022657806318160ddd1461024857806323b872dd14610267578063313ce567146102875780633644e515146102a357806339509351146102b85780633a46b1a8146102d857806342966c68146102f8578063449a52f814610318578063587cde1e146103385780635c19a95c146103585780636f4f2837146103785780636fcfff451461039857806370a08231146103cd575b600080fd5b3480156101aa57600080fd5b506101b3610635565b6040516101c09190612d6a565b60405180910390f35b3480156101d557600080fd5b506101de6106c7565b6040516001600160a01b0390911681526020016101c0565b34801561020257600080fd5b50610216610211366004612d99565b6106d6565b60405190151581526020016101c0565b34801561023257600080fd5b50610246610241366004612dc3565b6106ee565b005b34801561025457600080fd5b506004545b6040519081526020016101c0565b34801561027357600080fd5b50610216610282366004612dde565b610727565b34801561029357600080fd5b50604051601281526020016101c0565b3480156102af57600080fd5b5061025961074d565b3480156102c457600080fd5b506102166102d3366004612d99565b6107dd565b3480156102e457600080fd5b506102596102f3366004612d99565b61081c565b34801561030457600080fd5b50610246610313366004612e1a565b61085f565b34801561032457600080fd5b50610246610333366004612d99565b610891565b34801561034457600080fd5b506101de610353366004612dc3565b61090a565b34801561036457600080fd5b50610246610373366004612dc3565b610928565b34801561038457600080fd5b50610246610393366004612dc3565b610932565b3480156103a457600080fd5b506103b86103b3366004612dc3565b61095f565b60405163ffffffff90911681526020016101c0565b3480156103d957600080fd5b506102596103e8366004612dc3565b610987565b3480156103f957600080fd5b50610246610408366004612d99565b6109a2565b34801561041957600080fd5b50610259610428366004612dc3565b610a57565b34801561043957600080fd5b506101de610a75565b34801561044e57600080fd5b5061025961045d366004612e1a565b610a84565b6101de610470366004612e33565b610ab0565b34801561048157600080fd5b50610246610490366004612ed5565b610ba4565b3480156104a157600080fd5b506101b3610bd1565b3480156104b657600080fd5b506102596104c5366004612dc3565b610be0565b3480156104d657600080fd5b506102166104e5366004612d99565b610c66565b3480156104f657600080fd5b50610216610505366004612d99565b610d03565b34801561051657600080fd5b5061052a610525366004612f85565b610d11565b6040516101c09190612ff9565b34801561054357600080fd5b50610557610552366004612e33565b610e05565b6040805192151583526001600160a01b039091166020830152016101c0565b34801561058257600080fd5b5061024661059136600461306c565b610e48565b3480156105a257600080fd5b506102466105b13660046130c4565b610fa6565b3480156105c257600080fd5b506102596105d136600461312e565b61110c565b3480156105e257600080fd5b506101b3611137565b3480156105f757600080fd5b5061060b610606366004613161565b6111c5565b60408051825163ffffffff1681526020928301516001600160e01b031692810192909252016101c0565b606060058054610644906131a1565b80601f0160208091040260200160405190810160405280929190818152602001828054610670906131a1565b80156106bd5780601f10610692576101008083540402835291602001916106bd565b820191906000526020600020905b8154815290600101906020018083116106a057829003601f168201915b5050505050905090565b600b546001600160a01b031690565b6000336106e4818585611248565b5060019392505050565b6106f661136c565b61071b5760405162461bcd60e51b8152600401610712906131d6565b60405180910390fd5b6107248161138f565b50565b6000336107358582856113e1565b61074085858561145b565b60019150505b9392505050565b6000306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161480156107a657507f000000000000000000000000000000000000000000000000000000000000000046145b156107d057507f000000000000000000000000000000000000000000000000000000000000000090565b6107d861161d565b905090565b3360008181526003602090815260408083206001600160a01b03871684529091528120549091906106e49082908690610817908790613214565b611248565b600043821061083d5760405162461bcd60e51b81526004016107129061322c565b6001600160a01b0383166000908152600960205260409020610746908361169f565b8061086933610987565b10156108875760405162461bcd60e51b815260040161071290613263565b610724338261175b565b61089961136c565b6108df5760405162461bcd60e51b81526020600482015260176024820152762737ba1030baba3437b934bd32b2103a379036b4b73a1760491b6044820152606401610712565b806108fc5760405162461bcd60e51b81526004016107129061328f565b6109068282611773565b5050565b6001600160a01b039081166000908152600860205260409020541690565b61072433826117fd565b61093a61136c565b6109565760405162461bcd60e51b8152600401610712906131d6565b6107248161187d565b6001600160a01b038116600090815260096020526040812054610981906118c7565b92915050565b6001600160a01b031660009081526002602052604090205490565b6109aa61136c565b6109f05760405162461bcd60e51b81526020600482015260176024820152762737ba1030baba3437b934bd32b2103a3790313ab9371760491b6044820152606401610712565b806109fa83610987565b1015610a185760405162461bcd60e51b815260040161071290613263565b600081610a25843361110c565b610a2f91906132bd565b9050610a3d83336000611248565b610a48833383611248565b610a52838361175b565b505050565b6001600160a01b038116600090815260076020526040812054610981565b6001546001600160a01b031690565b6000438210610aa55760405162461bcd60e51b81526004016107129061322c565b610981600a8361169f565b600080846040013511610ad55760405162461bcd60e51b81526004016107129061328f565b610ae0848484611930565b9050600080610af26020870187612dc3565b6001600160a01b031614610b1257610b0d6020860186612dc3565b610b14565b335b9050610b43610b296040870160208801612dc3565b610b3960a0880160808901612dc3565b8760600135611abe565b610b51818660400135611773565b806001600160a01b0316826001600160a01b03167fc4d88b1adde72eb5acf63f3e219ef5b223262233acf507c3b171277c91973c6787604051610b9491906132eb565b60405180910390a3509392505050565b610bac61136c565b610bc85760405162461bcd60e51b8152600401610712906131d6565b61072481611bdc565b606060068054610644906131a1565b6001600160a01b0381166000908152600960205260408120548015610c53576001600160a01b0383166000908152600960205260409020610c226001836132bd565b81548110610c3257610c32613381565b600091825260209091200154600160201b90046001600160e01b0316610c56565b60005b6001600160e01b03169392505050565b3360008181526003602090815260408083206001600160a01b038716845290915281205490919083811015610ceb5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610712565b610cf88286868403611248565b506001949350505050565b6000336106e481858561145b565b6060816001600160401b03811115610d2b57610d2b612ebf565b604051908082528060200260200182016040528015610d5e57816020015b6060815260200190600190039081610d495790505b50905060005b82811015610dfe57610dce30858584818110610d8257610d82613381565b9050602002810190610d949190613397565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611cbd92505050565b828281518110610de057610de0613381565b60200260200101819052508080610df6906133dd565b915050610d64565b5092915050565b600080610e13858585611ce2565b60e08601356000908152600c602052604090205490915060ff16158015610e3e5750610e3e81611d46565b9150935093915050565b83421115610e985760405162461bcd60e51b815260206004820152601d60248201527f4552433230566f7465733a207369676e617475726520657870697265640000006044820152606401610712565b604080517fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf60208201526001600160a01b03881691810191909152606081018690526080810185905260009060a0016040516020818303038152906040528051906020012090506000610f2c610f0c61074d565b8360405161190160f01b8152600281019290925260228201526042902090565b90506000610f3c82878787611d6b565b9050610f4781611d93565b8814610f915760405162461bcd60e51b81526020600482015260196024820152784552433230566f7465733a20696e76616c6964206e6f6e636560381b6044820152606401610712565b610f9b818a6117fd565b505050505050505050565b83421115610ff65760405162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e650000006044820152606401610712565b60007f00000000000000000000000000000000000000000000000000000000000000008888886110258c611d93565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e0016040516020818303038152906040528051906020012090506000611082610f0c61074d565b9050600061109282878787611d6b565b9050896001600160a01b0316816001600160a01b0316146110f55760405162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e617475726500006044820152606401610712565b6111008a8a8a611248565b50505050505050505050565b6001600160a01b03918216600090815260036020908152604080832093909416825291909152205490565b60008054611144906131a1565b80601f0160208091040260200160405190810160405280929190818152602001828054611170906131a1565b80156111bd5780601f10611192576101008083540402835291602001916111bd565b820191906000526020600020905b8154815290600101906020018083116111a057829003601f168201915b505050505081565b60408051808201909152600080825260208201526001600160a01b0383166000908152600960205260409020805463ffffffff841690811061120957611209613381565b60009182526020918290206040805180820190915291015463ffffffff81168252600160201b90046001600160e01b0316918101919091529392505050565b6001600160a01b0383166112aa5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610712565b6001600160a01b03821661130b5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610712565b6001600160a01b0383811660008181526003602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6000611376610a75565b6001600160a01b0316336001600160a01b031614905090565b600180546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d7690600090a35050565b60006113ed848461110c565b9050600019811461145557818110156114485760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610712565b6114558484848403611248565b50505050565b6001600160a01b0383166114bf5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610712565b6001600160a01b0382166115215760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610712565b6001600160a01b038316600090815260026020526040902054818110156115995760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610712565b6001600160a01b038085166000908152600260205260408082208585039055918516815290812080548492906115d0908490613214565b92505081905550826001600160a01b0316846001600160a01b031660008051602061350b8339815191528460405161160a91815260200190565b60405180910390a3611455848484611dbb565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f611648610635565b805160209182012060405161168493927fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc69146913091016133f8565b60405160208183030381529060405280519060200120905090565b8154600090815b818110156117035760006116ba8284611dd6565b9050848682815481106116cf576116cf613381565b60009182526020909120015463ffffffff1611156116ef578092506116fd565b6116fa816001613214565b91505b506116a6565b811561174657846117156001846132bd565b8154811061172557611725613381565b600091825260209091200154600160201b90046001600160e01b0316611749565b60005b6001600160e01b031695945050505050565b6117658282611df1565b611455600a611f3483611f40565b61177d82826120b7565b6004546001600160e01b0310156117ef5760405162461bcd60e51b815260206004820152603060248201527f4552433230566f7465733a20746f74616c20737570706c79207269736b73206f60448201526f766572666c6f77696e6720766f74657360801b6064820152608401610712565b611455600a61218c83611f40565b60006118088361090a565b9050600061181584610987565b6001600160a01b0385811660008181526008602052604080822080546001600160a01b031916898616908117909155905194955093928616927f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f9190a4611455828483612198565b600b80546001600160a01b0319166001600160a01b0383169081179091556040517f299d17e95023f496e0ffc4909cff1a61f74bb5eb18de6f900f4155bfa1b3b33390600090a250565b600063ffffffff82111561192c5760405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203360448201526532206269747360d01b6064820152608401610712565b5090565b60008061193e858585610e05565b92509050806119815760405162461bcd60e51b815260206004820152600f60248201526e125b9d985b1a59081c995c5d595cdd608a1b6044820152606401610712565b4261199260c0870160a08801613424565b6001600160801b0316111580156119c157506119b460e0860160c08701613424565b6001600160801b03164211155b6119ff5760405162461bcd60e51b815260206004820152600f60248201526e14995c5d595cdd08195e1c1a5c9959608a1b6044820152606401610712565b6000611a0e6020870187612dc3565b6001600160a01b03161415611a5b5760405162461bcd60e51b81526020600482015260136024820152721c9958da5c1a595b9d081d5b9919599a5b9959606a1b6044820152606401610712565b6000856040013511611a975760405162461bcd60e51b8152602060048201526005602482015264302071747960d81b6044820152606401610712565b5060e0909301356000908152600c60205260409020805460ff191660011790555090919050565b80611afa573415610a525760405162461bcd60e51b81526020600482015260066024820152652156616c756560d01b6044820152606401610712565b6001600160a01b03821673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1415611b6c57803414611b675760405162461bcd60e51b815260206004820152601660248201527526bab9ba1039b2b732103a37ba30b610383934b1b29760511b6044820152606401610712565b611baf565b3415611baf5760405162461bcd60e51b81526020600482015260126024820152716d73672076616c7565206e6f74207a65726f60701b6044820152606401610712565b60006001600160a01b03841615611bc65783611bce565b611bce6106c7565b9050611455833383856122d5565b6000808054611bea906131a1565b80601f0160208091040260200160405190810160405280929190818152602001828054611c16906131a1565b8015611c635780601f10611c3857610100808354040283529160200191611c63565b820191906000526020600020905b815481529060010190602001808311611c4657829003601f168201915b50508551939450611c7f93600093506020870192509050612c82565b507fc9c7c3fe08b88b4df9d4d47ef47d2c43d55c025a0ba88ca442580ed9e7348a168183604051611cb192919061343f565b60405180910390a15050565b606061074683836040518060600160405280602781526020016134e46027913961231f565b6000611d3e83838080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611d389250611d2c91508890506123fa565b805190602001206124ee565b906124fb565b949350505050565b6000611d50610a75565b6001600160a01b0316826001600160a01b0316149050919050565b6000806000611d7c8787878761251f565b91509150611d89816125d9565b5095945050505050565b6001600160a01b03811660009081526007602052604090208054600181018255905b50919050565b610a52611dc78461090a565b611dd08461090a565b83612198565b6000611de5600284841861346d565b61074690848416613214565b6001600160a01b038216611e515760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610712565b6001600160a01b03821660009081526002602052604090205481811015611ec55760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610712565b6001600160a01b0383166000908152600260205260408120838303905560048054849290611ef49084906132bd565b90915550506040518281526000906001600160a01b0385169060008051602061350b8339815191529060200160405180910390a3610a5283600084611dbb565b600061074682846132bd565b825460009081908015611f8a5785611f596001836132bd565b81548110611f6957611f69613381565b600091825260209091200154600160201b90046001600160e01b0316611f8d565b60005b6001600160e01b03169250611fa683858763ffffffff16565b9150600081118015611fe457504386611fc06001846132bd565b81548110611fd057611fd0613381565b60009182526020909120015463ffffffff16145b1561204457611ff282612722565b86611ffe6001846132bd565b8154811061200e5761200e613381565b9060005260206000200160000160046101000a8154816001600160e01b0302191690836001600160e01b031602179055506120ae565b856040518060400160405280612059436118c7565b63ffffffff16815260200161206d85612722565b6001600160e01b039081169091528254600181018455600093845260209384902083519490930151909116600160201b0263ffffffff909316929092179101555b50935093915050565b6001600160a01b03821661210d5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610712565b806004600082825461211f9190613214565b90915550506001600160a01b0382166000908152600260205260408120805483929061214c908490613214565b90915550506040518181526001600160a01b0383169060009060008051602061350b8339815191529060200160405180910390a361090660008383611dbb565b60006107468284613214565b816001600160a01b0316836001600160a01b0316141580156121ba5750600081115b15610a52576001600160a01b03831615612248576001600160a01b038316600090815260096020526040812081906121f590611f3485611f40565b91509150846001600160a01b03167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a724838360405161223d929190918252602082015260400190565b60405180910390a250505b6001600160a01b03821615610a52576001600160a01b0382166000908152600960205260408120819061227e9061218c85611f40565b91509150836001600160a01b03167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a72483836040516122c6929190918252602082015260400190565b60405180910390a25050505050565b806122df57611455565b6001600160a01b03841673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee14156123135761230e828261278b565b611455565b6114558484848461282d565b606061232a84612886565b6123855760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608401610712565b600080856001600160a01b0316856040516123a0919061348f565b600060405180830381855af49150503d80600081146123db576040519150601f19603f3d011682016040523d82523d6000602084013e6123e0565b606091505b50915091506123f0828286612895565b9695505050505050565b60607fbac245dbd9b8b2bb334c0675db20a7a7a8506de563990c4ce3207f4c3c5b75e161242a6020840184612dc3565b61243a6040850160208601612dc3565b6040850135606086013561245460a0880160808901612dc3565b61246460c0890160a08a01613424565b61247460e08a0160c08b01613424565b6040805160208101999099526001600160a01b03978816908901529486166060880152608087019390935260a086019190915290921660c08401526001600160801b0391821660e0808501919091529116610100830152830135610120820152610140016040516020818303038152906040529050919050565b6000610981610f0c6128ce565b600080600061250a85856129bc565b91509150612517816125d9565b509392505050565b6000806fa2a8918ca85bafe22016d0b997e4df60600160ff1b0383111561254c57506000905060036125d0565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa1580156125a0573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166125c9576000600192509250506125d0565b9150600090505b94509492505050565b60008160048111156125ed576125ed6134ab565b14156125f65750565b600181600481111561260a5761260a6134ab565b14156126535760405162461bcd60e51b815260206004820152601860248201527745434453413a20696e76616c6964207369676e617475726560401b6044820152606401610712565b6002816004811115612667576126676134ab565b14156126b55760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610712565b60038160048111156126c9576126c96134ab565b14156107245760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608401610712565b60006001600160e01b0382111561192c5760405162461bcd60e51b815260206004820152602760248201527f53616665436173743a2076616c756520646f65736e27742066697420696e20326044820152663234206269747360c81b6064820152608401610712565b6000826001600160a01b03168260405160006040518083038185875af1925050503d80600081146127d8576040519150601f19603f3d011682016040523d82523d6000602084013e6127dd565b606091505b5050905080610a525760405162461bcd60e51b815260206004820152601c60248201527b1b985d1a5d99481d1bdad95b881d1c985b9cd9995c8819985a5b195960221b6044820152606401610712565b816001600160a01b0316836001600160a01b0316141561284c57611455565b6001600160a01b0383163014156128715761230e6001600160a01b0385168383612a02565b6114556001600160a01b038516848484612a65565b6001600160a01b03163b151590565b606083156128a4575081610746565b8251156128b45782518084602001fd5b8160405162461bcd60e51b81526004016107129190612d6a565b6000306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614801561292757507f000000000000000000000000000000000000000000000000000000000000000046145b1561295157507f000000000000000000000000000000000000000000000000000000000000000090565b6107d87f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000612a9d565b6000808251604114156129f35760208301516040840151606085015160001a6129e78782858561251f565b945094505050506129fb565b506000905060025b9250929050565b6040516001600160a01b038316602482015260448101829052610a5290849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152612ad7565b6040516001600160a01b03808516602483015283166044820152606481018290526114559085906323b872dd60e01b90608401612a2e565b60008383834630604051602001612ab89594939291906133f8565b6040516020818303038152906040528051906020012090509392505050565b6000612b2c826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316612ba99092919063ffffffff16565b805190915015610a525780806020019051810190612b4a91906134c1565b610a525760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610712565b6060611d3e848460008585612bbd85612886565b612c095760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610712565b600080866001600160a01b03168587604051612c25919061348f565b60006040518083038185875af1925050503d8060008114612c62576040519150601f19603f3d011682016040523d82523d6000602084013e612c67565b606091505b5091509150612c77828286612895565b979650505050505050565b828054612c8e906131a1565b90600052602060002090601f016020900481019282612cb05760008555612cf6565b82601f10612cc957805160ff1916838001178555612cf6565b82800160010185558215612cf6579182015b82811115612cf6578251825591602001919060010190612cdb565b5061192c9291505b8082111561192c5760008155600101612cfe565b60005b83811015612d2d578181015183820152602001612d15565b838111156114555750506000910152565b60008151808452612d56816020860160208601612d12565b601f01601f19169290920160200192915050565b6020815260006107466020830184612d3e565b80356001600160a01b0381168114612d9457600080fd5b919050565b60008060408385031215612dac57600080fd5b612db583612d7d565b946020939093013593505050565b600060208284031215612dd557600080fd5b61074682612d7d565b600080600060608486031215612df357600080fd5b612dfc84612d7d565b9250612e0a60208501612d7d565b9150604084013590509250925092565b600060208284031215612e2c57600080fd5b5035919050565b6000806000838503610120811215612e4a57600080fd5b61010080821215612e5a57600080fd5b85945084013590506001600160401b0380821115612e7757600080fd5b818601915086601f830112612e8b57600080fd5b813581811115612e9a57600080fd5b876020828501011115612eac57600080fd5b6020830194508093505050509250925092565b634e487b7160e01b600052604160045260246000fd5b600060208284031215612ee757600080fd5b81356001600160401b0380821115612efe57600080fd5b818401915084601f830112612f1257600080fd5b813581811115612f2457612f24612ebf565b604051601f8201601f19908116603f01168101908382118183101715612f4c57612f4c612ebf565b81604052828152876020848701011115612f6557600080fd5b826020860160208301376000928101602001929092525095945050505050565b60008060208385031215612f9857600080fd5b82356001600160401b0380821115612faf57600080fd5b818501915085601f830112612fc357600080fd5b813581811115612fd257600080fd5b8660208260051b8501011115612fe757600080fd5b60209290920196919550909350505050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101561304e57603f1988860301845261303c858351612d3e565b94509285019290850190600101613020565b5092979650505050505050565b803560ff81168114612d9457600080fd5b60008060008060008060c0878903121561308557600080fd5b61308e87612d7d565b955060208701359450604087013593506130aa6060880161305b565b92506080870135915060a087013590509295509295509295565b600080600080600080600060e0888a0312156130df57600080fd5b6130e888612d7d565b96506130f660208901612d7d565b955060408801359450606088013593506131126080890161305b565b925060a0880135915060c0880135905092959891949750929550565b6000806040838503121561314157600080fd5b61314a83612d7d565b915061315860208401612d7d565b90509250929050565b6000806040838503121561317457600080fd5b61317d83612d7d565b9150602083013563ffffffff8116811461319657600080fd5b809150509250929050565b600181811c908216806131b557607f821691505b60208210811415611db557634e487b7160e01b600052602260045260246000fd5b6020808252600e908201526d139bdd08185d5d1a1bdc9a5e995960921b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b60008219821115613227576132276131fe565b500190565b6020808252601f908201527f4552433230566f7465733a20626c6f636b206e6f7420796574206d696e656400604082015260600190565b6020808252601290820152716e6f7420656e6f7567682062616c616e636560701b604082015260600190565b60208082526014908201527326b4b73a34b733903d32b937903a37b5b2b7399760611b604082015260600190565b6000828210156132cf576132cf6131fe565b500390565b80356001600160801b0381168114612d9457600080fd5b61010081016001600160a01b038061330285612d7d565b1683528061331260208601612d7d565b16602084015260408401356040840152606084013560608401528061333960808601612d7d565b1660808401525061334c60a084016132d4565b6001600160801b0381811660a08501528061336960c087016132d4565b1660c0850152505060e083013560e083015292915050565b634e487b7160e01b600052603260045260246000fd5b6000808335601e198436030181126133ae57600080fd5b8301803591506001600160401b038211156133c857600080fd5b6020019150368190038213156129fb57600080fd5b60006000198214156133f1576133f16131fe565b5060010190565b9485526020850193909352604084019190915260608301526001600160a01b0316608082015260a00190565b60006020828403121561343657600080fd5b610746826132d4565b6040815260006134526040830185612d3e565b82810360208401526134648185612d3e565b95945050505050565b60008261348a57634e487b7160e01b600052601260045260246000fd5b500490565b600082516134a1818460208701612d12565b9190910192915050565b634e487b7160e01b600052602160045260246000fd5b6000602082840312156134d357600080fd5b8151801515811461074657600080fdfe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220662ec53f5b7fefa6f668d8dfe749d11c1fdfdb68e4840403fce7d1784402dcd764736f6c634300080c00338b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
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
        stateMutability?: undefined;
        outputs?: undefined;
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
    })[];
    static createInterface(): ERC20SignatureMintVoteInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC20SignatureMintVote;
}
export {};
//# sourceMappingURL=ERC20SignatureMintVote__factory.d.ts.map