'use strict';

var sdkCommonUtilities = require('@paperxyz/sdk-common-utilities');
var defineProperty = require('./defineProperty-6ca2d9a5.cjs.prod.js');
var ethers = require('ethers');
var utils = require('ethers/lib/utils');

const EMBEDDED_WALLET_PATH = "/sdk/2022-08-12/embedded-wallet";
const GET_IFRAME_BASE_URL = () => `${sdkCommonUtilities.getPaperOriginUrl().replace("withpaper.com", "ews.thirdweb.com")}`;
const WALLET_USER_DETAILS_LOCAL_STORAGE_NAME = clientId => `thirdwebEwsWalletUserDetails-${clientId}`;
const WALLET_USER_ID_LOCAL_STORAGE_NAME = clientId => `thirdwebEwsWalletUserId-${clientId}`;
const AUTH_TOKEN_LOCAL_STORAGE_PREFIX = "walletToken";
const AUTH_TOKEN_LOCAL_STORAGE_NAME = clientId => {
  return `${AUTH_TOKEN_LOCAL_STORAGE_PREFIX}-${clientId}`;
};
const DEVICE_SHARE_LOCAL_STORAGE_PREFIX = "a";
const DEVICE_SHARE_LOCAL_STORAGE_NAME = (clientId, userId) => `${DEVICE_SHARE_LOCAL_STORAGE_PREFIX}-${clientId}-${userId}`;
const DEVICE_SHARE_LOCAL_STORAGE_NAME_DEPRECATED = clientId => `${DEVICE_SHARE_LOCAL_STORAGE_PREFIX}-${clientId}`;

// Class constructor types
// types for class constructors still a little messy right now.
// Open to PRs from whoever sees this and knows of a cleaner way to handle things
// Auth Types
// Embedded Wallet Types
let UserStatus = /*#__PURE__*/function (UserStatus) {
  UserStatus["LOGGED_OUT"] = "Logged Out";
  UserStatus["LOGGED_IN_WALLET_INITIALIZED"] = "Logged In, Wallet Initialized";
  return UserStatus;
}({});
let UserWalletStatus = /*#__PURE__*/function (UserWalletStatus) {
  UserWalletStatus["LOGGED_OUT"] = "Logged Out";
  UserWalletStatus["LOGGED_IN_WALLET_UNINITIALIZED"] = "Logged In, Wallet Uninitialized";
  UserWalletStatus["LOGGED_IN_NEW_DEVICE"] = "Logged In, New Device";
  UserWalletStatus["LOGGED_IN_WALLET_INITIALIZED"] = "Logged In, Wallet Initialized";
  return UserWalletStatus;
}({});

// ! Types seem repetitive, but the name should identify which goes where
// this is the return type from the EmbeddedWallet Class getUserWalletStatus method iframe call
// this is the return type from the EmbeddedWallet Class getUserWalletStatus method
// This is returned from the getUser method in PaperEmbeddedWalletSdk

const data = new Map();
class LocalStorage {
  constructor(_ref) {
    let {
      clientId
    } = _ref;
    this.isSupported = typeof window !== "undefined" && !!window.localStorage;
    this.clientId = clientId;
  }
  async getItem(key) {
    if (this.isSupported) {
      return window.localStorage.getItem(key);
    } else {
      return data.get(key) ?? null;
    }
  }
  async setItem(key, value) {
    if (this.isSupported) {
      return window.localStorage.setItem(key, value);
    } else {
      data.set(key, value);
    }
  }
  async removeItem(key) {
    const item = await this.getItem(key);
    if (this.isSupported && item) {
      window.localStorage.removeItem(key);
      return true;
    }
    return false;
  }
  async saveAuthCookie(cookie) {
    await this.setItem(AUTH_TOKEN_LOCAL_STORAGE_NAME(this.clientId), cookie);
  }
  async getAuthCookie() {
    return this.getItem(AUTH_TOKEN_LOCAL_STORAGE_NAME(this.clientId));
  }
  async removeAuthCookie() {
    return this.removeItem(AUTH_TOKEN_LOCAL_STORAGE_NAME(this.clientId));
  }
  async saveDeviceShare(share, userId) {
    await this.saveWalletUserId(userId);
    await this.setItem(DEVICE_SHARE_LOCAL_STORAGE_NAME(this.clientId, userId), share);
  }
  async getDeviceShare() {
    const userId = await this.getWalletUserId();
    if (userId) {
      return this.getItem(DEVICE_SHARE_LOCAL_STORAGE_NAME(this.clientId, userId));
    }
    return null;
  }
  async removeDeviceShare() {
    const userId = await this.getWalletUserId();
    if (userId) {
      return this.removeItem(DEVICE_SHARE_LOCAL_STORAGE_NAME(this.clientId, userId));
    }
    return false;
  }
  async getWalletUserId() {
    return this.getItem(WALLET_USER_ID_LOCAL_STORAGE_NAME(this.clientId));
  }
  async saveWalletUserId(userId) {
    await this.setItem(WALLET_USER_ID_LOCAL_STORAGE_NAME(this.clientId), userId);
  }
  async removeWalletUserId() {
    return this.removeItem(WALLET_USER_ID_LOCAL_STORAGE_NAME(this.clientId));
  }
}

