import React from 'react'
import getSvgComponent from '../../utils/GetSvgComponent'

export default getSvgComponent({
  filteredPaths: (
    <React.Fragment>
      <defs>
        <path id="a" d="M6.175 12.842L10 9.025l3.825 3.817L15 11.667l-5-5-5 5z" />
      </defs>
      <g transform="translate(-5 -6)" fill="none" fillRule="evenodd">
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
        <path id="a" d="M6.175 12.842L10 9.025l3.825 3.817L15 11.667l-5-5-5 5z" />
      </defs>
      <g transform="translate(-5 -6)" fill="none" fillRule="evenodd">
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
