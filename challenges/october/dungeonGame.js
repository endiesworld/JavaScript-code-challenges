
var calculateMinimumHP = function(dungeon) {
  // let knight = {
  //   startLife : 1,
  //   currentLife: 1,
  //   newLife: 0
  // }
  let knights = [] ;
  let [m,n] = getMandNofArray(dungeon)
  let firstRow = dungeon[0] ;
  let lastRow = dungeon[dungeon.length-1]

  //let knights = getKnight(dungeon, firstRow , lastRow , 0)
  for(let i = 0 ; i<n ; i++){
    knights.push(getKnight(dungeon, firstRow , lastRow , i))
  }
  let knightsStartLifes = knights.map(knight => knight.startLife)
  console.log(knightsStartLifes.sort(compareNumbers))
  return knightsStartLifes[0];
  
  
  function getMandNofArray(arr){
    let m = arr.length ;
    let n = arr[0].length ;
    return [m, n]
  }
  
  function increaseStartLife(knight, element){
   knight.startLife = knight.startLife + 1 + (element * -1) - knight.currentLife
  }
  
  function moveKnight(row, knight){
    let newLife = 0 ;
    let currentLife = 0 ;
    let startLife = 0
    row.forEach((element, index)=>{
      newLife = knight.currentLife + element 
      startLife = knight.startLife 
      if(newLife < 1){
      increaseStartLife(knight, element) ;
  
      }
      else{
        knight.currentLife += element ; 
      }
      newLife = 0 
    })
  }
  
  function colExtractor(arr, colIndex, startRow = 0) {
    let colElement = [];
    for(let i = startRow ; i<arr.length ; i++){
      colElement.push(arr[i][colIndex])
    }
    return colElement
  }
  
  function getKnight(dongeon, firstDongeon, lastDongeon, index){
    let knight = {
    startLife : 1,
    currentLife: 1,
    newLife: 0
  } ;
    let firstRowColsStop = firstDongeon.length - index
    let firstDongeonCells = firstDongeon.slice(0, firstRowColsStop) ;
    let colCells = colExtractor(dongeon, firstRowColsStop -1, 1)
    let lastDongeonCells = lastDongeon.slice(firstRowColsStop )
    moveKnight(firstDongeonCells ,knight)
    moveKnight(colCells ,knight)
    moveKnight(lastDongeonCells ,knight)
    return knight
  }
  //Eneble sort in ascending order
  function compareNumbers(a, b) {
  return a - b;
}
};

console.log(calculateMinimumHP([[-2,-3,3],[-5,-10,1],[10,30,-5]]))
console.log(calculateMinimumHP([[0]]))
console.log(calculateMinimumHP([[-3,5]]))