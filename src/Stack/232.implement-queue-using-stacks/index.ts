/**
 * 已离题，因为 ts 没有栈。
 * TODO: 有空实现栈了再改改。
 */

class MyQueue {
  private _items: number[] = []
  constructor() {}

  push(x: number): void {
    this._items.push(x)
  }

  pop(): number {
    return this._items.shift()
  }

  peek(): number {
    return this._items[0]
  }

  empty(): boolean {
    return this._items.length === 0
  }
}

/**
* Your MyQueue object will be instantiated and called as such:
* var obj = new MyQueue()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.peek()
* var param_4 = obj.empty()
*/