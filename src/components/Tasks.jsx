import { useState, useEffect } from "react";

const Tasks = () => {
  // Load tasks from local storage or use an empty array if none exist
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [inputValue, setInputValue] = useState("");

  // Save tasks to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Function to handle the input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Function to add the task/s
  const handleAddTask = (e) => {
    e.preventDefault(); // Prevent the form from submitting by default
    if (inputValue.trim() === "") {
      return "";
    } else {
      // Add the new task to the list
      setTasks([
        ...tasks,
        { text: inputValue, id: Date.now(), completed: false },
      ]);
      setInputValue(""); // Clear the input field after adding
    }
  };

  // Function to delete a task
  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Function to check as task completed
  const handleToggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-lvh">
      <h1 className="text-white text-3xl text-center font-bold pt-10">Tasks</h1>
        <form onSubmit={handleAddTask}>
          <div className="grid place-items-center p-10">
            <input
              className="border p-2 w-full max-w-lg focus:outline-none focus:ring rounded-lg"
              value={inputValue}
              onChange={handleInputChange}
              type="text"
              placeholder="Input Task Here"
            />
          </div>
        </form>
        {tasks.length > 0 &&  (
            <p className="text-center">Click or tap on the task to check as completed</p>
        )}

        {/* The tasks List */}
        <div className="h-80 mx-2 overflow-y-auto">
          {tasks.length === 0 ? (
            <div className="text-center text-gray-600 p-4">No Tasks yet!</div>
          ) : (
            tasks.map((task) => (
              <div
                key={task.id}
                className="p-2 flex justify-center items-center"
              >
                
                <div className="task w-full flex justify-between items-center shadow-current shadow-sm max-w-lg p-2 rounded-lg bg-white">
                  <span
                    className={`${
                      task.completed ? "line-through text-amber-500" : ""
                    } cursor-pointer`}
                    onClick={() => handleToggleComplete(task.id)}
                  >
                    {task.text}
                  </span>
                  <button
                    onClick={() => handleDeleteTask(task.id)}
                    className="text-red-500"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Tasks;
