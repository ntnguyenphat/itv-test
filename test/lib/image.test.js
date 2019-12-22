const { expect, assert } = require('chai')
const { image } = require('../../lib')

describe('Library', () => {
  describe('Image', () => {
    describe('#rotate()', () => {
      const matrix = []
      beforeEach('Create random matrix', () => {
        const k = Math.ceil(Math.random() * 10)
        for (let i = 0; i < k; i++) {
          for (let j = 0; j < k; j++) {
            if (!matrix[i]) matrix[i] = []
            matrix[i][j] = Math.ceil(Math.random() * 255)
          }
        }
      })

      it('Return error when first input is not an array', () => {
        expect(image.rotate).to.throw('input is not an array')
        const invalidMatrix = 'This is a string'
        try {
          image.rotate(invalidMatrix)
        } catch (error) {
          assert.strictEqual(error.message, 'input is not an array')
        }
      })

      it('Return error when first input is not an n*n matrix', () => {
        const invalidMatrix = [[1, 2, 3], 'abc', [1, 2]]
        try {
          image.rotate(invalidMatrix)
        } catch (error) {
          assert.strictEqual(error.message, 'input is not an n*n matrix')
        }
      })

      it('Return error when second input is not an integer', () => {
        const invalidLoop = 'Not a number'
        try {
          image.rotate(matrix, invalidLoop)
        } catch (error) {
          assert.strictEqual(error.message, 'loop is not a positive integer')
        }
      })

      it('Return correct rotated matrix when rotate once', () => {
        const expected = image.rotate(matrix)
        try {
          const result = image.rotate(matrix, 1)
          assert.equal(result, expected)
        } catch (error) {
          console.log(error)
        }
      })

      it('Return rotated matrix once when keep default loop = 1', () => {
        const expected = image.rotate(matrix)
        try {
          const result = image.rotate(matrix)
          assert.equal(result, expected)
        } catch (error) {
          console.log(error)
        }
      })

      it('Return correct rotated matrix when rotate twice', () => {

      })

      it('Return correct rotated matrix when rotate 3 times', () => {

      })

      it('Return the matrix when rotate combo of 4 times', () => {

      })

      it('Return same matrix when rotate once or for all numbers divisible by 4 1 ', () => {

      })
    })
  })
})
