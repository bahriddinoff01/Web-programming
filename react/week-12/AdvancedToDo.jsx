import { useState } from "react";

const AdvancedToDo = () => {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTasks = () => {
    if (!value.trim()) return;
    setTasks((prev) => [
      ...prev,
      { id: Date.now(), text: value.trim(), done: false },
    ]);
    setValue("");
  };
  const removeTasks = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };
  const toggleHanle = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task,
      ),
    );
  };
  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="type here"
          className="min-w-0 flex-1 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-gray-700 dark:bg-gray-900 dark:focus:ring-indigo-900"
        />
        <button
          onClick={addTasks}
          className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700 dark:bg-indigo-400 dark:text-gray-950 dark:hover:bg-indigo-300"
        >
          Add
        </button>
      </div>
      <div className="space-y-2">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center justify-between gap-4 rounded-lg border border-gray-200 bg-white px-4 py-3 dark:border-gray-800 dark:bg-gray-900"
          >
            <input
              type="checkbox"
              onChange={() => toggleHanle(task.id)}
              checked={task.done}
            />
            <p
              className={
                task.done ? "line-through text-gray-400" : "min-w-0 break-words"
              }
            >
              {task.text}
            </p>
            <button
              onClick={() => removeTasks(task.id)}
              className="shrink-0 rounded-md px-3 py-1 text-sm font-medium text-red-600 transition hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-950/40"
            >
              remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvancedToDo;
