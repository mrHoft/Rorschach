import React, { useState } from 'react'
import { CARDS } from '../const/game'

type TCard = {
  num?: number
} & HTMLDivElement

export default function useHandler(refPanel: React.RefObject<HTMLDivElement>) {
  const [active, setActive] = useState<TCard | null>(null)
  const [moves, setMoves] = useState(0)
  const [total, setTotal] = useState(CARDS / 2)

  function Reset() {
    setActive(null)
    setMoves(0)
    setTotal(CARDS / 2)

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
      setActive(el)
      return
    }

    refPanel.current!.classList.add('no-event')

    if ((active.num ?? 0) + num === 0) {
      setTotal(total - 1)

      setTimeout(() => {
        el.classList.add('glow')
        active.classList.add('glow')
      }, 300)

      setTimeout(() => {
        el.classList.remove('glow')
        active.classList.remove('glow')

        el.classList.add('match')
        active.classList.add('match')

        setActive(null)
        refPanel.current!.classList.remove('no-event')
      }, 800)
    }

    setTimeout(() => {
      active.classList.remove('flipped')
      el.classList.remove('flipped')
      setActive(null)
      refPanel.current!.classList.remove('no-event')
    }, 1300)
  }

  return { moves, total, Handler, Reset }
}
