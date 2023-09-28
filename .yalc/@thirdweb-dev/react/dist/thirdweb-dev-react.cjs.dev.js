'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var useWalletConnect = require('./useWalletConnect-80e25c20.cjs.dev.js');
var coinbaseWallet = require('./formFields-823274b5.cjs.dev.js');
var reactCore = require('@thirdweb-dev/react-core');
var React = require('react');
var bloctoWallet = require('./bloctoWallet-407626c4.cjs.dev.js');
var wallets = require('@thirdweb-dev/wallets');
var formElements = require('./formElements-40142e26.cjs.dev.js');
var Tooltip = require('./Tooltip-34586138.cjs.dev.js');
var styled = require('@emotion/styled');
var paperWallet = require('./paperWallet-8856f37e.cjs.dev.js');
var InputSelectionUI = require('./InputSelectionUI-5627d3d6.cjs.dev.js');
var jsxRuntime = require('react/jsx-runtime');
var frameWallet = require('./frameWallet-a92fba2b.cjs.dev.js');
var reactIcons = require('@radix-ui/react-icons');
var magicLink = require('./magicLink-4ab7352a.cjs.dev.js');
var safeWallet = require('./safeWallet-6e0c4489.cjs.dev.js');
var walletConnectV1 = require('./walletConnectV1-1f532529.cjs.dev.js');
var useSafe = require('./useSafe-04576db9.cjs.dev.js');
var useMagic = require('./useMagic-d6cf8cb5.cjs.dev.js');
require('@tanstack/react-query');
require('@emotion/react');
require('@radix-ui/react-popover');
require('copy-to-clipboard');
require('ethers');
require('@radix-ui/react-tabs');
require('fuse.js');
require('@radix-ui/react-dropdown-menu');
require('@thirdweb-dev/chains');
require('@thirdweb-dev/sdk');
require('@thirdweb-dev/sdk/evm');
require('tiny-invariant');
require('@radix-ui/react-dialog');
require('qrcode');
require('detect-browser');
require('@radix-ui/colors');
require('@radix-ui/react-tooltip');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefault(styled);

function useSmartWallet() {
  const connect = reactCore.useConnect();
  return React.useCallback(async (wallet, options) => {
    const {
      smartWallet
    } = await Promise.resolve().then(function () { return smartWallet$1; });
    return connect(smartWallet(wallet, options), options);
  }, [connect]);
}

const EmbeddedWalletFormUI = props => {
  const createWalletInstance = reactCore.useCreateWalletInstance();
  const setConnectionStatus = reactCore.useSetConnectionStatus();
  const setConnectedWallet = reactCore.useSetConnectedWallet();

  // Need to trigger google login on button click to avoid popup from being blocked
  const googleLogin = async () => {
    try {
      const embeddedWallet = createWalletInstance(props.walletConfig);
      setConnectionStatus("connecting");
      const googleWindow = window.open("", "Login", "width=350, height=500");
      if (!googleWindow) {
        throw new Error("Failed to open google login window");
      }
      await embeddedWallet.connect({
        loginType: "headless_google_oauth",
        openedWindow: googleWindow,
        closeOpenedWindow: openedWindow => {
          openedWindow.close();
        }
      });
      setConnectedWallet(embeddedWallet);
    } catch (e) {
      setConnectionStatus("disconnected");
      console.error(e);
    }
  };
  return /*#__PURE__*/jsxRuntime.jsxs("div", {
    children: [/*#__PURE__*/jsxRuntime.jsxs(SocialButton, {
      variant: "secondary",
      fullWidth: true,
      onClick: () => {
        googleLogin();
        props.onSelect({
          google: true
        });
      },
      children: [/*#__PURE__*/jsxRuntime.jsx(paperWallet.GoogleIcon, {
        size: formElements.iconSize.md
      }), "Sign in with Google"]
    }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
      y: "lg"
    }), /*#__PURE__*/jsxRuntime.jsx(formElements.TextDivider, {
      children: /*#__PURE__*/jsxRuntime.jsx("span", {
        children: "OR"
      })
    }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
      y: "lg"
    }), /*#__PURE__*/jsxRuntime.jsx(InputSelectionUI.InputSelectionUI, {
      onSelect: email => props.onSelect({
        email
      }),
      placeholder: "Enter your email address",
      name: "email",
      type: "email",
      errorMessage: _input => {
        const input = _input.replace(/\+/g, "");
        const emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,})$/g;
        const isValidEmail = emailRegex.test(input);
        if (!isValidEmail) {
          return "Invalid email address";
        }
      },
      emptyErrorMessage: "email address is required",
      showOrSeparator: props.showOrSeparator
    })]
  });
};
const EmbeddedWalletFormUIScreen = props => {
  const isCompact = props.modalSize === "compact";
  return /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
    fullHeight: true,
    flex: "column",
    p: "lg",
    animate: "fadein",
    style: {
      minHeight: "250px"
    },
    children: [/*#__PURE__*/jsxRuntime.jsx(formElements.ModalHeader, {
      onBack: props.onBack,
      title: "Sign in"
    }), isCompact ? /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
      y: "xl"
    }) : null, /*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
      expand: true,
      flex: "column",
      center: "y",
      p: isCompact ? undefined : "lg",
      children: /*#__PURE__*/jsxRuntime.jsx(EmbeddedWalletFormUI, {
        walletConfig: props.walletConfig,
        onSelect: props.onSelect,
        showOrSeparator: false
      })
    })]
  });
};
const SocialButton = styled__default["default"](formElements.Button)`
  display: flex;
  justify-content: center;
  gap: ${formElements.spacing.sm};
`;

