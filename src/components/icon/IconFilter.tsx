import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={19}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}>
      <defs>
        <path
          d="M17.277 16.16a2.58 2.58 0 012.484 1.88h1.274a.705.705 0 110 1.41h-1.278a2.58 2.58 0 01-4.968 0H2.705a.705.705 0 110-1.41h12.088a2.58 2.58 0 012.484-1.88zm-.002 1.41a1.175 1.175 0 100 2.35 1.175 1.175 0 000-2.35zm-5.405-7.52a2.58 2.58 0 012.406 1.65h6.759a.705.705 0 010 1.412h-6.622a2.586 2.586 0 01-5.081 0H2.705a.705.705 0 010-1.412h6.759a2.58 2.58 0 012.406-1.65zm0 1.415a1.175 1.175 0 10.001 2.351 1.175 1.175 0 00-.001-2.35zM6.467 3a2.58 2.58 0 012.484 1.88h12.084a.705.705 0 110 1.41H8.947a2.58 2.58 0 01-4.968 0H2.705a.705.705 0 110-1.41h1.278A2.58 2.58 0 016.467 3zm-.002 1.41a1.175 1.175 0 100 2.35 1.175 1.175 0 000-2.35z"
          id="a"
        />
      </defs>
      <g transform="translate(-2 -3)" fill="none" fillRule="evenodd">
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
