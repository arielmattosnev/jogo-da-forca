import styled from "styled-components"

const Wrapper = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 gap: 0.5rem;
 font-size: 40px;
 text-transform: uppercase;
 font-weight: bold;
`

interface HangmanWordProps {
 word: string
 guessedLetters: string[]
 reveal: boolean
}

export default function HagmanWord({word, guessedLetters, reveal}: HangmanWordProps) { 
  return (
    <Wrapper>
      {word.split("").map((letter, index) => (
        <span style={{ borderBottom: "0.1em solid white", height: "50px", minWidth: "50px" }} key={index}>
          <span style={{ visibility: guessedLetters.includes(letter) || reveal 
           ? "visible"  
           : "hidden",
           color: !guessedLetters.includes(letter) && reveal ? "red" : "white"
           }}
          >
           {letter}
          </span>
        </span>
        ))}
    </Wrapper>
  )
}
