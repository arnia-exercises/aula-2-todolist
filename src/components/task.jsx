/* eslint-disable react/prop-types */

export default function Task ({ task }) {
  return (
    <li key={task.description}>
      <input
        type="checkbox"
        id={task.description}
        checked={task.isDone}
      />
      <label htmlFor={task.description}>
        {task.isDone
          ? <s>{task.description}</s>
          : <span>{task.description}</span>
        }
      </label>
    </li>
  )
}
