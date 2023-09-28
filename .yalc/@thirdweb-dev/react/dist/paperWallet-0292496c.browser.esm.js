import { PaperWallet } from '@thirdweb-dev/wallets';
import { useRef, useEffect, useState, useCallback } from 'react';
import styled from '@emotion/styled';
import { useCreateWalletInstance, useSetConnectionStatus, useSetConnectedWallet, useWalletContext, useConnectionStatus } from '@thirdweb-dev/react-core';
import { E as fadeInAnimation, A as Input, f as fontSize, s as spacing, o as media, C as Container, B as Button, i as iconSize, S as Spacer, T as TextDivider, M as ModalHeader, b as Text, L as Line, c as Spinner, a as ModalTitle, r as reservedScreens, W as WalletEntryButton } from './formElements-b7b8cdcb.browser.esm.js';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { I as InputSelectionUI } from './InputSelectionUI-7955a0af.browser.esm.js';
import { u as useScreenContext } from './useWalletConnect-cb3a6dea.browser.esm.js';
import { e as emailIcon } from './Tooltip-4a6a9735.browser.esm.js';

const GoogleIcon = props => {
  return /*#__PURE__*/jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: props.size,
    viewBox: "0 0 24 24",
    width: props.size,
    children: [/*#__PURE__*/jsx("path", {
      d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",
      fill: "#4285F4"
    }), /*#__PURE__*/jsx("path", {
      d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",
      fill: "#34A853"
    }), /*#__PURE__*/jsx("path", {
      d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",
      fill: "#FBBC05"
    }), /*#__PURE__*/jsx("path", {
      d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",
      fill: "#EA4335"
    }), /*#__PURE__*/jsx("path", {
      d: "M1 1h22v22H1z",
      fill: "none"
    })]
  });
};

const FadeIn = styled.div`
  animation: ${fadeInAnimation} 0.15s ease-in;
`;

