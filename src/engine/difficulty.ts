import { TDifficulty, TDOptions, difficultyOptions } from '../const/game'

class Difficulty {
  private static _instance: Difficulty
  private difficulty: TDifficulty = 'low'
  private options: TDOptions = difficultyOptions

  constructor() {
    if (Difficulty._instance) return Difficulty._instance
    Difficulty._instance = this
  }

  public set = (dif: TDifficulty) => {
    this.difficulty = dif
  }

  public get = () => {
    return {
      CARDS: this.options[this.difficulty].cards,
      ROWS: this.options[this.difficulty].rows,
      COLS: this.options[this.difficulty].cards / this.options[this.difficulty].rows,
      ALLOTED_TIME: this.options[this.difficulty].allotted,
      DIFFICULTY: this.difficulty,
    }
  }
}

const difficulty = new Difficulty()

export const setDifficulty = difficulty.set
export const getGameOptions = difficulty.get
