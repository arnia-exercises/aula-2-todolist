/**
 * Crie um gerador de frases motivacionais. A sua tela deverá mostrar uma frase e ter um
 * botão para gerar outra. Quando clicado, o botão deverá atualizar o estado e modificar
 * a frase para uma aleatória.
 */

import { useState } from "react"

const phrases = [
  'Acredite em você mesmo e tudo será possível.',
  'O fracasso é o trampolim para o sucesso',
  'Nunca é tarde demais para definir uma nova meta ou sonhar um novo sonho',
  'Lembre-se: você é mais forte do que pensa e mais corajoso do que acredita',
  'Não limite seus desafios, desafie seus limites.',
  'A jornada de mil milhas começa com um único passo.',
  'A persistência é o caminho do êxito.',
  'To com fome.'
]

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
  
export default function Phrases () {
  const [position, setPosition] = useState(random(0, phrases.length - 1))

  const handleButton = () => {
    setPosition(random(0, phrases.length - 1))
  }

  return (
    <div>
      <button onClick={handleButton}>Gerar Frase</button>
      <p>{phrases[position]}</p>
    </div>
  )
}
