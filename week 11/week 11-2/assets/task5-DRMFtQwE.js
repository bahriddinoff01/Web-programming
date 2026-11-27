import{r as a,j as n,m as d}from"./page-iZ2EYeiW.js";const s=({message:e})=>e?n.jsx("p",{className:"rounded-lg bg-green-50 px-4 py-3 text-sm font-medium text-green-800 dark:bg-green-950/40 dark:text-green-300",children:e}):null,g=()=>{const[e,t]=a.useState(!1),[r,o]=a.useState(3);return n.jsxs("div",{className:"mx-auto max-w-md space-y-3",children:[n.jsx(s,{message:e?"You are logged in.":""}),n.jsxs("div",{className:"rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900",children:[n.jsxs("p",{className:"flex items-center gap-2 font-semibold",children:[e?"Welcome back, Abdulazizbek!":"Please log in.",e&&r>0&&n.jsxs("span",{className:"rounded-full bg-indigo-600 px-2 py-0.5 text-xs text-white dark:bg-indigo-400 dark:text-gray-950",children:[r," new"]})]}),n.jsxs("div",{className:"mt-4 flex flex-wrap gap-2",children:[n.jsx("button",{onClick:()=>t(!e),className:"rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700 dark:bg-indigo-400 dark:text-gray-950 dark:hover:bg-indigo-300",children:e?"Log out":"Log in"}),n.jsx("button",{onClick:()=>o(0),disabled:!e||r===0,className:"rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-gray-700 dark:hover:bg-gray-800",children:"Mark all read"})]})]})]})},i=`import { useState } from "react";

// Three ways to show something only sometimes:
//   1. return null   -> Banner renders nothing when there is no message
//   2. &&            -> the unread badge only appears when there are messages
//   3. ternary ? :   -> picks between two texts
const Banner = ({ message }) => {
  if (!message) return null;
  return (
    <p className="rounded-lg bg-green-50 px-4 py-3 text-sm font-medium text-green-800 dark:bg-green-950/40 dark:text-green-300">
      {message}
    </p>
  );
};

const ConditionalDemo = () => {
  // useState is only here so both cases can be tried with the buttons
  const [loggedIn, setLoggedIn] = useState(false);
  const [unread, setUnread] = useState(3);

  return (
    <div className="mx-auto max-w-md space-y-3">
      <Banner message={loggedIn ? "You are logged in." : ""} />
      <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
        <p className="flex items-center gap-2 font-semibold">
          {loggedIn ? "Welcome back, Abdulazizbek!" : "Please log in."}
          {loggedIn && unread > 0 && (
            <span className="rounded-full bg-indigo-600 px-2 py-0.5 text-xs text-white dark:bg-indigo-400 dark:text-gray-950">
              {unread} new
            </span>
          )}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <button
            onClick={() => setLoggedIn(!loggedIn)}
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700 dark:bg-indigo-400 dark:text-gray-950 dark:hover:bg-indigo-300"
          >
            {loggedIn ? "Log out" : "Log in"}
          </button>
          <button
            onClick={() => setUnread(0)}
            disabled={!loggedIn || unread === 0}
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-gray-700 dark:hover:bg-gray-800"
          >
            Mark all read
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConditionalDemo;
`;d(g,[{name:"ConditionalDemo.jsx",code:i}]);
