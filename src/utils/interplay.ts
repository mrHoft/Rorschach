/**
 * Interplay by Hoft
 * Custom context provider and state manager
 */

type Indexed<T = unknown> = { [key in string | symbol]: T }

const defaultSructure: Indexed = {
  'favorites.show': () => {},
  'menu.show': () => {},
  'registration.show': () => {},
}

export default class Interplay {
  private static _instance: Interplay
  private state: Indexed = { null: { null: null } }

  constructor(sructure?: Indexed) {
    if (Interplay._instance) {
      if (sructure) this.fill(sructure)
      return Interplay._instance
    }
    Interplay._instance = this
    if (sructure) this.fill(sructure)
    else this.fill(defaultSructure)
  }

  private fill = (data: Indexed) => {
    for (const key in data) this.add(key, data[key])
  }

  public get = (path: string) => {
    return path.split('.').reduce((obj: Indexed | null, key: string) => (obj && obj[key] ? (obj[key] as Indexed) : null), this.state) as unknown
  }

  public run = (path: string) => {
    const func = this.get(path)
    if (typeof func === 'function') func()
    else console.warn('Not a function: ', path)
  }

  public add = (path: string, value: unknown): void => {
    let obj = this.state as Indexed
    const arr = path.split('.')
    const last = arr.pop() || path
    arr.forEach(key => {
      if (!obj[key]) obj[key] = {}
      obj = obj[key] as Indexed
    })
    obj[last] = value
  }
}
