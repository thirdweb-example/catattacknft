import { useState } from 'react';
import { A as Input, S as Spacer, b as Text, B as Button, T as TextDivider } from './formElements-b7b8cdcb.browser.esm.js';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';

function InputSelectionUI(props) {
  const [input, setInput] = useState("");
  const [error, setError] = useState();
  const [showError, setShowError] = useState(false);
  const handleSelect = () => {
    setShowError(true);
    if (!input || !!error) {
      return;
    }
    props.onSelect(input);
  };
  const renderingError = showError && !!error || !input && !!props.emptyErrorMessage && showError;
  return /*#__PURE__*/jsxs("div", {
    children: [!props.noInput && /*#__PURE__*/jsx("div", {
      style: {
        position: "relative"
      },
      children: /*#__PURE__*/jsx(Input, {
        tabIndex: -1,
        placeholder: props.placeholder,
        variant: "outline",
        type: props.type,
        name: props.name,
        value: input,
        "data-error": renderingError,
        onChange: e => {
          setInput(e.target.value);
          if (props.errorMessage) {
            setError(props.errorMessage(e.target.value));
          } else {
            setError(undefined);
          }
        },
        onKeyDown: e => {
          if (e.key === "Enter") {
            handleSelect();
          }
        }
      })
    }), showError && error && /*#__PURE__*/jsxs(Fragment, {
      children: [/*#__PURE__*/jsx(Spacer, {
        y: "xs"
      }), /*#__PURE__*/jsx(Text, {
        color: "danger",
        size: "sm",
        children: error
      })]
    }), !(showError && error) && !input && props.emptyErrorMessage && showError && /*#__PURE__*/jsxs(Fragment, {
      children: [/*#__PURE__*/jsx(Spacer, {
        y: "xs"
      }), /*#__PURE__*/jsx(Text, {
        color: "danger",
        size: "sm",
        children: props.emptyErrorMessage
      })]
    }), /*#__PURE__*/jsx(Spacer, {
      y: "md"
    }), /*#__PURE__*/jsx(Button, {
      variant: "accent",
      onClick: handleSelect,
      fullWidth: true,
      children: "Continue"
    }), props.footer, props.showOrSeparator && /*#__PURE__*/jsxs(Fragment, {
      children: [/*#__PURE__*/jsx(Spacer, {
        y: "lg"
      }), /*#__PURE__*/jsx(TextDivider, {
        children: /*#__PURE__*/jsx("span", {
          children: " OR "
        })
      }), /*#__PURE__*/jsx(Spacer, {
        y: "md"
      })]
    })]
  });
}

export { InputSelectionUI as I };
