export default function Hero() {
  return (
    <header className="hero">
      <div className="wrap grid">
        <div>
          <p className="roles fade">Frontend Engineer &nbsp;/&nbsp; Mentor &nbsp;/&nbsp; Speaker &nbsp;/&nbsp; Host</p>
          <h1 className="fade">Iroh Nkechi <em>Omolola</em></h1>
          <p className="lede fade">I build refined digital experiences and guide people into confident careers in tech. Engage me to engineer, mentor, speak, host, or bring clarity to your next move.</p>
          <div className="ctas fade">
            <a className="btn" href="#book">Book a session</a>
            <a className="btn line" href="#clarity">Find your path</a>
          </div>
        </div>
        <div className="portrait" aria-hidden="true">
          <div><span>INO</span></div>
          <small>Lagos, Nigeria</small>
        </div>
      </div>
    </header>
  )
}
