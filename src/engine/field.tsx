import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import urlBg from '../assets/bg02.png'
import inks from '../const/inks'
import useHandler from '../hooks/useHandler'
import { getDeck } from './deck'
import Interplay from '../utils/interplay'
import { getGameOptions } from './difficulty'

const interplay = new Interplay()

const PlayField = () => {
  const { CARDS, ROWS, COLS } = getGameOptions()
  const refPanel = useRef<HTMLDivElement>(null)
  const [deck, setDeck] = useState<number[]>(getDeck())
  const [time, setTime] = useState(performance.now())
  const { moves, total, Handler, Reset } = useHandler(refPanel, CARDS)

  const newGame = () => {
    setDeck(getDeck())
    setTime(performance.now())
    const { CARDS } = getGameOptions()
    Reset(CARDS)
  }

  useEffect(() => {
    if (total === 0) {
      const elapsed = ~~((performance.now() - time) / 1000)
      interplay.run('modal.win', moves, elapsed)
    }
    interplay.add('game.new', newGame)
  }, [total])

  return (
    <GamePanel ref={refPanel} COLS={COLS} ROWS={ROWS}>
      {deck.map((num, i) => (
        <div className="rorsch__card" key={i} onClick={event => Handler(event, num)}>
          <div className="rorsch__back"></div>
          <CardFace num={num} className="rorsch__face" data-mirror={num > 0 ? 1 : -1} />
        </div>
      ))}
    </GamePanel>
  )
}

const GamePanel = styled.div<{ COLS: number; ROWS: number }>`
  margin: 5rem;
  height: 100%;
  aspect-ratio: ${({ COLS, ROWS }) => COLS / ROWS / 2};
  background-image: url(${urlBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.9);
  box-shadow: 0 0 0.5rem gray;
  display: grid;
  grid-template-columns: repeat(${({ COLS }) => COLS}, 1fr);
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
