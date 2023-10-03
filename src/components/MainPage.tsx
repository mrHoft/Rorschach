import React from 'react'
import styled from 'styled-components'
import Button from './ui/Button/Button'
import urlBg from '../../src/assets/bg02.png'
import urlR01 from '../../src/assets/r01.png'
import urlR02 from '../../src/assets/r02.png'
import urlR03 from '../../src/assets/r03.png'
import urlR04 from '../../src/assets/r04.png'
import urlR05 from '../../src/assets/r05.png'
import urlR06 from '../../src/assets/r06.png'
import urlR07 from '../../src/assets/r07.png'
import urlR08 from '../../src/assets/r08.png'
import urlR09 from '../../src/assets/r09.png'
import urlR10 from '../../src/assets/r10.png'
import urlR11 from '../../src/assets/r11.png'
import urlR12 from '../../src/assets/r12.png'

const inks = [urlR01, urlR02, urlR03, urlR04, urlR05, urlR06, urlR07, urlR08, urlR09, urlR10, urlR11, urlR12]

const CARDS = 18
const ROWS = 3
const COLS = CARDS / ROWS

type TSlot = number | null

const rnd = () => ~~(Math.random() * CARDS)
const arr: TSlot[] = new Array(CARDS).fill(null)

const getFree = (array: TSlot[]) => {
  for (let i = 0; i < CARDS; i += 1) {
    if (array[i] === null) return i
  }
  return 0
}

let deck = CARDS / 2
while (deck) {
  const n = ~~(Math.random() * CARDS)
  if (arr[n] === null) {
    arr[n] = deck
    arr[getFree(arr)] = -deck
    deck -= 1
  }
}

console.log(arr)

const MainPage = () => {
  return (
    <main>
      <GamePanel>
        {arr.map((num, i) => (
          <Card key={i} num={num as number} onClick={() => console.log(num)} />
        ))}
      </GamePanel>
      {/* <Button color="#e0e0e0" backgroundColor="#808080" label="Button" /> */}
    </main>
  )
}

const GamePanel = styled.div`
  margin: 5rem;
  width: 100%;
  max-height: 100%;
  aspect-ratio: ${COLS / ROWS / 2};
  background-image: url(${urlBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.9);
  box-shadow: 0 0 0.5rem gray;
  display: grid;
  grid-template-columns: repeat(${COLS}, 1fr);
`
const Card = styled.div<{ num: number }>`
  background-color: #ddd;
  background-image: url(${({ num }) => inks[Math.abs(num)]});
  background-size: cover;
  border: gray 1px solid;
  transform: scaleX(${({ num }) => (num > 0 ? 1 : -1)});
`
export default MainPage
