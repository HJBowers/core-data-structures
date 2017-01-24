import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Queue from '../src/queue'

chai.use(chaiChange)

describe('Queue', () => {

  it('exists', () => {
    expect(Queue).to.be.a('function')
  })

    context('enqueue()', () => {
      it('adds an element (the string "foo") to the back of the queue.', () => {
        const myQueue = new Queue()
        expect(() => myQueue.enqueue('foo'))
          .to.alter(() => myQueue.length(), { from: 0, to: 1 })
      })
    })


}
