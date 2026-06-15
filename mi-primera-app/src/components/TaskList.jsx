import TaskItem from "./TaskItem";

function TaskList({ tasks, deleteTask }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          index={index}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;