const EmbeddedWalletGoogleLogin = props => {
  const {
    goBack,
    modalSize
  } = props;
  const createWalletInstance = reactCore.useCreateWalletInstance();
  const setConnectionStatus = reactCore.useSetConnectionStatus();
  const setConnectedWallet = reactCore.useSetConnectedWallet();
  const connectionStatus = reactCore.useConnectionStatus();
  const googleLogin = async () => {
    try {
      const embeddedWallet = createWalletInstance(props.walletConfig);
      setConnectionStatus("connecting");
      const googleWindow = window.open("", "Login", "width=350, height=500");
      if (!googleWindow) {
        throw new Error("Failed to open google login window");
      }
      await embeddedWallet.connect({
        loginType: "headless_google_oauth",
        openedWindow: googleWindow,
        closeOpenedWindow: openedWindow => {
          openedWindow.close();
        }
      });
      setConnectedWallet(embeddedWallet);
      props.close();
    } catch (e) {
      setConnectionStatus("disconnected");
      console.error("Error logging into google", e);
    }
  };
  const closeModal = props.close;
  React.useEffect(() => {
    if (connectionStatus === "connected") {
      closeModal();
    }
  }, [connectionStatus, closeModal]);
  return /*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
    animate: "fadein",
    flex: "column",
    fullHeight: true,
    children: /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
      flex: "column",
      expand: true,
      p: "lg",
      style: {
        paddingBottom: 0
      },
      children: [/*#__PURE__*/jsxRuntime.jsx(formElements.ModalHeader, {
        title: /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
          flex: "row",
          center: "both",
          gap: "xs",
          children: [/*#__PURE__*/jsxRuntime.jsx(paperWallet.GoogleIcon, {
            size: formElements.iconSize.md
          }), /*#__PURE__*/jsxRuntime.jsx(formElements.ModalTitle, {
            children: " Sign in "
          })]
        }),
        onBack: goBack
      }), modalSize === "compact" ? /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
        y: "xl"
      }) : null, /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
        flex: "column",
        center: "both",
        expand: true,
        style: {
          textAlign: "center",
          minHeight: "250px"
        },
        children: [connectionStatus === "connecting" && /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
          animate: "fadein",
          children: [/*#__PURE__*/jsxRuntime.jsx(formElements.Text, {
            color: "primaryText",
            multiline: true,
            style: {
              maxWidth: "250px"
            },
            children: "Select your Google account in the pop-up"
          }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
            y: "xl"
          }), /*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
            center: "x",
            flex: "row",
            children: /*#__PURE__*/jsxRuntime.jsx(formElements.Spinner, {
              size: "lg",
              color: "accentText"
            })
          }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
            y: "xxl"
          })]
        }), connectionStatus === "disconnected" && /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
          animate: "fadein",
          children: [/*#__PURE__*/jsxRuntime.jsx(formElements.Text, {
            color: "danger",
            children: "Failed to sign in"
          }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
            y: "lg"
          }), /*#__PURE__*/jsxRuntime.jsxs(formElements.Button, {
            variant: "primary",
            onClick: googleLogin,
            children: [" ", "Retry", " "]
          }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
            y: "xxl"
          })]
        })]
      })]
    })
  });
};

const EmbeddedWalletOTPLoginUI = props => {
  const email = props.selectionData;
  const [otpInput, setOtpInput] = React.useState("");
  const {
    createWalletInstance,
    setConnectedWallet,
    setConnectionStatus
  } = reactCore.useWalletContext();
  const [wallet, setWallet] = React.useState(null);
  const [verifyStatus, setVerifyStatus] = React.useState("idle");
  const [sendEmailOtpStatus, setSendEmailOtpStatus] = React.useState("sending");
  const sendEmail = React.useCallback(async () => {
    setOtpInput("");
    setVerifyStatus("idle");
    setSendEmailOtpStatus("sending");
    try {
      const _wallet = createWalletInstance(props.walletConfig);
      setWallet(_wallet);
      const _embeddedWalletSdk = await _wallet.getEmbeddedWalletSDK();
      await _embeddedWalletSdk.auth.sendEmailLoginOtp({
        email: email
      });
      setSendEmailOtpStatus("sent");
    } catch (e) {
      console.error(e);
      setVerifyStatus("idle");
      setSendEmailOtpStatus("error");
    }
  }, [createWalletInstance, email, props.walletConfig]);
  const handleSubmit = () => {
    if (!sendEmailOtpStatus || otpInput.length !== 6) {
      return;
    }
    verifyCodes();
  };
  const verifyCodes = async () => {
    setVerifyStatus("idle");
    if (!wallet) {
      return;
    }
    try {
      setVerifyStatus("verifying");
      setConnectionStatus("connecting");
      await wallet.connect({
        loginType: "headless_email_otp_verification",
        email,
        otp: otpInput
      });
      setConnectedWallet(wallet);
      setVerifyStatus("valid");
      props.close();
    } catch (e) {
      setVerifyStatus("invalid");
      console.error(e);
    }
  };

  // send email on mount
  const emailSentOnMount = React.useRef(false);
  React.useEffect(() => {
    if (!emailSentOnMount.current) {
      emailSentOnMount.current = true;
      sendEmail();
    }
  }, [sendEmail]);
  return /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
    fullHeight: true,
    flex: "column",
    p: "lg",
    animate: "fadein",
    children: [/*#__PURE__*/jsxRuntime.jsx(formElements.ModalHeader, {
      title: "Sign in",
      onBack: props.goBack
    }), /*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
      expand: true,
      flex: "column",
      center: "y",
      children: /*#__PURE__*/jsxRuntime.jsxs("form", {
        onSubmit: e => {
          e.preventDefault();
        },
        children: [/*#__PURE__*/jsxRuntime.jsxs("div", {
          style: {
            textAlign: "center"
          },
          children: [/*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
            y: "xxl"
          }), /*#__PURE__*/jsxRuntime.jsx(formElements.Text, {
            children: "Enter the OTP sent to"
          }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
            y: "sm"
          }), /*#__PURE__*/jsxRuntime.jsx(formElements.Text, {
            color: "primaryText",
            children: email
          }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
            y: "xl"
          })]
        }), /*#__PURE__*/jsxRuntime.jsx(paperWallet.OTPInput, {
          isInvalid: verifyStatus === "invalid",
          digits: 6,
          value: otpInput,
          setValue: value => {
            setOtpInput(value);
            setVerifyStatus("idle");
          },
          onEnter: handleSubmit
        }), verifyStatus === "invalid" && /*#__PURE__*/jsxRuntime.jsxs(paperWallet.FadeIn, {
          children: [/*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
            y: "sm"
          }), /*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
            flex: "row",
            center: "x",
            children: /*#__PURE__*/jsxRuntime.jsxs(formElements.Text, {
              size: "sm",
              color: "danger",
              children: ["Invalid OTP ", ""]
            })
          })]
        }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
          y: "xl"
        }), verifyStatus === "verifying" ? /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
          children: [/*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
            y: "md"
          }), /*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
            flex: "row",
            center: "x",
            children: /*#__PURE__*/jsxRuntime.jsx(formElements.Spinner, {
              size: "md",
              color: "accentText"
            })
          }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
            y: "md"
          })]
        }) : /*#__PURE__*/jsxRuntime.jsx(formElements.Button, {
          onClick: handleSubmit,
          variant: "accent",
          type: "submit",
          style: {
            width: "100%"
          },
          children: "Verify"
        }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
          y: "lg"
        }), sendEmailOtpStatus === "error" && /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
          children: [/*#__PURE__*/jsxRuntime.jsx(formElements.Text, {
            size: "sm",
            center: true,
            color: "danger",
            children: "Failed to send OTP"
          }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
            y: "md"
          })]
        }), sendEmailOtpStatus === "sending" && /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
          flex: "row",
          center: "both",
          gap: "xs",
          style: {
            textAlign: "center"
          },
          children: [/*#__PURE__*/jsxRuntime.jsx(formElements.Text, {
            size: "sm",
            children: "Sending OTP"
          }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spinner, {
            size: "xs",
            color: "secondaryText"
          })]
        }), sendEmailOtpStatus === "sent" && /*#__PURE__*/jsxRuntime.jsx(LinkButton, {
          onClick: sendEmail,
          type: "button",
          children: "Resend OTP"
        })]
      })
    })]
  });
};
const LinkButton = styled__default["default"].button`
  all: unset;
  color: ${p => p.theme.colors.accentText};
  font-size: ${formElements.fontSize.sm};
  cursor: pointer;
  text-align: center;
  width: 100%;
  &:hover {
    color: ${p => p.theme.colors.primaryText};
  }
`;