function sleep(seconds) {
  return new Promise(resolve => {
    setTimeout(resolve, seconds * 1000);
  });
}
const iframeBaseStyle = {
  height: "100%",
  width: "100%",
  border: "none",
  backgroundColor: "transparent",
  colorScheme: "light",
  position: "fixed",
  top: "0px",
  right: "0px",
  zIndex: "2147483646",
  display: "none"
};

// Global var to help track iframe state
const isIframeLoaded = new Map();
class IframeCommunicator {
  constructor(_ref) {
    let {
      link,
      iframeId,
      container = document.body,
      iframeStyles,
      onIframeInitialize
    } = _ref;
    defineProperty._defineProperty(this, "POLLING_INTERVAL_SECONDS", 1.4);
    this.iframeBaseUrl = GET_IFRAME_BASE_URL();

    // Creating the IFrame element for communication
    let iframe = document.getElementById(iframeId);
    const hrefLink = new URL(link);
    const sdkVersion = "1.3.0";
    hrefLink.searchParams.set("sdkVersion", sdkVersion);
    if (!iframe || iframe.src !== hrefLink.href) {
      // ! Do not update the hrefLink here or it'll cause multiple re-renders
      if (!iframe) {
        iframe = document.createElement("iframe");
        const mergedIframeStyles = {
          ...iframeBaseStyle,
          ...iframeStyles
        };
        Object.assign(iframe.style, mergedIframeStyles);
        iframe.setAttribute("id", iframeId);
        iframe.setAttribute("fetchpriority", "high");
        container.appendChild(iframe);
      }
      iframe.src = hrefLink.href;
      iframe.setAttribute("data-version", sdkVersion);
      const onIframeLoaded = event => {
        if (event.data.eventType === "ewsIframeLoaded") {
          window.removeEventListener("message", onIframeLoaded);
          if (!iframe) {
            console.warn("thirdweb Iframe not found");
            return;
          }
          this.onIframeLoadHandler(iframe, onIframeInitialize)();
        }
      };
      window.addEventListener("message", onIframeLoaded);
    }
    this.iframe = iframe;
  }
  async onIframeLoadedInitVariables() {
    return {};
  }
  onIframeLoadHandler(iframe, onIframeInitialize) {
    return async () => {
      const promise = new Promise(async (res, rej) => {
        const channel = new MessageChannel();
        channel.port1.onmessage = event => {
          const {
            data
          } = event;
          channel.port1.close();
          if (!data.success) {
            return rej(new Error(data.error));
          }
          isIframeLoaded.set(iframe.src, true);
          if (onIframeInitialize) {
            onIframeInitialize();
          }
          return res(true);
        };
        const INIT_IFRAME_EVENT = "initIframe";
        iframe?.contentWindow?.postMessage(
        // ? We initialise the iframe with a bunch
        // of useful information so that we don't have to pass it
        // through in each of the future call. This would be where we do it.
        {
          eventType: INIT_IFRAME_EVENT,
          data: await this.onIframeLoadedInitVariables()
        }, this.iframeBaseUrl, [channel.port2]);
      });
      await promise;
    };
  }
  async call(_ref2) {
    let {
      procedureName,
      params,
      showIframe = false
    } = _ref2;
    while (!isIframeLoaded.get(this.iframe.src)) {
      await sleep(this.POLLING_INTERVAL_SECONDS);
    }
    if (showIframe) {
      this.iframe.style.display = "block";
      // magic number to let the display render before performing the animation of the modal in
      await sleep(0.005);
    }
    const promise = new Promise((res, rej) => {
      const channel = new MessageChannel();
      channel.port1.onmessage = async event => {
        const {
          data
        } = event;
        channel.port1.close();
        if (showIframe) {
          // magic number to let modal fade out before hiding it
          await sleep(0.1);
          this.iframe.style.display = "none";
        }
        if (!data.success) {
          rej(new Error(data.error));
        } else {
          res(data.data);
        }
      };
      this.iframe.contentWindow?.postMessage({
        eventType: procedureName,
        data: params
      }, this.iframeBaseUrl, [channel.port2]);
    });
    return promise;
  }

