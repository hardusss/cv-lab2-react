import ContactLinks from './ContactLinks.jsx'

function Footer({ data, contacts }) {
  const email = contacts.find((contact) => contact.id === 'email')

  return (
    <footer className="footer" id="contacts">
      <div className="footer__inner">
        <h2 className="footer__title">{data.title}</h2>
        <a className="footer__email" href={email.href}>
          {email.value}
        </a>
        <p className="footer__text">{data.text}</p>
        <ContactLinks contacts={contacts.filter((contact) => contact.id !== 'email')} variant="footer" />
        <p className="footer__meta">
          <a href="https://x.com/NextVibeWeb3" target="_blank" rel="noreferrer">
            {data.project}: @NextVibeWeb3
          </a>
        </p>
        <p className="footer__meta">
          © {new Date().getFullYear()} {data.owner}. {data.made}
        </p>
      </div>
    </footer>
  )
}

export default Footer
