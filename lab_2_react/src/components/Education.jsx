import Section from './Section.jsx'

function Education({ data }) {
  return (
    <Section id="education" title={data.title}>
      <article className="school">
        <h3 className="school__name">{data.school}</h3>
        <p>{data.program}</p>
        <p className="school__period">{data.period}</p>
      </article>

      <h4 className="subhead">{data.langTitle}</h4>
      <dl className="languages">
        {data.languages.map((language) => (
          <div key={language.name}>
            <dt>{language.name}</dt>
            <dd>{language.level}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}

export default Education
