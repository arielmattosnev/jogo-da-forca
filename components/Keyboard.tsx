import styled from "styled-components"

const keys = [
 'a',
 'b',
 'c',
 'd',
 'f',
 'g',
 'h',
 'i',
 'j',
 'k',
 'l',
 'm',
 'n',
 'o',
 'p',
 'q',
 'r',
 's',
 't',
 'u',
 'v',
 'w',
 'x',
 'y',
 'z'
]

const Wrapper = styled.div`
 display: grid;
 grid-template-columns: repeat(auto-Fit, minmax(75px, 1fr));
 gap: 0.5rem;
 width: 600px;
 max-height: 192px;
`

const Button = styled.button<{ isActive: boolean }>`
 opacity: ${(p) => (p.isActive ? null : '0.3 ')};

 &:focus:disabled {
  outline: none;
  border-color: transparent;
  cursor: not-allowed
 }

 &:focus-visible:disabled {
  outline: none;
  border-color: transparent;
  cursor: not-allowed
 }

 &:hover:disabled {
  outline: none;
  border-color: transparent;
  cursor: not-allowed;
 }
`

interface KeyBoardProps {
 activeLetters: string[]
 inactiveLetters: string[]
 disabled: boolean
 addGuessedLetters: (letter: string) => void
}

export default function Keyboard({ activeLetters, inactiveLetters, disabled = false, addGuessedLetters }: KeyBoardProps) {
  return (
    <Wrapper>
      {keys.map((letter) => {
       const isActive = !activeLetters.includes(letter)
       const isInactive = !inactiveLetters.includes(letter)

       return (
        <Button onClick={() => addGuessedLetters(letter)} 
         disabled={!(isActive && isInactive) || disabled} 
         isActive={isActive && isInactive} 
         key={letter}
        >
          {letter.toUpperCase()}
        </Button>
        )
      }
      )}
    </Wrapper>
  )
}