const embeddedWallet = config => {
  return {
    category: "socialLogin",
    id: wallets.EmbeddedWallet.id,
    recommended: config?.recommended,
    meta: {
      ...wallets.EmbeddedWallet.meta,
      name: "Email",
      iconURL: Tooltip.emailIcon
    },
    create(options) {
      return new wallets.EmbeddedWallet({
        ...options,
        ...config,
        clientId: options?.clientId ?? ""
      });
    },
    selectUI(props) {
      return /*#__PURE__*/jsxRuntime.jsx(EmbeddedWalletSelectionUI, {
        ...props
      });
    },
    connectUI(props) {
      return /*#__PURE__*/jsxRuntime.jsx(EmbeddedWalletConnectUI, {
        ...props
      });
    }
  };
};
const EmbeddedWalletSelectionUI = props => {
  const screen = useWalletConnect.useScreenContext();

  // show the icon + text if
  // wide -
  // compact + not main screen (safe/smart wallet list screen)
  if (props.modalSize === "wide" || screen !== formElements.reservedScreens.main && props.modalSize === "compact") {
    return /*#__PURE__*/jsxRuntime.jsx(formElements.WalletEntryButton, {
      walletConfig: props.walletConfig,
      selectWallet: () => {
        props.onSelect(undefined);
      }
    });
  }
  return /*#__PURE__*/jsxRuntime.jsx("div", {
    children: /*#__PURE__*/jsxRuntime.jsx(EmbeddedWalletFormUI, {
      showOrSeparator: props.supportedWallets.length > 1,
      onSelect: props.onSelect,
      walletConfig: props.walletConfig
    })
  });
};
const EmbeddedWalletConnectUI = props => {
  const [loginType, setLoginType] = React.useState(props.selectionData);
  if (loginType) {
    const handleBack = () => {
      // go back to base screen
      if (props.modalSize === "wide") {
        setLoginType(undefined);
      }

      // go to main screen
      else {
        props.goBack();
      }
    };
    if ("email" in loginType) {
      return /*#__PURE__*/jsxRuntime.jsx(EmbeddedWalletOTPLoginUI, {
        ...props,
        selectionData: loginType.email,
        goBack: handleBack
      });
    }

    // google
    else {
      return /*#__PURE__*/jsxRuntime.jsx(EmbeddedWalletGoogleLogin, {
        ...props,
        goBack: handleBack
      });
    }
  }
  return /*#__PURE__*/jsxRuntime.jsx(EmbeddedWalletFormUIScreen, {
    modalSize: props.modalSize,
    onSelect: _loginType => {
      setLoginType(_loginType);
    },
    walletConfig: props.walletConfig,
    onBack: props.goBack
  });
};

function useLocalWalletInfo(localWalletConfig, persist) {
  const [walletData, setWalletData] = React.useState("loading");
  const createWalletInstance = reactCore.useCreateWalletInstance();
  const [localWallet, setLocalWallet] = React.useState(null);
  React.useEffect(() => {
    const wallet = createWalletInstance(localWalletConfig);
    setLocalWallet(wallet);
    if (persist) {
      wallet.getSavedData().then(data => {
        setWalletData(data);
      });
    }
  }, [createWalletInstance, localWalletConfig, persist]);
  return {
    setLocalWallet,
    localWallet,
    walletData,
    meta: localWalletConfig.meta,
    persist: persist
  };
}