  /**
   * This has to be called by any iframe that will be removed from the DOM.
   * Use to make sure that we reset the global loaded state of the particular iframe.src
   */
  destroy() {
    isIframeLoaded.delete(this.iframe.src);
  }
}

class EmbeddedWalletIframeCommunicator extends IframeCommunicator {
  constructor(_ref) {
    let {
      clientId,
      customizationOptions
    } = _ref;
    super({
      iframeId: EMBEDDED_WALLET_IFRAME_ID,
      link: createEmbeddedWalletIframeLink({
        clientId,
        path: EMBEDDED_WALLET_PATH,
        queryParams: customizationOptions
      }).href,
      container: document.body
    });
    this.clientId = clientId;
  }
  async onIframeLoadedInitVariables() {
    const localStorage = new LocalStorage({
      clientId: this.clientId
    });
    return {
      authCookie: await localStorage.getAuthCookie(),
      deviceShareStored: await localStorage.getDeviceShare(),
      walletUserId: await localStorage.getWalletUserId(),
      clientId: this.clientId
    };
  }
}

// This is the URL and ID tag of the iFrame that we communicate with
function createEmbeddedWalletIframeLink(_ref2) {
  let {
    clientId,
    path,
    queryParams
  } = _ref2;
  const embeddedWalletUrl = new URL(`${path}`, GET_IFRAME_BASE_URL());
  if (queryParams) {
    for (const queryKey of Object.keys(queryParams)) {
      embeddedWalletUrl.searchParams.set(queryKey, queryParams[queryKey]?.toString() || "");
    }
  }
  embeddedWalletUrl.searchParams.set("clientId", clientId);
  return embeddedWalletUrl;
}
const EMBEDDED_WALLET_IFRAME_ID = "thirdweb-embedded-wallet-iframe";

class AbstractLogin {
  /**
   * Used to manage the user's auth states. This should not be instantiated directly.
   * Call {@link EmbeddedWalletSdk.auth} instead.
   *
   */
  constructor(_ref) {
    let {
      querier,
      preLogin,
      postLogin,
      clientId
    } = _ref;
    this.LoginQuerier = querier;
    this.preLogin = preLogin;
    this.postLogin = postLogin;
    this.clientId = clientId;
  }
  async sendEmailLoginOtp(_ref2) {
    let {
      email
    } = _ref2;
    await this.preLogin();
    const result = await this.LoginQuerier.call({
      procedureName: "sendThirdwebEmailLoginOtp",
      params: {
        email
      }
    });
    return result;
  }
}

