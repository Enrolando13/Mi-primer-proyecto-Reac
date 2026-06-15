function TaskItem({ task, index, deleteTask }) {
  return (
    <li className="task-item">
      {task}
      <button onClick={() => deleteTask(index)}>❌</button>
    </li>
  );
}

export default TaskItem;