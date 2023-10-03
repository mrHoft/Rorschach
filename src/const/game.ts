type TDifficulty = 'low' | 'medium' | 'hard'

const difficulty: TDifficulty = 'low'

const options = {
  low: { cards: 10, rows: 2, allotted: 5 * 60 },
  medium: { cards: 18, rows: 3, allotted: 10 * 60 },
}

export const CARDS = options[difficulty].cards
export const ROWS = options[difficulty].rows
export const COLS = CARDS / ROWS
export const ALLOTED_TIME = options[difficulty].allotted
