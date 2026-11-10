import SectionHead from './SectionHead.jsx'
import { CLARITY_URL } from '../data.js'

const SVCS = [
  { title: 'Frontend Engineering', text: 'Fast, accessible, meticulously crafted interfaces for products, platforms and brands.', svc: 'Frontend development project', cta: 'Start a project' },
  { title: 'Mentorship', text: 'Private or group guidance on learning paths, portfolios, interviews and career growth.', svc: 'Mentorship', cta: 'Book mentorship' },
  { title: 'Keynotes & Talks', text: 'Talks and workshops on frontend engineering, entering tech and building a career that lasts.', svc: 'Speaking engagement', cta: 'Invite to speak' },
  { title: 'Panel & Event Hosting', text: 'Poised moderation and hosting that keeps conversations sharp and audiences engaged.', svc: 'Panel or event hosting', cta: 'Book to host' },
]

export default function Services({ onBook }) {
  return (
    <section id="services">
      <div className="wrap">
        <SectionHead title="Ways to" accent="engage">
          Each engagement begins with a short conversation to make sure it’s the right fit.
        </SectionHead>
        <div className="svcs">
          {SVCS.map(s => (
            <div className="svc" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <button className="link" onClick={() => onBook(s.svc)}>{s.cta}</button>
            </div>
          ))}
        </div>
        <div className="signature">
          <div>
            <small>Signature session</small>
            <h3>The Tech Clarity Session</h3>
            <p>Frontend, backend, data, product, design, cloud or security? Together we map your strengths, interests and goals into one clear direction, with a plan for your first ninety days.</p>
          </div>
          <a className="btn" href={CLARITY_URL} target="_blank" rel="noopener">Reserve your session</a>
        </div>
      </div>
    </section>
  )
}
