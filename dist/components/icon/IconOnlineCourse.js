function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';

function SvgComponent(props) {
  return React.createElement("svg", _extends({
    width: 11,
    height: 16,
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, props), React.createElement("defs", null, React.createElement("path", {
    d: "M5.02 0a5.02 5.02 0 013.05 9.006l.709 5.343c.069.52-.494.89-.945.62L5.02 13.281l-2.815 1.688a.627.627 0 01-.945-.62l.71-5.343A5.02 5.02 0 015.02 0zm0 10.04a5.006 5.006 0 01-1.874-.362l-.47 3.546 2.02-1.213a.627.627 0 01.646 0l2.022 1.213-.47-3.546a5.006 5.006 0 01-1.874.361zm0-8.785A3.765 3.765 0 107.033 8.2 3.754 3.754 0 008.784 5.02 3.765 3.765 0 005.02 1.255z",
    id: "a"
  })), React.createElement("use", {
    fill: "#999",
    xlinkHref: "#a",
    fillRule: "evenodd"
  }));
}

const MemoSvgComponent = React.memo(SvgComponent);
export default MemoSvgComponent;
//# sourceMappingURL=IconOnlineCourse.js.map