import Section from './Section.jsx'

function Skills({ data }) {
  return (
    <Section id="stack" title={data.title}>
      <dl className="stack">
        {data.groups.map((group) => (
          <div key={group.layer} className="stack__row">
            <dt>{group.layer}</dt>
            <dd>{group.items.join(', ')}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}

export default Skills
