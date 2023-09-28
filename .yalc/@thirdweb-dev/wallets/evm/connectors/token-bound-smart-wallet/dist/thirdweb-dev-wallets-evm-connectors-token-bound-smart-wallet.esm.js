import { _ as _defineProperty } from '../../../../dist/defineProperty-e24c82ea.esm.js';
import { ethers } from 'ethers';
import { S as SmartWalletConnector, E as ERC6551_REGISTRY } from '../../../../dist/index-ef3d3a6b.esm.js';
import '@thirdweb-dev/chains';
import '../../../../dist/connector-887e68b5.esm.js';
import 'eventemitter3';
import '@account-abstraction/sdk';
import 'cross-fetch';
import '@account-abstraction/contracts';
import '@account-abstraction/utils';
import '@thirdweb-dev/sdk';

class TokenBoundSmartWalletConnector extends SmartWalletConnector {
  constructor(config) {
    config.factoryAddress = config.factoryAddress || ERC6551_REGISTRY;
    super(config);
    _defineProperty(this, "config", void 0);
    this.config = config;
  }
  defaultAccountInfo() {
    return {
      execute: async (account, target, value, data) => {
        return account.prepare("executeCall", [target, value, data]);
      },
      getNonce: async account => {
        return account.call("nonce", []);
      }
    };
  }
  defaultFactoryInfo() {
    return {
      createAccount: async (factory, owner) => {
        return factory.prepare("createAccount", [this.config.accountImplementation, this.chainId, this.config.tokenContract, this.config.tokenId, this.config.salt, ethers.utils.toUtf8Bytes("")]);
      },
      getAccountAddress: async (factory, owner) => {
        return await factory.call("address", [this.config.accountImplementation, this.chainId, this.config.tokenContract, this.config.tokenId, this.config.salt]);
      }
    };
  }
}

export { TokenBoundSmartWalletConnector };
