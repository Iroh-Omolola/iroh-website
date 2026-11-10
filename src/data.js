export const CLARITY_URL = 'https://selar.com/jg7lp4w544'

export const EMAIL = 'techwithiroh@gmail.com'

export const SERVICES = [
  'Tech Clarity Session',
  'Mentorship',
  'Speaking engagement',
  'Panel or event hosting',
  'Frontend development project',
  'Product waitlist',
]

export const PATHS = {
  visual: { name: 'Frontend Development', why: 'You care how things look and feel; frontend turns that into working products.', start: ['HTML, CSS and JavaScript foundations', 'Rebuild a site you admire', 'Learn React once JavaScript feels solid'] },
  visualPlan: { name: 'Product Design', why: 'You love beauty and thoughtful planning of how people use things.', start: ['Learn Figma', 'Study three apps you use daily', 'Redesign one flow and explain your choices'] },
  logic: { name: 'Backend Development', why: 'You enjoy logic and the systems that work behind the scenes.', start: ['Choose Python or JavaScript (Node)', 'Build a small API', 'Learn databases and SQL'] },
  numbers: { name: 'Data Analysis', why: 'Patterns in numbers excite you, and data roles reward that curiosity.', start: ['Spreadsheets, in depth', 'SQL', 'Python with pandas, then a portfolio project'] },
  people: { name: 'Product Management', why: 'You begin with people’s problems, the heart of product work.', start: ['Learn the product lifecycle', 'Write a product teardown', 'Support a product team'] },
  protect: { name: 'Cybersecurity', why: 'You like guarding and repairing systems, the daily work of security teams.', start: ['Networking fundamentals', 'Linux basics', 'An entry certification such as Security+'] },
  cloud: { name: 'Cloud & DevOps', why: 'You like building systems and keeping them running reliably.', start: ['Linux and Git', 'One cloud provider’s fundamentals', 'Deploy a small app yourself'] },
}

export function pickPath({ enjoy: e, work: w, code: c }) {
  if (!e || !w || !c) return null
  if (e === 'visual') return w === 'plan' || (w === 'research' && c === 'none') ? PATHS.visualPlan : PATHS.visual
  if (e === 'logic') return w === 'plan' ? PATHS.cloud : PATHS.logic
  if (e === 'numbers') return PATHS.numbers
  if (e === 'people') return w === 'build' && c !== 'none' ? PATHS.visual : PATHS.people
  if (e === 'protect') return w === 'build' ? PATHS.cloud : PATHS.protect
  return null
}

export const QUESTIONS = [
  { name: 'enjoy', legend: 'What do you enjoy most?', options: [
    ['visual', 'Making things look and feel beautiful'],
    ['logic', 'Solving logic puzzles'],
    ['numbers', 'Finding patterns in numbers'],
    ['people', 'Understanding people’s problems'],
    ['protect', 'Protecting and fixing systems'],
  ] },
  { name: 'work', legend: 'How do you prefer to work?', options: [
    ['build', 'Building with code'],
    ['plan', 'Planning and organising'],
    ['research', 'Researching and analysing'],
  ] },
  { name: 'code', legend: 'Your comfort with code today?', options: [
    ['none', 'None yet'],
    ['some', 'A little'],
    ['lots', 'Comfortable'],
  ] },
]