const DragNDrop = props => {
  const [error, setError] = React.useState(false);
  const [uploaded, setUploaded] = React.useState();
  const [isDragging, setIsDragging] = React.useState(false);
  const dragIn = e => {
    setError(false);
    setUploaded(undefined);
    setIsDragging(true);
    e.preventDefault();
    e.stopPropagation();
  };
  const dragOut = e => {
    setIsDragging(false);
    e.preventDefault();
    e.stopPropagation();
  };
  const handleFileUpload = file => {
    if (file.type !== props.accept) {
      setError(true);
    } else {
      setUploaded(file);
      props.onUpload(file);
    }
  };
  const drop = e => {
    setIsDragging(false);
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileUpload(e.dataTransfer.files[0]);
      e.dataTransfer.clearData();
    }
  };
  const message = formElements.isMobile() ? "Click to Upload" : "Drop your file here or click to upload";
  return /*#__PURE__*/jsxRuntime.jsx("div", {
    onDragEnter: dragIn,
    onDragLeave: dragOut,
    onDragOver: e => {
      setIsDragging(true);
      e.preventDefault();
      e.stopPropagation();
    },
    onClick: () => {
      setError(false);
    },
    onDrop: drop,
    style: {
      cursor: "pointer"
    },
    children: /*#__PURE__*/jsxRuntime.jsxs("label", {
      htmlFor: "file-upload",
      children: [/*#__PURE__*/jsxRuntime.jsx("input", {
        id: "file-upload",
        type: "file",
        accept: props.accept,
        multiple: false,
        style: {
          display: "none"
        },
        onChange: e => {
          if (e.target.files && e.target.files.length > 0) {
            handleFileUpload(e.target.files[0]);
          }
        }
      }), /*#__PURE__*/jsxRuntime.jsx(DropContainer, {
        "data-error": error,
        "data-is-dragging": isDragging,
        children: !uploaded ? /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
          children: [" ", /*#__PURE__*/jsxRuntime.jsx(UploadIconSecondary, {
            width: formElements.iconSize.lg,
            height: formElements.iconSize.lg
          }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
            y: "md"
          }), /*#__PURE__*/jsxRuntime.jsxs(formElements.Text, {
            color: "primaryText",
            weight: 600,
            center: true,
            multiline: true,
            children: [" ", message]
          }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
            y: "lg"
          }), error ? /*#__PURE__*/jsxRuntime.jsxs(formElements.Text, {
            color: "danger",
            size: "sm",
            children: [" ", "Please upload a ", props.extension, " file", " "]
          }) : /*#__PURE__*/jsxRuntime.jsxs(formElements.Text, {
            size: "sm",
            children: [" ", props.extension, " "]
          })]
        }) : /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
          children: [/*#__PURE__*/jsxRuntime.jsxs(formElements.Text, {
            weight: 600,
            color: "primaryText",
            center: true,
            multiline: true,
            children: [uploaded.name, " uploaded successfully"]
          }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
            y: "md"
          }), /*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
            color: "success",
            children: /*#__PURE__*/jsxRuntime.jsx(CheckCircleIcon, {
              size: formElements.iconSize.xl
            })
          })]
        })
      })]
    })
  });
};
const UploadIconSecondary = styled__default["default"](reactIcons.UploadIcon)`
  color: ${props => props.theme.colors.secondaryIconColor};
  transition:
    transform 200ms ease,
    color 200ms ease;
`;
const DropContainer = styled__default["default"].div`
  border: 2px solid ${p => p.theme.colors.borderColor};
  border-radius: ${formElements.radius.md};
  padding: ${formElements.spacing.xl} ${formElements.spacing.md};
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  transition: border-color 200ms ease;

  &:hover,
  &[data-is-dragging="true"] {
    border-color: ${p => p.theme.colors.accentText};
    svg {
      color: ${p => p.theme.colors.accentText};
    }
  }

  &[data-error="true"] {
    border-color: ${p => p.theme.colors.danger};
  }
`;
const CheckCircleIcon = props => /*#__PURE__*/jsxRuntime.jsxs("svg", {
  width: props.size,
  height: props.size,
  viewBox: "0 0 38 38",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/*#__PURE__*/jsxRuntime.jsx("path", {
    d: "M35.6666 17.4671V19.0004C35.6645 22.5945 34.5008 26.0916 32.3488 28.9701C30.1969 31.8487 27.1721 33.9546 23.7255 34.9736C20.279 35.9926 16.5954 35.8703 13.224 34.6247C9.85272 33.3792 6.97434 31.0773 5.01819 28.0622C3.06203 25.0472 2.1329 21.4805 2.36938 17.8943C2.60586 14.308 3.99526 10.8943 6.33039 8.16221C8.66551 5.43012 11.8212 3.52606 15.3269 2.734C18.8326 1.94194 22.5004 2.30432 25.7833 3.76709",
    stroke: "currentColor",
    strokeWidth: "3.33333",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/jsxRuntime.jsx("path", {
    d: "M35.6667 5.66699L19 22.3503L14 17.3503",
    stroke: "currentColor",
    strokeWidth: "3.33333",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })]
});

const ImportLocalWallet = props => {
  const [jsonString, setJsonString] = React.useState();
  const {
    setLocalWallet,
    meta
  } = useLocalWalletInfo(props.localWalletConf, props.persist);
  const createWalletInstance = reactCore.useCreateWalletInstance();
  const [password, setPassword] = React.useState("");
  const [isWrongPassword, setIsWrongPassword] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [importedAddress, setImportedAddress] = React.useState();
  const {
    setConnectedWallet,
    setConnectionStatus
  } = reactCore.useWalletContext();
  const handleImport = async () => {
    const localWallet = createWalletInstance(props.localWalletConf);
    if (!localWallet || !jsonString) {
      throw new Error("Invalid state");
    }
    try {
      await localWallet.import({
        encryptedJson: jsonString,
        password
      });
    } catch (e) {
      console.error(e);
      setIsWrongPassword(true);
      return;
    }
    setConnectionStatus("connecting");
    await localWallet.connect();
    await localWallet.save({
      strategy: "encryptedJson",
      password
    });
    setConnectedWallet(localWallet);
    setLocalWallet(localWallet);
    props.onConnect();
  };
  return /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
    children: [/*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
      p: "lg",
      children: /*#__PURE__*/jsxRuntime.jsx(formElements.ModalHeader, {
        onBack: props.goBack,
        title: "Import Wallet",
        imgSrc: meta.iconURL
      })
    }), /*#__PURE__*/jsxRuntime.jsx(formElements.Line, {}), /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
      p: "lg",
      children: [/*#__PURE__*/jsxRuntime.jsx(formElements.ModalDescription, {
        sm: true,
        children: "The application can authorize any transactions on behalf of the wallet without any approvals."
      }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
        y: "xs"
      }), /*#__PURE__*/jsxRuntime.jsx(formElements.ModalDescription, {
        sm: true,
        children: "We recommend only connecting to trusted applications."
      }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
        y: "lg"
      }), /*#__PURE__*/jsxRuntime.jsx(DragNDrop, {
        extension: "JSON",
        accept: "application/json",
        onUpload: file => {
          const reader = new FileReader();
          reader.onload = event => {
            setJsonString(event.target?.result);
            const obj = JSON.parse(event.target?.result);
            setImportedAddress(obj.address);
          };
          reader.readAsText(file, "utf-8");
        }
      }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
        y: "lg"
      }), /*#__PURE__*/jsxRuntime.jsxs("form", {
        onSubmit: e => {
          e.preventDefault();
          handleImport();
        },
        children: [jsonString && /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
          children: [/*#__PURE__*/jsxRuntime.jsx("input", {
            type: "text",
            name: "username",
            autoComplete: "off",
            value: importedAddress || "",
            disabled: true,
            style: {
              display: "none"
            }
          }), /*#__PURE__*/jsxRuntime.jsx(coinbaseWallet.FormFieldWithIconButton, {
            required: true,
            noSave: true,
            name: "password",
            autocomplete: "off",
            id: "password",
            onChange: value => {
              setPassword(value);
              setIsWrongPassword(false);
            },
            right: {
              onClick: () => setShowPassword(!showPassword),
              icon: showPassword ? /*#__PURE__*/jsxRuntime.jsx(reactIcons.EyeClosedIcon, {}) : /*#__PURE__*/jsxRuntime.jsx(reactIcons.EyeOpenIcon, {})
            },
            label: "Password",
            type: showPassword ? "text" : "password",
            value: password,
            error: isWrongPassword ? "Wrong Password" : ""
          }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
            y: "xl"
          })]
        }), /*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
          flex: "row",
          style: {
            justifyContent: "flex-end"
          },
          children: /*#__PURE__*/jsxRuntime.jsx(formElements.Button, {
            variant: "accent",
            type: "submit",
            disabled: !jsonString,
            style: {
              minWidth: "110px",
              opacity: jsonString ? 1 : 0.5
            },
            children: "Import"
          })
        })]
      })]
    })]
  });
};

