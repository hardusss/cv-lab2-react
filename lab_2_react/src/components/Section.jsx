// Обгортка для розділів резюме: заголовок зліва, вміст (children) справа
function Section({ id, title, children }) {
  return (
    <section className="section" id={id} aria-labelledby={`${id}-title`}>
      <h2 className="section__title" id={`${id}-title`}>
        {title}
      </h2>
      <div className="section__body">{children}</div>
    </section>
  )
}

export default Section
