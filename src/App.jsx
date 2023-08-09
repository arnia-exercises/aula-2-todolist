// import Tasks from './components/tasks'
// import Phrases from './components/phrases'
// import ChildrenProp from './components/childrenProp'
import Ex1 from './components/ex1'

const listaTarefas = [
  {
    id: 1,
    text: 'Fazer o exercício',
    done: false
  },
  {
    id: 2,
    text: 'Revisar a aula',
    done: false
  },
]

function App() {
  return (
    <>
      {/* <Tasks  /> */}
      {/* <Phrases /> */}
      {/* <ChildrenProp>Olá Mundo!</ChildrenProp> */}
      <Ex1 title="Lista de Tarefas" tasks={listaTarefas} />
    </>
  )
}

export default App
