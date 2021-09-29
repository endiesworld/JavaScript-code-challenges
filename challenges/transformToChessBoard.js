// write a function for row operation
function rowOperation(arr, firstIndex=1, secondIndex=2){
    let arrayCopy = [...arr] ;
    let firstElement = arr[firstIndex] ;
    let secondElement = arr[secondIndex] ;
    arrayCopy[firstIndex] = secondElement ;
    arrayCopy[secondIndex] = firstElement  ;
    return arrayCopy ;
}
let myArray = [[1,0,1,0],[1,0,1,0], [0,1,0,1], [0,1,0,1]]
console.log(rowOperation(myArray))




function confirmNbyNArray(arr){
    let colLength = myArray[0].length ;
    let rowLenth = myArray.length ;
    return (colLength === rowLenth)
}

function colunmOperation(arr, col1=0, col2=1){
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
        newArray = colunmOperation(newArray, pointer, pointer + 1 )
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

function arrangeArrayByRow(arr, ref){
  let arrCopy = [...arr] ;
  let arrLength = arr.length
  for(let i = 0; i < arrLength - 1 ; i++){
    let pointer = i + 1;
    while(arrCopy[i] === arrCopy[pointer] && pointer < arrLength ){
        arrCopy = rowOperation(arrCopy, pointer, pointer + 1 )
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
//Arrange array by row using the first element of each inner array as reference