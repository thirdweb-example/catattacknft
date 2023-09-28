'use strict';

var wallets = require('@thirdweb-dev/wallets');
var reactCore = require('@thirdweb-dev/react-core');
var coinbaseWallet = require('./formFields-823274b5.cjs.dev.js');
var formElements = require('./formElements-40142e26.cjs.dev.js');
var React = require('react');
var jsxRuntime = require('react/jsx-runtime');
require('@emotion/react');
require('@emotion/styled');
require('@radix-ui/react-icons');
require('qrcode');
require('copy-to-clipboard');
require('detect-browser');
require('@radix-ui/colors');

const FrameFailedConnect = props => {
  return /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
    p: "lg",
    children: [/*#__PURE__*/jsxRuntime.jsx(formElements.ModalHeader, {
      onBack: () => props.onBack(),
      title: "Frame"
    }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
      y: "xl"
    }), /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
      children: [/*#__PURE__*/jsxRuntime.jsx(formElements.ModalTitle, {
        children: "Failed to connect to Frame "
      }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
        y: "sm"
      }), /*#__PURE__*/jsxRuntime.jsx(formElements.ModalDescription, {
        sm: true,
        children: "Make sure the desktop app is installed and running. You can download Frame from the link below. Make sure to refresh this page once Frame is running."
      })]
    }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
      y: "lg"
    }), /*#__PURE__*/jsxRuntime.jsxs(coinbaseWallet.ButtonLink, {
      onClick: () => {
        coinbaseWallet.openWindow("https://frame.sh");
      },
      children: [/*#__PURE__*/jsxRuntime.jsx(formElements.Img, {
        width: formElements.iconSize.lg,
        height: formElements.iconSize.lg,
        src: props.walletIconURL
      }), /*#__PURE__*/jsxRuntime.jsx("span", {
        children: "Download Frame"
      })]
    }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
      y: "lg"
    }), /*#__PURE__*/jsxRuntime.jsx(formElements.HelperLink, {
      target: "_blank",
      href: props.supportLink,
      children: "Still having troubles connecting?"
    })]
  });
};
const FrameConnectUI = props => {
  const [screen, setScreen] = React.useState("connecting");
  const connect = reactCore.useConnect();
  const connectPrompted = React.useRef(false);
  const {
    walletConfig,
    close,
    goBack
  } = props;
  const downloadLink = "https://frame.sh";
  const supportLink = "https://docs.frame.sh";
  const hideBackButton = props.supportedWallets.length === 1;
  React.useEffect(() => {
    if (connectPrompted.current) {
      return;
    }

    // if loading
    (async () => {
      // if not mobile we connect
      if (!formElements.isMobile()) {
        try {
          connectPrompted.current = true;
          setScreen("connecting");
          await connect(walletConfig);
          close();
        } catch (e) {
          setScreen("connect-failed");
        }
      }

      // on mobile we open the website
      else if (formElements.isMobile()) {
        coinbaseWallet.openWindow(downloadLink);
      }
    })();
  }, [walletConfig, close, connect, goBack]);
  if (screen === "connecting") {
    return /*#__PURE__*/jsxRuntime.jsx(coinbaseWallet.ConnectingScreen, {
      errorConnecting: false,
      onRetry: () => {
        // NOOP
      },
      onGetStarted: () => {
        setScreen("get-started");
      },
      hideBackButton: hideBackButton,
      onBack: goBack,
      walletName: walletConfig.meta.name,
      walletIconURL: walletConfig.meta.iconURL
    });
  }
  if (screen === "connect-failed") {
    return /*#__PURE__*/jsxRuntime.jsx(FrameFailedConnect, {
      onBack: goBack,
      walletIconURL: walletConfig.meta.iconURL,
      supportLink: supportLink
    });
  }
  if (screen === "get-started") {
    return /*#__PURE__*/jsxRuntime.jsx(coinbaseWallet.GetStartedScreen, {
      walletIconURL: walletConfig.meta.iconURL,
      walletName: walletConfig.meta.name,
      chromeExtensionLink: walletConfig.meta.urls?.chrome,
      googlePlayStoreLink: walletConfig.meta.urls?.android,
      appleStoreLink: walletConfig.meta.urls?.ios,
      onBack: props.goBack
    });
  }
  return null;
};

