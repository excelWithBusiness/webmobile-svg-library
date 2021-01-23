function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

function SvgComponent(props) {
  return React.createElement("svg", _extends({
    width: 56,
    height: 8,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("circle", {
    fill: "#979797",
    cx: 4,
    cy: 4,
    r: 4
  }), React.createElement("circle", {
    fill: "#CCC",
    cx: 20,
    cy: 4,
    r: 4
  }), React.createElement("circle", {
    fill: "#CCC",
    cx: 36,
    cy: 4,
    r: 4
  }), React.createElement("circle", {
    fill: "#CCC",
    cx: 52,
    cy: 4,
    r: 4
  })));
}

const MemoSvgComponent = React.memo(SvgComponent);
export default MemoSvgComponent;
//# sourceMappingURL=IconDotNav.js.map