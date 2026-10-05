import Section from './Section.jsx'

function Timeline({ data }) {
  return (
    <Section id="path" title={data.title}>
      <ol className="timeline">
        {data.years.map((group) => (
          <li key={group.year} className="timeline__year">
            <p className="timeline__label">{group.year}</p>
            <ul className="timeline__items">
              {group.items.map((item) => (
                <li key={item.text}>
                  {item.when && <span className="timeline__when">{item.when}</span>}
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  )
}

export default Timeline