class BaseLogin extends AbstractLogin {
  constructor() {
    super(...arguments);
    defineProperty._defineProperty(this, "closeWindow", _ref => {
      let {
        isWindowOpenedByFn,
        win,
        closeOpenedWindow
      } = _ref;
      if (isWindowOpenedByFn) {
        win?.close();
      } else {
        if (win && closeOpenedWindow) {
          closeOpenedWindow(win);
        } else if (win) {
          win.close();
        }
      }
    });
  }
  async getGoogleLoginUrl() {
    const result = await this.LoginQuerier.call({
      procedureName: "getHeadlessGoogleLoginLink",
      params: undefined
    });
    return result;
  }
  async loginWithModal() {
    await this.preLogin();
    const result = await this.LoginQuerier.call({
      procedureName: "loginWithThirdwebModal",
      params: undefined,
      showIframe: true
    });
    return this.postLogin(result);
  }
  async loginWithEmailOtp(_ref2) {
    let {
      email
    } = _ref2;
    await this.preLogin();
    const result = await this.LoginQuerier.call({
      procedureName: "loginWithThirdwebModal",
      params: {
        email
      },
      showIframe: true
    });
    return this.postLogin(result);
  }
  async loginWithGoogle(args) {
    await this.preLogin();
    let win = args?.openedWindow;
    let isWindowOpenedByFn = false;
    if (!win) {
      win = window.open("", "Login", "width=350, height=500");
      isWindowOpenedByFn = true;
    }
    if (!win) {
      throw new Error("Something went wrong opening pop-up");
    }
    await this.preLogin();
    // fetch the url to open the login window from iframe
    const {
      loginLink
    } = await this.getGoogleLoginUrl();
    win.location.href = loginLink;

    // listen to result from the login window
    const result = await new Promise((resolve, reject) => {
      // detect when the user closes the login window
      const pollTimer = window.setInterval(async () => {
        if (!win) {
          return;
        }
        if (win.closed) {
          clearInterval(pollTimer);
          window.removeEventListener("message", messageListener);
          reject(new Error("User closed login window"));
        }
      }, 1000);
      const messageListener = async event => {
        if (event.origin !== GET_IFRAME_BASE_URL()) {
          return;
        }
        if (typeof event.data !== "object") {
          reject(new Error("Invalid event data"));
          return;
        }
        switch (event.data.eventType) {
          case "userLoginSuccess":
            {
              window.removeEventListener("message", messageListener);
              clearInterval(pollTimer);
              this.closeWindow({
                isWindowOpenedByFn,
                win,
                closeOpenedWindow: args?.closeOpenedWindow
              });
              if (event.data.authResult) {
                resolve(event.data.authResult);
              }
              break;
            }
          case "userLoginFailed":
            {
              window.removeEventListener("message", messageListener);
              clearInterval(pollTimer);
              this.closeWindow({
                isWindowOpenedByFn,
                win,
                closeOpenedWindow: args?.closeOpenedWindow
              });
              reject(new Error(event.data.error));
              break;
            }
          case "injectDeveloperClientId":
            {
              win?.postMessage({
                eventType: "injectDeveloperClientIdResult",
                developerClientId: this.clientId
              }, GET_IFRAME_BASE_URL());
              break;
            }
        }
      };
      window.addEventListener("message", messageListener);
    });
    return this.postLogin({
      storedToken: {
        ...result.storedToken,
        shouldStoreCookieString: true
      },
      walletDetails: {
        ...result.walletDetails,
        isIframeStorageEnabled: false
      }
    });
  }
  async verifyEmailLoginOtp(_ref3) {
    let {
      email,
      otp
    } = _ref3;
    const result = await this.LoginQuerier.call({
      procedureName: "verifyThirdwebEmailLoginOtp",
      params: {
        email,
        otp
      }
    });
    return this.postLogin(result);
  }
}

class Auth {
  /**
   * Used to manage the user's auth states. This should not be instantiated directly.
   * Call {@link EmbeddedWalletSdk.auth} instead.
   *
   * @param {string} params.clientId the clientId from your thirdweb dashboard
   */
  constructor(_ref) {
    let {
      clientId,
      querier,
      onAuthSuccess
    } = _ref;
    this.clientId = clientId;
    this.AuthQuerier = querier;
    this.localStorage = new LocalStorage({
      clientId
    });
    this.onAuthSuccess = onAuthSuccess;
    this.BaseLogin = new BaseLogin({
      postLogin: async result => {
        return this.postLogin(result);
      },
      preLogin: async () => {
        await this.preLogin();
      },
      querier: querier,
      clientId
    });
  }
  async preLogin() {
    await this.logout();
  }
  async postLogin(_ref2) {
    let {
      storedToken,
      walletDetails
    } = _ref2;
    if (storedToken.shouldStoreCookieString) {
      await this.localStorage.saveAuthCookie(storedToken.cookieString);
    }
    const initializedUser = await this.onAuthSuccess({
      storedToken,
      walletDetails
    });
    return initializedUser;
  }

