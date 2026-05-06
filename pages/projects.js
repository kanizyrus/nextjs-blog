import Layout from '../components/layout'

const projects = [
  { name: 'Realtime Analytics Dashboard', stack: 'Next.js, TypeScript, Postgres', outcome: 'Reduced time-to-insight from 2 days to 2 minutes.' },
  { name: 'Workflow Automation Engine', stack: 'Node.js, Redis, Docker', outcome: 'Cut manual ops overhead by 60%.' },
  { name: 'Mobile Performance Toolkit', stack: 'React Native, Firebase', outcome: 'Improved retention by 11% through startup optimization.' }
]

export default function Projects() {
  return (
    <Layout>
      <h1>Applications Portfolio</h1>
      <p>Selected applications with technical depth and measurable outcomes.</p>
      <ul>
        {projects.map((project) => (
          <li key={project.name}>
            <h3>{project.name}</h3>
            <p><strong>Stack:</strong> {project.stack}</p>
            <p><strong>Outcome:</strong> {project.outcome}</p>
          </li>
        ))}
      </ul>
    </Layout>
  )
}
