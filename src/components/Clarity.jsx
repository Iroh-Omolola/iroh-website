import { useState } from 'react'
import SectionHead from './SectionHead.jsx'
import { QUESTIONS, pickPath, CLARITY_URL } from '../data.js'

export default function Clarity() {
  const [answers, setAnswers] = useState({})
  const path = pickPath(answers)

  return (
    <section id="clarity" className="clarity">
      <div className="wrap">
        <SectionHead title="Which path" accent="suits you?">
          Three questions for a starting point. A clarity session makes it personal.
        </SectionHead>
        <div className="quiz">
          <div>
            {QUESTIONS.map(q => (
              <fieldset key={q.name}>
                <legend>{q.legend}</legend>
                <div className="opts">
                  {q.options.map(([value, label]) => (
                    <label key={value}>
                      <input
                        type="radio"
                        name={q.name}
                        value={value}
                        checked={answers[q.name] === value}
                        onChange={() => setAnswers(a => ({ ...a, [q.name]: value }))}
                      />
                      {label}
                    </label>
                  ))}
                </div>
              </fieldset>
            ))}
          </div>
          <div className="result" aria-live="polite">
            <small>Your starting point</small>
            {path ? (
              <>
                <h3>{path.name}</h3>
                <p>{path.why}</p>
                <ul>{path.start.map(t => <li key={t}>{t}</li>)}</ul>
                <a className="btn" href={CLARITY_URL} target="_blank" rel="noopener">Reserve a clarity session</a>
              </>
            ) : (
              <>
                <h3>Answer all three questions.</h3>
                <p>Your suggested path will appear here.</p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
