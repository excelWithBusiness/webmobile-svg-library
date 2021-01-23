import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={15}
      height={18}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}>
      <defs>
        <path
          d="M18.676 4.286v15.43L12.5 13.714l-6.176 6V4.285h12.352zm0-1.286H6.324C5.593 3 5 3.576 5 4.286v15.43c0 .519.323.987.817 1.186a1.352 1.352 0 001.442-.278l5.241-5.195 5.241 5.195c.379.367.948.477 1.442.278.494-.199.817-.667.817-1.187V4.285C20 3.576 19.407 3 18.676 3z"
          id="a"
        />
      </defs>
      <g transform="translate(-5 -3)" fill="none" fillRule="evenodd">
        <mask id="b" fill="#fff">
          <use xlinkHref="#a" />
        </mask>
        <use fill="#000" xlinkHref="#a" />
        <g mask="url(#b)" fill="#999">
          <path d="M0 0h24v24H0z" />
        </g>
      </g>
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
