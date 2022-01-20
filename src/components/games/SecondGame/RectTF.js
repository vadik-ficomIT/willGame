  const RectTF = ( props ) => {
    return(
        <svg className={`rectangle-tf ${props.class || "" }`}  width={ props.width}  viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_4_129)">
        <path d="M4.19781 22C4.19781 9.84974 14.0476 0 26.1978 0V0C38.3481 0 48.1978 9.84974 48.1978 22V23C48.1978 35.1503 38.3481 45 26.1978 45V45C14.0476 45 4.19781 35.1503 4.19781 23V22Z"  fill="#020202"/>
        </g>
        <defs>
        <filter id="filter0_d_4_129" x="0.197815" y="0" width="52" height="53" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_129"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_129" result="shape"/>
        </filter>
        </defs>
    </svg>
    )
}

export default RectTF