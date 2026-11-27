import StudentCard from "./StudentCard";

// The same component with different props gives different cards.
const StudentCardApp = () => {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <StudentCard name="Alice" id="20231234" major="CS" />
      <StudentCard name="Abdulazizbek" id="202537225" major="Computer Engineering" />
    </div>
  );
};

export default StudentCardApp;
