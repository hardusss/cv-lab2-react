import Section from './Section.jsx'

function Experience({ data }) {
  return (
    <Section id="experience" title={data.title}>
      <article className="job">
        <header className="job__head">
          <h3 className="job__role">
            {data.role}, <a href={data.link} target="_blank" rel="noreferrer">{data.org}</a>
          </h3>
          <p className="job__period">{data.period}</p>
        </header>
        <p className="job__summary">{data.summary}</p>

        <h4 className="subhead">{data.howTitle}</h4>
        <ol className="steps">
          {data.how.map((step) => (
            <li key={step.title} className="steps__item">
              <strong>{step.title}</strong>
              <span>{step.text}</span>
            </li>
          ))}
        </ol>

        <h4 className="subhead">{data.doneTitle}</h4>
        <ul className="done">
          {data.done.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </article>

      <article className="side">
        <h4 className="subhead">{data.side.title}</h4>
        <p className="side__name">
          <a href={data.side.link} target="_blank" rel="noreferrer">{data.side.name}</a>
          <span className="side__period">{data.side.period}</span>
        </p>
        <p>{data.side.text}</p>
      </article>
    </Section>
  )
}

export default Experience
