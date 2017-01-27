// 'use strict'
//
// class Node {
//   constructor ( value, priority ){
//     this.arr = []
//     this.value = value
//     this.priority = priority
//   }
// }

export default class PriorityQueue {
  constructor(value) {
    this.arr = value || []
    this.index = 0
  }

  enqueue(data, priority) {
    return this.arr[this.index++] = {data, priority}
  }

  front() {
    let current,
        highestPriority,
        prev

    if (this.index === 0) {
      return null
    }
    for (let i = 1; i < this.index; i++) {
      this.current = this.arr[i]
      this.prev = this.arr[i-1]
      if ( this.current.priority > this.prev.priority ) {
        this.highestPriority = this.prev
      } else {
        this.highestPriority = this.current
      }
    }
    return this.highestPriority
  }

  back() {
    let current,
        lowest,
        prev

    if (this.index === 0) {
      return null
    }
    for (let i = 1; i < this.index; i++) {
      this.current = this.arr[i]
      this.prev = this.arr[i-1]
      if ( this.current.priority < this.prev.priority ) {
        this.lowest = this.prev
      } else {
        this.lowest = this.current
      }
    }
    return this.lowest
  }

  dequeue() {
    let current,
        highest,
        prev

    if (this.index === 0) {
      return null
    }
    for (let i = 1; i < this.index; i++) {
      this.current = this.arr[i]
      this.prev = this.arr[i-1]
      if ( this.current.priority > this.prev.priority ) {
        this.highest = this.prev
      } else {
        this.highest = this.current
      }
    }
    let arrSpliced = []
    let newIndex = 0

    for (let i = 0; i < this.index; i++) {
      if ( this.arr[i] !== this.highest ) {
        arrSpliced[newIndex++] = this.arr[i]
      }
    }
    this.arr = arrSpliced
    this.index = newIndex
    // this.highest = this.arr.splice(this.arr.indexOf(this.highest), 1)
    return this.highest
  }

  isEmpty() {
    if ( this.index === 0 ) {
      return true
    }
    return false
  }

  length() {
    return this.index
  }
}
