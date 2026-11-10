import SectionHead from './SectionHead.jsx'

export default function Products({ onBook }) {
  return (
    <section id="products">
      <div className="wrap">
        <SectionHead title="Products," accent="coming soon">
          Tools and resources to help you break into tech and grow with confidence.
        </SectionHead>
        <div className="soon">
          <small>Coming soon</small>
          <h3>Be the first to know</h3>
          <p>Join the waitlist and get early access when the first product launches.</p>
          <button className="btn" onClick={() => onBook('Product waitlist', 'Please add me to the product waitlist.')}>Join the waitlist</button>
        </div>
      </div>
    </section>
  )
}
