import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import Button from '../../ui/button/button'
import Interplay from '../../../utils/interplay'
import { TRecord, getRecords } from '../../../utils/leaderBoard'
import { dateString } from '../../../utils/dateString'

const interplay = new Interplay()

export default function ModalRecords() {
  const modalRef = useRef<HTMLDivElement>(null)
  const [records, setRecords] = useState<TRecord[]>([])

  function showModal() {
    setRecords(getRecords())

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
    interplay.add('modal.records', showModal)
  }, [])

  return (
    <WrapModal ref={modalRef}>
      <Modal>
        <h3>Records</h3>
        {records.map((rec, i) => {
          return (
            <Record key={i}>
              <span> {dateString(rec.timestamp!)}</span>
              <span> {rec.score}</span>
            </Record>
          )
        })}
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
  padding: 1rem 0;
  border-radius: 1rem;
  background-color: var(--color-bg-modal);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1rem;
`
