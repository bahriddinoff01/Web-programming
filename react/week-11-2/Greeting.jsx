// The simplest component: a function whose name starts with a capital letter
// and returns JSX. Each <Greeting /> is its own copy of the same function.
const Greeting = () => {
  return (
    <p className="rounded-lg border border-gray-200 bg-white px-4 py-3 font-medium dark:border-gray-800 dark:bg-gray-900">
      👋 Hello, World!
    </p>
  );
};

export default Greeting;
