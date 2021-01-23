function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

function SvgComponent(props) {
  return React.createElement("svg", _extends({
    width: 20,
    height: 20,
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, props), React.createElement("defs", null, React.createElement("path", {
    d: "M9.076 2.857a1.008 1.008 0 110 2.017h-6.05c-.558 0-1.01.451-1.01 1.008v11.093c0 .557.452 1.008 1.01 1.008h11.092c.557 0 1.008-.451 1.008-1.008v-6.05a1.008 1.008 0 012.017 0v6.05A3.025 3.025 0 0114.118 20H3.025A3.025 3.025 0 010 16.975V5.882a3.025 3.025 0 013.025-3.025zM19.069.002A.985.985 0 0120 1.038l.001.033V7.5a1.071 1.071 0 11-2.143 0V3.541l-9.026 9.026a.99.99 0 01-1.305.083l-.093-.083a.989.989 0 010-1.398l9.025-9.027H12.5a1.072 1.072 0 01-1.065-.954l-.006-.117C11.429.48 11.909 0 12.5 0h6.452z",
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
    fill: "#FFF",
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
//# sourceMappingURL=IconLaunch.js.map