const CreateLocalWallet_Password = props => {
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const passwordMismatch = confirmPassword && password !== confirmPassword;
  const [isConnecting, setIsConnecting] = React.useState(false);
  const {
    localWallet
  } = useLocalWalletInfo(props.localWalletConf, props.persist);
  const {
    setConnectedWallet,
    setConnectionStatus
  } = reactCore.useWalletContext();
  const [showImportScreen, setShowImportScreen] = React.useState(false);
  const [generatedAddress, setGeneratedAddress] = React.useState(null);

  // generating wallet before it's required to render a form with hidden address as username for better autofill
  React.useEffect(() => {
    if (!localWallet || showImportScreen || localWallet.ethersWallet) {
      return;
    }
    localWallet.generate().then(_address => {
      setGeneratedAddress(_address);
    });
  }, [localWallet, showImportScreen]);
  if (showImportScreen) {
    return /*#__PURE__*/jsxRuntime.jsx(ImportLocalWallet, {
      localWalletConf: props.localWalletConf,
      onConnect: props.onConnect,
      goBack: () => {
        setShowImportScreen(false);
      },
      persist: props.persist
    });
  }
  const handleConnect = async () => {
    if (passwordMismatch || !localWallet) {
      throw new Error("Invalid state");
    }
    setIsConnecting(true);
    setConnectionStatus("connecting");
    await localWallet.connect();
    await localWallet.save({
      strategy: "encryptedJson",
      password
    });
    setConnectedWallet(localWallet);
    setIsConnecting(false);
    props.onConnect();
  };
  return /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
    fullHeight: true,
    children: [/*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
      p: "lg",
      children: /*#__PURE__*/jsxRuntime.jsx(formElements.ModalHeader, {
        onBack: props.renderBackButton ? props.goBack : undefined,
        title: props.localWalletConf.meta.name,
        imgSrc: props.localWalletConf.meta.iconURL
      })
    }), /*#__PURE__*/jsxRuntime.jsx(formElements.Line, {}), /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
      p: "lg",
      children: [/*#__PURE__*/jsxRuntime.jsxs(formElements.ModalDescription, {
        sm: true,
        children: ["Choose a password for your wallet. ", /*#__PURE__*/jsxRuntime.jsx("br", {}), " You", `'`, "ll be able to access and export this wallet with the same password."]
      }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
        y: "lg"
      }), /*#__PURE__*/jsxRuntime.jsxs("form", {
        onSubmit: e => {
          e.preventDefault();
          handleConnect();
        },
        children: [/*#__PURE__*/jsxRuntime.jsx("input", {
          type: "text",
          name: "username",
          autoComplete: "off",
          value: generatedAddress || "",
          disabled: true,
          style: {
            display: "none"
          }
        }), /*#__PURE__*/jsxRuntime.jsx(coinbaseWallet.FormFieldWithIconButton, {
          name: "password",
          required: true,
          autocomplete: "new-password",
          id: "new-password",
          onChange: value => setPassword(value),
          right: {
            icon: showPassword ? /*#__PURE__*/jsxRuntime.jsx(reactIcons.EyeClosedIcon, {}) : /*#__PURE__*/jsxRuntime.jsx(reactIcons.EyeOpenIcon, {}),
            onClick: () => setShowPassword(!showPassword)
          },
          label: "Password",
          type: showPassword ? "text" : "password",
          value: password,
          dataTest: "new-password"
        }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
          y: "lg"
        }), /*#__PURE__*/jsxRuntime.jsx(coinbaseWallet.FormFieldWithIconButton, {
          name: "confirm-password",
          required: true,
          autocomplete: "new-password",
          id: "confirm-password",
          onChange: value => setConfirmPassword(value),
          right: {
            icon: showPassword ? /*#__PURE__*/jsxRuntime.jsx(reactIcons.EyeClosedIcon, {}) : /*#__PURE__*/jsxRuntime.jsx(reactIcons.EyeOpenIcon, {}),
            onClick: () => setShowPassword(!showPassword)
          },
          label: "Confirm Password",
          type: showPassword ? "text" : "password",
          value: confirmPassword,
          error: passwordMismatch ? "Passwords don't match" : "",
          dataTest: "confirm-password"
        }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
          y: "lg"
        }), /*#__PURE__*/jsxRuntime.jsxs(formElements.Button, {
          variant: "accent",
          type: "submit",
          fullWidth: true,
          style: {
            gap: formElements.spacing.xs,
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          },
          "data-test": "create-new-wallet-button",
          children: [!isConnecting && /*#__PURE__*/jsxRuntime.jsx(reactIcons.PlusIcon, {
            width: formElements.iconSize.sm,
            height: formElements.iconSize.sm
          }), isConnecting ? "Connecting" : "Create new wallet", isConnecting && /*#__PURE__*/jsxRuntime.jsx(formElements.Spinner, {
            size: "sm",
            color: "accentButtonText"
          })]
        })]
      }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
        y: "lg"
      }), /*#__PURE__*/jsxRuntime.jsx(formElements.TextDivider, {
        children: /*#__PURE__*/jsxRuntime.jsx("span", {
          children: "OR"
        })
      }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
        y: "lg"
      }), /*#__PURE__*/jsxRuntime.jsxs(formElements.Button, {
        fullWidth: true,
        variant: "outline",
        onClick: () => {
          setShowImportScreen(true);
        },
        style: {
          display: "flex",
          gap: formElements.spacing.sm,
          alignItems: "center"
        },
        children: [/*#__PURE__*/jsxRuntime.jsx(reactIcons.PinBottomIcon, {
          width: formElements.iconSize.sm,
          height: formElements.iconSize.sm
        }), "Import wallet"]
      })]
    })]
  });
};
const CreateLocalWallet_Guest = props => {
  const {
    localWallet
  } = useLocalWalletInfo(props.localWallet, props.persist);
  const {
    setConnectedWallet,
    setConnectionStatus
  } = reactCore.useWalletContext();
  const {
    onConnect
  } = props;
  const handleConnect = React.useCallback(async () => {
    if (!localWallet) {
      throw new Error("Invalid state");
    }
    await localWallet.generate();
    setConnectionStatus("connecting");
    await coinbaseWallet.wait(1000);
    await localWallet.connect();
    setConnectedWallet(localWallet);
    onConnect();
  }, [localWallet, setConnectedWallet, onConnect, setConnectionStatus]);
  const connecting = React.useRef(false);
  React.useEffect(() => {
    if (connecting.current || !localWallet) {
      return;
    }
    connecting.current = true;
    handleConnect();
  }, [handleConnect, localWallet]);
  return /*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
    flex: "row",
    center: "both",
    fullHeight: true,
    style: {
      minHeight: "300px"
    },
    children: /*#__PURE__*/jsxRuntime.jsx(formElements.Spinner, {
      size: "xl",
      color: "accentText"
    })
  });
};

