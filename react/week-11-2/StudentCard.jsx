// Lab challenge: fill in the blanks.
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
