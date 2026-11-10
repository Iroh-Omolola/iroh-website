import { useState } from 'react'
import SectionHead from './SectionHead.jsx'
import { QUESTIONS, pickPath } from '../data.js'

export default function Clarity({ onBook }) {
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
                <button
                  className="btn"
                  type="button"
                  onClick={() => onBook('Tech Clarity Session', `The quiz suggested ${path.name}. I’d like help confirming my path and making a plan.`)}
                >
                  Reserve a clarity session
                </button>
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
