const { expect, assert } = require('chai')
const { image } = require('../../lib')

describe('Library', () => {
  describe('Image', () => {
    describe('#rotate()', () => {
      const matrix = [
        [0, 1, 2, 3, 4],
        [5, 6, 7, 8, 9],
        [0, 2, 4, 6, 8],
        [1, 3, 5, 7, 9],
        [4, 3, 2, 1, 0]
      ]
      // beforeEach('Create random matrix', () => {
      //   const k = Math.ceil(Math.random() * 10)
      //   for (let i = 0; i < k; i++) {
      //     for (let j = 0; j < k; j++) {
      //       if (!matrix[i]) matrix[i] = []
      //       matrix[i][j] = Math.ceil(Math.random() * 255)
      //     }
      //   }
      // })
      // afterEach('Reset matrix', () => {
      //   matrix = [
      //     [0, 1, 2, 3, 4],
      //     [5, 6, 7, 8, 9],
      //     [0, 2, 4, 6, 8],
      //     [1, 3, 5, 7, 9],
      //     [4, 3, 2, 1, 0]
      //   ]
      // })

      it('Return error when first input is not an array', () => {
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
        const expected = [
          [4, 1, 0, 5, 0],
          [3, 3, 2, 6, 1],
          [2, 5, 4, 7, 2],
          [1, 7, 6, 8, 3],
          [0, 9, 8, 9, 4]
        ]
        const result = image.rotate(matrix, 1)
        expect(result).to.eql(expected)
      })

      it('Return rotated matrix once when keep default loop = 1', () => {
        const expected = [
          [4, 1, 0, 5, 0],
          [3, 3, 2, 6, 1],
          [2, 5, 4, 7, 2],
          [1, 7, 6, 8, 3],
          [0, 9, 8, 9, 4]
        ]
        const result = image.rotate(matrix)
        expect(result).to.eql(expected)
      })

      it('Return correct rotated matrix when rotate twice', () => {
        const expected = [
          [0, 1, 2, 3, 4],
          [9, 7, 5, 3, 1],
          [8, 6, 4, 2, 0],
          [9, 8, 7, 6, 5],
          [4, 3, 2, 1, 0]
        ]
        const result = image.rotate(matrix, 2)
        expect(result).to.eql(expected)
      })

      it('Return correct rotated matrix when rotate 3 times', () => {
        const expected = [
          [4, 9, 8, 9, 0],
          [3, 8, 6, 7, 1],
          [2, 7, 4, 5, 2],
          [1, 6, 2, 3, 3],
          [0, 5, 0, 1, 4]
        ]
        const result = image.rotate(matrix, 3)
        expect(result).to.eql(expected)
      })

      it('Return the matrix when rotate combo of 4 times', () => {
        const expected = [
          [0, 1, 2, 3, 4],
          [5, 6, 7, 8, 9],
          [0, 2, 4, 6, 8],
          [1, 3, 5, 7, 9],
          [4, 3, 2, 1, 0]
        ]
        const result = image.rotate(matrix, 4)
        expect(result).to.eql(expected)
      })

      it('Return same matrix when rotate once or for all numbers divisible by 4 1 ', () => {
        const expected = [
          [0, 1, 2, 3, 4],
          [9, 7, 5, 3, 1],
          [8, 6, 4, 2, 0],
          [9, 8, 7, 6, 5],
          [4, 3, 2, 1, 0]
        ]
        const result = image.rotate(matrix, 6)
        expect(result).to.eql(expected)
      })
    })
  })
})
