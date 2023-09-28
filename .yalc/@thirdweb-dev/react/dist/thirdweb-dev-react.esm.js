import { u as useScreenContext, E as ExportLocalWallet, s as shortenAddress } from './useWalletConnect-4c0f946a.esm.js';
export { a as ConnectModalInline, C as ConnectWallet, M as MediaRenderer, N as NetworkSelector, o as ThirdwebNftMedia, T as ThirdwebProvider, W as Web3Button, d as defaultTokens, i as useBloctoWallet, g as useCoinbaseWallet, h as useFrameWallet, b as useInstalledWallets, f as useMetamask, k as usePaperWallet, j as usePaperWalletUserEmail, c as useRainbowWallet, n as useResolvedMediaType, e as useTrustWallet, l as useWalletConnect, m as useWalletConnectV1 } from './useWalletConnect-4c0f946a.esm.js';
import { F as FormFieldWithIconButton, w as wait, H as HeadlessConnectUI } from './formFields-a21ebc5c.esm.js';
export { c as coinbaseWallet, d as defaultWallets, m as metamaskWallet, p as phantomWallet, r as rainbowWallet, t as trustWallet, a as walletConnect, z as zerionWallet } from './formFields-a21ebc5c.esm.js';
import { useConnect, useCreateWalletInstance, useSetConnectionStatus, useSetConnectedWallet, useConnectionStatus, useWalletContext, useWallet, useChain, useNetworkMismatch, useSwitchChain } from '@thirdweb-dev/react-core';
export * from '@thirdweb-dev/react-core';
import { useCallback, useEffect, useState, useRef, useContext } from 'react';
export { bloctoWallet } from './bloctoWallet-09ca2b8f.esm.js';
import { EmbeddedWallet, LocalWallet, SmartWallet } from '@thirdweb-dev/wallets';
import { B as Button, s as spacing, i as iconSize, S as Spacer, T as TextDivider, C as Container, M as ModalHeader, a as ModalTitle, b as Text, c as Spinner, f as fontSize, r as reservedScreens, W as WalletEntryButton, d as radius, e as isMobile, L as Line, g as ModalDescription, h as Label, j as ModalConfigCtx } from './formElements-9d40a4dd.esm.js';
export { k as darkTheme, l as lightTheme, u as useIsWalletModalOpen, m as useSetIsWalletModalOpen } from './formElements-9d40a4dd.esm.js';
import { e as emailIcon } from './Tooltip-28e05219.esm.js';
import styled from '@emotion/styled';
import { G as GoogleIcon, O as OTPInput, F as FadeIn } from './paperWallet-65a71eed.esm.js';
export { p as paperWallet } from './paperWallet-65a71eed.esm.js';
import { I as InputSelectionUI } from './InputSelectionUI-42ecf549.esm.js';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
export { frameWallet } from './frameWallet-d33ec12d.esm.js';
import { UploadIcon, EyeClosedIcon, EyeOpenIcon, PlusIcon, PinBottomIcon, ExclamationTriangleIcon } from '@radix-ui/react-icons';
export { magicLink } from './magicLink-aa759fec.esm.js';
export { safeWallet } from './safeWallet-9caef928.esm.js';
export { walletConnectV1 } from './walletConnectV1-f39bb8eb.esm.js';
export { u as useSafe } from './useSafe-ab07e6eb.esm.js';
export { u as useMagic } from './useMagic-f6340b25.esm.js';
import '@tanstack/react-query';
import '@emotion/react';
import '@radix-ui/react-popover';
import 'copy-to-clipboard';
import 'ethers';
import '@radix-ui/react-tabs';
import 'fuse.js';
import '@radix-ui/react-dropdown-menu';
import '@thirdweb-dev/chains';
import '@thirdweb-dev/sdk';
import '@thirdweb-dev/sdk/evm';
import 'tiny-invariant';
import '@radix-ui/react-dialog';
import 'qrcode';
import 'detect-browser';
import '@radix-ui/colors';
import '@radix-ui/react-tooltip';

