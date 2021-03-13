function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

function SvgComponent(props) {
  return React.createElement("svg", _extends({
    height: 50,
    width: 50,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), React.createElement("path", {
    fill: "none",
    d: "M0 0h50v50H0z"
  }), React.createElement("circle", {
    cx: 25,
    cy: 25,
    fill: "none",
    r: 24,
    stroke: "#000",
    strokeLinecap: "round",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), React.createElement("ellipse", {
    cx: 25,
    cy: 25,
    fill: "none",
    rx: 12,
    ry: 24,
    stroke: "#000",
    strokeLinecap: "round",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }), React.createElement("path", {
    d: "M6.365 40.438C10.766 37.729 17.479 36 25 36c7.418 0 14.049 1.682 18.451 4.325M43.635 9.563C39.234 12.271 32.521 14 25 14c-7.417 0-14.049-1.682-18.451-4.325M1 25h48M25 1v48",
    fill: "none",
    stroke: "#000",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }));
}

const MemoSvgComponent = React.memo(SvgComponent);
export default MemoSvgComponent;
//# sourceMappingURL=IconGlobe.js.map