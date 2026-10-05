import { useRef, useState } from 'react'
import ContactLinks from './ContactLinks.jsx'
import NfcIcon from './NfcIcon.jsx'
import QrCode from './QrCode.jsx'
import './Badge.css'

// Бейдж учасника події. Натискання "перевертає" його, як Tap to Meet у NextVibe:
// на звороті з'являється Proof of Meet із сьогоднішньою датою та контактами.
function Badge({ data, contacts, locale }) {
  const [flipped, setFlipped] = useState(false)
  const frontButton = useRef(null)
  const backButton = useRef(null)

  const today = new Date()
  const meetDate = new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'long', year: 'numeric' }).format(today)

  const flip = () => {
    const next = !flipped
    setFlipped(next)
    // Після перевороту переносимо фокус на видимий бік, щоб клавіатура не губилася
    requestAnimationFrame(() => {
      const target = next ? backButton.current : frontButton.current
      target?.focus({ preventScroll: true })
    })
  }

  return (
    <div className="badge-holder">
      <div className="lanyard" aria-hidden="true">
        <span>nextvibe.io nextvibe.io nextvibe.io nextvibe.io nextvibe.io nextvibe.io</span>
      </div>
      <div className="lanyard-clip" aria-hidden="true" />

      <div className={`badge ${flipped ? 'is-flipped' : ''}`}>
        <div className="badge__face badge__front" inert={flipped}>
          <span className="badge__slot" aria-hidden="true" />
          <div className="badge__top">
            <div>
              <p className="badge__event">{data.event}</p>
              <p className="badge__year">{data.year}</p>
            </div>
            <QrCode label={data.qr} />
          </div>
          <h1 className="badge__name">
            <span>{data.first}</span> <span>{data.last}</span>
          </h1>
          <p className="badge__role">{data.role}</p>
          <p className="badge__city">{data.city}</p>
          <div className="badge__band">
            <span className="badge__band-label">{data.band}</span>
            <button ref={frontButton} type="button" className="badge__tap" onClick={flip}>
              <NfcIcon />
              <span>{data.tap}</span>
            </button>
          </div>
        </div>

        <div className="badge__face badge__back" inert={!flipped}>
          <span className="badge__slot" aria-hidden="true" />
          <p className="badge__back-title">{data.backTitle}</p>
          <p className="badge__back-text">{data.backText}</p>
          <time className="badge__date" dateTime={today.toISOString().slice(0, 10)}>
            {meetDate}
          </time>
          <ContactLinks contacts={contacts} variant="badge" />
          <button ref={backButton} type="button" className="badge__flip-back" onClick={flip}>
            {data.flipBack}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Badge
