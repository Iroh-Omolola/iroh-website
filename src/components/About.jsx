const PROOF = [
  ['Tech with Iroh', 'Host of a podcast on careers and engineering, home of Tech Courtroom and Ask Iroh.'],
  ['Technovation', 'Judge, championing the next generation of builders.'],
  ['Events', 'Planner and host of tech events, including the first live Tech with Iroh show in Lagos.'],
  ['Opportunity connector', 'More than 70 people introduced to job offers.'],
]

export default function About() {
  return (
    <section id="about">
      <div className="wrap about">
        <div>
          <blockquote>I write frontend code for a living, and spend the rest of my time <em>opening doors for others.</em></blockquote>
          <p className="body">Mentoring, connecting people to opportunities, judging, speaking and hosting conversations that make tech feel within reach. Above all, I am a child of God, and that shapes how I show up for every person I serve.</p>
        </div>
        <ul className="proof">
          {PROOF.map(([b, s]) => <li key={b}><b>{b}</b><span>{s}</span></li>)}
        </ul>
      </div>
    </section>
  )
}
