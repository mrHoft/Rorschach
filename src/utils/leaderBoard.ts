import Queue from './Queue'
import Store from './Store'

const queue = new Queue()
const store = new Store()

export type TRecord = {
  timestamp?: Date
  score: number
  movesMade: number
  timeUsed: number
}

class LeaderBoard {
  private static _instance: LeaderBoard

  constructor() {
    if (LeaderBoard._instance) return LeaderBoard._instance
    LeaderBoard._instance = this
    const savedRecords = this.get()
    savedRecords.forEach(data => queue.enqueue(data))
  }

  public save(data: TRecord) {
    data.timestamp = new Date()
    queue.enqueue(data)
    const records = queue.getAll()
    store.set('records', records)
  }

  public get() {
    return store.get('records') as TRecord[]
  }
}

const leaderBoard = new LeaderBoard()
const saveRecord = leaderBoard.save
const getRecords = leaderBoard.get

export { saveRecord, getRecords }
