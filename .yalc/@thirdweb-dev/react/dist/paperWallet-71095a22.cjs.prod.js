'use strict';

var wallets = require('@thirdweb-dev/wallets');
var React = require('react');
var styled = require('@emotion/styled');
var reactCore = require('@thirdweb-dev/react-core');
var formElements = require('./formElements-c7791271.cjs.prod.js');
var jsxRuntime = require('react/jsx-runtime');
var InputSelectionUI = require('./InputSelectionUI-42eaad5a.cjs.prod.js');
var useWalletConnect = require('./useWalletConnect-3a45dae7.cjs.prod.js');
var Tooltip = require('./Tooltip-ef024a59.cjs.prod.js');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefault(styled);

const GoogleIcon = props => {
  return /*#__PURE__*/jsxRuntime.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: props.size,
    viewBox: "0 0 24 24",
    width: props.size,
    children: [/*#__PURE__*/jsxRuntime.jsx("path", {
      d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",
      fill: "#4285F4"
    }), /*#__PURE__*/jsxRuntime.jsx("path", {
      d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",
      fill: "#34A853"
    }), /*#__PURE__*/jsxRuntime.jsx("path", {
      d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",
      fill: "#FBBC05"
    }), /*#__PURE__*/jsxRuntime.jsx("path", {
      d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",
      fill: "#EA4335"
    }), /*#__PURE__*/jsxRuntime.jsx("path", {
      d: "M1 1h22v22H1z",
      fill: "none"
    })]
  });
};

const FadeIn = styled__default["default"].div`
  animation: ${formElements.fadeInAnimation} 0.15s ease-in;
`;

function OTPInput(props) {
  const otp = props.value.split("").map(Number);
  const setOTP = newOTP => {
    props.setValue(newOTP.join(""));
  };
  const inputToFocusIndex = otp.length;
  const boxEls = React.useRef([]);
  React.useEffect(() => {
    if (boxEls.current[inputToFocusIndex]) {
      requestAnimationFrame(() => {
        boxEls.current[inputToFocusIndex]?.focus();
      });
    }
  }, [inputToFocusIndex]);
  return /*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
    center: "x",
    gap: "sm",
    flex: "row",
    children: new Array(props.digits).fill(null).map((_, i) => {
      return /*#__PURE__*/jsxRuntime.jsx(OTPInputBox, {
        "data-error": props.isInvalid,
        ref: e => boxEls.current[i] = e,
        value: otp[i] === undefined ? "" : otp[i],
        type: "number",
        variant: "outline",
        onPaste: e => {
          const pastedData = e.clipboardData.getData("text/plain");
          const newOTP = pastedData.slice(0, props.digits).split("").filter(n => /[0-9]/.test(n)).map(Number);
          setOTP(newOTP);
          e.preventDefault();
        },
        onKeyDown: e => {
          if (e.key === "Enter") {
            if (props.onEnter) {
              props.onEnter();
              return;
            }
          }
          if (e.key === "ArrowLeft") {
            if (i === 0) {
              return;
            }
            boxEls.current[i - 1]?.focus();
            return;
          }
          if (e.key === "ArrowRight") {
            if (i === props.digits - 1) {
              return;
            }
            boxEls.current[i + 1]?.focus();
            return;
          }
          if (e.key === "e" || e.key === ".") {
            e.preventDefault();
            return;
          }
          if (e.key === "Backspace") {
            if (i === 0) {
              return;
            }
            const newOTP = otp.slice(0, -1);
            setOTP(newOTP);
          }
        },
        onChange: e => {
          let value = e.target.value;
          if (value.length > 1) {
            value = value[value.length - 1];
          }
          if (!/[0-9]/.test(value) && value !== "") {
            e.preventDefault();
            return;
          }
          const newOTP = [...otp];
          const index = i > inputToFocusIndex - 1 ? inputToFocusIndex : i;
          newOTP[index] = Number(value);
          setOTP(newOTP);
        }
      }, i);
    })
  });
}
const OTPInputBox = styled__default["default"](formElements.Input)`
  appearance: none;
  -webkit-appearance: none;
  width: 40px;
  height: 40px;
  text-align: center;
  font-size: ${formElements.fontSize.md};
  padding: ${formElements.spacing.xs};
  ${formElements.media.mobile} {
    width: 35px;
    height: 35px;
  }
  &[data-verify-status="invalid"] {
    color: ${p => p.theme.colors.danger};
    border-color: ${p => p.theme.colors.danger};
  }
`;

