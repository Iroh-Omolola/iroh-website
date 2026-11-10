import { useRef, useState } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Creds from './components/Creds.jsx'
import Services from './components/Services.jsx'
import Clarity from './components/Clarity.jsx'
import Products from './components/Products.jsx'
import About from './components/About.jsx'
import Stage from './components/Stage.jsx'
import Booking from './components/Booking.jsx'
import Footer from './components/Footer.jsx'

const EMPTY = { service: '', name: '', email: '', org: '', date: '', msg: '' }

export default function App() {
  const [form, setForm] = useState(EMPTY)
  const nameRef = useRef(null)

  const goBook = (service, msg) => {
    setForm(f => ({ ...f, service, msg: msg && !f.msg ? msg : f.msg }))
    document.getElementById('book').scrollIntoView()
    nameRef.current?.focus({ preventScroll: true })
  }

  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Creds />
        <Services onBook={goBook} />
        <Clarity />
        <Products onBook={goBook} />
        <About />
        <Stage />
        <Booking form={form} setForm={setForm} nameRef={nameRef} />
      </main>
      <Footer />
    </>
  )
}
