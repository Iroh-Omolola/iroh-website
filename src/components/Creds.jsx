const CREDS = [
  ['500+', 'Professionals mentored'],
  ['70+', 'Job offers connected'],
  ['Judge', 'Technovation'],
  ['Host', 'Tech with Iroh'],
]

export default function Creds() {
  return (
    <div className="creds">
      <div className="wrap">
        {CREDS.map(([b, s]) => (
          <div className="cred" key={s}><b>{b}</b><span>{s}</span></div>
        ))}
      </div>
    </div>
  )
}
