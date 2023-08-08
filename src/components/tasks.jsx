import { faker } from '@faker-js/faker'

import Task from './task'

const tarefas = [
  { description: faker.lorem.word(), isDone: faker.datatype.boolean() },
  { description: faker.lorem.word(), isDone: faker.datatype.boolean() },
  { description: faker.lorem.word(), isDone: faker.datatype.boolean() },
  { description: faker.lorem.word(), isDone: faker.datatype.boolean() },
]

export default function Tasks () {
  return (
    <ul>
      {tarefas.map((tarefa) => (
        <Task
          key={tarefa}
          task={tarefa}
        />
      ))}
    </ul>
  )
}