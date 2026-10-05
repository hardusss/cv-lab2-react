import Section from './Section.jsx'

function Achievements({ data }) {
  return (
    <Section id="awards" title={data.title}>
      <div className="awards">
        {data.items.map((item) => (
          <article key={item.name} className="award">
            <p className="award__date">{item.date}</p>
            <h3 className="award__name">{item.name}</h3>
            <p className="award__result">{item.result}</p>
            <p className="award__text">{item.text}</p>
            <p className="award__org">{item.org}</p>
          </article>
        ))}
      </div>
      <p className="awards__note">{data.note}</p>

      <h4 className="subhead">{data.hackTitle}</h4>
      <ul className="hacks">
        {data.hackathons.map((hack) => (
          <li key={hack.name}>
            <strong>{hack.name}</strong>
            <span>{hack.text}</span>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default Achievements
