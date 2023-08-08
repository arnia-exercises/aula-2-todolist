// import Tasks from './components/tasks'
// import Phrases from './components/phrases'
// import ChildrenProp from './components/childrenProp'



function Lista ({ items = [], children }) {
  return (
    <div>
      <h2>{children}</h2>

      <ul style={{ border: '1px solid red' }}>
        {items.map((item, index) => (
          <li key={index}>{index + 1} - {item}</li>
        ))}
      </ul>
    </div>
  )
}

function Folha () {
  return (
    <>
      <Lista items={['Maçã', 'Abacaxi', 'Melancia']}>
        Lista de Frutas
      </Lista>
      <Lista items={['Rock', 'Funk', 'Pop', 'Forró']}>
        Lista de Estilos de musica
      </Lista>
    </>
  )
}

function App() {
  return (
    <>
      {/* <Tasks  /> */}
      {/* <Phrases /> */}
      {/* <ChildrenProp>Olá Mundo!</ChildrenProp> */}
      <Folha />
    </>
  )
}

export default App