const OverrideConfirmation = props => {
  return /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
    p: "lg",
    children: [/*#__PURE__*/jsxRuntime.jsx(formElements.ModalHeader, {
      onBack: props.onBack,
      title: "Warning"
    }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
      y: "xl"
    }), /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
      children: [/*#__PURE__*/jsxRuntime.jsx(formElements.Text, {
        multiline: true,
        children: "Your current wallet will be deleted if you create a new wallet. Backup wallet to your device before creating a new wallet"
      }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
        y: "xl"
      }), /*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
        flex: "row",
        style: {
          justifyContent: "flex-end"
        },
        children: /*#__PURE__*/jsxRuntime.jsx(formElements.Button, {
          variant: "accent",
          fullWidth: true,
          onClick: props.onBackup,
          children: "Backup wallet"
        })
      })]
    })]
  });
};

/**
 * For No-Credential scenario
 */
const ReconnectLocalWallet = props => {
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [isWrongPassword, setIsWrongPassword] = React.useState(false);
  const {
    setConnectedWallet,
    setConnectionStatus
  } = reactCore.useWalletContext();
  const [isConnecting, setIsConnecting] = React.useState(false);
  const [showCreate, setShowCreate] = React.useState(false);
  const [showBackupConfirmation, setShowBackupConfirmation] = React.useState(false);
  const [showExport, setShowExport] = React.useState(false);
  const {
    localWallet,
    meta,
    walletData
  } = useLocalWalletInfo(props.localWallet, props.persist);
  const savedAddress = walletData ? walletData === "loading" ? "" : walletData.address : "";
  if (showExport) {
    if (!localWallet) {
      throw new Error("Invalid state");
    }
    return /*#__PURE__*/jsxRuntime.jsx(useWalletConnect.ExportLocalWallet, {
      modalSize: props.modalSize,
      localWalletConfig: props.localWallet,
      onBack: () => {
        setShowExport(false);
      },
      onExport: () => {
        setShowExport(false);
        setShowBackupConfirmation(false);
        setShowCreate(true);
      }
    });
  }
  if (showBackupConfirmation) {
    return /*#__PURE__*/jsxRuntime.jsx(OverrideConfirmation, {
      meta: meta,
      onBackup: () => {
        setShowExport(true);
      },
      onBack: () => {
        setShowBackupConfirmation(false);
      }
    });
  }
  if (showCreate) {
    return /*#__PURE__*/jsxRuntime.jsx(CreateLocalWallet_Password, {
      renderBackButton: props.supportedWallets.length > 1,
      localWalletConf: props.localWallet,
      goBack: () => {
        setShowCreate(false);
      },
      onConnect: props.onConnect,
      persist: props.persist
    });
  }
  const handleReconnect = async () => {
    if (!localWallet) {
      throw new Error("Invalid state");
    }
    setIsConnecting(true);
    try {
      await localWallet.load({
        strategy: "encryptedJson",
        password
      });
      setConnectionStatus("connecting");
      await localWallet.connect();
      setConnectedWallet(localWallet);
      props.onConnect();
    } catch (e) {
      setIsWrongPassword(true);
    }
    setIsConnecting(false);
  };
  return /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
    animate: "fadein",
    children: [/*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
      p: "lg",
      children: /*#__PURE__*/jsxRuntime.jsx(formElements.ModalHeader, {
        onBack: props.renderBackButton ? props.goBack : undefined,
        title: meta.name,
        imgSrc: meta.iconURL
      })
    }), /*#__PURE__*/jsxRuntime.jsx(formElements.Line, {}), /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
      p: "lg",
      children: [/*#__PURE__*/jsxRuntime.jsx(formElements.Text, {
        multiline: true,
        size: "lg",
        color: "primaryText",
        children: "Connect to saved wallet"
      }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
        y: "xl"
      }), /*#__PURE__*/jsxRuntime.jsx(formElements.Label, {
        children: "Saved Wallet"
      }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
        y: "sm"
      }), /*#__PURE__*/jsxRuntime.jsx(formElements.Text, {
        children: savedAddress === "" ? "Loading..." : useWalletConnect.shortenAddress(savedAddress)
      }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
        y: "xl"
      }), /*#__PURE__*/jsxRuntime.jsxs("form", {
        onSubmit: e => {
          e.preventDefault();
          handleReconnect();
        },
        children: [/*#__PURE__*/jsxRuntime.jsx("input", {
          type: "text",
          name: "username",
          autoComplete: "off",
          value: savedAddress,
          disabled: true,
          style: {
            display: "none"
          }
        }), /*#__PURE__*/jsxRuntime.jsx(coinbaseWallet.FormFieldWithIconButton, {
          required: true,
          name: "current-password",
          autocomplete: "current-password",
          id: "current-password",
          onChange: value => {
            setPassword(value);
            setIsWrongPassword(false);
          },
          right: {
            onClick: () => setShowPassword(!showPassword),
            icon: showPassword ? /*#__PURE__*/jsxRuntime.jsx(reactIcons.EyeClosedIcon, {}) : /*#__PURE__*/jsxRuntime.jsx(reactIcons.EyeOpenIcon, {})
          },
          label: "Password",
          type: showPassword ? "text" : "password",
          value: password,
          error: isWrongPassword ? "Wrong Password" : "",
          dataTest: "current-password",
          placeholder: "Enter your password"
        }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
          y: "md"
        }), /*#__PURE__*/jsxRuntime.jsxs(formElements.Button, {
          variant: "accent",
          type: "submit",
          fullWidth: true,
          style: {
            display: "flex",
            gap: formElements.spacing.sm
          },
          children: ["Continue", isConnecting && /*#__PURE__*/jsxRuntime.jsx(formElements.Spinner, {
            size: "sm",
            color: "accentButtonText"
          })]
        })]
      }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
        y: "xl"
      }), /*#__PURE__*/jsxRuntime.jsx(formElements.TextDivider, {
        children: /*#__PURE__*/jsxRuntime.jsx("span", {
          children: " OR "
        })
      }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
        y: "xl"
      }), /*#__PURE__*/jsxRuntime.jsx(formElements.Button, {
        variant: "outline",
        fullWidth: true,
        style: {
          textAlign: "center"
        },
        onClick: () => {
          setShowBackupConfirmation(true);
        },
        children: "Create a new wallet"
      })]
    })]
  });
};

