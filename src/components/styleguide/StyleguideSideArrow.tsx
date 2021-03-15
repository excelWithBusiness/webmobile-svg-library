import React from 'react'
import getSvgComponent from '../../utils/GetSvgComponent'

export default getSvgComponent({
  filteredPaths: (
    <React.Fragment>
      <defs>
        <path
          d="M6.969 1.85a.668.668 0 00-.938.017.692.692 0 00-.016.952l7.202 7.309-7.202 7.053c-.248.27-.241.69.016.952.257.26.672.268.938.016L15 10.128 6.969 1.85z"
          id="a"
        />
      </defs>
      <g transform="translate(-5 -1)" fill="none" fillRule="evenodd">
        <mask id="b" fill="#fff">
          <use xlinkHref="#a" />
        </mask>
        <use fill="#000" xlinkHref="#a" />
        <g mask="url(#b)">
          <path d="M0 0h20v20H0z" />
        </g>
      </g>
    </React.Fragment>
  ),
  danonePaths: (
    <React.Fragment>
      <defs>
        <path
          d="M6.969 1.85a.668.668 0 00-.938.017.692.692 0 00-.016.952l7.202 7.309-7.202 7.053c-.248.27-.241.69.016.952.257.26.672.268.938.016L15 10.128 6.969 1.85z"
          id="a"
        />
      </defs>
      <g transform="translate(-5 -1)" fill="none" fillRule="evenodd">
        <mask id="b" fill="#fff">
          <use xlinkHref="#a" />
        </mask>
        <use fill="#000" xlinkHref="#a" />
        <g mask="url(#b)">
          <path d="M0 0h20v20H0z" />
        </g>
      </g>
    </React.Fragment>
  ),
})
