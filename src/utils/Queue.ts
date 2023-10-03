type El = {
  value: unknown
  next: El | null
  prev: El | null
} | null

export default class Queue {
  private size = 0
  private sizeMax = 10
  private head: El = null
  private tail: El = null

  constructor() {
    this.size = 0
    this.head = null
    this.tail = null
  }

  public enqueue(value: unknown) {
    const node: El = { value, next: null, prev: null }
    node.prev = this.tail
    if (this.tail) {
      this.tail.next = node
      this.tail = node
    } else this.head = this.tail = node
    this.size += 1
    this.crop()

    return this.size
  }

  public dequeue(): unknown | null {
    if (!this.head) return null
    const node = this.head
    const next = this.head?.next
    if (next) {
      next.prev = null
      this.head = next
    } else this.tail = this.head = null
    this.size -= 1

    return node.value
  }

  private crop() {
    while (this.size > this.sizeMax) {
      this.dequeue()
    }
  }

  public getAll() {
    const arr = []
    let node = this.head
    while (node) {
      arr.push(node.value)
      node = node.next
    }

    return arr
  }

  public peek() {
    return this.head
  }

  public isEmpty() {
    return this.size == 0
  }

  public clear() {
    this.size = 0
    this.head = null
    this.tail = null
  }
}
