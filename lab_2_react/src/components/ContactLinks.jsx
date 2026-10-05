// Один компонент для контактів, який використовується тричі:
// у вступі, на звороті бейджа і в підвалі. Вигляд залежить від prop variant.
function ContactLinks({ contacts, variant = 'hero' }) {
  return (
    <ul className={`contacts contacts--${variant}`}>
      {contacts.map((contact) => {
        const external = contact.href.startsWith('http')
        return (
          <li key={contact.id}>
            <span className="contacts__label">{contact.label}</span>
            <a
              href={contact.href}
              {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
            >
              {contact.value}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default ContactLinks
