function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

function SvgComponent(props) {
  return React.createElement("svg", _extends({
    width: 10,
    height: 7,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), React.createElement("path", {
    fill: "#999",
    fillRule: "nonzero",
    d: "M8.825.842L5 4.658 1.175.842 0 2.017l5 5 5-5z"
  }));
}

const MemoSvgComponent = React.memo(SvgComponent);
export default MemoSvgComponent;
//# sourceMappingURL=IconArrowDown.js.map