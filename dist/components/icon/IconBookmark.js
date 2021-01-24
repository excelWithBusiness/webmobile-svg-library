function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

function SvgComponent(props) {
  return React.createElement("svg", _extends({
    width: 15,
    height: 18,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), React.createElement("path", {
    fill: "#999",
    d: "M13.676 1.286v15.43L7.5 10.714l-6.176 6V1.285h12.352zm0-1.286H1.324C.593 0 0 .576 0 1.286v15.43c0 .519.323.987.817 1.186a1.352 1.352 0 001.442-.278L7.5 12.429l5.241 5.195c.379.367.948.477 1.442.278.494-.199.817-.667.817-1.187V1.285C15 .576 14.407 0 13.676 0z"
  }));
}

const MemoSvgComponent = React.memo(SvgComponent);
export default MemoSvgComponent;
//# sourceMappingURL=IconBookmark.js.map