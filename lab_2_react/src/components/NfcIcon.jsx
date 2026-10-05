function NfcIcon({ size = 22 }) {
  return (
    <svg className="nfc-icon" width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <circle cx="6" cy="12" r="2" fill="currentColor" />
      <path d="M10 7.5a6.5 6.5 0 0 1 0 9" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M14 4a11 11 0 0 1 0 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export default NfcIcon
