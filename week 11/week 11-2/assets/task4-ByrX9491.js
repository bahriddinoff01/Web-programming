import{j as e,m as a}from"./page-iZ2EYeiW.js";const i=[{id:202501,name:"Kim Jiwoo",major:"Computer Engineering",grade:"A"},{id:202502,name:"Lee Seojun",major:"Software",grade:"B+"},{id:202503,name:"Park Minji",major:"AI",grade:"A-"},{id:202504,name:"Choi Hyun",major:"Computer Engineering",grade:"B"}],r=()=>e.jsx("ul",{className:"mx-auto max-w-xl divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white dark:divide-gray-800 dark:border-gray-800 dark:bg-gray-900",children:i.map(n=>e.jsxs("li",{className:"flex items-center justify-between gap-4 px-4 py-3",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-medium",children:n.name}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:n.major})]}),e.jsx("span",{className:"rounded-full bg-indigo-50 px-3 py-1 text-sm font-semibold text-indigo-900 dark:bg-indigo-950/40 dark:text-indigo-200",children:n.grade})]},n.id))}),d=`// Rendering a list: .map() turns each object in the array into a <li>.
// Every item needs a key that is unique and stable, so the id is used, not the index.
const STUDENTS = [
  { id: 202501, name: "Kim Jiwoo", major: "Computer Engineering", grade: "A" },
  { id: 202502, name: "Lee Seojun", major: "Software", grade: "B+" },
  { id: 202503, name: "Park Minji", major: "AI", grade: "A-" },
  { id: 202504, name: "Choi Hyun", major: "Computer Engineering", grade: "B" },
];

const StudentList = () => {
  return (
    <ul className="mx-auto max-w-xl divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white dark:divide-gray-800 dark:border-gray-800 dark:bg-gray-900">
      {STUDENTS.map((student) => (
        <li key={student.id} className="flex items-center justify-between gap-4 px-4 py-3">
          <div>
            <p className="font-medium">{student.name}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">{student.major}</p>
          </div>
          <span className="rounded-full bg-indigo-50 px-3 py-1 text-sm font-semibold text-indigo-900 dark:bg-indigo-950/40 dark:text-indigo-200">
            {student.grade}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default StudentList;
`;a(r,[{name:"StudentList.jsx",code:d}]);