const LocalWalletConnectUI = props => {
  const {
    walletData
  } = useLocalWalletInfo(props.walletConfig, props.persist);
  if (!props.persist) {
    return /*#__PURE__*/jsxRuntime.jsx(CreateLocalWallet_Guest, {
      persist: props.persist,
      localWallet: props.walletConfig,
      goBack: props.goBack,
      onConnect: props.close
    });
  }
  if (walletData === "loading") {
    return /*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
      flex: "row",
      center: "both",
      style: {
        height: "300px"
      },
      children: /*#__PURE__*/jsxRuntime.jsx(formElements.Spinner, {
        size: "lg",
        color: "accentText"
      })
    });
  }
  if (walletData) {
    return /*#__PURE__*/jsxRuntime.jsx(ReconnectLocalWallet, {
      modalSize: props.modalSize,
      renderBackButton: props.supportedWallets.length > 1,
      supportedWallets: props.supportedWallets,
      onConnect: props.close,
      goBack: props.goBack,
      localWallet: props.walletConfig,
      persist: props.persist
    });
  }
  return /*#__PURE__*/jsxRuntime.jsx(CreateLocalWallet_Password, {
    goBack: props.goBack,
    localWalletConf: props.walletConfig,
    onConnect: props.close,
    renderBackButton: props.supportedWallets.length > 1,
    persist: props.persist
  });
};

const localWallet = config => {
  return {
    id: wallets.LocalWallet.id,
    meta: {
      ...wallets.LocalWallet.meta,
      name: "Guest Wallet",
      iconURL: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiByeD0iMTIiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8xXzY0KSIvPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfMV82NCkiPgo8cGF0aCBkPSJNNTguNzUgMTkuMTY2N0gyMS4yNUMxOC45NTgzIDE5LjE2NjcgMTcuMDgzMyAyMS4wNDE3IDE3LjA4MzMgMjMuMzMzNFY0OC4zMzM0QzE3LjA4MzMgNTAuNjI1IDE4Ljk1ODMgNTIuNSAyMS4yNSA1Mi41SDM1LjgzMzNMMzEuNjY2NyA1OC43NVY2MC44MzM0SDQ4LjMzMzNWNTguNzVMNDQuMTY2NyA1Mi41SDU4Ljc1QzYxLjA0MTcgNTIuNSA2Mi45MTY3IDUwLjYyNSA2Mi45MTY3IDQ4LjMzMzRWMjMuMzMzNEM2Mi45MTY3IDIxLjA0MTcgNjEuMDQxNyAxOS4xNjY3IDU4Ljc1IDE5LjE2NjdaTTU4Ljc1IDQ0LjE2NjdIMjEuMjVWMjMuMzMzNEg1OC43NVY0NC4xNjY3WiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzFfNjQiIHgxPSI0MCIgeTE9IjAiIHgyPSI0MCIgeTI9IjgwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNDRTExQUIiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjOTAwQkI1Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMV82NCI+CjxyZWN0IHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE1IDE1KSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="
    },
    create: options => new wallets.LocalWallet(options),
    connectUI(props) {
      return /*#__PURE__*/jsxRuntime.jsx(LocalWalletConnectUI, {
        ...props,
        persist: config && config.persist !== undefined ? config.persist : true
      });
    }
  };
};

const SmartWalletConnecting = props => {
  const activeWallet = reactCore.useWallet(); // personal wallet

  const connect = reactCore.useConnect();
  const connectedChain = reactCore.useChain();
  const targetChain = reactCore.useWalletContext().activeChain;
  const mismatch = reactCore.useNetworkMismatch();
  const [connectError, setConnectError] = React.useState(false);
  const [switchError, setSwitchError] = React.useState(false);
  const [switchingNetwork, setSwitchingNetwork] = React.useState(false);
  const connectionStatus = reactCore.useConnectionStatus();
  const {
    onConnect
  } = props;
  const connectStarted = React.useRef(false);
  const switchChain = reactCore.useSwitchChain();
  const modalSize = React.useContext(formElements.ModalConfigCtx).modalSize;
  const handleConnect = React.useCallback(async () => {
    if (!activeWallet || !connectedChain || connectStarted.current) {
      return;
    }
    setConnectError(false);
    try {
      connectStarted.current = true;
      await connect(props.smartWallet, {
        personalWallet: activeWallet
      });
      onConnect();
    } catch (e) {
      console.error(e);
      setConnectError(true);
    }
  }, [activeWallet, connectedChain, connect, props.smartWallet, onConnect]);
  React.useEffect(() => {
    if (!mismatch) {
      handleConnect();
    }
  }, [mismatch, handleConnect, activeWallet, connectedChain]);
  if (!connectError && (connectionStatus === "connecting" || !mismatch)) {
    return /*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
      fullHeight: true,
      flex: "column",
      center: "both",
      style: {
        minHeight: "300px"
      },
      children: /*#__PURE__*/jsxRuntime.jsx(formElements.Spinner, {
        color: "accentText",
        size: "xl"
      })
    });
  }
  if (connectError) {
    return /*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
      fullHeight: true,
      animate: "fadein",
      flex: "column",
      center: "both",
      p: "lg",
      style: {
        minHeight: "300px"
      },
      children: /*#__PURE__*/jsxRuntime.jsx(formElements.Text, {
        color: "danger",
        children: "Failed to connect to Smart Wallet"
      })
    });
  }
  return /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
    fullHeight: true,
    animate: "fadein",
    flex: "column",
    children: [/*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
      p: "lg",
      children: /*#__PURE__*/jsxRuntime.jsx(formElements.ModalHeader, {
        title: props.personalWallet.meta.name,
        imgSrc: props.personalWallet.meta.iconURL,
        onBack: props.onBack
      })
    }), modalSize === "compact" && /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
      y: "lg"
    }), /*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
      expand: true,
      flex: "column",
      center: "both",
      p: "lg",
      children: /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
        p: modalSize === "wide" ? "lg" : undefined,
        children: [/*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
          flex: "row",
          center: "x",
          color: "danger",
          children: /*#__PURE__*/jsxRuntime.jsx(reactIcons.ExclamationTriangleIcon, {
            width: formElements.iconSize.lg,
            height: formElements.iconSize.lg
          })
        }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
          y: "md"
        }), /*#__PURE__*/jsxRuntime.jsx(formElements.Text, {
          size: "lg",
          color: "primaryText",
          center: true,
          weight: 500,
          children: "Wrong Network"
        }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
          y: "lg"
        }), /*#__PURE__*/jsxRuntime.jsx(formElements.Text, {
          multiline: true,
          center: true,
          children: "Your wallet is not connected to the required network"
        }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
          y: "xl"
        }), /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
          flex: "column",
          gap: "md",
          children: [/*#__PURE__*/jsxRuntime.jsxs(formElements.Button, {
            type: "button",
            fullWidth: true,
            variant: "accent",
            style: {
              display: "flex",
              alignItems: "center",
              gap: formElements.spacing.sm
            },
            onClick: async () => {
              if (!activeWallet) {
                throw new Error("No active wallet");
              }
              setConnectError(false);
              setSwitchError(false);
              setSwitchingNetwork(true);
              try {
                await switchChain(targetChain.chainId);
              } catch (e) {
                setSwitchError(true);
              } finally {
                setSwitchingNetwork(false);
              }
            },
            children: [" ", switchingNetwork ? "Switching" : "Switch Network", switchingNetwork && /*#__PURE__*/jsxRuntime.jsx(formElements.Spinner, {
              size: "sm",
              color: "accentButtonText"
            })]
          }), /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
            flex: "row",
            gap: "sm",
            center: "both",
            color: "danger",
            style: {
              textAlign: "center",
              fontSize: formElements.fontSize.sm,
              opacity: switchError ? 1 : 0,
              transition: "opacity 200ms ease"
            },
            children: [/*#__PURE__*/jsxRuntime.jsx(reactIcons.ExclamationTriangleIcon, {
              width: formElements.iconSize.sm,
              height: formElements.iconSize.sm
            }), /*#__PURE__*/jsxRuntime.jsx("span", {
              children: "Failed to switch network"
            })]
          })]
        })]
      })
    })]
  });
};

