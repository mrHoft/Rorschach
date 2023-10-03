import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import Button from '../../ui/button/button'
import Interplay from '../../../utils/interplay'

const interplay = new Interplay()

export default function ModalAbout() {
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

  useEffect(() => {
    interplay.add('modal.about', showModal)
  }, [])

  return (
    <WrapModal ref={modalRef}>
      <Modal>
        <h3>About game</h3>
        <p>This game was based on Rorschach test: a projective psychological test in which subjects' perceptions of inkblots.</p>
        <p>Test was created in 1921.</p>
        <p>
          Rorschach never intended the inkblots to be used as a general personality test, but developed them as a tool for the diagnosis of schizophrenia. It
          was not until 1939 that the test was used as a projective test of personality, a use of which Rorschach had always been skeptical.
        </p>
        <Button color="#e0e0e0" backgroundColor="#808080" label="Close" onClick={closeModal} />
      </Modal>
    </WrapModal>
  )
}

const Record = styled.div`
  justify-self: left;
`

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
  min-height: 25dvw;
  padding: 1rem;
  border-radius: 1rem;
  background-color: var(--color-bg-modal);
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  h3,
  button {
    align-self: center;
  }
`
