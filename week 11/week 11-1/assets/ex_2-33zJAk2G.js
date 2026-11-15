import{j as s,m as a}from"./mount-KE_vqTTO.js";const c=[{id:1,type:"success",message:"Profile updated successfully"},{id:2,type:"warning",message:"Password expires in 3 days"},{id:3,type:"info",message:"New lecture materials available"},{id:4,type:"success",message:"Week 11 homework submitted"}];function o({type:n,message:e}){const i=n==="success"?"✅":n==="warning"?"⚠️":"ℹ️",t=n==="success"?"Success":n==="warning"?"Warning":"Info";return s.jsxs("li",{className:`note note-${n}`,children:[s.jsx("span",{className:"icon","aria-hidden":"true",children:i}),s.jsxs("span",{children:[s.jsxs("strong",{children:[t,":"]})," ",e]})]})}function r({items:n}){return s.jsx("ul",{className:"notes",children:n.map(e=>s.jsx(o,{type:e.type,message:e.message},e.id))})}function m(){return s.jsx(r,{items:c})}const u=`const notifications = [
  { id: 1, type: "success", message: "Profile updated successfully" },
  { id: 2, type: "warning", message: "Password expires in 3 days" },
  { id: 3, type: "info", message: "New lecture materials available" },
  { id: 4, type: "success", message: "Week 11 homework submitted" },
];

function NotificationItem({ type, message }) {
  // Conditional rendering with a ternary
  const icon = type === "success" ? "✅" : type === "warning" ? "⚠️" : "ℹ️";
  const label = type === "success" ? "Success" : type === "warning" ? "Warning" : "Info";

  return (
    <li className={\`note note-\${type}\`}>
      <span className="icon" aria-hidden="true">{icon}</span>
      <span>
        <strong>{label}:</strong> {message}
      </span>
    </li>
  );
}

function NotificationList({ items }) {
  return (
    <ul className="notes">
      {items.map((n) => (
        <NotificationItem key={n.id} type={n.type} message={n.message} />
      ))}
    </ul>
  );
}

export default function App() {
  return <NotificationList items={notifications} />;
}
`;a(m,u);