  /**
   * @description
   * Used to log the user into their thirdweb wallet on your platform via a myriad of auth providers
   *
   * @example
   * const thirdwebEmbeddedWallet = new EmbeddedWalletSdk({clientId: "YOUR_CLIENT_ID", chain: "Polygon"})
   * try {
   *   const user = await thirdwebEmbeddedWallet.auth.loginWithModal();
   *   // user is now logged in
   * } catch (e) {
   *   // User closed modal or something else went wrong during the authentication process
   *   console.error(e)
   * }
   *
   * @param {(userWalletId: string) => Promise<string | undefined>} args.getRecoveryCode Only present when using RecoveryShareManagement.USER_MANAGED recovery share management. A function that returns the recovery code for a given userWalletId.
   *
   * @returns {{user: InitializedUser}} An InitializedUser object. See {@link EmbeddedWalletSdk.getUser} for more
   */
  async loginWithModal() {
    await this.preLogin();
    return this.BaseLogin.loginWithModal();
  }

  /**
   * @description
   * Used to log the user into their thirdweb wallet using email OTP
   *
   * @example
   *  // Basic Flow
   *  const thirdwebEmbeddedWallet = new EmbeddedWalletSdk({clientId: "", chain: "Polygon"});
   *  try {
   *    // prompts user to enter the code they received
   *    const user = await thirdwebEmbeddedWallet.auth.loginWithThirdwebEmailOtp({ email : "you@example.com" });
   *    // user is now logged in
   *  } catch (e) {
   *    // User closed the OTP modal or something else went wrong during the authentication process
   *    console.error(e)
   *  }
   *
   * @param {string} props.email We will send the email an OTP that needs to be entered in order for them to be logged in.
   * @returns {{user: InitializedUser}} An InitializedUser object. See {@link EmbeddedWalletSdk.getUser} for more
   */
  async loginWithEmailOtp(args) {
    return this.BaseLogin.loginWithEmailOtp(args);
  }
  async loginWithGoogle(args) {
    return this.BaseLogin.loginWithGoogle(args);
  }

  /**
   * A headless way to initiate login with google.
   * @returns {{user: InitializedUser}} An InitializedUser object. See {@link EmbeddedWalletSdk.getUser} for more
    */

  /**
   * @description
   * A headless way to send the users at {email} an OTP code.
   * You need to then call {@link Auth.verifyEmailLoginOtp} in order to complete the login process
   *
   * @example
   *  const thirdwebEmbeddedWallet = new EmbeddedWalletSdk({clientId: "", chain: "Polygon"});
   *  // sends user an OTP code
   * try {
   *    await thirdwebEmbeddedWallet.auth.sendEmailLoginOtp({ email : "you@example.com" });
   * } catch(e) {
   *    // Error Sending user's email an OTP code
   *    console.error(e);
   * }
   *
   * // Then when your user is ready to verify their OTP
   * try {
   *    const user = await thirdwebEmbeddedWallet.auth.verifyEmailLoginOtp({ email: "you@example.com", otp: "6-DIGIT_CODE_HERE" });
   * } catch(e) {
   *    // Error verifying the OTP code
   *    console.error(e)
   * }
   *
   * @param {string} props.email We will send the email an OTP that needs to be entered in order for them to be logged in.
   * @returns {{ isNewUser: boolean }} IsNewUser indicates if the user is a new user to your platform
   */
  async sendEmailLoginOtp(_ref3) {
    let {
      email
    } = _ref3;
    return this.BaseLogin.sendEmailLoginOtp({
      email
    });
  }

  /**
   *  @description
   * Used to verify the otp that the user receives from thirdweb
   *
   * See {@link Auth.sendEmailLoginOtp} for how the headless call flow looks like. Simply swap out the calls to `loginWithThirdwebEmailOtp` with `verifyThirdwebEmailLoginOtp`
   *
   * @param {string} props.email We will send the email an OTP that needs to be entered in order for them to be logged in.
   * @param {string} props.otp The code that the user received in their email
   * @returns {{user: InitializedUser}} An InitializedUser object containing the user's status, wallet, authDetails, and more
   */
  async verifyEmailLoginOtp(args) {
    return this.BaseLogin.verifyEmailLoginOtp(args);
  }

