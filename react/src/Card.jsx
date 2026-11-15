// A reusable box: the title is a prop, the content is children
function Card({ title, children }) {
  return (
    <section className="box-card">
      <h3>{title}</h3>
      {children}
    </section>
  );
}

export default function App() {
  return (
    <>
      <Card title="Lecture Topics">
        <ul>
          <li>Components</li>
          <li>Props</li>
          <li>Lists and keys</li>
          <li>Conditional rendering</li>
        </ul>
      </Card>

      <Card title="Homework">
        <p>Build a student portfolio component using what we learned in class.</p>
      </Card>
    </>
  );
}
