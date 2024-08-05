
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let mas;
  if (arguments.length === 0) {
    return [];
  } else if (matrix.length === 0) {
    return [];
  }
    for (let i = 0; i < matrix.length; i++) {
    if (i % 2 != 0) {
      matrix[i].sort((a,b) => b - a)
    }
    mas = [].concat(...matrix)
  }

  return mas
}
