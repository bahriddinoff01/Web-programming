const notifications = [
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
    <li className={`note note-${type}`}>
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
