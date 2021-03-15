
// You should implement your task here.

module.exports = function towelSort (matrix) {
  res = []
  if(matrix && matrix.length > 0){
    for (let i = 0; i < matrix.length; i++) {
      if(i % 2 === 0){
        for (let y = 0; y < matrix[i].length; y++) {
          res.push(matrix[i][y]) 
       }
      }else{
        for (let y = matrix[i].length - 1; y >= 0 ; y--) {
          res.push(matrix[i][y]) 
       }
      }
    }
     return res
  }else{
    return []
  }


}
