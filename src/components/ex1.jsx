// Crie um componente ListaTarefas que recebe uma lista de objetos de tarefas
// (com propriedades como id, texto e concluida) como prop. Renderize essas tarefas
// em elementos <li>. Ao clicar em uma tarefa, ela deve alternar entre concluída e
// não concluída. Adicione, também, um botão "Excluir" para cada tarefa.
// Ao clicar no botão, a tarefa deve ser removida da lista.

import { useState } from "react"

const Task = ({ task }) => {
  const [currentTask, setTask] = useState(task)

  const changeTaskStatus = () => {
    setTask({
      ...currentTask,
      done: !currentTask.done
    })
  }

  return (
    <li>
      <span
        style={{ textDecoration: currentTask.done ? 'line-through' : 'none' }}
        onClick={changeTaskStatus}
      >
        {currentTask.text}
        {/* <button onClick={handleDelete}>Excluir</button> */}
      </span>
    </li>
  )
}

export default function Ex1 ({ tasks = [] }) {
  return (
    <ul>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  )
}
