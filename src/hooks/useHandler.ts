import React, { useState } from 'react'
import { useAudio } from './useAudio'
import Interplay from '../utils/interplay'

const interplay = new Interplay()

type TCard = {
  num?: number
} & HTMLDivElement

export default function useHandler(refPanel: React.RefObject<HTMLDivElement>, CARDS: number) {
  const [active, setActive] = useState<TCard | null>(null)
  const [moves, setMoves] = useState(0)
  const [total, setTotal] = useState(CARDS / 2)
  const { playAudio, switchAudio } = useAudio()

  function setAudio(state: boolean) {
    switchAudio(state)
  }

  interplay.add('audio.switch', setAudio)

  function Reset(cards: number = CARDS) {
    setActive(null)
    setMoves(0)
    setTotal(cards / 2)

    const collection = refPanel.current?.children
    if (collection) {
      const arr = Array.from(collection)
      for (const el of arr) el.classList.remove('flipped', 'match')
    }
  }

  function Handler(event: React.MouseEvent<HTMLDivElement, MouseEvent>, num: number) {
    event.preventDefault()
    const el = event.currentTarget as TCard
    el.num = num
    el.classList.add('flipped')

    setMoves(moves + 1)

    if (!active) {
      playAudio('sound.slide2')
      setActive(el)
      return
    }

    refPanel.current!.classList.add('no-event')
    playAudio('sound.slide3')

    if ((active.num ?? 0) + num === 0) {
      setTimeout(() => {
        el.classList.add('glow')
        active.classList.add('glow')
      }, 300)

      setTimeout(() => {
        setTotal(total - 1)
        playAudio('sound.match')
        el.classList.remove('glow')
        active.classList.remove('glow')

        el.classList.add('match')
        active.classList.add('match')

        setActive(null)
        refPanel.current!.classList.remove('no-event')
      }, 800)
      return
    }

    setTimeout(() => {
      playAudio('sound.slide8')
      active.classList.remove('flipped')
      el.classList.remove('flipped')
      setActive(null)
      refPanel.current!.classList.remove('no-event')
    }, 1300)
  }

  return { moves, total, Handler, Reset }
}
