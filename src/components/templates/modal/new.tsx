import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import Button from '../../ui/button/button'
import Interplay from '../../../utils/interplay'
import { TDifficulty } from '../../../const/game'
import { setDifficulty } from '../../../engine/difficulty'

const interplay = new Interplay()

export default function ModalNewGame() {
  const modalRef = useRef<HTMLDivElement>(null)

  function showModal() {
    if (modalRef.current) {
      modalRef.current.style.display = 'flex'
    }
  }

  function closeModal() {
    if (modalRef.current) {
      modalRef.current.style.display = 'none'
    }
  }

  function handleChoose(dif: TDifficulty) {
    setDifficulty(dif)
    closeModal()
    interplay.run('game.new')
  }

  useEffect(() => {
    interplay.add('modal.new', showModal)
  }, [])

  return (
    <WrapModal ref={modalRef}>
      <Modal>
        <h3>Start a new game</h3>
        <p>Select difficulty level:</p>
        <Button color="#e0e0e0" backgroundColor="#808080" label="Low" onClick={() => handleChoose('low')} />
        <Button color="#e0e0e0" backgroundColor="#808080" label="Medium" onClick={() => handleChoose('medium')} />
        <Button color="#e0e0e0" backgroundColor="#808080" label="Hard" onClick={() => handleChoose('hard')} />
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
  width: 50dvw;
  padding: 1rem;
  border-radius: 1rem;
  background-color: var(--color-bg-modal);
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  justify-content: center;
  align-items: center;
`