  /**
   * @description
   * Logs any existing user out of their wallet.
   * @returns {{success: boolean}} true if a user is successfully logged out. false if there's no user currently logged in.
   */
  async logout() {
    const {
      success
    } = await this.AuthQuerier.call({
      procedureName: "logout",
      params: undefined
    });
    const isRemoveAuthCookie = await this.localStorage.removeAuthCookie();
    const isRemoveUserId = await this.localStorage.removeWalletUserId();
    return {
      success: success || isRemoveAuthCookie || isRemoveUserId
    };
  }
}

class EthersSigner extends ethers.Signer {
  constructor(_ref) {
    let {
      provider,
      clientId,
      querier
    } = _ref;
    super();
    defineProperty._defineProperty(this, "DEFAULT_ETHEREUM_CHAIN_ID", 5);
    this.clientId = clientId;
    this.querier = querier;
    // we try to extract a url if possible
    this.endpoint = provider.connection?.url;
    utils.defineReadOnly(this, "provider", provider);
  }
  async getAddress() {
    const {
      address
    } = await this.querier.call({
      procedureName: "getAddress",
      params: undefined
    });
    return address;
  }
  async signMessage(message) {
    const {
      signedMessage
    } = await this.querier.call({
      procedureName: "signMessage",
      params: {
        message,
        chainId: (await this.provider?.getNetwork())?.chainId ?? this.DEFAULT_ETHEREUM_CHAIN_ID,
        rpcEndpoint: this.endpoint
      }
    });
    return signedMessage;
  }
  async signTransaction(transaction) {
    const {
      signedTransaction
    } = await this.querier.call({
      procedureName: "signTransaction",
      params: {
        transaction,
        chainId: (await this.provider?.getNetwork())?.chainId ?? this.DEFAULT_ETHEREUM_CHAIN_ID,
        rpcEndpoint: this.endpoint
      }
    });
    return signedTransaction;
  }
  async _signTypedData(domain, types, message) {
    const {
      signedTypedData
    } = await this.querier.call({
      procedureName: "signTypedDataV4",
      params: {
        domain,
        types,
        message,
        chainId: (await this.provider?.getNetwork())?.chainId ?? this.DEFAULT_ETHEREUM_CHAIN_ID,
        rpcEndpoint: this.endpoint
      }
    });
    return signedTypedData;
  }
  connect(provider) {
    return new EthersSigner({
      clientId: this.clientId,
      provider,
      querier: this.querier
    });
  }
}

class EmbeddedWallet {
  /**
   * Not meant to be initialized directly. Call {@link .initializeUser} to get an instance
   * @param param0
   */
  constructor(_ref) {
    let {
      clientId,
      chain,
      querier
    } = _ref;
    this.clientId = clientId;
    this.chain = chain;
    this.walletManagerQuerier = querier;
    this.localStorage = new LocalStorage({
      clientId
    });
  }

  /**
   * @internal
   * Used to set-up the user device in the case that they are using incognito
   * @param {string} param.deviceShareStored the value that is saved for the user's device share.
   * We save this into the localStorage on the site itself if we could not save it within the iframe's localStorage.
   * This happens in incognito mostly
   * @param {string} param.walletAddress User's wallet address
   * @param {boolean} param.isIframeStorageEnabled Tells us if we were able to store values in the localStorage in our iframe.
   * We need to store it under the dev's domain localStorage if we weren't able to store things in the iframe
   * @returns {{ walletAddress : string }} The user's wallet details
   */
  async postWalletSetUp(_ref2) {
    let {
      deviceShareStored,
      walletAddress,
      isIframeStorageEnabled,
      walletUserId
    } = _ref2;
    if (!isIframeStorageEnabled) {
      await this.localStorage.saveDeviceShare(deviceShareStored, walletUserId);
    }
    return {
      walletAddress
    };
  }

