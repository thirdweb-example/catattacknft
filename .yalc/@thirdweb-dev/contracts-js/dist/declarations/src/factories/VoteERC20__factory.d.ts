import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { VoteERC20, VoteERC20Interface } from "../VoteERC20.js";
type VoteERC20ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class VoteERC20__factory extends ContractFactory {
    constructor(...args: VoteERC20ConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<VoteERC20>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): VoteERC20;
    connect(signer: Signer): VoteERC20__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b50600054610100900460ff1615808015620000335750600054600160ff909116105b8062000063575062000050306200013d60201b62001b5d1760201c565b15801562000063575060005460ff166001145b620000cb5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840160405180910390fd5b6000805460ff191660011790558015620000ef576000805461ff0019166101001790555b801562000136576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b506200014c565b6001600160a01b03163b151590565b6145f1806200015c6000396000f3fe6080604052600436106102215760003560e01c80637cf43f8d1161011f5780637cf43f8d146105b65780637d5e81e2146105d6578063938e3d7b146105f657806397c3d334146106165780639a802a6d1461062a578063a0a8e4601461064a578063a7713a7014610666578063b58131b01461067b578063bc197c8114610690578063c01f9e37146106bc578063c28bc2fa146106dc578063c59057e4146106fc578063cb2ef6f71461071c578063cceb68f51461073b578063dd4e2ba51461075d578063deaaa7cc146107a3578063e8a3d485146107d7578063ea0217cf146107ec578063eb9019d41461080c578063ece40cc11461082c578063f23a6e611461084c578063f8ce560a14610878578063fc0c546a1461089857600080fd5b8063013cf08b1461022f57806301ffc9a71461026957806302a251a31461029957806303420181146102b957806306f3f9e6146102d957806306fdde03146102f9578063150b7a021461031b5780632656227d1461035f5780632d63f693146103725780632fe3e261146103925780633932abb1146103c65780633bccf4fd146103dc5780633e4f49e6146103fc5780634385963214610429578063544ffc9c1461047457806354fd4d50146104ca57806356781388146104df578063572b6c05146104ff5780635977e0f21461051f5780635f398a141461053657806360c4247f1461055657806370b0f660146105765780637b3c71d31461059657600080fd5b3661022a57005b005b600080fd5b34801561023b57600080fd5b5061024f61024a3660046135e0565b6108d1565b604051610260959493929190613655565b60405180910390f35b34801561027557600080fd5b50610289610284366004613688565b610995565b6040519015158152602001610260565b3480156102a557600080fd5b50610130545b604051908152602001610260565b3480156102c557600080fd5b506102ab6102d43660046137be565b6109c0565b3480156102e557600080fd5b506102286102f43660046135e0565b610ab8565b34801561030557600080fd5b5061030e610b18565b6040516102609190613864565b34801561032757600080fd5b5061034661033636600461388e565b630a85bd0160e11b949350505050565b6040516001600160e01b03199091168152602001610260565b6102ab61036d366004613a64565b610baa565b34801561037e57600080fd5b506102ab61038d3660046135e0565b610cd6565b34801561039e57600080fd5b506102ab7fb3b3f3b703cd84ce352197dcff232b1b5d3cfb2025ce47cf04742d0651f1af8881565b3480156103d257600080fd5b5061012f546102ab565b3480156103e857600080fd5b506102ab6103f7366004613af3565b610d0d565b34801561040857600080fd5b5061041c6104173660046135e0565b610d83565b6040516102609190613b57565b34801561043557600080fd5b50610289610444366004613b7f565b6000828152610161602090815260408083206001600160a01b038516845260030190915290205460ff1692915050565b34801561048057600080fd5b506104af61048f3660046135e0565b600090815261016160205260409020805460018201546002909201549092565b60408051938452602084019290925290820152606001610260565b3480156104d657600080fd5b5061030e610e90565b3480156104eb57600080fd5b506102ab6104fa366004613bab565b610eab565b34801561050b57600080fd5b5061028961051a366004613bce565b610edb565b34801561052b57600080fd5b506102ab6101f95481565b34801561054257600080fd5b506102ab610551366004613be9565b610ef9565b34801561056257600080fd5b506102ab6105713660046135e0565b610f4a565b34801561058257600080fd5b506102286105913660046135e0565b610fe3565b3480156105a257600080fd5b506102ab6105b1366004613c6c565b611037565b3480156105c257600080fd5b506102286105d1366004613cc5565b611090565b3480156105e257600080fd5b506102ab6105f1366004613d81565b6111ec565b34801561060257600080fd5b50610228610611366004613e21565b6113ab565b34801561062257600080fd5b5060646102ab565b34801561063657600080fd5b506102ab610645366004613e62565b611408565b34801561065657600080fd5b5060405160018152602001610260565b34801561067257600080fd5b506102ab61141f565b34801561068757600080fd5b506102ab611443565b34801561069c57600080fd5b506103466106ab366004613eb8565b63bc197c8160e01b95945050505050565b3480156106c857600080fd5b506102ab6106d73660046135e0565b61144f565b3480156106e857600080fd5b506102286106f7366004613f47565b61147e565b34801561070857600080fd5b506102ab610717366004613a64565b611512565b34801561072857600080fd5b50680566f746545524332360bc1b6102ab565b34801561074757600080fd5b5061075061154c565b6040516102609190614051565b34801561076957600080fd5b506040805180820190915260208082527f737570706f72743d627261766f2671756f72756d3d666f722c6162737461696e9082015261030e565b3480156107af57600080fd5b506102ab7f150214d74d59b7d1e90c73fc22ef3d991dd0a76b046543d4d80ab92d2a50328f81565b3480156107e357600080fd5b5061030e611976565b3480156107f857600080fd5b506102286108073660046135e0565b611a05565b34801561081857600080fd5b506102ab610827366004614161565b611a59565b34801561083857600080fd5b506102286108473660046135e0565b611a7a565b34801561085857600080fd5b5061034661086736600461418b565b63f23a6e6160e01b95945050505050565b34801561088457600080fd5b506102ab6108933660046135e0565b611ace565b3480156108a457600080fd5b50610193546108b9906001600160a01b031681565b6040516001600160a01b039091168152602001610260565b6101fa602052600090815260409020805460018201546006830154600784015460088501805494956001600160a01b039094169492939192610912906141ef565b80601f016020809104026020016040519081016040528092919081815260200182805461093e906141ef565b801561098b5780601f106109605761010080835404028352916020019161098b565b820191906000526020600020905b81548152906001019060200180831161096e57829003601f168201915b5050505050905085565b60006001600160e01b03198216630a85bd0160e11b14806109ba57506109ba82611b6c565b92915050565b600080610a64610a5c7fb3b3f3b703cd84ce352197dcff232b1b5d3cfb2025ce47cf04742d0651f1af888c8c8c8c6040516109fc92919061422a565b60405180910390208b80519060200120604051602001610a41959493929190948552602085019390935260ff9190911660408401526060830152608082015260a00190565b60405160208183030381529060405280519060200120611bd7565b868686611c25565b9050610aaa8a828b8b8b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508d9250611c43915050565b9a9950505050505050505050565b30610ac1611da4565b6001600160a01b031614610af05760405162461bcd60e51b8152600401610ae79061423a565b60405180910390fd5b610b0c565b80610b0060ff611dae565b14610b0a57610af5565b505b610b1581611e24565b50565b606060fd8054610b27906141ef565b80601f0160208091040260200160405190810160405280929190818152602001828054610b53906141ef565b8015610ba05780601f10610b7557610100808354040283529160200191610ba0565b820191906000526020600020905b815481529060010190602001808311610b8357829003601f168201915b5050505050905090565b600080610bb986868686611512565b90506000610bc682610d83565b90506004816007811115610bdc57610bdc613b41565b1480610bf957506005816007811115610bf757610bf7613b41565b145b610c4f5760405162461bcd60e51b815260206004820152602160248201527f476f7665726e6f723a2070726f706f73616c206e6f74207375636365737366756044820152601b60fa1b6064820152608401610ae7565b600082815260fe602052604090819020600201805460ff19166001179055517f712ae1383f79ac853f8d882153778e0260ef8f03b504e2866e0593e04d2b291f90610c9d9084815260200190565b60405180910390a1610cb28288888888611f73565b610cbf8288888888612000565b610ccc8288888888611f73565b5095945050505050565b600081815260fe602090815260408083208151928301909152546001600160401b0316908190525b6001600160401b031692915050565b604080517f150214d74d59b7d1e90c73fc22ef3d991dd0a76b046543d4d80ab92d2a50328f602082015290810186905260ff851660608201526000908190610d5b90610a5c90608001610a41565b9050610d78878288604051806020016040528060008152506120ff565b979650505050505050565b600081815260fe60205260408120600281015460ff1615610da75750600792915050565b6002810154610100900460ff1615610dc25750600292915050565b6000610dcd84610cd6565b905080610e1c5760405162461bcd60e51b815260206004820152601d60248201527f476f7665726e6f723a20756e6b6e6f776e2070726f706f73616c2069640000006044820152606401610ae7565b438110610e2d575060009392505050565b6000610e388561144f565b9050438110610e4c57506001949350505050565b610e558561212b565b8015610e7557506000858152610161602052604090208054600190910154115b15610e8557506004949350505050565b506003949350505050565b6040805180820190915260018152603160f81b602082015290565b600080610eb6611da4565b9050610ed3848285604051806020016040528060008152506120ff565b949350505050565b6001600160a01b031660009081526033602052604090205460ff1690565b600080610f04611da4565b9050610d7887828888888080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508a9250611c43915050565b6101c75460009080610f615750506101c654919050565b60006101c7610f71600184614282565b81548110610f8157610f81614299565b60009182526020918290206040805180820190915291015463ffffffff8116808352600160201b9091046001600160e01b03169282019290925291508410610fd757602001516001600160e01b03169392505050565b610ed36101c785612163565b30610fec611da4565b6001600160a01b0316146110125760405162461bcd60e51b8152600401610ae79061423a565b61102e565b8061102260ff611dae565b1461102c57611017565b505b610b1581612271565b600080611042611da4565b905061108686828787878080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506120ff92505050565b9695505050505050565b600054610100900460ff16158080156110b05750600054600160ff909116105b806110d157506110bf30611b5d565b1580156110d1575060005460ff166001145b6111345760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610ae7565b6000805460ff191660011790558015611157576000805461ff0019166101001790555b611160876122b4565b611169896122ec565b61117485858561232d565b61117d8661235f565b6111868261238f565b875161119a906101f89060208b0190613322565b5080156111e1576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b505050505050505050565b60006111fa858585856123bf565b9050604051806101200160405280828152602001611216611da4565b6001600160a01b0316815260200186815260200185815260200186516001600160401b0381111561124957611249613709565b60405190808252806020026020018201604052801561127c57816020015b60608152602001906001900390816112675790505b50815260200184815260200161129183610cd6565b815260200161129f8361144f565b815260209081018490526101f95460009081526101fa825260409081902083518155838301516001820180546001600160a01b0319166001600160a01b039092169190911790559083015180519192611300926002850192909101906133a2565b506060820151805161131c9160038401916020909101906133f7565b5060808201518051611338916004840191602090910190613431565b5060a0820151805161135491600584019160209091019061348a565b5060c0820151600682015560e082015160078201556101008201518051611385916008840191602090910190613322565b5090505060016101f9600082825461139d91906142af565b909155509095945050505050565b306113b4611da4565b6001600160a01b0316146113da5760405162461bcd60e51b8152600401610ae79061423a565b6113f6565b806113ea60ff611dae565b146113f4576113df565b505b6114036101f883836134e3565b505050565b600061141584848461266e565b90505b9392505050565b6101c7546000901561143b576114366101c76126e5565b905090565b506101c65490565b60006114366101315490565b600081815260fe602090815260408083208151928301909152600101546001600160401b031690819052610cfe565b30611487611da4565b6001600160a01b0316146114ad5760405162461bcd60e51b8152600401610ae79061423a565b6114c9565b806114bd60ff611dae565b146114c7576114b2565b505b61150b8483838080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250889250612740915050565b5050505050565b60008484848460405160200161152b94939291906142c7565b60408051601f19818403018152919052805160209091012095945050505050565b6101f954606090806001600160401b0381111561156b5761156b613709565b6040519080825280602002602001820160405280156115f457816020015b6115e16040518061012001604052806000815260200160006001600160a01b03168152602001606081526020016060815260200160608152602001606081526020016000815260200160008152602001606081525090565b8152602001906001900390816115895790505b50915060005b818110156119715760008181526101fa60209081526040918290208251610120810184528154815260018201546001600160a01b0316818401526002820180548551818602810186018752818152929593949386019383018282801561168957602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161166b575b50505050508152602001600382018054806020026020016040519081016040528092919081815260200182805480156116e157602002820191906000526020600020905b8154815260200190600101908083116116cd575b5050505050815260200160048201805480602002602001604051908101604052809291908181526020016000905b828210156117bb57838290600052602060002001805461172e906141ef565b80601f016020809104026020016040519081016040528092919081815260200182805461175a906141ef565b80156117a75780601f1061177c576101008083540402835291602001916117a7565b820191906000526020600020905b81548152906001019060200180831161178a57829003601f168201915b50505050508152602001906001019061170f565b50505050815260200160058201805480602002602001604051908101604052809291908181526020016000905b82821015611894578382906000526020600020018054611807906141ef565b80601f0160208091040260200160405190810160405280929190818152602001828054611833906141ef565b80156118805780601f1061185557610100808354040283529160200191611880565b820191906000526020600020905b81548152906001019060200180831161186357829003601f168201915b5050505050815260200190600101906117e8565b50505050815260200160068201548152602001600782015481526020016008820180546118c0906141ef565b80601f01602080910402602001604051908101604052809291908181526020018280546118ec906141ef565b80156119395780601f1061190e57610100808354040283529160200191611939565b820191906000526020600020905b81548152906001019060200180831161191c57829003601f168201915b50505050508152505083828151811061195457611954614299565b602090810291909101015261196a6001826142af565b90506115fa565b505090565b6101f88054611984906141ef565b80601f01602080910402602001604051908101604052809291908181526020018280546119b0906141ef565b80156119fd5780601f106119d2576101008083540402835291602001916119fd565b820191906000526020600020905b8154815290600101906020018083116119e057829003601f168201915b505050505081565b30611a0e611da4565b6001600160a01b031614611a345760405162461bcd60e51b8152600401610ae79061423a565b611a50565b80611a4460ff611dae565b14611a4e57611a39565b505b610b1581612766565b60006114188383611a7560408051602081019091526000815290565b61266e565b30611a83611da4565b6001600160a01b031614611aa95760405162461bcd60e51b8152600401610ae79061423a565b611ac5565b80611ab960ff611dae565b14611ac357611aae565b505b610b1581612809565b60006064611adb83610f4a565b61019354604051632394e7a360e21b8152600481018690526001600160a01b0390911690638e539e8c90602401602060405180830381865afa158015611b25573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b499190614312565b611b53919061432b565b6109ba919061434a565b6001600160a01b03163b151590565b60006001600160e01b0319821663bf26d89760e01b1480611b9d57506001600160e01b031982166379dd796f60e01b145b80611bb857506001600160e01b03198216630271189760e51b145b806109ba57506301ffc9a760e01b6001600160e01b03198316146109ba565b60006109ba611be461284c565b8360405161190160f01b6020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b6000806000611c36878787876128c7565b91509150610ccc816129aa565b600085815260fe602052604081206001611c5c88610d83565b6007811115611c6d57611c6d613b41565b14611cc65760405162461bcd60e51b815260206004820152602360248201527f476f7665726e6f723a20766f7465206e6f742063757272656e746c792061637460448201526269766560e81b6064820152608401610ae7565b604080516020810190915281546001600160401b031690819052600090611cef9088908661266e565b9050611cfe8888888488612b60565b8351611d5057866001600160a01b03167fb8e138887d0aa13bab447e82de9d5c1777041ecd21ca36ba824ff1e6c07ddda489888489604051611d43949392919061436c565b60405180910390a2610d78565b866001600160a01b03167fe2babfbac5889a709b63bb7f598b324e08bc5a4fb9ec647fb3cbc9ec07eb87128988848989604051611d91959493929190614394565b60405180910390a2979650505050505050565b6000611436612ce0565b6000611dc98254600f81810b600160801b909204900b131590565b15611de757604051631ed9509560e11b815260040160405180910390fd5b508054600f0b6000818152600180840160205260408220805492905583546001600160801b03191692016001600160801b03169190911790915590565b6064811115611ea75760405162461bcd60e51b815260206004820152604360248201527f476f7665726e6f72566f74657351756f72756d4672616374696f6e3a2071756f60448201527f72756d4e756d657261746f72206f7665722071756f72756d44656e6f6d696e616064820152623a37b960e91b608482015260a401610ae7565b6000611eb161141f565b90508015801590611ec357506101c754155b15611f285760408051808201909152600081526101c79060208101611ee784612d02565b6001600160e01b039081169091528254600181018455600093845260209384902083519490930151909116600160201b0263ffffffff909316929092179101555b611f346101c783612d6f565b505060408051828152602081018490527f0553476bf02ef2726e8ce5ced78d63e26e602e4a2257b1f559418e24b4633997910160405180910390a15050565b61150b565b8451811015611ff857306001600160a01b0316858281518110611f9d57611f9d614299565b60200260200101516001600160a01b03161415611fe857611fe8838281518110611fc957611fc9614299565b60200260200101518051906020012060ff612e9990919063ffffffff16565b611ff1816143da565b9050611f78565b505050505050565b600060405180606001604052806027815260200161456c60279139905060005b85518110156120f65760008087838151811061203e5761203e614299565b60200260200101516001600160a01b031687848151811061206157612061614299565b602002602001015187858151811061207b5761207b614299565b602002602001015160405161209091906143f5565b60006040518083038185875af1925050503d80600081146120cd576040519150601f19603f3d011682016040523d82523d6000602084013e6120d2565b606091505b50915091506120e2828286612ed5565b505050806120ef906143da565b9050612020565b50505050505050565b60006121228585858561211d60408051602081019091526000815290565b611c43565b95945050505050565b6000818152610161602052604081206002810154600182015461214e91906142af565b61215a61089385610cd6565b11159392505050565b60004382106121b45760405162461bcd60e51b815260206004820181905260248201527f436865636b706f696e74733a20626c6f636b206e6f7420796574206d696e65646044820152606401610ae7565b825460005b818110156122195760006121cd8284612f0e565b9050848660000182815481106121e5576121e5614299565b60009182526020909120015463ffffffff16111561220557809250612213565b6122108160016142af565b91505b506121b9565b811561225c578461222b600184614282565b8154811061223b5761223b614299565b600091825260209091200154600160201b90046001600160e01b031661225f565b60005b6001600160e01b031695945050505050565b61012f5460408051918252602082018390527fc565b045403dc03c2eea82b81a0465edad9e2e7fc4d97e11421c209da93d7a93910160405180910390a161012f55565b600054610100900460ff166122db5760405162461bcd60e51b8152600401610ae790614411565b6122e3612f29565b610b1581612f52565b600054610100900460ff166123135760405162461bcd60e51b8152600401610ae790614411565b6123248161231f610e90565b612fe5565b610b1581613026565b600054610100900460ff166123545760405162461bcd60e51b8152600401610ae790614411565b611403838383613060565b600054610100900460ff166123865760405162461bcd60e51b8152600401610ae790614411565b610b15816130a2565b600054610100900460ff166123b65760405162461bcd60e51b8152600401610ae790614411565b610b15816130ec565b60006123c9611443565b6123df6123d4611da4565b610827600143614282565b10156124475760405162461bcd60e51b815260206004820152603160248201527f476f7665726e6f723a2070726f706f73657220766f7465732062656c6f7720706044820152701c9bdc1bdcd85b081d1a1c995cda1bdb19607a1b6064820152608401610ae7565b600061245c8686868680519060200120611512565b9050845186511461247f5760405162461bcd60e51b8152600401610ae79061445c565b83518651146124a05760405162461bcd60e51b8152600401610ae79061445c565b60008651116124ec5760405162461bcd60e51b815260206004820152601860248201527711dbdd995c9b9bdc8e88195b5c1d1e481c1c9bdc1bdcd85b60421b6044820152606401610ae7565b600081815260fe6020908152604091829020825191820190925281546001600160401b0316908190521561256c5760405162461bcd60e51b815260206004820152602160248201527f476f7665726e6f723a2070726f706f73616c20616c72656164792065786973746044820152607360f81b6064820152608401610ae7565b600061258061257b61012f5490565b613113565b61258943613113565b612593919061449d565b905060006125a461257b6101305490565b6125ae908361449d565b90506125ba838361317b565b6125c7600184018261317b565b7f7d84a6263ae0d98d3329bd7b46bb4e8d6f98cd35a7adb45c274c8b7fd5ebd5e0846125f1611da4565b8b8b8d516001600160401b0381111561260c5761260c613709565b60405190808252806020026020018201604052801561263f57816020015b606081526020019060019003908161262a5790505b508c88888e604051612659999897969594939291906144c8565b60405180910390a15091979650505050505050565b61019354604051630748d63560e31b81526001600160a01b038581166004830152602482018590526000921690633a46b1a890604401602060405180830381865afa1580156126c1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114159190614312565b8054600090801561272d57826126fc600183614282565b8154811061270c5761270c614299565b600091825260209091200154600160201b90046001600160e01b0316612730565b60005b6001600160e01b03169392505050565b606061141584848460405180606001604052806029815260200161459360299139613199565b600081116127c65760405162461bcd60e51b815260206004820152602760248201527f476f7665726e6f7253657474696e67733a20766f74696e6720706572696f6420604482015266746f6f206c6f7760c81b6064820152608401610ae7565b6101305460408051918252602082018390527f7e3f7f0708a84de9203036abaa450dccc85ad5ff52f78c170f3edb55cf5e8828910160405180910390a161013055565b6101315460408051918252602082018390527fccb45da8d5717e6c4544694297c4ba5cf151d455c9bb0ed4fc7a38411bc05461910160405180910390a161013155565b60006114367f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f61287b60975490565b6098546040805160208101859052908101839052606081018290524660808201523060a082015260009060c0016040516020818303038152906040528051906020012090509392505050565b6000806fa2a8918ca85bafe22016d0b997e4df60600160ff1b038311156128f457506000905060036129a1565b8460ff16601b1415801561290c57508460ff16601c14155b1561291d57506000905060046129a1565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015612971573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811661299a576000600192509250506129a1565b9150600090505b94509492505050565b60008160048111156129be576129be613b41565b14156129c75750565b60018160048111156129db576129db613b41565b1415612a245760405162461bcd60e51b815260206004820152601860248201527745434453413a20696e76616c6964207369676e617475726560401b6044820152606401610ae7565b6002816004811115612a3857612a38613b41565b1415612a865760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610ae7565b6003816004811115612a9a57612a9a613b41565b1415612af35760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608401610ae7565b6004816004811115612b0757612b07613b41565b1415610b155760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b6064820152608401610ae7565b6000858152610161602090815260408083206001600160a01b0388168452600381019092529091205460ff1615612be95760405162461bcd60e51b815260206004820152602760248201527f476f7665726e6f72566f74696e6753696d706c653a20766f746520616c726561604482015266191e4818d85cdd60ca1b6064820152608401610ae7565b6001600160a01b03851660009081526003820160205260408120805460ff1916600117905560ff168460ff161415612c3a5782816000016000828254612c2f91906142af565b90915550611ff89050565b60ff841660011415612c5a5782816001016000828254612c2f91906142af565b60ff841660021415612c7a5782816002016000828254612c2f91906142af565b60405162461bcd60e51b815260206004820152603560248201527f476f7665726e6f72566f74696e6753696d706c653a20696e76616c69642076616044820152746c756520666f7220656e756d20566f74655479706560581b6064820152608401610ae7565b6000612ceb33610edb565b15612cfd575060131936013560601c90565b503390565b60006001600160e01b03821115612d6b5760405162461bcd60e51b815260206004820152602760248201527f53616665436173743a2076616c756520646f65736e27742066697420696e20326044820152663234206269747360c81b6064820152608401610ae7565b5090565b8154600090819081612d80866126e5565b9050600082118015612dbe57504386612d9a600185614282565b81548110612daa57612daa614299565b60009182526020909120015463ffffffff16145b15612e1e57612dcc85612d02565b86612dd8600185614282565b81548110612de857612de8614299565b9060005260206000200160000160046101000a8154816001600160e01b0302191690836001600160e01b03160217905550612e8b565b856000016040518060400160405280612e36436132bd565b63ffffffff168152602001612e4a88612d02565b6001600160e01b039081169091528254600181018455600093845260209384902083519490930151909116600160201b0263ffffffff909316929092179101555b9250839150505b9250929050565b8154600160801b90819004600f0b6000818152600180860160205260409091209390935583546001600160801b03908116939091011602179055565b60608315612ee4575081611418565b825115612ef45782518084602001fd5b8160405162461bcd60e51b8152600401610ae79190613864565b6000612f1d600284841861434a565b611418908484166142af565b600054610100900460ff16612f505760405162461bcd60e51b8152600401610ae790614411565b565b600054610100900460ff16612f795760405162461bcd60e51b8152600401610ae790614411565b60005b8151811015612fe157600160336000848481518110612f9d57612f9d614299565b6020908102919091018101516001600160a01b03168252810191909152604001600020805460ff191691151591909117905580612fd9816143da565b915050612f7c565b5050565b600054610100900460ff1661300c5760405162461bcd60e51b8152600401610ae790614411565b815160209283012081519190920120609791909155609855565b600054610100900460ff1661304d5760405162461bcd60e51b8152600401610ae790614411565b8051612fe19060fd906020840190613322565b600054610100900460ff166130875760405162461bcd60e51b8152600401610ae790614411565b61309083612271565b61309982612766565b61140381612809565b600054610100900460ff166130c95760405162461bcd60e51b8152600401610ae790614411565b61019380546001600160a01b0319166001600160a01b0392909216919091179055565b600054610100900460ff16610b0c5760405162461bcd60e51b8152600401610ae790614411565b60006001600160401b03821115612d6b5760405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203660448201526534206269747360d01b6064820152608401610ae7565b815467ffffffffffffffff19166001600160401b0391909116179055565b6060824710156131fa5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610ae7565b61320385611b5d565b61324f5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610ae7565b600080866001600160a01b0316858760405161326b91906143f5565b60006040518083038185875af1925050503d80600081146132a8576040519150601f19603f3d011682016040523d82523d6000602084013e6132ad565b606091505b5091509150610d78828286612ed5565b600063ffffffff821115612d6b5760405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203360448201526532206269747360d01b6064820152608401610ae7565b82805461332e906141ef565b90600052602060002090601f0160209004810192826133505760008555613396565b82601f1061336957805160ff1916838001178555613396565b82800160010185558215613396579182015b8281111561339657825182559160200191906001019061337b565b50612d6b929150613557565b828054828255906000526020600020908101928215613396579160200282015b8281111561339657825182546001600160a01b0319166001600160a01b039091161782556020909201916001909101906133c2565b828054828255906000526020600020908101928215613396579160200282018281111561339657825182559160200191906001019061337b565b82805482825590600052602060002090810192821561347e579160200282015b8281111561347e578251805161346e918491602090910190613322565b5091602001919060010190613451565b50612d6b92915061356c565b8280548282559060005260206000209081019282156134d7579160200282015b828111156134d757825180516134c7918491602090910190613322565b50916020019190600101906134aa565b50612d6b929150613589565b8280546134ef906141ef565b90600052602060002090601f0160209004810192826135115760008555613396565b82601f1061352a5782800160ff19823516178555613396565b82800160010185558215613396579182015b8281111561339657823582559160200191906001019061353c565b5b80821115612d6b5760008155600101613558565b80821115612d6b57600061358082826135a6565b5060010161356c565b80821115612d6b57600061359d82826135a6565b50600101613589565b5080546135b2906141ef565b6000825580601f106135c2575050565b601f016020900490600052602060002090810190610b159190613557565b6000602082840312156135f257600080fd5b5035919050565b60005b838110156136145781810151838201526020016135fc565b83811115613623576000848401525b50505050565b600081518084526136418160208601602086016135f9565b601f01601f19169290920160200192915050565b85815260018060a01b038516602082015283604082015282606082015260a060808201526000610d7860a0830184613629565b60006020828403121561369a57600080fd5b81356001600160e01b03198116811461141857600080fd5b803560ff811681146136c357600080fd5b919050565b60008083601f8401126136da57600080fd5b5081356001600160401b038111156136f157600080fd5b602083019150836020828501011115612e9257600080fd5b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b038111828210171561374757613747613709565b604052919050565b600082601f83011261376057600080fd5b81356001600160401b0381111561377957613779613709565b61378c601f8201601f191660200161371f565b8181528460208386010111156137a157600080fd5b816020850160208301376000918101602001919091529392505050565b60008060008060008060008060e0898b0312156137da57600080fd5b883597506137ea60208a016136b2565b965060408901356001600160401b038082111561380657600080fd5b6138128c838d016136c8565b909850965060608b013591508082111561382b57600080fd5b506138388b828c0161374f565b94505061384760808a016136b2565b925060a0890135915060c089013590509295985092959890939650565b6020815260006114186020830184613629565b80356001600160a01b03811681146136c357600080fd5b600080600080608085870312156138a457600080fd5b6138ad85613877565b93506138bb60208601613877565b92506040850135915060608501356001600160401b038111156138dd57600080fd5b6138e98782880161374f565b91505092959194509250565b60006001600160401b0382111561390e5761390e613709565b5060051b60200190565b600082601f83011261392957600080fd5b8135602061393e613939836138f5565b61371f565b82815260059290921b8401810191818101908684111561395d57600080fd5b8286015b8481101561397f5761397281613877565b8352918301918301613961565b509695505050505050565b600082601f83011261399b57600080fd5b813560206139ab613939836138f5565b82815260059290921b840181019181810190868411156139ca57600080fd5b8286015b8481101561397f57803583529183019183016139ce565b600082601f8301126139f657600080fd5b81356020613a06613939836138f5565b82815260059290921b84018101918181019086841115613a2557600080fd5b8286015b8481101561397f5780356001600160401b03811115613a485760008081fd5b613a568986838b010161374f565b845250918301918301613a29565b60008060008060808587031215613a7a57600080fd5b84356001600160401b0380821115613a9157600080fd5b613a9d88838901613918565b95506020870135915080821115613ab357600080fd5b613abf8883890161398a565b94506040870135915080821115613ad557600080fd5b50613ae2878288016139e5565b949793965093946060013593505050565b600080600080600060a08688031215613b0b57600080fd5b85359450613b1b602087016136b2565b9350613b29604087016136b2565b94979396509394606081013594506080013592915050565b634e487b7160e01b600052602160045260246000fd5b6020810160088310613b7957634e487b7160e01b600052602160045260246000fd5b91905290565b60008060408385031215613b9257600080fd5b82359150613ba260208401613877565b90509250929050565b60008060408385031215613bbe57600080fd5b82359150613ba2602084016136b2565b600060208284031215613be057600080fd5b61141882613877565b600080600080600060808688031215613c0157600080fd5b85359450613c11602087016136b2565b935060408601356001600160401b0380821115613c2d57600080fd5b613c3989838a016136c8565b90955093506060880135915080821115613c5257600080fd5b50613c5f8882890161374f565b9150509295509295909350565b60008060008060608587031215613c8257600080fd5b84359350613c92602086016136b2565b925060408501356001600160401b03811115613cad57600080fd5b613cb9878288016136c8565b95989497509550505050565b600080600080600080600080610100898b031215613ce257600080fd5b88356001600160401b0380821115613cf957600080fd5b613d058c838d0161374f565b995060208b0135915080821115613d1b57600080fd5b613d278c838d0161374f565b985060408b0135915080821115613d3d57600080fd5b50613d4a8b828c01613918565b965050613d5960608a01613877565b979a969950949760808101359660a0820135965060c0820135955060e0909101359350915050565b60008060008060808587031215613d9757600080fd5b84356001600160401b0380821115613dae57600080fd5b613dba88838901613918565b95506020870135915080821115613dd057600080fd5b613ddc8883890161398a565b94506040870135915080821115613df257600080fd5b613dfe888389016139e5565b93506060870135915080821115613e1457600080fd5b506138e98782880161374f565b60008060208385031215613e3457600080fd5b82356001600160401b03811115613e4a57600080fd5b613e56858286016136c8565b90969095509350505050565b600080600060608486031215613e7757600080fd5b613e8084613877565b92506020840135915060408401356001600160401b03811115613ea257600080fd5b613eae8682870161374f565b9150509250925092565b600080600080600060a08688031215613ed057600080fd5b613ed986613877565b9450613ee760208701613877565b935060408601356001600160401b0380821115613f0357600080fd5b613f0f89838a0161398a565b94506060880135915080821115613f2557600080fd5b613f3189838a0161398a565b93506080880135915080821115613c5257600080fd5b60008060008060608587031215613f5d57600080fd5b613f6685613877565b93506020850135925060408501356001600160401b03811115613cad57600080fd5b600081518084526020808501945080840160005b83811015613fc15781516001600160a01b031687529582019590820190600101613f9c565b509495945050505050565b600081518084526020808501945080840160005b83811015613fc157815187529582019590820190600101613fe0565b600081518084526020808501808196508360051b8101915082860160005b85811015614044578284038952614032848351613629565b9885019893509084019060010161401a565b5091979650505050505050565b60006020808301818452808551808352604092508286019150828160051b87010184880160005b8381101561415357603f19898403018552815180518452878101516001600160a01b03168885015286810151610120888601819052906140ba82870182613f88565b915050606080830151868303828801526140d48382613fcc565b92505050608080830151868303828801526140ef8382613ffc565b9250505060a0808301518683038288015261410a8382613ffc565b9250505060c080830151818701525060e0808301518187015250610100808301519250858203818701525061413f8183613629565b968901969450505090860190600101614078565b509098975050505050505050565b6000806040838503121561417457600080fd5b61417d83613877565b946020939093013593505050565b600080600080600060a086880312156141a357600080fd5b6141ac86613877565b94506141ba60208701613877565b9350604086013592506060860135915060808601356001600160401b038111156141e357600080fd5b613c5f8882890161374f565b600181811c9082168061420357607f821691505b6020821081141561422457634e487b7160e01b600052602260045260246000fd5b50919050565b8183823760009101908152919050565b602080825260189082015277476f7665726e6f723a206f6e6c79476f7665726e616e636560401b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b6000828210156142945761429461426c565b500390565b634e487b7160e01b600052603260045260246000fd5b600082198211156142c2576142c261426c565b500190565b6080815260006142da6080830187613f88565b82810360208401526142ec8187613fcc565b905082810360408401526143008186613ffc565b91505082606083015295945050505050565b60006020828403121561432457600080fd5b5051919050565b60008160001904831182151516156143455761434561426c565b500290565b60008261436757634e487b7160e01b600052601260045260246000fd5b500490565b84815260ff841660208201528260408201526080606082015260006110866080830184613629565b85815260ff8516602082015283604082015260a0606082015260006143bc60a0830185613629565b82810360808401526143ce8185613629565b98975050505050505050565b60006000198214156143ee576143ee61426c565b5060010190565b600082516144078184602087016135f9565b9190910192915050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b60208082526021908201527f476f7665726e6f723a20696e76616c69642070726f706f73616c206c656e67746040820152600d60fb1b606082015260800190565b60006001600160401b038083168185168083038211156144bf576144bf61426c565b01949350505050565b8981526001600160a01b0389166020820152610120604082018190526000906144f38382018b613f88565b90508281036060840152614507818a613fcc565b9050828103608084015261451b8189613ffc565b905082810360a084015261452f8188613ffc565b6001600160401b0387811660c0860152861660e0850152838103610100850152905061455b8185613629565b9c9b50505050505050505050505056fe476f7665726e6f723a2063616c6c20726576657274656420776974686f7574206d657373616765416464726573733a206c6f772d6c6576656c2063616c6c20776974682076616c7565206661696c6564a2646970667358221220f216f592d54826931075b02780f6de36de4e48715743673f6e1319cae9e7a2fa64736f6c634300080c0033";
    static readonly abi: ({
        inputs: never[];
        stateMutability: string;
        type: string;
        name?: undefined;
        anonymous?: undefined;
        outputs?: undefined;
    } | {
        inputs: never[];
        name: string;
        type: string;
        stateMutability?: undefined;
        anonymous?: undefined;
        outputs?: undefined;
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
        stateMutability: string;
        type: string;
        inputs?: undefined;
        name?: undefined;
        anonymous?: undefined;
        outputs?: undefined;
    })[];
    static createInterface(): VoteERC20Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): VoteERC20;
}
export {};
//# sourceMappingURL=VoteERC20__factory.d.ts.map