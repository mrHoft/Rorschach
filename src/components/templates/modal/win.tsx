import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import Button from '../../ui/button/button'
import Interplay from '../../../utils/interplay'
import { getGameOptions } from '../../../engine/difficulty'
import { TRecord, saveRecord } from '../../../utils/leaderBoard'

const interplay = new Interplay()

export default function ModalWin() {
  const modalRef = useRef<HTMLDivElement>(null)
  const [moves, setMoves] = useState(0)
  const [time, setTime] = useState(0)

  function showModal(moves: number, time: number) {
    setMoves(moves)
    setTime(time)

    if (modalRef.current) {
      modalRef.current.style.display = 'flex'
    }

    const { DIFFICULTY } = getGameOptions()

    const record: TRecord = {
      difficulty: DIFFICULTY,
      score: getScore(time),
      movesMade: moves,
      timeUsed: time,
    }
    saveRecord(record)
  }

  function newGame() {
    interplay.run('game.new')
    if (modalRef.current) {
      modalRef.current.style.display = 'none'
    }
  }

  function getTimeString() {
    const h = ~~(time / (60 * 60))
    const m = ~~((time - h * 60 * 60) / 60)
    return `${h}:${('0' + m).slice(-2)}.${('0' + (time % 60)).slice(-2)}`
  }

  function getScore(elapsed: number = time) {
    const { ALLOTED_TIME } = getGameOptions()
    return Math.max((ALLOTED_TIME - elapsed) * 50, 0) + 500
  }

  useEffect(() => {
    interplay.add('modal.win', showModal)
  }, [])

  return (
    <WrapModal ref={modalRef}>
      <Modal>
        <h3>You win!</h3>
        <p>Moves made: {moves}</p>
        <p>Time used: {getTimeString()}</p>
        <p>Total score: {getScore()}</p>
        <Button color="#e0e0e0" backgroundColor="#808080" label="New game" onClick={newGame} />
      </Modal>
    </WrapModal>
  )
}

const WrapModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: none;
  justify-content: center;
  align-items: center;
`
const Modal = styled.div`
  width: 50%;
  aspect-ratio: 2/1;
  border-radius: 1rem;
  background-color: var(--color-bg-modal);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1rem;
`
