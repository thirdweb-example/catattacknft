'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var solana_wallets_keypair_dist_thirdwebDevWalletsSolanaWalletsKeypair = require('../../keypair/dist/thirdweb-dev-wallets-solana-wallets-keypair.cjs.dev.js');
var web3_js = require('@solana/web3.js');
var bs58 = require('bs58');
require('../../../../dist/classPrivateFieldSet-f0dc2a42.cjs.dev.js');
require('@noble/ed25519');
require('../../base/dist/thirdweb-dev-wallets-solana-wallets-base.cjs.dev.js');
require('../../../../dist/defineProperty-21d22449.cjs.dev.js');
require('tweetnacl');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var bs58__default = /*#__PURE__*/_interopDefault(bs58);

class PrivateKeyWallet extends solana_wallets_keypair_dist_thirdwebDevWalletsSolanaWalletsKeypair.KeypairWallet {
  constructor(privateKey) {
    super(web3_js.Keypair.fromSecretKey(bs58__default["default"].decode(privateKey)));
  }
}

exports.PrivateKeyWallet = PrivateKeyWallet;
