import { faker } from '@faker-js/faker'
import Tasks from './components/tasks'

const tarefas = [
  {
    description: faker.lorem.word(),
    isDone: faker.datatype.boolean()
  },
  {
    description: faker.lorem.word(),
    isDone: faker.datatype.boolean()
  },
  {
    description: faker.lorem.word(),
    isDone: faker.datatype.boolean()
  },
  {
    description: faker.lorem.word(),
    isDone: faker.datatype.boolean()
  },
]

function App() {
  return (
    <>
      <Tasks tasks={tarefas} />
    </>
  )
}

export default App
