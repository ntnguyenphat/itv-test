const nestedClone = (obj) => JSON.parse(JSON.stringify(obj))

const rotateOnce = (matrix) => {
  const ret = nestedClone(matrix)
  const n = matrix.length
  const x = Math.floor(n / 2)
  const y = n - 1
  for (let i = 0; i < x; i++) {
    for (let j = i; j < y - i; j++) {
      const k = ret[i][j]
      ret[i][j] = ret[y - j][i]
      ret[y - j][i] = ret[y - i][y - j]
      ret[y - i][y - j] = ret[j][y - i]
      ret[j][y - i] = k
    }
  }
  return ret
}

const rotate = (matrix, k = 1) => {
  if (!Array.isArray(matrix)) throw new Error('input is not an array')
  if (matrix.find(i => !Array.isArray(i) || i.length !== matrix.length)) throw new Error('input is not an n*n matrix')
  if (!Number.isInteger(k) || k < 0) throw new Error('loop is not a positive integer')
  const loop = k % 4
  if (loop === 0) return matrix
  let ret = matrix
  for (let i = 0; i < loop; i++) {
    ret = rotateOnce(ret)
  }
  return ret
}

module.exports = {
  rotate
}
