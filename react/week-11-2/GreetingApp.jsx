import Greeting from "./Greeting";

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
