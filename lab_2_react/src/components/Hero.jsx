import Badge from './Badge.jsx'
import ContactLinks from './ContactLinks.jsx'

function Hero({ badge, hero, contacts, locale }) {
  return (
    <section className="hero" id="top">
      <div className="hero__badge">
        <Badge data={badge} contacts={contacts} locale={locale} />
      </div>

      <div className="hero__intro">
        <p className="hero__lead">{hero.lead}</p>
        <p className="hero__text">{hero.text}</p>
        <p className="hero__traction">
          {hero.traction.map((item, index) => (
            <span key={item.label}>
              {index > 0 && (index === hero.traction.length - 1 ? hero.tractionJoin : ', ')}
              <strong>{item.value}</strong> {item.label}
            </span>
          ))}
          {hero.tractionTail}
        </p>
        <ContactLinks contacts={contacts} variant="hero" />
      </div>
    </section>
  )
}

export default Hero
