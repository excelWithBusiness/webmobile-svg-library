function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { ProductLineSvgComponent } from './ProductLineSvgComponent';

const getSvgComponent = ({
  filteredPaths,
  contentPaths
}) => {
  const Component = props => React.createElement(ProductLineSvgComponent, _extends({}, props, {
    filteredPaths: filteredPaths,
    contentPaths: contentPaths
  }));

  return React.memo(Component);
};

export default getSvgComponent;
//# sourceMappingURL=GetSvgComponent.js.map