import styled from "styled-components"

const Base = styled.div`
 height: 10px;
 width: 250px;
 background-color: #ffffff;
 margin-left: 80px;
`

const VerticalLine = styled.div`
 height: 250px;
 width: 10px;
 background-color: #ffffff;
 margin-left: 150px;
`

const VerticalLineSmall = styled.div`
 height: 40px;
 width: 10px;
 background-color: #ffffff;
 margin-left: 150px;
 position: absolute;
 top: 0;
 right: 70px;
`

const HorizontalLine = styled.div`
 height: 10px;
 width: 100px;
 background-color: #ffffff;
 position: absolute;
 top: 0;
 right: 80px;
`

const PuppetHead = styled.div`
 height: 30px;
 width: 30px;
 border: 3px solid white;
 border-radius: 50%;
 position: absolute;
 top: 40px;
 right: 57px;
`

const PuppetBody = styled.div`
 height: 80px;
 width: 7px;
 background-color: #ffffff;
 position: absolute;
 top: 75px;
 right: 71px;
`

const PuppetRightArm = styled.div`
 height: 6px;
 width: 40px;
 background-color: #ffffff;
 position: absolute;
 top: 90px;
 right: 35px;
 rotate: 30deg;
`  
const PuppetLeftArm = styled.div`
 height: 6px;
 width: 40px;
 background-color: #ffffff;
 position: absolute;
 top: 90px;
 right: 70px;
 rotate: -30deg;
`  

const PuppetLeftLeg = styled.div`
 height: 6px;
 width: 40px;
 background-color: #ffffff;
 position: absolute;
 top: 160px;
 right: 70px;
 rotate: -30deg;
`
const PuppetRightLeg = styled.div`
 height: 6px;
 width: 40px;
 background-color: #ffffff;
 position: absolute;
 top: 160px;
 right: 35px;
 rotate: 30deg;
`

const bodyParts = [PuppetHead, PuppetBody, PuppetRightArm, PuppetLeftArm, PuppetRightLeg, PuppetLeftLeg]

interface HangmanDrawingProps {
  numberOfGuess: number
}

export default function HagmanDrawing({numberOfGuess}: HangmanDrawingProps) {
  return (
    <div style={{ position: "relative"}}>
     {bodyParts.slice(0, numberOfGuess).map((BodyPart, index) => {
      return <BodyPart key={index} />
     })}  
     <HorizontalLine />
     <VerticalLineSmall />
     <VerticalLine />
     <Base />
    </div>
  )
}
