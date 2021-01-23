import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={18}
      height={18}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}>
      <defs>
        <path
          d="M13.397 12.02l7.374-7.519a.871.871 0 00-1.242-1.219l-7.363 7.508-7.664-7.52a.87.87 0 10-1.22 1.243l7.653 7.508-7.653 7.507a.871.871 0 001.22 1.243l7.664-7.52 7.363 7.508a.87.87 0 001.242-1.219l-7.374-7.52z"
          id="a"
        />
      </defs>
      <g transform="translate(-3 -3)" fill="none" fillRule="evenodd">
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