const frameWallet = config => ({
  id: wallets.FrameWallet.id,
  recommended: config?.recommended,
  meta: {
    name: "Frame",
    iconURL: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMjEuNDE3NEMwIDEzLjkyMDYgMCAxMC4xNzIyIDEuNDUzNiA3LjMwODc4QzIuNzMyMjQgNC43OTAwOCA0Ljc3MjQ3IDIuNzQyMzIgNy4yODE5MSAxLjQ1ODk3QzEwLjEzNDggMCAxMy44Njk0IDAgMjEuMzM4NyAwSDU4LjY2MTNDNjYuMTMwNiAwIDY5Ljg2NTIgMCA3Mi43MTgxIDEuNDU4OTdDNzUuMjI3NiAyLjc0MjMyIDc3LjI2NzcgNC43OTAwOCA3OC41NDY0IDcuMzA4NzhDODAgMTAuMTcyMiA4MCAxMy45MjA2IDgwIDIxLjQxNzRWNTguNTgyNkM4MCA2Ni4wNzk0IDgwIDY5LjgyNzggNzguNTQ2NCA3Mi42OTEyQzc3LjI2NzcgNzUuMjEgNzUuMjI3NiA3Ny4yNTc2IDcyLjcxODEgNzguNTQxQzY5Ljg2NTIgODAgNjYuMTMwNiA4MCA1OC42NjEzIDgwSDIxLjMzODdDMTMuODY5NCA4MCAxMC4xMzQ4IDgwIDcuMjgxOTEgNzguNTQxQzQuNzcyNDcgNzcuMjU3NiAyLjczMjI0IDc1LjIxIDEuNDUzNiA3Mi42OTEyQzAgNjkuODI3OCAwIDY2LjA3OTQgMCA1OC41ODI2VjIxLjQxNzRaIiBmaWxsPSIjMjYyRDM0Ii8+CjxtYXNrIGlkPSJtYXNrMF8yNF83OCIgc3R5bGU9Im1hc2stdHlwZTpsdW1pbmFuY2UiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjE3IiB5PSIxNyIgd2lkdGg9IjQ3IiBoZWlnaHQ9IjQ3Ij4KPHBhdGggZD0iTTYzLjY2NjcgMTdIMTdWNjMuNjY2N0g2My42NjY3VjE3WiIgZmlsbD0id2hpdGUiLz4KPC9tYXNrPgo8ZyBtYXNrPSJ1cmwoI21hc2swXzI0Xzc4KSI+CjxwYXRoIGQ9Ik02MS4xNDE3IDQwLjA3MzhWMjIuMzcxN0M2MS4xNDE3IDIwLjgxNTIgNTkuODY0IDE5LjUzMzIgNTguMzEyNSAxOS41MzMySDQwLjYzNzVDNDAuNDU1IDE5LjUzMzIgNDAuMzAyOCAxOS40NzIyIDQwLjE1MDggMTkuMzUwMkwzOC4wMjEzIDE3LjIxMzdDMzcuODk5NyAxNy4wOTE1IDM3LjcxNyAxNyAzNy41MzQ1IDE3SDE5LjgyOTJDMTguMjc3NyAxNyAxNyAxOC4yNTEzIDE3IDE5LjgzODVWMzcuNTQwN0MxNyAzNy43MjM4IDE3LjA2MDggMzcuODc2MyAxNy4xODI1IDM4LjAyOUwxOS4zMTIgNDAuMTY1NUMxOS40MzM3IDQwLjI4NzUgMTkuNTI1IDQwLjQ3MDcgMTkuNTI1IDQwLjY1MzhWNTguMzU2QzE5LjUyNSA1OS45MTI1IDIwLjgwMjcgNjEuMTk0NSAyMi4zNTQyIDYxLjE5NDVINDAuMDU5NUM0MC4yNDIgNjEuMTk0NSA0MC4zOTQyIDYxLjI1NTUgNDAuNTQ2MyA2MS4zNzc3TDQyLjY3NTggNjMuNTE0QzQyLjc5NzUgNjMuNjM2MiA0Mi45OCA2My42OTcyIDQzLjE2MjUgNjMuNjk3Mkg2MC44Njc4QzYyLjQxOTMgNjMuNjk3MiA2My42OTcyIDYyLjQ0NTggNjMuNjk3MiA2MC44NTg3VjQzLjE1NjVDNjMuNjk3MiA0Mi45NzMzIDYzLjYzNjIgNDIuODIwOCA2My41MTQ1IDQyLjY2ODJMNjEuMzg1IDQwLjUzMTdDNjEuMjMzIDQwLjQwOTcgNjEuMTQxNyA0MC4yNTcgNjEuMTQxNyA0MC4wNzM4Wk00OS4xMjUyIDQ5LjUzNTVIMzEuNTcyQzMxLjM1OSA0OS41MzU1IDMxLjE3NjUgNDkuMzUyMyAzMS4xNzY1IDQ5LjEzODdWMzEuNTU4NUMzMS4xNzY1IDMxLjM0NDggMzEuMzU5IDMxLjE2MTggMzEuNTcyIDMxLjE2MThINDkuMTI1MkM0OS4zMzgyIDMxLjE2MTggNDkuNTIwNyAzMS4zNDQ4IDQ5LjUyMDcgMzEuNTU4NVY0OS4xMzg3QzQ5LjU1MSA0OS4zNTIzIDQ5LjM2ODUgNDkuNTM1NSA0OS4xMjUyIDQ5LjUzNTVaIiBmaWxsPSIjRDZGOUY4Ii8+CjwvZz4KPC9zdmc+Cg==",
    urls: {
      chrome: "https://chrome.google.com/webstore/detail/frame-companion/ldcoohedfbjoobcadoglnnmmfbdlmmhf",
      firefox: "https://addons.mozilla.org/en-US/firefox/addon/frame-extension"
    }
  },
  create(options) {
    return new wallets.FrameWallet(options);
  },
  connectUI: FrameConnectUI,
  isInstalled() {
    const window_ = globalThis?.window;
    if (wallets.assertWindowEthereum(window_)) {
      return window_.ethereum?.isFrame || window_.ethereum?.providers?.some(p => p.isFrame) || false;
    }
    return false;
  }
});

exports.frameWallet = frameWallet;