const PaperFormUI = props => {
  const createWalletInstance = reactCore.useCreateWalletInstance();
  const setConnectionStatus = reactCore.useSetConnectionStatus();
  const setConnectedWallet = reactCore.useSetConnectedWallet();

  // Need to trigger google login on button click to avoid popup from being blocked
  const googleLogin = async () => {
    try {
      const paperWallet = createWalletInstance(props.walletConfig);
      setConnectionStatus("connecting");
      const googleWindow = window.open("", "Login", "width=350, height=500");
      if (!googleWindow) {
        throw new Error("Failed to open google login window");
      }
      await paperWallet.connect({
        googleLogin: {
          openedWindow: googleWindow,
          closeOpenedWindow: openedWindow => {
            openedWindow.close();
          }
        }
      });
      setConnectedWallet(paperWallet);
    } catch (e) {
      setConnectionStatus("disconnected");
      console.error(e);
    }
  };
  return /*#__PURE__*/jsxRuntime.jsxs("div", {
    children: [props.googleLoginSupported && /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
      children: [/*#__PURE__*/jsxRuntime.jsxs(SocialButton, {
        variant: "secondary",
        fullWidth: true,
        onClick: () => {
          googleLogin();
          props.onSelect({
            google: true
          });
        },
        children: [/*#__PURE__*/jsxRuntime.jsx(GoogleIcon, {
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
      })]
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
const PaperFormUIScreen = props => {
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
      children: /*#__PURE__*/jsxRuntime.jsx(PaperFormUI, {
        walletConfig: props.walletConfig,
        googleLoginSupported: props.googleLoginSupported,
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

const PaperOTPLoginUI = props => {
  const email = props.selectionData;
  const [otpInput, setOtpInput] = React.useState("");
  const [recoveryCode, setRecoveryCode] = React.useState("");
  const {
    createWalletInstance,
    setConnectedWallet,
    setConnectionStatus
  } = reactCore.useWalletContext();
  const [wallet, setWallet] = React.useState(null);
  const [verifyStatus, setVerifyStatus] = React.useState("idle");
  const [sentEmailInfo, setSentEmailInfo] = React.useState(null);
  const recoveryCodeRequired = !!(sentEmailInfo && sentEmailInfo !== "error" && sentEmailInfo.recoveryShareManagement !== "AWS_MANAGED" && sentEmailInfo.isNewDevice && !sentEmailInfo.isNewUser);
  const sendEmail = React.useCallback(async () => {
    setOtpInput("");
    setVerifyStatus("idle");
    setSentEmailInfo(null);
    try {
      const _wallet = createWalletInstance(props.walletConfig);
      setWallet(_wallet);
      const _paperSDK = await _wallet.getPaperSDK();
      const {
        isNewDevice,
        isNewUser,
        recoveryShareManagement
      } = await _paperSDK.auth.sendPaperEmailLoginOtp({
        email: email
      });
      setSentEmailInfo({
        isNewDevice,
        isNewUser,
        recoveryShareManagement
      });
    } catch (e) {
      console.error(e);
      setVerifyStatus("idle");
      setSentEmailInfo("error");
    }
  }, [createWalletInstance, email, props.walletConfig]);
  const handleSubmit = () => {
    if (recoveryCodeRequired && !recoveryCode) {
      return;
    }
    if (!sentEmailInfo || otpInput.length !== 6) {
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
        email,
        otp: otpInput,
        recoveryCode: recoveryCodeRequired ? recoveryCode : undefined
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
        }), /*#__PURE__*/jsxRuntime.jsx(OTPInput, {
          isInvalid: verifyStatus === "invalid",
          digits: 6,
          value: otpInput,
          setValue: value => {
            setOtpInput(value);
            setVerifyStatus("idle");
          },
          onEnter: handleSubmit
        }), recoveryCodeRequired && /*#__PURE__*/jsxRuntime.jsxs("div", {
          style: {
            textAlign: "center"
          },
          children: [/*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
            y: "xl"
          }), /*#__PURE__*/jsxRuntime.jsx(formElements.Line, {}), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
            y: "xl"
          }), /*#__PURE__*/jsxRuntime.jsx(formElements.Text, {
            color: "primaryText",
            children: "New device detected"
          }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
            y: "sm"
          }), /*#__PURE__*/jsxRuntime.jsxs(formElements.Text, {
            multiline: true,
            style: {
              maxWidth: "350px"
            },
            children: ["Enter the recovery code emailed to you ", /*#__PURE__*/jsxRuntime.jsx("br", {}), " when you first signed up"]
          }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
            y: "md"
          }), /*#__PURE__*/jsxRuntime.jsx(formElements.Input, {
            autoComplete: "off",
            required: true,
            "data-error": verifyStatus === "invalid",
            id: "recovery-code",
            variant: "outline",
            style: {
              textAlign: "center"
            },
            value: recoveryCode,
            onChange: e => setRecoveryCode(e.target.value),
            placeholder: "Enter your recovery code"
          })]
        }), verifyStatus === "invalid" && /*#__PURE__*/jsxRuntime.jsxs(FadeIn, {
          children: [/*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
            y: "sm"
          }), /*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
            flex: "row",
            center: "x",
            children: /*#__PURE__*/jsxRuntime.jsxs(formElements.Text, {
              size: "sm",
              color: "danger",
              children: ["Invalid OTP ", recoveryCodeRequired ? "or recovery code" : ""]
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
        }), sentEmailInfo === "error" && /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
          children: [/*#__PURE__*/jsxRuntime.jsx(formElements.Text, {
            size: "sm",
            center: true,
            color: "danger",
            children: "Failed to send OTP"
          }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
            y: "md"
          })]
        }), !sentEmailInfo && /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
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
        }), sentEmailInfo && /*#__PURE__*/jsxRuntime.jsx(LinkButton, {
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

const PaperGoogleLogin = props => {
  const {
    goBack,
    modalSize
  } = props;
  const createWalletInstance = reactCore.useCreateWalletInstance();
  const setConnectionStatus = reactCore.useSetConnectionStatus();
  const setConnectedWallet = reactCore.useSetConnectedWallet();
  const connectionStatus = reactCore.useConnectionStatus();

  // Need to trigger google login on button click to avoid popup from being blocked
  const googleLogin = async () => {
    try {
      const paperWallet = createWalletInstance(props.walletConfig);
      setConnectionStatus("connecting");
      const googleWindow = window.open("", "Login", "width=350, height=500");
      if (!googleWindow) {
        throw new Error("Failed to open google login window");
      }
      await paperWallet.connect({
        googleLogin: {
          openedWindow: googleWindow,
          closeOpenedWindow: openedWindow => {
            openedWindow.close();
          }
        }
      });
      setConnectedWallet(paperWallet);
      props.close();
    } catch (e) {
      setConnectionStatus("disconnected");
      console.error(e);
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
          children: [/*#__PURE__*/jsxRuntime.jsx(GoogleIcon, {
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

const paperWallet = config => {
  const defaultRecovery = "AWS_MANAGED";
  return {
    category: "socialLogin",
    id: wallets.PaperWallet.id,
    recommended: config?.recommended,
    meta: {
      ...wallets.PaperWallet.meta,
      name: "Email",
      iconURL: Tooltip.emailIcon
    },
    create(options) {
      return new wallets.PaperWallet({
        ...options,
        ...config,
        advancedOptions: {
          recoveryShareManagement: "AWS_MANAGED",
          ...config?.advancedOptions
        }
      });
    },
    selectUI(props) {
      return /*#__PURE__*/jsxRuntime.jsx(PaperSelectionUI, {
        ...props,
        recoveryShareManagement: config?.advancedOptions?.recoveryShareManagement || defaultRecovery
      });
    },
    connectUI(props) {
      return /*#__PURE__*/jsxRuntime.jsx(PaperConnectUI, {
        ...props,
        recoveryShareManagement: config?.advancedOptions?.recoveryShareManagement || defaultRecovery
      });
    }
  };
};
const PaperSelectionUI = props => {
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
    children: /*#__PURE__*/jsxRuntime.jsx(PaperFormUI, {
      walletConfig: props.walletConfig,
      googleLoginSupported: props.recoveryShareManagement !== "USER_MANAGED",
      showOrSeparator: props.supportedWallets.length > 1,
      onSelect: props.onSelect
    })
  });
};
const PaperConnectUI = props => {
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
      return /*#__PURE__*/jsxRuntime.jsx(PaperOTPLoginUI, {
        ...props,
        recoveryShareManagement: props.recoveryShareManagement,
        selectionData: loginType.email,
        goBack: handleBack
      });
    }

    // google
    else {
      return /*#__PURE__*/jsxRuntime.jsx(PaperGoogleLogin, {
        ...props,
        goBack: handleBack
      });
    }
  }
  return /*#__PURE__*/jsxRuntime.jsx(PaperFormUIScreen, {
    walletConfig: props.walletConfig,
    googleLoginSupported: props.recoveryShareManagement !== "USER_MANAGED",
    modalSize: props.modalSize,
    onSelect: _loginType => {
      setLoginType(_loginType);
    },
    onBack: props.goBack
  });
};

var paperWallet$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  paperWallet: paperWallet
});

exports.FadeIn = FadeIn;
exports.GoogleIcon = GoogleIcon;
exports.OTPInput = OTPInput;
exports.paperWallet = paperWallet;
exports.paperWallet$1 = paperWallet$1;
