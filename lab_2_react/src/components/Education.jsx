import Section from './Section.jsx'

function Education({ data }) {
  return (
    <Section id="education" title={data.title}>
      {data.schools.map((school) => (
        <article key={school.name} className="school">
          <h3 className="school__name">
            {school.link ? (
              <a href={school.link} target="_blank" rel="noreferrer">
                {school.name}
              </a>
            ) : (
              school.name
            )}
          </h3>
          <p>{school.program}</p>
          <p className="school__period">{school.period}</p>
        </article>
      ))}

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
