export default function SectionHead({ title, accent, children }) {
  return (
    <div className="head">
      <h2>{title} <em>{accent}</em></h2>
      <p>{children}</p>
      <div className="rule" />
    </div>
  )
}
