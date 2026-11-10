import { useState } from 'react'
import SectionHead from './SectionHead.jsx'
import { EMAIL, SERVICES } from '../data.js'

function mailto(f) {
  const svc = f.service || 'Booking request'
  const subject = `${svc} — ${f.name.trim() || 'New request'}`
  const lines = [`Engagement: ${svc}`, `Name: ${f.name.trim()}`, `Email: ${f.email.trim()}`]
  if (f.org.trim()) lines.push(`Organisation: ${f.org.trim()}`)
  if (f.date) lines.push(`Preferred date: ${f.date}`)
  lines.push('', f.msg.trim())
  return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`
}

export default function Booking({ form, setForm, nameRef }) {
  const [err, setErr] = useState('')
  const set = key => e => setForm(f => ({ ...f, [key]: e.target.value }))

  const validate = e => {
    let msg = ''
    if (!form.service) msg = 'Select an engagement.'
    else if (!form.name.trim()) msg = 'Add your full name.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) msg = 'Add a valid email address so I can reply.'
    if (msg) e.preventDefault()
    setErr(msg)
  }

  return (
    <section id="book" className="booking">
      <div className="wrap">
        <SectionHead title="Book" accent="Iroh">
          Share a few details. Your email opens with the request prepared, and I’ll respond with availability.
        </SectionHead>
        <form noValidate onSubmit={e => e.preventDefault()}>
          <label>Engagement
            <select value={form.service} onChange={set('service')} required>
              <option value="">Select an engagement</option>
              {SERVICES.map(s => <option key={s}>{s}</option>)}
            </select>
          </label>
          <div className="row">
            <label>Full name<input ref={nameRef} value={form.name} onChange={set('name')} autoComplete="name" required /></label>
            <label>Email address<input type="email" value={form.email} onChange={set('email')} autoComplete="email" required /></label>
          </div>
          <div className="row">
            <label>Organisation (optional)<input value={form.org} onChange={set('org')} autoComplete="organization" /></label>
            <label>Preferred date (optional)<input type="date" value={form.date} onChange={set('date')} /></label>
          </div>
          <label>Details
            <textarea value={form.msg} onChange={set('msg')} placeholder="Your event, audience, goals, or where you need clarity" />
          </label>
          <p className="err" role="alert">{err}</p>
          <div className="submit">
            <p className="note">Or write to <a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
            <a className="btn" href={mailto(form)} onClick={validate} target="_blank" rel="noopener">Send request</a>
          </div>
        </form>
      </div>
    </section>
  )
}