  /**
   * @internal
   * Gets the various status states of the user
   * @example
   *  const userStatus = await Paper.getUserWalletStatus();
   *  switch (userStatus.status) {
   *  case UserWalletStatus.LOGGED_OUT: {
   *    // User is logged out, call one of the auth methods on Paper.auth to authenticate the user
   *    break;
   *  }
   *  case UserWalletStatus.LOGGED_IN_WALLET_UNINITIALIZED: {
   *    // User is logged in, but does not have a wallet associated with it
   *    // you also have access to the user's details
   *    userStatus.user.authDetails;
   *    break;
   *  }
   *  case UserWalletStatus.LOGGED_IN_NEW_DEVICE: {
   *    // User is logged in and created a wallet already, but is missing the device shard
   *    // You have access to:
   *    userStatus.user.authDetails;
   *    userStatus.user.walletAddress;
   *    break;
   *  }
   *  case UserWalletStatus.LOGGED_IN_WALLET_INITIALIZED: {
   *    // user is logged in and wallet is all set up.
   *    // You have access to:
   *    userStatus.user.authDetails;
   *    userStatus.user.walletAddress;
   *    userStatus.user.wallet;
   *    break;
   *  }
   *}
   * @returns {GetUserWalletStatusFnReturnType} an object to containing various information on the user statuses
   */
  async getUserWalletStatus() {
    const userStatus = await this.walletManagerQuerier.call({
      procedureName: "getUserStatus",
      params: undefined
    });
    if (userStatus.status === UserWalletStatus.LOGGED_IN_WALLET_INITIALIZED) {
      return {
        status: UserWalletStatus.LOGGED_IN_WALLET_INITIALIZED,
        user: {
          ...userStatus.user,
          wallet: this
        }
      };
    }
    return userStatus;
  }

  /**
   * @description
   * Switches the chain that the user wallet is currently on.
   * @example
   * // user wallet will be set to Polygon
   * const Paper = new ThirdwebEmbeddedWalletSdk({clientId: "", chain: "Polygon"});
   * const user = await Paper.initializeUser();
   * // Switch the user wallet to Mumbai
   * await user.wallet.setChain({ chain: "Mumbai" });
   * @param {Chain} params.chain The chain that we are changing the user wallet too
   */
  async setChain(_ref3) {
    let {
      chain
    } = _ref3;
    this.chain = chain;
  }

  /**
   * Returns an Ethers.Js compatible signer that you can use in conjunction with the rest of dApp
   * @example
   * const Paper = new ThirdwebEmbeddedWalletSdk({clientId: "", chain: "Polygon"});
   * const user = await Paper.getUser();
   * if (user.status === UserStatus.LOGGED_IN_WALLET_INITIALIZED) {
   *    // returns a signer on the Polygon mainnet
   *    const signer = await user.getEthersJsSigner();
   *    // returns a signer on the specified RPC endpoints
   *    const signer = await user.getEthersJsSigner({rpcEndpoint: "https://eth-rpc.gateway.pokt.network"});
   * }
   * @param {Networkish} network.rpcEndpoint the rpc url where calls will be routed through
   * @throws If attempting to call the function without the user wallet initialize on their current device. This should never happen if call {@link ThirdwebEmbeddedWalletSdk.initializeUser} before accessing this function
   * @returns A signer that is compatible with Ether.js. Defaults to the public rpc on the chain specified when initializing the {@link ThirdwebEmbeddedWalletSdk} instance
   */
  async getEthersJsSigner(network) {
    const signer = new EthersSigner({
      clientId: this.clientId,
      provider: ethers.getDefaultProvider(network?.rpcEndpoint ?? sdkCommonUtilities.ChainToPublicRpc[this.chain]),
      querier: this.walletManagerQuerier
    });
    return signer;
  }
}

class EmbeddedWalletSdk {
  /**
   * Used to manage the Auth state of the user.
   */

