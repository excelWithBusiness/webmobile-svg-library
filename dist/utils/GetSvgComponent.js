function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { ProductLineSvgComponent } from './ProductLineSvgComponent';
export var getSvgComponent = function getSvgComponent(_ref) {
  var filteredPaths = _ref.filteredPaths,
      contentPaths = _ref.contentPaths;

  var Component = function Component(props) {
    return React.createElement(ProductLineSvgComponent, _extends({}, props, {
      filteredPaths: filteredPaths,
      contentPaths: contentPaths
    }));
  };

  return React.memo(Component);
};
//# sourceMappingURL=GetSvgComponent.js.map