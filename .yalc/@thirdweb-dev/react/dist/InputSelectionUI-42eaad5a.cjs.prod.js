'use strict';

var React = require('react');
var formElements = require('./formElements-c7791271.cjs.prod.js');
var jsxRuntime = require('react/jsx-runtime');

function InputSelectionUI(props) {
  const [input, setInput] = React.useState("");
  const [error, setError] = React.useState();
  const [showError, setShowError] = React.useState(false);
  const handleSelect = () => {
    setShowError(true);
    if (!input || !!error) {
      return;
    }
    props.onSelect(input);
  };
  const renderingError = showError && !!error || !input && !!props.emptyErrorMessage && showError;
  return /*#__PURE__*/jsxRuntime.jsxs("div", {
    children: [!props.noInput && /*#__PURE__*/jsxRuntime.jsx("div", {
      style: {
        position: "relative"
      },
      children: /*#__PURE__*/jsxRuntime.jsx(formElements.Input, {
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
    }), showError && error && /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
      children: [/*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
        y: "xs"
      }), /*#__PURE__*/jsxRuntime.jsx(formElements.Text, {
        color: "danger",
        size: "sm",
        children: error
      })]
    }), !(showError && error) && !input && props.emptyErrorMessage && showError && /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
      children: [/*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
        y: "xs"
      }), /*#__PURE__*/jsxRuntime.jsx(formElements.Text, {
        color: "danger",
        size: "sm",
        children: props.emptyErrorMessage
      })]
    }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
      y: "md"
    }), /*#__PURE__*/jsxRuntime.jsx(formElements.Button, {
      variant: "accent",
      onClick: handleSelect,
      fullWidth: true,
      children: "Continue"
    }), props.footer, props.showOrSeparator && /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
      children: [/*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
        y: "lg"
      }), /*#__PURE__*/jsxRuntime.jsx(formElements.TextDivider, {
        children: /*#__PURE__*/jsxRuntime.jsx("span", {
          children: " OR "
        })
      }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
        y: "md"
      })]
    })]
  });
}

exports.InputSelectionUI = InputSelectionUI;
