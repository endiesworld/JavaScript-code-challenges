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

function checkElementByCol(arr, rowNumber){
    let newArray = [...arr]
    let arrayCopy = newArray[rowNumber] ;
    let passTest = true
    for(let i = 0 ; i < arrayCopy.length -1 ; i++){
      let pointer = i + 1
      while(arrayCopy[i] === arrayCopy[pointer] && pointer + 1 < arrayCopy.length ){
        newArray = colunmOperation(newArray, pointer, pointer + 1 )
        pointer += 1 ;
      }
    }
  return newArray
}

function checkOtherElementByCol(arr, rowNumber){
    let newArray = [...arr]
    let arrayCopy = newArray[rowNumber] ;
    let pointer = 0 + 1
    let testPass = true ;
    for(let i = 0 ; i < arrayCopy.length -1 ; i++){
       pointer = i + 1
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

let myArray = [[0,1,1,0],[0,1,1,0], [1,0,0,1], [1,0,0,1]]
console.log(myArray)
console.log('numbers of zeros : ',arrayElementCounter(myArray[0], 1))
let newArray = checkElementByCol(myArray, 0)
console.log('After oerderring col with first roow', newArray)
checkOtherElementByCol( newArray, 1)