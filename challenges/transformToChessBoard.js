// write a function for row operation
function swapRows(arr, firstIndex=1, secondIndex=2){
    let arrayCopy = [...arr] ;
    let firstElement = arr[firstIndex] ;
    let secondElement = arr[secondIndex] ;
    arrayCopy[firstIndex] = secondElement ;
    arrayCopy[secondIndex] = firstElement  ;
    return arrayCopy ;
}
let myArray = [[1,0,1,0],[1,0,1,0], [0,1,0,1], [0,1,0,1]]





function confirmNbyNArray(arr){
    let colLength = myArray[0].length ;
    let rowLenth = myArray.length ;
    return (colLength === rowLenth)
}

function swapColunm(arr, col1=0, col2=1){
    let arrayCopy = [...arr] ;
    let firstCol = [] ;
    let secondCol = [] ;
    arr.forEach(row => {
        firstCol.push(row[col1])
        secondCol.push(row[col2])
    })
    arrayCopy = arr.map((element, index)=>{
        let newElement = [...element];
        newElement[col1] = secondCol[index];
        newElement[col2] = firstCol[index] ;
        return newElement
    })
    return arrayCopy ;
}

function arrangeArrayByCol(arr, rowNumber){
    let newArray = [...arr]
    let arrayCopy = newArray[rowNumber] ;
    for(let i = 0 ; i < arrayCopy.length -1 ; i++){
      let pointer = i + 1
      while(arrayCopy[i] === arrayCopy[pointer] && pointer + 1 < arrayCopy.length ){
        newArray = swapColunm(newArray, pointer, pointer + 1 )
        pointer += 1 ;
      }
    }
  return newArray
}

function checkArrayByCol(arr, rowNumber){
    let newArray = [...arr]
    let arrayCopy = newArray[rowNumber] ;
    let testPass = true ;
    for(let i = 0 ; i < arrayCopy.length -1 ; i++){
      let pointer = i + 1
      if(arrayCopy[i] === arrayCopy[pointer]  ){
        testPass = false;
      }
    }
  return testPass ;
}

function arrayElementCounter(arr, element){
  let elementCount = 0 ;
  let midPoint = arr.length / 2 ;
  for(let i = 0 ; i < midPoint ; i++){
    element === arr[i] ? elementCount++ : ''
    element === arr[i + midPoint] ? elementCount++ : ''
  }
  return elementCount
}

function arrangeArrayByRow(arr){
  let arrCopy = [...arr] ;
  console.log(arrCopy)
  let arrLength = arr.length
  for(let i = 0; i < arrLength - 1 ; i++){
    let pointer = i + 1;
    while(arrCopy[i][0] === arrCopy[pointer][0] && pointer < arrLength-1 ){
        arrCopy = swapRows(arrCopy, pointer, pointer + 1 )
        pointer += 1 ;
      }
  }
  return arrCopy ;
}

function colExtractor(arr, colIndex){
  let colElement = [] ;
  arr.forEach(element=>{
    colElement.push(element[colIndex])
  })
  return colElement
}


let myArray = [[0,1,1,0],[0,1,1,0], [1,0,0,1], [1,0,0,1]]
console.log(myArray)
//Check to confirm that an invidual element in the inner array has an even count.
console.log('numbers of zeros : ',arrayElementCounter(myArray[0], 1))
//Arrange inner array by col to form a chess board using the first row as reference 
let newArray = arrangeArrayByCol(myArray, 0)
console.log('After oerderring col with first roow', newArray)
//Check arrays by col to confirm chess board feature if failed, means it is imposible to achieve the objective
checkOtherElementByCol( newArray, 1)
//Arrange array by row 
console.log(arrangeArrayByRow(myArray))
//check array by row element to 