function useSmartWallet() {
  const connect = useConnect();
  return useCallback(async (wallet, options) => {
    const {
      smartWallet
    } = await Promise.resolve().then(function () { return smartWallet$1; });
    return connect(smartWallet(wallet, options), options);
  }, [connect]);
}

const EmbeddedWalletFormUI = props => {
  const createWalletInstance = useCreateWalletInstance();
  const setConnectionStatus = useSetConnectionStatus();
  const setConnectedWallet = useSetConnectedWallet();

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
  return /*#__PURE__*/jsxs("div", {
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
const EmbeddedWalletFormUIScreen = props => {
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
      children: /*#__PURE__*/jsx(EmbeddedWalletFormUI, {
        walletConfig: props.walletConfig,
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

const EmbeddedWalletGoogleLogin = props => {
  const {
    goBack,
    modalSize
  } = props;
  const createWalletInstance = useCreateWalletInstance();
  const setConnectionStatus = useSetConnectionStatus();
  const setConnectedWallet = useSetConnectedWallet();
  const connectionStatus = useConnectionStatus();
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

const EmbeddedWalletOTPLoginUI = props => {
  const email = props.selectionData;
  const [otpInput, setOtpInput] = useState("");
  const {
    createWalletInstance,
    setConnectedWallet,
    setConnectionStatus
  } = useWalletContext();
  const [wallet, setWallet] = useState(null);
  const [verifyStatus, setVerifyStatus] = useState("idle");
  const [sendEmailOtpStatus, setSendEmailOtpStatus] = useState("sending");
  const sendEmail = useCallback(async () => {
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
        }), verifyStatus === "invalid" && /*#__PURE__*/jsxs(FadeIn, {
          children: [/*#__PURE__*/jsx(Spacer, {
            y: "sm"
          }), /*#__PURE__*/jsx(Container, {
            flex: "row",
            center: "x",
            children: /*#__PURE__*/jsxs(Text, {
              size: "sm",
              color: "danger",
              children: ["Invalid OTP ", ""]
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
        }), sendEmailOtpStatus === "error" && /*#__PURE__*/jsxs(Fragment, {
          children: [/*#__PURE__*/jsx(Text, {
            size: "sm",
            center: true,
            color: "danger",
            children: "Failed to send OTP"
          }), /*#__PURE__*/jsx(Spacer, {
            y: "md"
          })]
        }), sendEmailOtpStatus === "sending" && /*#__PURE__*/jsxs(Container, {
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
        }), sendEmailOtpStatus === "sent" && /*#__PURE__*/jsx(LinkButton, {
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

const embeddedWallet = config => {
  return {
    category: "socialLogin",
    id: EmbeddedWallet.id,
    recommended: config?.recommended,
    meta: {
      ...EmbeddedWallet.meta,
      name: "Email",
      iconURL: emailIcon
    },
    create(options) {
      return new EmbeddedWallet({
        ...options,
        ...config,
        clientId: options?.clientId ?? ""
      });
    },
    selectUI(props) {
      return /*#__PURE__*/jsx(EmbeddedWalletSelectionUI, {
        ...props
      });
    },
    connectUI(props) {
      return /*#__PURE__*/jsx(EmbeddedWalletConnectUI, {
        ...props
      });
    }
  };
};
const EmbeddedWalletSelectionUI = props => {
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
    children: /*#__PURE__*/jsx(EmbeddedWalletFormUI, {
      showOrSeparator: props.supportedWallets.length > 1,
      onSelect: props.onSelect,
      walletConfig: props.walletConfig
    })
  });
};
const EmbeddedWalletConnectUI = props => {
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
      return /*#__PURE__*/jsx(EmbeddedWalletOTPLoginUI, {
        ...props,
        selectionData: loginType.email,
        goBack: handleBack
      });
    }

    // google
    else {
      return /*#__PURE__*/jsx(EmbeddedWalletGoogleLogin, {
        ...props,
        goBack: handleBack
      });
    }
  }
  return /*#__PURE__*/jsx(EmbeddedWalletFormUIScreen, {
    modalSize: props.modalSize,
    onSelect: _loginType => {
      setLoginType(_loginType);
    },
    walletConfig: props.walletConfig,
    onBack: props.goBack
  });
};

function useLocalWalletInfo(localWalletConfig, persist) {
  const [walletData, setWalletData] = useState("loading");
  const createWalletInstance = useCreateWalletInstance();
  const [localWallet, setLocalWallet] = useState(null);
  useEffect(() => {
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
  const [error, setError] = useState(false);
  const [uploaded, setUploaded] = useState();
  const [isDragging, setIsDragging] = useState(false);
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
  const message = isMobile() ? "Click to Upload" : "Drop your file here or click to upload";
  return /*#__PURE__*/jsx("div", {
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
    children: /*#__PURE__*/jsxs("label", {
      htmlFor: "file-upload",
      children: [/*#__PURE__*/jsx("input", {
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
      }), /*#__PURE__*/jsx(DropContainer, {
        "data-error": error,
        "data-is-dragging": isDragging,
        children: !uploaded ? /*#__PURE__*/jsxs(Fragment, {
          children: [" ", /*#__PURE__*/jsx(UploadIconSecondary, {
            width: iconSize.lg,
            height: iconSize.lg
          }), /*#__PURE__*/jsx(Spacer, {
            y: "md"
          }), /*#__PURE__*/jsxs(Text, {
            color: "primaryText",
            weight: 600,
            center: true,
            multiline: true,
            children: [" ", message]
          }), /*#__PURE__*/jsx(Spacer, {
            y: "lg"
          }), error ? /*#__PURE__*/jsxs(Text, {
            color: "danger",
            size: "sm",
            children: [" ", "Please upload a ", props.extension, " file", " "]
          }) : /*#__PURE__*/jsxs(Text, {
            size: "sm",
            children: [" ", props.extension, " "]
          })]
        }) : /*#__PURE__*/jsxs(Fragment, {
          children: [/*#__PURE__*/jsxs(Text, {
            weight: 600,
            color: "primaryText",
            center: true,
            multiline: true,
            children: [uploaded.name, " uploaded successfully"]
          }), /*#__PURE__*/jsx(Spacer, {
            y: "md"
          }), /*#__PURE__*/jsx(Container, {
            color: "success",
            children: /*#__PURE__*/jsx(CheckCircleIcon, {
              size: iconSize.xl
            })
          })]
        })
      })]
    })
  });
};
const UploadIconSecondary = styled(UploadIcon)`
  color: ${props => props.theme.colors.secondaryIconColor};
  transition:
    transform 200ms ease,
    color 200ms ease;
`;
const DropContainer = styled.div`
  border: 2px solid ${p => p.theme.colors.borderColor};
  border-radius: ${radius.md};
  padding: ${spacing.xl} ${spacing.md};
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
const CheckCircleIcon = props => /*#__PURE__*/jsxs("svg", {
  width: props.size,
  height: props.size,
  viewBox: "0 0 38 38",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/*#__PURE__*/jsx("path", {
    d: "M35.6666 17.4671V19.0004C35.6645 22.5945 34.5008 26.0916 32.3488 28.9701C30.1969 31.8487 27.1721 33.9546 23.7255 34.9736C20.279 35.9926 16.5954 35.8703 13.224 34.6247C9.85272 33.3792 6.97434 31.0773 5.01819 28.0622C3.06203 25.0472 2.1329 21.4805 2.36938 17.8943C2.60586 14.308 3.99526 10.8943 6.33039 8.16221C8.66551 5.43012 11.8212 3.52606 15.3269 2.734C18.8326 1.94194 22.5004 2.30432 25.7833 3.76709",
    stroke: "currentColor",
    strokeWidth: "3.33333",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/jsx("path", {
    d: "M35.6667 5.66699L19 22.3503L14 17.3503",
    stroke: "currentColor",
    strokeWidth: "3.33333",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })]
});

const ImportLocalWallet = props => {
  const [jsonString, setJsonString] = useState();
  const {
    setLocalWallet,
    meta
  } = useLocalWalletInfo(props.localWalletConf, props.persist);
  const createWalletInstance = useCreateWalletInstance();
  const [password, setPassword] = useState("");
  const [isWrongPassword, setIsWrongPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [importedAddress, setImportedAddress] = useState();
  const {
    setConnectedWallet,
    setConnectionStatus
  } = useWalletContext();
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
  return /*#__PURE__*/jsxs(Container, {
    children: [/*#__PURE__*/jsx(Container, {
      p: "lg",
      children: /*#__PURE__*/jsx(ModalHeader, {
        onBack: props.goBack,
        title: "Import Wallet",
        imgSrc: meta.iconURL
      })
    }), /*#__PURE__*/jsx(Line, {}), /*#__PURE__*/jsxs(Container, {
      p: "lg",
      children: [/*#__PURE__*/jsx(ModalDescription, {
        sm: true,
        children: "The application can authorize any transactions on behalf of the wallet without any approvals."
      }), /*#__PURE__*/jsx(Spacer, {
        y: "xs"
      }), /*#__PURE__*/jsx(ModalDescription, {
        sm: true,
        children: "We recommend only connecting to trusted applications."
      }), /*#__PURE__*/jsx(Spacer, {
        y: "lg"
      }), /*#__PURE__*/jsx(DragNDrop, {
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
      }), /*#__PURE__*/jsx(Spacer, {
        y: "lg"
      }), /*#__PURE__*/jsxs("form", {
        onSubmit: e => {
          e.preventDefault();
          handleImport();
        },
        children: [jsonString && /*#__PURE__*/jsxs(Fragment, {
          children: [/*#__PURE__*/jsx("input", {
            type: "text",
            name: "username",
            autoComplete: "off",
            value: importedAddress || "",
            disabled: true,
            style: {
              display: "none"
            }
          }), /*#__PURE__*/jsx(FormFieldWithIconButton, {
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
              icon: showPassword ? /*#__PURE__*/jsx(EyeClosedIcon, {}) : /*#__PURE__*/jsx(EyeOpenIcon, {})
            },
            label: "Password",
            type: showPassword ? "text" : "password",
            value: password,
            error: isWrongPassword ? "Wrong Password" : ""
          }), /*#__PURE__*/jsx(Spacer, {
            y: "xl"
          })]
        }), /*#__PURE__*/jsx(Container, {
          flex: "row",
          style: {
            justifyContent: "flex-end"
          },
          children: /*#__PURE__*/jsx(Button, {
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
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const passwordMismatch = confirmPassword && password !== confirmPassword;
  const [isConnecting, setIsConnecting] = useState(false);
  const {
    localWallet
  } = useLocalWalletInfo(props.localWalletConf, props.persist);
  const {
    setConnectedWallet,
    setConnectionStatus
  } = useWalletContext();
  const [showImportScreen, setShowImportScreen] = useState(false);
  const [generatedAddress, setGeneratedAddress] = useState(null);

  // generating wallet before it's required to render a form with hidden address as username for better autofill
  useEffect(() => {
    if (!localWallet || showImportScreen || localWallet.ethersWallet) {
      return;
    }
    localWallet.generate().then(_address => {
      setGeneratedAddress(_address);
    });
  }, [localWallet, showImportScreen]);
  if (showImportScreen) {
    return /*#__PURE__*/jsx(ImportLocalWallet, {
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
  return /*#__PURE__*/jsxs(Container, {
    fullHeight: true,
    children: [/*#__PURE__*/jsx(Container, {
      p: "lg",
      children: /*#__PURE__*/jsx(ModalHeader, {
        onBack: props.renderBackButton ? props.goBack : undefined,
        title: props.localWalletConf.meta.name,
        imgSrc: props.localWalletConf.meta.iconURL
      })
    }), /*#__PURE__*/jsx(Line, {}), /*#__PURE__*/jsxs(Container, {
      p: "lg",
      children: [/*#__PURE__*/jsxs(ModalDescription, {
        sm: true,
        children: ["Choose a password for your wallet. ", /*#__PURE__*/jsx("br", {}), " You", `'`, "ll be able to access and export this wallet with the same password."]
      }), /*#__PURE__*/jsx(Spacer, {
        y: "lg"
      }), /*#__PURE__*/jsxs("form", {
        onSubmit: e => {
          e.preventDefault();
          handleConnect();
        },
        children: [/*#__PURE__*/jsx("input", {
          type: "text",
          name: "username",
          autoComplete: "off",
          value: generatedAddress || "",
          disabled: true,
          style: {
            display: "none"
          }
        }), /*#__PURE__*/jsx(FormFieldWithIconButton, {
          name: "password",
          required: true,
          autocomplete: "new-password",
          id: "new-password",
          onChange: value => setPassword(value),
          right: {
            icon: showPassword ? /*#__PURE__*/jsx(EyeClosedIcon, {}) : /*#__PURE__*/jsx(EyeOpenIcon, {}),
            onClick: () => setShowPassword(!showPassword)
          },
          label: "Password",
          type: showPassword ? "text" : "password",
          value: password,
          dataTest: "new-password"
        }), /*#__PURE__*/jsx(Spacer, {
          y: "lg"
        }), /*#__PURE__*/jsx(FormFieldWithIconButton, {
          name: "confirm-password",
          required: true,
          autocomplete: "new-password",
          id: "confirm-password",
          onChange: value => setConfirmPassword(value),
          right: {
            icon: showPassword ? /*#__PURE__*/jsx(EyeClosedIcon, {}) : /*#__PURE__*/jsx(EyeOpenIcon, {}),
            onClick: () => setShowPassword(!showPassword)
          },
          label: "Confirm Password",
          type: showPassword ? "text" : "password",
          value: confirmPassword,
          error: passwordMismatch ? "Passwords don't match" : "",
          dataTest: "confirm-password"
        }), /*#__PURE__*/jsx(Spacer, {
          y: "lg"
        }), /*#__PURE__*/jsxs(Button, {
          variant: "accent",
          type: "submit",
          fullWidth: true,
          style: {
            gap: spacing.xs,
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          },
          "data-test": "create-new-wallet-button",
          children: [!isConnecting && /*#__PURE__*/jsx(PlusIcon, {
            width: iconSize.sm,
            height: iconSize.sm
          }), isConnecting ? "Connecting" : "Create new wallet", isConnecting && /*#__PURE__*/jsx(Spinner, {
            size: "sm",
            color: "accentButtonText"
          })]
        })]
      }), /*#__PURE__*/jsx(Spacer, {
        y: "lg"
      }), /*#__PURE__*/jsx(TextDivider, {
        children: /*#__PURE__*/jsx("span", {
          children: "OR"
        })
      }), /*#__PURE__*/jsx(Spacer, {
        y: "lg"
      }), /*#__PURE__*/jsxs(Button, {
        fullWidth: true,
        variant: "outline",
        onClick: () => {
          setShowImportScreen(true);
        },
        style: {
          display: "flex",
          gap: spacing.sm,
          alignItems: "center"
        },
        children: [/*#__PURE__*/jsx(PinBottomIcon, {
          width: iconSize.sm,
          height: iconSize.sm
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
  } = useWalletContext();
  const {
    onConnect
  } = props;
  const handleConnect = useCallback(async () => {
    if (!localWallet) {
      throw new Error("Invalid state");
    }
    await localWallet.generate();
    setConnectionStatus("connecting");
    await wait(1000);
    await localWallet.connect();
    setConnectedWallet(localWallet);
    onConnect();
  }, [localWallet, setConnectedWallet, onConnect, setConnectionStatus]);
  const connecting = useRef(false);
  useEffect(() => {
    if (connecting.current || !localWallet) {
      return;
    }
    connecting.current = true;
    handleConnect();
  }, [handleConnect, localWallet]);
  return /*#__PURE__*/jsx(Container, {
    flex: "row",
    center: "both",
    fullHeight: true,
    style: {
      minHeight: "300px"
    },
    children: /*#__PURE__*/jsx(Spinner, {
      size: "xl",
      color: "accentText"
    })
  });
};

const OverrideConfirmation = props => {
  return /*#__PURE__*/jsxs(Container, {
    p: "lg",
    children: [/*#__PURE__*/jsx(ModalHeader, {
      onBack: props.onBack,
      title: "Warning"
    }), /*#__PURE__*/jsx(Spacer, {
      y: "xl"
    }), /*#__PURE__*/jsxs(Container, {
      children: [/*#__PURE__*/jsx(Text, {
        multiline: true,
        children: "Your current wallet will be deleted if you create a new wallet. Backup wallet to your device before creating a new wallet"
      }), /*#__PURE__*/jsx(Spacer, {
        y: "xl"
      }), /*#__PURE__*/jsx(Container, {
        flex: "row",
        style: {
          justifyContent: "flex-end"
        },
        children: /*#__PURE__*/jsx(Button, {
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
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isWrongPassword, setIsWrongPassword] = useState(false);
  const {
    setConnectedWallet,
    setConnectionStatus
  } = useWalletContext();
  const [isConnecting, setIsConnecting] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const [showBackupConfirmation, setShowBackupConfirmation] = useState(false);
  const [showExport, setShowExport] = useState(false);
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
    return /*#__PURE__*/jsx(ExportLocalWallet, {
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
    return /*#__PURE__*/jsx(OverrideConfirmation, {
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
    return /*#__PURE__*/jsx(CreateLocalWallet_Password, {
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
  return /*#__PURE__*/jsxs(Container, {
    animate: "fadein",
    children: [/*#__PURE__*/jsx(Container, {
      p: "lg",
      children: /*#__PURE__*/jsx(ModalHeader, {
        onBack: props.renderBackButton ? props.goBack : undefined,
        title: meta.name,
        imgSrc: meta.iconURL
      })
    }), /*#__PURE__*/jsx(Line, {}), /*#__PURE__*/jsxs(Container, {
      p: "lg",
      children: [/*#__PURE__*/jsx(Text, {
        multiline: true,
        size: "lg",
        color: "primaryText",
        children: "Connect to saved wallet"
      }), /*#__PURE__*/jsx(Spacer, {
        y: "xl"
      }), /*#__PURE__*/jsx(Label, {
        children: "Saved Wallet"
      }), /*#__PURE__*/jsx(Spacer, {
        y: "sm"
      }), /*#__PURE__*/jsx(Text, {
        children: savedAddress === "" ? "Loading..." : shortenAddress(savedAddress)
      }), /*#__PURE__*/jsx(Spacer, {
        y: "xl"
      }), /*#__PURE__*/jsxs("form", {
        onSubmit: e => {
          e.preventDefault();
          handleReconnect();
        },
        children: [/*#__PURE__*/jsx("input", {
          type: "text",
          name: "username",
          autoComplete: "off",
          value: savedAddress,
          disabled: true,
          style: {
            display: "none"
          }
        }), /*#__PURE__*/jsx(FormFieldWithIconButton, {
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
            icon: showPassword ? /*#__PURE__*/jsx(EyeClosedIcon, {}) : /*#__PURE__*/jsx(EyeOpenIcon, {})
          },
          label: "Password",
          type: showPassword ? "text" : "password",
          value: password,
          error: isWrongPassword ? "Wrong Password" : "",
          dataTest: "current-password",
          placeholder: "Enter your password"
        }), /*#__PURE__*/jsx(Spacer, {
          y: "md"
        }), /*#__PURE__*/jsxs(Button, {
          variant: "accent",
          type: "submit",
          fullWidth: true,
          style: {
            display: "flex",
            gap: spacing.sm
          },
          children: ["Continue", isConnecting && /*#__PURE__*/jsx(Spinner, {
            size: "sm",
            color: "accentButtonText"
          })]
        })]
      }), /*#__PURE__*/jsx(Spacer, {
        y: "xl"
      }), /*#__PURE__*/jsx(TextDivider, {
        children: /*#__PURE__*/jsx("span", {
          children: " OR "
        })
      }), /*#__PURE__*/jsx(Spacer, {
        y: "xl"
      }), /*#__PURE__*/jsx(Button, {
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
    return /*#__PURE__*/jsx(CreateLocalWallet_Guest, {
      persist: props.persist,
      localWallet: props.walletConfig,
      goBack: props.goBack,
      onConnect: props.close
    });
  }
  if (walletData === "loading") {
    return /*#__PURE__*/jsx(Container, {
      flex: "row",
      center: "both",
      style: {
        height: "300px"
      },
      children: /*#__PURE__*/jsx(Spinner, {
        size: "lg",
        color: "accentText"
      })
    });
  }
  if (walletData) {
    return /*#__PURE__*/jsx(ReconnectLocalWallet, {
      modalSize: props.modalSize,
      renderBackButton: props.supportedWallets.length > 1,
      supportedWallets: props.supportedWallets,
      onConnect: props.close,
      goBack: props.goBack,
      localWallet: props.walletConfig,
      persist: props.persist
    });
  }
  return /*#__PURE__*/jsx(CreateLocalWallet_Password, {
    goBack: props.goBack,
    localWalletConf: props.walletConfig,
    onConnect: props.close,
    renderBackButton: props.supportedWallets.length > 1,
    persist: props.persist
  });
};

const localWallet = config => {
  return {
    id: LocalWallet.id,
    meta: {
      ...LocalWallet.meta,
      name: "Guest Wallet",
      iconURL: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiByeD0iMTIiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8xXzY0KSIvPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfMV82NCkiPgo8cGF0aCBkPSJNNTguNzUgMTkuMTY2N0gyMS4yNUMxOC45NTgzIDE5LjE2NjcgMTcuMDgzMyAyMS4wNDE3IDE3LjA4MzMgMjMuMzMzNFY0OC4zMzM0QzE3LjA4MzMgNTAuNjI1IDE4Ljk1ODMgNTIuNSAyMS4yNSA1Mi41SDM1LjgzMzNMMzEuNjY2NyA1OC43NVY2MC44MzM0SDQ4LjMzMzNWNTguNzVMNDQuMTY2NyA1Mi41SDU4Ljc1QzYxLjA0MTcgNTIuNSA2Mi45MTY3IDUwLjYyNSA2Mi45MTY3IDQ4LjMzMzRWMjMuMzMzNEM2Mi45MTY3IDIxLjA0MTcgNjEuMDQxNyAxOS4xNjY3IDU4Ljc1IDE5LjE2NjdaTTU4Ljc1IDQ0LjE2NjdIMjEuMjVWMjMuMzMzNEg1OC43NVY0NC4xNjY3WiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzFfNjQiIHgxPSI0MCIgeTE9IjAiIHgyPSI0MCIgeTI9IjgwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNDRTExQUIiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjOTAwQkI1Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMV82NCI+CjxyZWN0IHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE1IDE1KSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="
    },
    create: options => new LocalWallet(options),
    connectUI(props) {
      return /*#__PURE__*/jsx(LocalWalletConnectUI, {
        ...props,
        persist: config && config.persist !== undefined ? config.persist : true
      });
    }
  };
};

const SmartWalletConnecting = props => {
  const activeWallet = useWallet(); // personal wallet

  const connect = useConnect();
  const connectedChain = useChain();
  const targetChain = useWalletContext().activeChain;
  const mismatch = useNetworkMismatch();
  const [connectError, setConnectError] = useState(false);
  const [switchError, setSwitchError] = useState(false);
  const [switchingNetwork, setSwitchingNetwork] = useState(false);
  const connectionStatus = useConnectionStatus();
  const {
    onConnect
  } = props;
  const connectStarted = useRef(false);
  const switchChain = useSwitchChain();
  const modalSize = useContext(ModalConfigCtx).modalSize;
  const handleConnect = useCallback(async () => {
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
  useEffect(() => {
    if (!mismatch) {
      handleConnect();
    }
  }, [mismatch, handleConnect, activeWallet, connectedChain]);
  if (!connectError && (connectionStatus === "connecting" || !mismatch)) {
    return /*#__PURE__*/jsx(Container, {
      fullHeight: true,
      flex: "column",
      center: "both",
      style: {
        minHeight: "300px"
      },
      children: /*#__PURE__*/jsx(Spinner, {
        color: "accentText",
        size: "xl"
      })
    });
  }
  if (connectError) {
    return /*#__PURE__*/jsx(Container, {
      fullHeight: true,
      animate: "fadein",
      flex: "column",
      center: "both",
      p: "lg",
      style: {
        minHeight: "300px"
      },
      children: /*#__PURE__*/jsx(Text, {
        color: "danger",
        children: "Failed to connect to Smart Wallet"
      })
    });
  }
  return /*#__PURE__*/jsxs(Container, {
    fullHeight: true,
    animate: "fadein",
    flex: "column",
    children: [/*#__PURE__*/jsx(Container, {
      p: "lg",
      children: /*#__PURE__*/jsx(ModalHeader, {
        title: props.personalWallet.meta.name,
        imgSrc: props.personalWallet.meta.iconURL,
        onBack: props.onBack
      })
    }), modalSize === "compact" && /*#__PURE__*/jsx(Spacer, {
      y: "lg"
    }), /*#__PURE__*/jsx(Container, {
      expand: true,
      flex: "column",
      center: "both",
      p: "lg",
      children: /*#__PURE__*/jsxs(Container, {
        p: modalSize === "wide" ? "lg" : undefined,
        children: [/*#__PURE__*/jsx(Container, {
          flex: "row",
          center: "x",
          color: "danger",
          children: /*#__PURE__*/jsx(ExclamationTriangleIcon, {
            width: iconSize.lg,
            height: iconSize.lg
          })
        }), /*#__PURE__*/jsx(Spacer, {
          y: "md"
        }), /*#__PURE__*/jsx(Text, {
          size: "lg",
          color: "primaryText",
          center: true,
          weight: 500,
          children: "Wrong Network"
        }), /*#__PURE__*/jsx(Spacer, {
          y: "lg"
        }), /*#__PURE__*/jsx(Text, {
          multiline: true,
          center: true,
          children: "Your wallet is not connected to the required network"
        }), /*#__PURE__*/jsx(Spacer, {
          y: "xl"
        }), /*#__PURE__*/jsxs(Container, {
          flex: "column",
          gap: "md",
          children: [/*#__PURE__*/jsxs(Button, {
            type: "button",
            fullWidth: true,
            variant: "accent",
            style: {
              display: "flex",
              alignItems: "center",
              gap: spacing.sm
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
            children: [" ", switchingNetwork ? "Switching" : "Switch Network", switchingNetwork && /*#__PURE__*/jsx(Spinner, {
              size: "sm",
              color: "accentButtonText"
            })]
          }), /*#__PURE__*/jsxs(Container, {
            flex: "row",
            gap: "sm",
            center: "both",
            color: "danger",
            style: {
              textAlign: "center",
              fontSize: fontSize.sm,
              opacity: switchError ? 1 : 0,
              transition: "opacity 200ms ease"
            },
            children: [/*#__PURE__*/jsx(ExclamationTriangleIcon, {
              width: iconSize.sm,
              height: iconSize.sm
            }), /*#__PURE__*/jsx("span", {
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
    create: options => new SmartWallet({
      ...options,
      ...config
    }),
    connectUI(props) {
      return /*#__PURE__*/jsx(SmartConnectUI, {
        ...props,
        personalWallet: wallet
      });
    },
    selectUI: WalletSelectUI ? props => {
      return /*#__PURE__*/jsx(WalletSelectUI, {
        ...props,
        walletConfig: wallet
      });
    } : undefined,
    personalWallets: [wallet]
  };
};
const SmartConnectUI = props => {
  const activeWallet = useWallet();
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
      return /*#__PURE__*/jsx(PersonalWalletConfig.connectUI, {
        ..._props
      });
    }
    return /*#__PURE__*/jsx(HeadlessConnectUI, {
      ..._props
    });
  }
  return /*#__PURE__*/jsx(SmartWalletConnecting, {
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

export { embeddedWallet, localWallet, smartWallet, useSmartWallet };
