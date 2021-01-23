function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

function SvgComponent(props) {
  return React.createElement("svg", _extends({
    width: 20,
    height: 20,
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, props), React.createElement("defs", null, React.createElement("path", {
    d: "M10 0c5.514 0 10 4.486 10 10s-4.486 10-10 10S0 15.514 0 10 4.486 0 10 0zm4.994 6.712a.81.81 0 00-1.146-.03l-5.177 4.91-2.469-2.536-.075-.068a.81.81 0 00-1.086 1.2l3.027 3.107.083.075a.808.808 0 001.056-.052l5.757-5.46.069-.074a.81.81 0 00-.04-1.072z",
    id: "a"
  })), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("mask", {
    id: "b",
    fill: "#fff"
  }, React.createElement("use", {
    xlinkHref: "#a"
  })), React.createElement("use", {
    fill: "#000",
    fillRule: "nonzero",
    xlinkHref: "#a"
  }), React.createElement("g", {
    mask: "url(#b)",
    fill: "#999"
  }, React.createElement("path", {
    d: "M0 0h20v20H0z"
  }))));
}

const MemoSvgComponent = React.memo(SvgComponent);
export default MemoSvgComponent;
//# sourceMappingURL=IconCompleteChecked.js.map