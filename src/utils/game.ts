import { CARDS } from '../const/game'

export function getDeck(): number[] {
  const deck: number[] = new Array(CARDS).fill(0)

  const getFree = (array: number[]) => {
    for (let i = 0; i < CARDS; i += 1) {
      if (array[i] === 0) return i
    }
    return 0
  }

  let rest = CARDS / 2
  while (rest) {
    const n = ~~(Math.random() * CARDS)
    if (deck[n] === 0) {
      deck[n] = rest
      deck[getFree(deck)] = -rest
      rest -= 1
    }
  }
  return deck
}
