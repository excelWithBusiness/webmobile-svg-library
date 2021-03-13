import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg height={50} width={50} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fill="none" d="M0 0h50v50H0z" />
      <circle
        cx={25}
        cy={25}
        fill="none"
        r={24}
        stroke="#000"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <ellipse
        cx={25}
        cy={25}
        fill="none"
        rx={12}
        ry={24}
        stroke="#000"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M6.365 40.438C10.766 37.729 17.479 36 25 36c7.418 0 14.049 1.682 18.451 4.325M43.635 9.563C39.234 12.271 32.521 14 25 14c-7.417 0-14.049-1.682-18.451-4.325M1 25h48M25 1v48"
        fill="none"
        stroke="#000"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
