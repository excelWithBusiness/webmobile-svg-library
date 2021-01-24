function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

function SvgComponent(props) {
  return React.createElement("svg", _extends({
    width: 18,
    height: 20,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), React.createElement("path", {
    fill: "#999",
    d: "M9 0v1.364H1.35v17.272h13.5V10h1.35v8.636c0 .753-.604 1.364-1.35 1.364H1.35C.604 20 0 19.39 0 18.636V1.364C0 .61.604 0 1.35 0H9zm5.613 1.32a1.405 1.405 0 011.984 0l.992.991c.548.553.548 1.44 0 1.988 0 0-7.67 7.914-8.139 8.035l-1.404.351a1.405 1.405 0 01-1.704-1.702l.351-1.404c.054-.218 1.756-2.005 3.568-3.86l.436-.447a552.61 552.61 0 013.211-3.247l.345-.346.092-.092zm.992.996L9.015 8.9l.033.028.959.96 6.59-6.582-.992-.991z",
    fillRule: "evenodd"
  }));
}

const MemoSvgComponent = React.memo(SvgComponent);
export default MemoSvgComponent;
//# sourceMappingURL=IconEdit.js.map