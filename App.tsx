import { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import './App.css'
import HagmanDrawing from './components/HagmanDrawing'
import HagmanWord from './components/HagmanWord'
import Keyboard from './components/Keyboard'

const Wrapper = styled.div`
 display: flex;
 align-items: center;
 flex-direction: column;
 gap: 2rem;
 max-width: 1250px;
`

const HangmanParts = styled.div`
 display: flex;
 flex-direction: column;
 gap: 3rem;
 width: 330px;
`

const words = ['ford', 'chevrolet', 'bmw', 'audi', 'volkswagen']

function App() {

  const [wordToGuess, setWordToGuess] = useState(() => {
   return words[Math.floor(Math.random() * words.length)]
  })

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const incorrectGuesses = guessedLetters.filter((letter) => !wordToGuess.includes(letter))
  const correctGuesses = guessedLetters.filter((letter) => wordToGuess.includes(letter))

  const addGuessedLetters = useCallback((letter: string) => { 
    if(guessedLetters.includes(letter) || isLoser || isWinner) return
    
    setGuessedLetters((guessedLetters) => [...guessedLetters, letter])
  },[guessedLetters])
    
  useEffect(() => {
    const handler = ((e: KeyboardEvent) => {
      const key = e.key
       
      if(!key.match(/^[a-z]$/)) return
       
      e.preventDefault()
      addGuessedLetters(key)
    }) as unknown as EventListener
      
    document.addEventListener('keypress', handler)
      
    return (() => {
      document.removeEventListener('keypress', handler)
    })
    }, [guessedLetters])

    const isLoser = incorrectGuesses.length >= 6
    const isWinner = wordToGuess.split('').every((letter) => guessedLetters.includes(letter))

  return (
    <Wrapper>
      <h1>Jogo da Forca</h1>
     <HangmanParts>
       {isLoser && "Acabaram suas chances, tente novamente atualizando a página"}
       {isWinner && "Parabéns, você acertou a palavra!!!, atualize a página para jogar novamente"}
       <HagmanDrawing numberOfGuess={incorrectGuesses.length} />
       <HagmanWord reveal={isLoser} guessedLetters={guessedLetters}  word={wordToGuess} />
     </HangmanParts>
      <Keyboard 
       activeLetters={correctGuesses} 
       inactiveLetters={incorrectGuesses} 
       disabled={isLoser || isWinner}
       addGuessedLetters={addGuessedLetters}/>
    </Wrapper>
  )
}

export default App
