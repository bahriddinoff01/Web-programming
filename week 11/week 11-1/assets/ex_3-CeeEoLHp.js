import{j as n,m as r}from"./mount-KE_vqTTO.js";function e({title:i,children:t}){return n.jsxs("section",{className:"box-card",children:[n.jsx("h3",{children:i}),t]})}function l(){return n.jsxs(n.Fragment,{children:[n.jsx(e,{title:"Lecture Topics",children:n.jsxs("ul",{children:[n.jsx("li",{children:"Components"}),n.jsx("li",{children:"Props"}),n.jsx("li",{children:"Lists and keys"}),n.jsx("li",{children:"Conditional rendering"})]})}),n.jsx(e,{title:"Homework",children:n.jsx("p",{children:"Build a student portfolio component using what we learned in class."})})]})}const s=`// A reusable box: the title is a prop, the content is children
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
`;r(l,s);
