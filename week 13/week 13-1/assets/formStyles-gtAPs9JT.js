const o="w-full rounded-lg border bg-white px-3 py-2 outline-none transition focus:ring-2 dark:bg-gray-900",e=r=>`${o} ${r?"border-red-500 focus:border-red-500 focus:ring-red-200 dark:focus:ring-red-900":"border-gray-300 focus:border-indigo-500 focus:ring-indigo-200 dark:border-gray-700 dark:focus:ring-indigo-900"}`,d="mb-1 block text-sm font-semibold",t="mt-1 text-sm text-red-600 dark:text-red-400",a="mt-1 text-sm text-gray-600 dark:text-gray-400",n="rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-600 dark:bg-indigo-400 dark:text-gray-950 dark:hover:bg-indigo-300 dark:disabled:bg-gray-700 dark:disabled:text-gray-400",s="rounded-lg border border-gray-300 px-4 py-2 font-semibold transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-gray-700 dark:hover:bg-gray-800",i=`// Tailwind class names shared by the Week 13 forms, so every form looks the same.
export const inputClass =
  "w-full rounded-lg border bg-white px-3 py-2 outline-none transition focus:ring-2 dark:bg-gray-900";

// Normal border, or a red one when the field has an error
export const fieldClass = (hasError) =>
  \`\${inputClass} \${
    hasError
      ? "border-red-500 focus:border-red-500 focus:ring-red-200 dark:focus:ring-red-900"
      : "border-gray-300 focus:border-indigo-500 focus:ring-indigo-200 dark:border-gray-700 dark:focus:ring-indigo-900"
  }\`;

export const labelClass = "mb-1 block text-sm font-semibold";
export const errorClass = "mt-1 text-sm text-red-600 dark:text-red-400";
export const hintClass = "mt-1 text-sm text-gray-600 dark:text-gray-400";

export const primaryButton =
  "rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-600 dark:bg-indigo-400 dark:text-gray-950 dark:hover:bg-indigo-300 dark:disabled:bg-gray-700 dark:disabled:text-gray-400";

export const secondaryButton =
  "rounded-lg border border-gray-300 px-4 py-2 font-semibold transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-gray-700 dark:hover:bg-gray-800";
`;export{i as a,t as e,e as f,a as h,d as l,n as p,s};
