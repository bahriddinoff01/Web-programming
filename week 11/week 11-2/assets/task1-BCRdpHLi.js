import{j as e,m as r}from"./page-iZ2EYeiW.js";const n=()=>e.jsx("p",{className:"rounded-lg border border-gray-200 bg-white px-4 py-3 font-medium dark:border-gray-800 dark:bg-gray-900",children:"👋 Hello, World!"}),t=()=>e.jsxs("div",{className:"mx-auto max-w-md space-y-2",children:[e.jsx(n,{}),e.jsx(n,{}),e.jsx(n,{})]}),a=`// The simplest component: a function whose name starts with a capital letter
// and returns JSX. Each <Greeting /> is its own copy of the same function.
const Greeting = () => {
  return (
    <p className="rounded-lg border border-gray-200 bg-white px-4 py-3 font-medium dark:border-gray-800 dark:bg-gray-900">
      👋 Hello, World!
    </p>
  );
};

export default Greeting;
`,o=`import Greeting from "./Greeting";

// The parent uses the component three times, like an HTML tag.
const GreetingApp = () => {
  return (
    <div className="mx-auto max-w-md space-y-2">
      <Greeting />
      <Greeting />
      <Greeting />
    </div>
  );
};

export default GreetingApp;
`;r(t,[{name:"Greeting.jsx",code:a},{name:"GreetingApp.jsx",code:o}]);
