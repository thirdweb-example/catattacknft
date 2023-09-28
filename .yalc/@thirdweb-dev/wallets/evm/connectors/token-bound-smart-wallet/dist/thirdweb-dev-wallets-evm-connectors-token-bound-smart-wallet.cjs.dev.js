'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var defineProperty = require('../../../../dist/defineProperty-21d22449.cjs.dev.js');
var ethers = require('ethers');
var evm_connectors_smartWallet_dist_thirdwebDevWalletsEvmConnectorsSmartWallet = require('../../../../dist/index-de228c12.cjs.dev.js');
require('@thirdweb-dev/chains');
require('../../../../dist/connector-c6b358ae.cjs.dev.js');
require('eventemitter3');
require('@account-abstraction/sdk');
require('cross-fetch');
require('@account-abstraction/contracts');
require('@account-abstraction/utils');
require('@thirdweb-dev/sdk');

class TokenBoundSmartWalletConnector extends evm_connectors_smartWallet_dist_thirdwebDevWalletsEvmConnectorsSmartWallet.SmartWalletConnector {
  constructor(config) {
    config.factoryAddress = config.factoryAddress || evm_connectors_smartWallet_dist_thirdwebDevWalletsEvmConnectorsSmartWallet.ERC6551_REGISTRY;
    super(config);
    defineProperty._defineProperty(this, "config", void 0);
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
        return factory.prepare("createAccount", [this.config.accountImplementation, this.chainId, this.config.tokenContract, this.config.tokenId, this.config.salt, ethers.ethers.utils.toUtf8Bytes("")]);
      },
      getAccountAddress: async (factory, owner) => {
        return await factory.call("address", [this.config.accountImplementation, this.chainId, this.config.tokenContract, this.config.tokenId, this.config.salt]);
      }
    };
  }
}

exports.TokenBoundSmartWalletConnector = TokenBoundSmartWalletConnector;