  isClientIdLegacyPaper(clientId) {
    if (clientId.indexOf("-") > 0 && clientId.length === 36) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * @example
   * const thirdwebEmbeddedWallet = new EmbeddedWalletSdk({ clientId: "", chain: "Goerli" });
   * @param {string} initParams.clientId the clientId found on the {@link https://thirdweb.com/dashboard/settings dashboard settings}
   * @param {Chain} initParams.chain sets the default chain that the EmbeddedWallet will live on.
   * @param {CustomizationOptionsType} initParams.styles sets the default style override for any modal that pops up asking for user's details when creating wallet or logging in.
   */
  constructor(_ref) {
    let {
      clientId,
      chain,
      styles
    } = _ref;
    if (this.isClientIdLegacyPaper(clientId)) {
      throw new Error("You are using a legacy clientId. Please use the clientId found on the thirdweb dashboard settings page");
    }
    this.clientId = clientId;
    this.querier = new EmbeddedWalletIframeCommunicator({
      clientId,
      customizationOptions: styles
    });
    this.wallet = new EmbeddedWallet({
      clientId,
      chain,
      querier: this.querier
    });
    this.auth = new Auth({
      clientId,
      querier: this.querier,
      onAuthSuccess: async authResult => {
        await this.wallet.postWalletSetUp({
          ...authResult.walletDetails,
          walletUserId: authResult.storedToken.authDetails.userWalletId
        });
        await this.querier.call({
          procedureName: "initIframe",
          params: {
            deviceShareStored: authResult.walletDetails.deviceShareStored,
            clientId: this.clientId,
            walletUserId: authResult.storedToken.authDetails.userWalletId,
            authCookie: authResult.storedToken.cookieString
          }
        });
        return {
          user: {
            status: UserStatus.LOGGED_IN_WALLET_INITIALIZED,
            authDetails: authResult.storedToken.authDetails,
            wallet: this.wallet,
            walletAddress: authResult.walletDetails.walletAddress
          }
        };
      }
    });
  }

  /**
   * Gets the usr if they are logged in
   * @example
   *  const user = await thirdwebEmbeddedWallet.getUser();
   *  switch (user.status) {
   *     case UserStatus.LOGGED_OUT: {
   *       // User is logged out, call one of the auth methods on thirdwebEmbeddedWallet.auth to authenticate the user
   *       break;
   *     }
   *     case UserStatus.LOGGED_IN_WALLET_INITIALIZED: {
   *       // user is logged in and wallet is all set up.
   *       // You have access to:
   *       user.status;
   *       user.authDetails;
   *       user.walletAddress;
   *       user.wallet;
   *       break;
   *     }
   *}
   * @returns {GetUser} an object to containing various information on the user statuses
   */
  async getUser() {
    const userStatus = await this.wallet.getUserWalletStatus();
    switch (userStatus.status) {
      // user gets {UserWalletStatus.LOGGED_IN_NEW_DEVICE} when they log in but never complete the recovery flow and exits (close modal, refresh etc)
      case UserWalletStatus.LOGGED_IN_NEW_DEVICE:
      // User gets {UserWalletStatus.LOGGED_IN_WALLET_UNINITIALIZED} when they log in but manage to exit the client in the small window between auth completion and sending them their wallet recovery details
      case UserWalletStatus.LOGGED_IN_WALLET_UNINITIALIZED:
        // in both case, we simply log them out to reset their state
        await this.auth.logout();
        return this.getUser();
      case UserWalletStatus.LOGGED_OUT:
        return {
          status: UserStatus.LOGGED_OUT
        };
      case UserWalletStatus.LOGGED_IN_WALLET_INITIALIZED:
        return {
          status: UserStatus.LOGGED_IN_WALLET_INITIALIZED,
          ...userStatus.user
        };
    }
  }
}

exports.AUTH_TOKEN_LOCAL_STORAGE_NAME = AUTH_TOKEN_LOCAL_STORAGE_NAME;
exports.DEVICE_SHARE_LOCAL_STORAGE_NAME = DEVICE_SHARE_LOCAL_STORAGE_NAME;
exports.DEVICE_SHARE_LOCAL_STORAGE_NAME_DEPRECATED = DEVICE_SHARE_LOCAL_STORAGE_NAME_DEPRECATED;
exports.EmbeddedWalletSdk = EmbeddedWalletSdk;
exports.UserStatus = UserStatus;
exports.WALLET_USER_DETAILS_LOCAL_STORAGE_NAME = WALLET_USER_DETAILS_LOCAL_STORAGE_NAME;
exports.WALLET_USER_ID_LOCAL_STORAGE_NAME = WALLET_USER_ID_LOCAL_STORAGE_NAME;
