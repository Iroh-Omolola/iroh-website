import SectionHead from './SectionHead.jsx'

const ITEMS = [
  ['lagos-ai-summit', 'Lagos AI Summit 2026', 'Moderator, AI in Enterprise & Financial Services'],
  ['nstw26-moderator', 'Nigeria Software Testing Week 2026', 'Panel moderator, Lagos grand finale'],
  ['women-techsters-open-day', 'Women Techsters Open Day', 'Speaker, Tech4Dev, Nov 2025'],
  ['wud-africa-speaker', 'World Usability Day Africa', 'Speaker, “The Prompt is You”'],
  ['wud-africa-lineup', 'World Usability Day Africa', 'Speaker lineup, Nov 2025'],
  ['devfest-accra', 'DevFest Accra 2025', 'The Power of Micro-Interactions in Web UX'],
  ['devfest-accra-acceptance', 'DevFest Accra 2025', 'Confirmed speaker, GDG Accra'],
  ['tech-court-room-2', 'Tech Court Room 2', 'Tech with Iroh, the judge'],
  ['beyond-borders-podcast', 'Beyond Borders', 'Tech with Iroh podcast, host'],
  ['iwd-spotlight-ventures-platform', 'IWD Spotlight', 'Ventures Platform, women building Africa’s future'],
  ['unilorin-talk', 'University of Ilorin', 'Keynote on stage'],
  ['nacoss-speaker-recognition', 'NACOSS TechFest', 'Speaker recognition, University of Ilorin'],
  ['technovation-unilag', 'Technovation', 'Judge, UNILAG AI & Robotics Lab'],
  ['mmit-career-webinar', 'Mentor Me in Tech', 'Career Development Webinar'],
  ['cybergirls-webinar', 'CyberGirls', 'Overcoming Imposter Syndrome'],
  ['tech-ignite-africa', 'Tech Ignite Africa', 'Guest speaker, The Societal Impact of Technology'],
  ['developers-foundry-certificate', 'Developers Foundry', 'Fellowship selection, Tech4Dev'],
]

export default function Stage() {
  return (
    <section id="stage" className="stage">
      <div className="wrap">
        <SectionHead title="On" accent="stage">
          Conferences, panels, podcasts and classrooms across Africa.
        </SectionHead>
        <div className="gallery">
          {ITEMS.map(([file, title, sub]) => (
            <a key={file} className="shot" href={`/stage/${file}.jpg`} target="_blank" rel="noopener">
              <img src={`/stage/${file}.jpg`} alt={`${title}: ${sub}`} loading="lazy" decoding="async" />
              <span><b>{title}</b>{sub}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
