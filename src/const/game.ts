export type TDifficulty = 'low' | 'medium' | 'hard'

export type TDParams = {
  cards: number // Total cards in deck
  rows: number // Number of rows in the field
  allotted: number // Time in seconds alloted to pass a test
}

export type TDOptions = Record<TDifficulty, TDParams>

export const difficultyOptions: TDOptions = {
  low: { cards: 10, rows: 2, allotted: 5 * 60 },
  medium: { cards: 18, rows: 3, allotted: 10 * 60 },
  hard: { cards: 24, rows: 3, allotted: 15 * 60 },
}
