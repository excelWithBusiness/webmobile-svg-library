import React from 'react'
import getSvgComponent from '../../utils/GetSvgComponent'

export default getSvgComponent({
  filteredPaths: (
    <React.Fragment>
      <defs>
        <path
          d="M14.994 6.712a.81.81 0 00-1.146-.03l-5.177 4.91-2.469-2.536a.81.81 0 10-1.161 1.132l3.027 3.107a.808.808 0 001.139.023l5.757-5.46a.81.81 0 00.03-1.146z"
          id="a"
        />
      </defs>
      <g transform="translate(-4 -6)" fill="none" fillRule="evenodd">
        <mask id="b" fill="#fff">
          <use xlinkHref="#a" />
        </mask>
        <use fill="#000" fillRule="nonzero" xlinkHref="#a" />
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
          d="M14.994 6.712a.81.81 0 00-1.146-.03l-5.177 4.91-2.469-2.536a.81.81 0 10-1.161 1.132l3.027 3.107a.808.808 0 001.139.023l5.757-5.46a.81.81 0 00.03-1.146z"
          id="a"
        />
      </defs>
      <g transform="translate(-4 -6)" fill="none" fillRule="evenodd">
        <mask id="b" fill="#fff">
          <use xlinkHref="#a" />
        </mask>
        <use fill="#000" fillRule="nonzero" xlinkHref="#a" />
        <g mask="url(#b)">
          <path d="M0 0h20v20H0z" />
        </g>
      </g>
    </React.Fragment>
  ),
})
