import Layout from '../components/layout'

const experiences = [
  { role: 'Senior Software Engineer', company: 'Your Company', period: '2023—Present', highlight: 'Led a frontend rebuild that improved LCP by 38% and increased activation by 14%.' },
  { role: 'Software Engineer', company: 'Previous Company', period: '2020—2023', highlight: 'Built internal platform tooling used by 6 cross-functional teams.' }
]

export default function Resume() {
  return (
    <Layout>
      <h1>Interactive Resume</h1>
      <p>Draft v1 — we can refine content, metrics, and visual hierarchy together.</p>
      {experiences.map((item) => (
        <article key={item.role + item.company}>
          <h3>{item.role} · {item.company}</h3>
          <small>{item.period}</small>
          <p>{item.highlight}</p>
        </article>
      ))}
    </Layout>
  )
}
