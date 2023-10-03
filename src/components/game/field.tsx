import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import urlBg from '../../assets/bg02.png'
import inks from '../../const/inks'
import { ROWS, COLS } from '../../const/game'
import useHandler from '../../hooks/useHandler'
import { getDeck } from '../../utils/game'
import Interplay from '../../utils/interplay'

const interplay = new Interplay()

const PlayField = () => {
  const refPanel = useRef<HTMLDivElement>(null)
  const [deck, setDeck] = useState<number[]>(getDeck())
  const [time, setTime] = useState(performance.now())
  const { moves, total, Handler, Reset } = useHandler(refPanel)

  const newGame = () => {
    setDeck(getDeck())
    setTime(performance.now())
    Reset()
  }

  useEffect(() => {
    if (total === 0) {
      const elapsed = ~~((performance.now() - time) / 1000)
      interplay.run('modal.win', moves, elapsed)
    }
    interplay.add('game.new', newGame)
  }, [total])

  return (
    <GamePanel ref={refPanel}>
      {deck.map((num, i) => (
        <div className="rorsch__card" key={i} onClick={event => Handler(event, num)}>
          <CardFace num={num} className="rorsch__back" />
          <CardFace num={num} className="rorsch__face" data-mirror={num > 0 ? 1 : -1} />
        </div>
      ))}
    </GamePanel>
  )
}

const GamePanel = styled.div`
  margin: 5rem;
  height: 100%;
  aspect-ratio: ${COLS / ROWS / 2};
  background-image: url(${urlBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.9);
  box-shadow: 0 0 0.5rem gray;
  display: grid;
  grid-template-columns: repeat(${COLS}, 1fr);
  grid-gap: 0.5rem;
  padding: 0.5rem;
  &.no-event {
    pointer-events: none;
  }
`
const CardFace = styled.div<{ num: number }>`
  background-image: url(${({ num }) => inks[Math.abs(num)]});
`
export default PlayField
