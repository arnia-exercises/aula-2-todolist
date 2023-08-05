import Task from './task'

export default function Tasks ({ tasks }) {
  return (
    <ul>
      {tasks.map((tarefa) => (
        <Task
          key={tarefa}
          task={tarefa}
        />
      ))}
    </ul>
  )
}