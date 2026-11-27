import{j as e,m as d}from"./page-iZ2EYeiW.js";const r=({name:a,id:t,major:n})=>e.jsxs("article",{className:"rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900",children:[e.jsx("h3",{className:"text-lg font-bold",children:a}),e.jsxs("p",{className:"mt-1 text-sm text-gray-600 dark:text-gray-400",children:["ID: ",t]}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Major: ",n]})]}),s=()=>e.jsxs("div",{className:"grid gap-3 sm:grid-cols-2",children:[e.jsx(r,{name:"Alice",id:"20231234",major:"CS"}),e.jsx(r,{name:"Abdulazizbek",id:"202537225",major:"Computer Engineering"})]}),m=`// Lab challenge: fill in the blanks.
// The props are unpacked straight in the parameter list: { name, id, major }.
const StudentCard = ({ name, id, major }) => {
  return (
    <article className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">ID: {id}</p>
      <p className="text-sm text-gray-600 dark:text-gray-400">Major: {major}</p>
    </article>
  );
};

export default StudentCard;
`,o=`import StudentCard from "./StudentCard";

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
`;d(s,[{name:"StudentCard.jsx",code:m},{name:"StudentCardApp.jsx",code:o}]);
