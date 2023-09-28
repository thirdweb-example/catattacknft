'use strict';

var coinbaseWallet = require('./formFields-855780f4.cjs.prod.js');
require('@thirdweb-dev/wallets');
require('@thirdweb-dev/react-core');
require('./formElements-c7791271.cjs.prod.js');
require('@emotion/react');
require('@emotion/styled');
require('react/jsx-runtime');
require('react');
require('@radix-ui/react-icons');
require('detect-browser');
require('@radix-ui/colors');
require('qrcode');
require('copy-to-clipboard');

/**
 * @deprecated Use `walletConnect` instead
 *
 * The WalletConnect v1.0 protocol has been shut down and no longer works.
 * To avoid breaking change, `walletConnectV1` is still available but is an alias of `walletConnect`.
 */
const walletConnectV1 = coinbaseWallet.walletConnect;

exports.walletConnectV1 = walletConnectV1;