function OTPInput(props) {
  const otp = props.value.split("").map(Number);
  const setOTP = newOTP => {
    props.setValue(newOTP.join(""));
  };
  const inputToFocusIndex = otp.length;
  const boxEls = useRef([]);
  useEffect(() => {
    if (boxEls.current[inputToFocusIndex]) {
      requestAnimationFrame(() => {
        boxEls.current[inputToFocusIndex]?.focus();
      });
    }
  }, [inputToFocusIndex]);
  return /*#__PURE__*/jsx(Container, {
    center: "x",
    gap: "sm",
    flex: "row",
    children: new Array(props.digits).fill(null).map((_, i) => {
      return /*#__PURE__*/jsx(OTPInputBox, {
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
const OTPInputBox = styled(Input)`
  appearance: none;
  -webkit-appearance: none;
  width: 40px;
  height: 40px;
  text-align: center;
  font-size: ${fontSize.md};
  padding: ${spacing.xs};
  ${media.mobile} {
    width: 35px;
    height: 35px;
  }
  &[data-verify-status="invalid"] {
    color: ${p => p.theme.colors.danger};
    border-color: ${p => p.theme.colors.danger};
  }
`;

const PaperFormUI = props => {
  const createWalletInstance = useCreateWalletInstance();
  const setConnectionStatus = useSetConnectionStatus();
  const setConnectedWallet = useSetConnectedWallet();

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
  return /*#__PURE__*/jsxs("div", {
    children: [props.googleLoginSupported && /*#__PURE__*/jsxs(Fragment, {
      children: [/*#__PURE__*/jsxs(SocialButton, {
        variant: "secondary",
        fullWidth: true,
        onClick: () => {
          googleLogin();
          props.onSelect({
            google: true
          });
        },
        children: [/*#__PURE__*/jsx(GoogleIcon, {
          size: iconSize.md
        }), "Sign in with Google"]
      }), /*#__PURE__*/jsx(Spacer, {
        y: "lg"
      }), /*#__PURE__*/jsx(TextDivider, {
        children: /*#__PURE__*/jsx("span", {
          children: "OR"
        })
      }), /*#__PURE__*/jsx(Spacer, {
        y: "lg"
      })]
    }), /*#__PURE__*/jsx(InputSelectionUI, {
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
  return /*#__PURE__*/jsxs(Container, {
    fullHeight: true,
    flex: "column",
    p: "lg",
    animate: "fadein",
    style: {
      minHeight: "250px"
    },
    children: [/*#__PURE__*/jsx(ModalHeader, {
      onBack: props.onBack,
      title: "Sign in"
    }), isCompact ? /*#__PURE__*/jsx(Spacer, {
      y: "xl"
    }) : null, /*#__PURE__*/jsx(Container, {
      expand: true,
      flex: "column",
      center: "y",
      p: isCompact ? undefined : "lg",
      children: /*#__PURE__*/jsx(PaperFormUI, {
        walletConfig: props.walletConfig,
        googleLoginSupported: props.googleLoginSupported,
        onSelect: props.onSelect,
        showOrSeparator: false
      })
    })]
  });
};
const SocialButton = styled(Button)`
  display: flex;
  justify-content: center;
  gap: ${spacing.sm};
`;

const PaperOTPLoginUI = props => {
  const email = props.selectionData;
  const [otpInput, setOtpInput] = useState("");
  const [recoveryCode, setRecoveryCode] = useState("");
  const {
    createWalletInstance,
    setConnectedWallet,
    setConnectionStatus
  } = useWalletContext();
  const [wallet, setWallet] = useState(null);
  const [verifyStatus, setVerifyStatus] = useState("idle");
  const [sentEmailInfo, setSentEmailInfo] = useState(null);
  const recoveryCodeRequired = !!(sentEmailInfo && sentEmailInfo !== "error" && sentEmailInfo.recoveryShareManagement !== "AWS_MANAGED" && sentEmailInfo.isNewDevice && !sentEmailInfo.isNewUser);
  const sendEmail = useCallback(async () => {
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
  const emailSentOnMount = useRef(false);
  useEffect(() => {
    if (!emailSentOnMount.current) {
      emailSentOnMount.current = true;
      sendEmail();
    }
  }, [sendEmail]);
  return /*#__PURE__*/jsxs(Container, {
    fullHeight: true,
    flex: "column",
    p: "lg",
    animate: "fadein",
    children: [/*#__PURE__*/jsx(ModalHeader, {
      title: "Sign in",
      onBack: props.goBack
    }), /*#__PURE__*/jsx(Container, {
      expand: true,
      flex: "column",
      center: "y",
      children: /*#__PURE__*/jsxs("form", {
        onSubmit: e => {
          e.preventDefault();
        },
        children: [/*#__PURE__*/jsxs("div", {
          style: {
            textAlign: "center"
          },
          children: [/*#__PURE__*/jsx(Spacer, {
            y: "xxl"
          }), /*#__PURE__*/jsx(Text, {
            children: "Enter the OTP sent to"
          }), /*#__PURE__*/jsx(Spacer, {
            y: "sm"
          }), /*#__PURE__*/jsx(Text, {
            color: "primaryText",
            children: email
          }), /*#__PURE__*/jsx(Spacer, {
            y: "xl"
          })]
        }), /*#__PURE__*/jsx(OTPInput, {
          isInvalid: verifyStatus === "invalid",
          digits: 6,
          value: otpInput,
          setValue: value => {
            setOtpInput(value);
            setVerifyStatus("idle");
          },
          onEnter: handleSubmit
        }), recoveryCodeRequired && /*#__PURE__*/jsxs("div", {
          style: {
            textAlign: "center"
          },
          children: [/*#__PURE__*/jsx(Spacer, {
            y: "xl"
          }), /*#__PURE__*/jsx(Line, {}), /*#__PURE__*/jsx(Spacer, {
            y: "xl"
          }), /*#__PURE__*/jsx(Text, {
            color: "primaryText",
            children: "New device detected"
          }), /*#__PURE__*/jsx(Spacer, {
            y: "sm"
          }), /*#__PURE__*/jsxs(Text, {
            multiline: true,
            style: {
              maxWidth: "350px"
            },
            children: ["Enter the recovery code emailed to you ", /*#__PURE__*/jsx("br", {}), " when you first signed up"]
          }), /*#__PURE__*/jsx(Spacer, {
            y: "md"
          }), /*#__PURE__*/jsx(Input, {
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
        }), verifyStatus === "invalid" && /*#__PURE__*/jsxs(FadeIn, {
          children: [/*#__PURE__*/jsx(Spacer, {
            y: "sm"
          }), /*#__PURE__*/jsx(Container, {
            flex: "row",
            center: "x",
            children: /*#__PURE__*/jsxs(Text, {
              size: "sm",
              color: "danger",
              children: ["Invalid OTP ", recoveryCodeRequired ? "or recovery code" : ""]
            })
          })]
        }), /*#__PURE__*/jsx(Spacer, {
          y: "xl"
        }), verifyStatus === "verifying" ? /*#__PURE__*/jsxs(Fragment, {
          children: [/*#__PURE__*/jsx(Spacer, {
            y: "md"
          }), /*#__PURE__*/jsx(Container, {
            flex: "row",
            center: "x",
            children: /*#__PURE__*/jsx(Spinner, {
              size: "md",
              color: "accentText"
            })
          }), /*#__PURE__*/jsx(Spacer, {
            y: "md"
          })]
        }) : /*#__PURE__*/jsx(Button, {
          onClick: handleSubmit,
          variant: "accent",
          type: "submit",
          style: {
            width: "100%"
          },
          children: "Verify"
        }), /*#__PURE__*/jsx(Spacer, {
          y: "lg"
        }), sentEmailInfo === "error" && /*#__PURE__*/jsxs(Fragment, {
          children: [/*#__PURE__*/jsx(Text, {
            size: "sm",
            center: true,
            color: "danger",
            children: "Failed to send OTP"
          }), /*#__PURE__*/jsx(Spacer, {
            y: "md"
          })]
        }), !sentEmailInfo && /*#__PURE__*/jsxs(Container, {
          flex: "row",
          center: "both",
          gap: "xs",
          style: {
            textAlign: "center"
          },
          children: [/*#__PURE__*/jsx(Text, {
            size: "sm",
            children: "Sending OTP"
          }), /*#__PURE__*/jsx(Spinner, {
            size: "xs",
            color: "secondaryText"
          })]
        }), sentEmailInfo && /*#__PURE__*/jsx(LinkButton, {
          onClick: sendEmail,
          type: "button",
          children: "Resend OTP"
        })]
      })
    })]
  });
};
const LinkButton = styled.button`
  all: unset;
  color: ${p => p.theme.colors.accentText};
  font-size: ${fontSize.sm};
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
  const createWalletInstance = useCreateWalletInstance();
  const setConnectionStatus = useSetConnectionStatus();
  const setConnectedWallet = useSetConnectedWallet();
  const connectionStatus = useConnectionStatus();

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
  useEffect(() => {
    if (connectionStatus === "connected") {
      closeModal();
    }
  }, [connectionStatus, closeModal]);
  return /*#__PURE__*/jsx(Container, {
    animate: "fadein",
    flex: "column",
    fullHeight: true,
    children: /*#__PURE__*/jsxs(Container, {
      flex: "column",
      expand: true,
      p: "lg",
      style: {
        paddingBottom: 0
      },
      children: [/*#__PURE__*/jsx(ModalHeader, {
        title: /*#__PURE__*/jsxs(Container, {
          flex: "row",
          center: "both",
          gap: "xs",
          children: [/*#__PURE__*/jsx(GoogleIcon, {
            size: iconSize.md
          }), /*#__PURE__*/jsx(ModalTitle, {
            children: " Sign in "
          })]
        }),
        onBack: goBack
      }), modalSize === "compact" ? /*#__PURE__*/jsx(Spacer, {
        y: "xl"
      }) : null, /*#__PURE__*/jsxs(Container, {
        flex: "column",
        center: "both",
        expand: true,
        style: {
          textAlign: "center",
          minHeight: "250px"
        },
        children: [connectionStatus === "connecting" && /*#__PURE__*/jsxs(Container, {
          animate: "fadein",
          children: [/*#__PURE__*/jsx(Text, {
            color: "primaryText",
            multiline: true,
            style: {
              maxWidth: "250px"
            },
            children: "Select your Google account in the pop-up"
          }), /*#__PURE__*/jsx(Spacer, {
            y: "xl"
          }), /*#__PURE__*/jsx(Container, {
            center: "x",
            flex: "row",
            children: /*#__PURE__*/jsx(Spinner, {
              size: "lg",
              color: "accentText"
            })
          }), /*#__PURE__*/jsx(Spacer, {
            y: "xxl"
          })]
        }), connectionStatus === "disconnected" && /*#__PURE__*/jsxs(Container, {
          animate: "fadein",
          children: [/*#__PURE__*/jsx(Text, {
            color: "danger",
            children: "Failed to sign in"
          }), /*#__PURE__*/jsx(Spacer, {
            y: "lg"
          }), /*#__PURE__*/jsxs(Button, {
            variant: "primary",
            onClick: googleLogin,
            children: [" ", "Retry", " "]
          }), /*#__PURE__*/jsx(Spacer, {
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
    id: PaperWallet.id,
    recommended: config?.recommended,
    meta: {
      ...PaperWallet.meta,
      name: "Email",
      iconURL: emailIcon
    },
    create(options) {
      return new PaperWallet({
        ...options,
        ...config,
        advancedOptions: {
          recoveryShareManagement: "AWS_MANAGED",
          ...config?.advancedOptions
        }
      });
    },
    selectUI(props) {
      return /*#__PURE__*/jsx(PaperSelectionUI, {
        ...props,
        recoveryShareManagement: config?.advancedOptions?.recoveryShareManagement || defaultRecovery
      });
    },
    connectUI(props) {
      return /*#__PURE__*/jsx(PaperConnectUI, {
        ...props,
        recoveryShareManagement: config?.advancedOptions?.recoveryShareManagement || defaultRecovery
      });
    }
  };
};
const PaperSelectionUI = props => {
  const screen = useScreenContext();

  // show the icon + text if
  // wide -
  // compact + not main screen (safe/smart wallet list screen)
  if (props.modalSize === "wide" || screen !== reservedScreens.main && props.modalSize === "compact") {
    return /*#__PURE__*/jsx(WalletEntryButton, {
      walletConfig: props.walletConfig,
      selectWallet: () => {
        props.onSelect(undefined);
      }
    });
  }
  return /*#__PURE__*/jsx("div", {
    children: /*#__PURE__*/jsx(PaperFormUI, {
      walletConfig: props.walletConfig,
      googleLoginSupported: props.recoveryShareManagement !== "USER_MANAGED",
      showOrSeparator: props.supportedWallets.length > 1,
      onSelect: props.onSelect
    })
  });
};
const PaperConnectUI = props => {
  const [loginType, setLoginType] = useState(props.selectionData);
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
      return /*#__PURE__*/jsx(PaperOTPLoginUI, {
        ...props,
        recoveryShareManagement: props.recoveryShareManagement,
        selectionData: loginType.email,
        goBack: handleBack
      });
    }

    // google
    else {
      return /*#__PURE__*/jsx(PaperGoogleLogin, {
        ...props,
        goBack: handleBack
      });
    }
  }
  return /*#__PURE__*/jsx(PaperFormUIScreen, {
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

export { FadeIn as F, GoogleIcon as G, OTPInput as O, paperWallet$1 as a, paperWallet as p };
