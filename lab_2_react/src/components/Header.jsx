function Header({ nav, lang, switchLabel, onToggleLang }) {
  return (
    <header className="topbar">
      <a className="topbar__name" href="#top">
        {lang === 'ua' ? 'Данило Клепар' : 'Danylo Klepar'}
      </a>
      <nav className="topbar__nav" aria-label={lang === 'ua' ? 'Розділи' : 'Sections'}>
        <ul>
          {nav.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
      <button type="button" className="lang-switch" onClick={onToggleLang} aria-label={switchLabel}>
        <span className={lang === 'ua' ? 'is-active' : ''}>UA</span>
        <span className={lang === 'en' ? 'is-active' : ''}>EN</span>
      </button>
    </header>
  )
}

export default Header
