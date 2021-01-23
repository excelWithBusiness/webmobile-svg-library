function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

function SvgComponent(props) {
  return React.createElement("svg", _extends({
    width: 20,
    height: 22,
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, props), React.createElement("defs", null, React.createElement("path", {
    d: "M18.308 14.616a3.637 3.637 0 00-2.862 1.416l-6.198-3.207a3.838 3.838 0 00-.032-1.987l6.314-3.534c1.23 1.472 3.333 1.75 4.88.644 1.547-1.106 2.04-3.24 1.145-4.951-.895-1.711-2.893-2.45-4.633-1.713-1.74.737-2.665 2.712-2.145 4.582L8.464 9.4C7.449 8.19 5.81 7.767 4.365 8.34c-1.445.573-2.39 2.02-2.364 3.622.025 1.602 1.016 3.017 2.48 3.54 1.463.523 3.086.043 4.062-1.202l6.198 3.208c-.385 1.578.242 3.235 1.56 4.124a3.583 3.583 0 004.277-.188c1.24-1.002 1.729-2.708 1.216-4.247-.513-1.54-1.913-2.572-3.486-2.57v-.01zm0-11.978c1.162 0 2.104.975 2.104 2.178 0 1.202-.942 2.177-2.104 2.177-1.162 0-2.105-.975-2.105-2.177 0-1.203.943-2.178 2.105-2.178zM5.68 14.072c-1.163 0-2.105-.975-2.105-2.178 0-1.203.942-2.178 2.105-2.178 1.162 0 2.104.975 2.104 2.178 0 1.203-.942 2.178-2.104 2.178zm12.627 6.534c-1.162 0-2.105-.975-2.105-2.178 0-1.203.943-2.178 2.105-2.178s2.104.975 2.104 2.178c0 1.203-.942 2.178-2.104 2.178z",
    id: "a"
  })), React.createElement("g", {
    transform: "translate(-2 -1)",
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("mask", {
    id: "b",
    fill: "#fff"
  }, React.createElement("use", {
    xlinkHref: "#a"
  })), React.createElement("use", {
    fill: "#000",
    xlinkHref: "#a"
  }), React.createElement("g", {
    mask: "url(#b)",
    fill: "#999"
  }, React.createElement("path", {
    d: "M0 0h24v24H0z"
  }))));
}

const MemoSvgComponent = React.memo(SvgComponent);
export default MemoSvgComponent;
//# sourceMappingURL=IconShare.js.map