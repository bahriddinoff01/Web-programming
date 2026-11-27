import{r as a,j as e,m as g}from"./page-CGXkMM0X.js";const h=()=>{const[n,m]=a.useState(1),[s,u]=a.useState(null),[o,d]=a.useState(!0),[l,c]=a.useState("");return a.useEffect(()=>{const r=new AbortController;return(async()=>{d(!0),c("");try{const t=await fetch(`https://jsonplaceholder.typicode.com/users/${n}`,{signal:r.signal});if(!t.ok)throw new Error(`Request failed (${t.status})`);u(await t.json()),d(!1)}catch(t){if(t.name==="AbortError")return;c(t.message==="Failed to fetch"?"Network problem: check your connection.":t.message),d(!1)}})(),()=>r.abort()},[n]),e.jsxs("div",{className:"mx-auto max-w-md space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("label",{htmlFor:"user-id",className:"font-medium",children:"User"}),e.jsx("select",{id:"user-id",value:n,onChange:r=>m(Number(r.target.value)),className:"rounded-lg border border-gray-300 bg-white px-3 py-2 dark:border-gray-700 dark:bg-gray-900",children:Array.from({length:10},(r,i)=>i+1).map(r=>e.jsxs("option",{value:r,children:["#",r]},r))})]}),e.jsxs("div",{className:"min-h-28 rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900","aria-live":"polite",children:[o&&e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Loading…"}),!o&&l&&e.jsxs("p",{className:"font-medium text-red-600 dark:text-red-400",children:["Error: ",l]}),!o&&!l&&s&&e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:"text-lg font-bold",children:s.name}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:s.email}),e.jsxs("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:[s.company.name," · ",s.address.city]})]})]})]})},p=`import { useEffect, useState } from "react";

// Fetches a user from JSONPlaceholder with the three usual pieces of state:
// the data, a loading flag and an error message.
// The effect depends on userId, so picking another user fetches again.
const FetchUser = () => {
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Lets the cleanup cancel a request that is no longer needed
    const controller = new AbortController();

    // An effect can't be async itself, so the async work goes in an inner function
    const loadUser = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(\`https://jsonplaceholder.typicode.com/users/\${userId}\`, {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error(\`Request failed (\${res.status})\`);
        setUser(await res.json());
        setLoading(false);
      } catch (err) {
        if (err.name === "AbortError") return; // replaced by a newer request
        setError(err.message === "Failed to fetch" ? "Network problem: check your connection." : err.message);
        setLoading(false);
      }
    };

    loadUser();
    return () => controller.abort();
  }, [userId]);

  return (
    <div className="mx-auto max-w-md space-y-4">
      <div className="flex items-center gap-3">
        <label htmlFor="user-id" className="font-medium">
          User
        </label>
        <select
          id="user-id"
          value={userId}
          onChange={(e) => setUserId(Number(e.target.value))}
          className="rounded-lg border border-gray-300 bg-white px-3 py-2 dark:border-gray-700 dark:bg-gray-900"
        >
          {Array.from({ length: 10 }, (_, i) => i + 1).map((id) => (
            <option key={id} value={id}>
              #{id}
            </option>
          ))}
        </select>
      </div>

      <div
        className="min-h-28 rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900"
        aria-live="polite"
      >
        {loading && <p className="text-gray-600 dark:text-gray-400">Loading…</p>}
        {!loading && error && <p className="font-medium text-red-600 dark:text-red-400">Error: {error}</p>}
        {!loading && !error && user && (
          <>
            <h3 className="text-lg font-bold">{user.name}</h3>
            <p className="text-gray-700 dark:text-gray-300">{user.email}</p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {user.company.name} · {user.address.city}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default FetchUser;
`;g(h,[{name:"FetchUser.jsx",code:p}]);