const smartWallet = (wallet, config) => {
  const WalletSelectUI = wallet.selectUI;
  return {
    ...wallet,
    create: options => new wallets.SmartWallet({
      ...options,
      ...config
    }),
    connectUI(props) {
      return /*#__PURE__*/jsxRuntime.jsx(SmartConnectUI, {
        ...props,
        personalWallet: wallet
      });
    },
    selectUI: WalletSelectUI ? props => {
      return /*#__PURE__*/jsxRuntime.jsx(WalletSelectUI, {
        ...props,
        walletConfig: wallet
      });
    } : undefined,
    personalWallets: [wallet]
  };
};
const SmartConnectUI = props => {
  const activeWallet = reactCore.useWallet();
  const {
    walletConfig
  } = props;
  const PersonalWalletConfig = props.personalWallet;
  if (!activeWallet) {
    const _props = {
      ...props,
      walletConfig: PersonalWalletConfig,
      close: () => props.close(false)
    };
    if (PersonalWalletConfig.connectUI) {
      return /*#__PURE__*/jsxRuntime.jsx(PersonalWalletConfig.connectUI, {
        ..._props
      });
    }
    return /*#__PURE__*/jsxRuntime.jsx(coinbaseWallet.HeadlessConnectUI, {
      ..._props
    });
  }
  return /*#__PURE__*/jsxRuntime.jsx(SmartWalletConnecting, {
    onBack: props.goBack,
    onConnect: props.close,
    smartWallet: walletConfig,
    personalWallet: props.personalWallet
  });
};

var smartWallet$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  smartWallet: smartWallet,
  SmartConnectUI: SmartConnectUI
});

exports.ConnectModalInline = useWalletConnect.ConnectModalInline;
exports.ConnectWallet = useWalletConnect.ConnectWallet;
exports.MediaRenderer = useWalletConnect.MediaRenderer;
exports.NetworkSelector = useWalletConnect.NetworkSelector;
exports.ThirdwebNftMedia = useWalletConnect.ThirdwebNftMedia;
exports.ThirdwebProvider = useWalletConnect.ThirdwebProvider;
exports.Web3Button = useWalletConnect.Web3Button;
exports.defaultTokens = useWalletConnect.defaultTokens;
exports.useBloctoWallet = useWalletConnect.useBloctoWallet;
exports.useCoinbaseWallet = useWalletConnect.useCoinbaseWallet;
exports.useFrameWallet = useWalletConnect.useFrameWallet;
exports.useInstalledWallets = useWalletConnect.useInstalledWallets;
exports.useMetamask = useWalletConnect.useMetamask;
exports.usePaperWallet = useWalletConnect.usePaperWallet;
exports.usePaperWalletUserEmail = useWalletConnect.usePaperWalletUserEmail;
exports.useRainbowWallet = useWalletConnect.useRainbowWallet;
exports.useResolvedMediaType = useWalletConnect.useResolvedMediaType;
exports.useTrustWallet = useWalletConnect.useTrustWallet;
exports.useWalletConnect = useWalletConnect.useWalletConnect;
exports.useWalletConnectV1 = useWalletConnect.useWalletConnectV1;
exports.coinbaseWallet = coinbaseWallet.coinbaseWallet;
exports.defaultWallets = coinbaseWallet.defaultWallets;
exports.metamaskWallet = coinbaseWallet.metamaskWallet;
exports.phantomWallet = coinbaseWallet.phantomWallet;
exports.rainbowWallet = coinbaseWallet.rainbowWallet;
exports.trustWallet = coinbaseWallet.trustWallet;
exports.walletConnect = coinbaseWallet.walletConnect;
exports.zerionWallet = coinbaseWallet.zerionWallet;
exports.bloctoWallet = bloctoWallet.bloctoWallet;
exports.darkTheme = formElements.darkTheme;
exports.lightTheme = formElements.lightTheme;
exports.useIsWalletModalOpen = formElements.useIsWalletModalOpen;
exports.useSetIsWalletModalOpen = formElements.useSetIsWalletModalOpen;
exports.paperWallet = paperWallet.paperWallet;
exports.frameWallet = frameWallet.frameWallet;
exports.magicLink = magicLink.magicLink;
exports.safeWallet = safeWallet.safeWallet;
exports.walletConnectV1 = walletConnectV1.walletConnectV1;
exports.useSafe = useSafe.useSafe;
exports.useMagic = useMagic.useMagic;
exports.embeddedWallet = embeddedWallet;
exports.localWallet = localWallet;
exports.smartWallet = smartWallet;
exports.useSmartWallet = useSmartWallet;
Object.keys(reactCore).forEach(function (k) {
  if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return reactCore[k]; }
  });
});
