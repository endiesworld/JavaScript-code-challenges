//loop through the array using for loop, start from first index, which already even

var sortArrayByParityII = function(nums) {
    let newArray = [...nums] ;
    for(let i = 0 ; i < nums.length ; i++){
        if(i === 0 ){
            (newArray[i] % 2 ) ? '': evenSwap(newArray, i) 
        }
        else if( i % 2 !== 0 ){
            (newArray[i] % 2 ) ? '': oddSwap(newArray, i) 
        }
    }
};

function evenSwap(arr, presentIndex){
    for (let i = presentIndex + 1 ; i <arr.length ; i++){
        if(arr[i] % 2 === 0){
            let element1 = arr[presentIndex] ;
            arr[presentIndex] = arr[i] ;
            arr[i] = element1
            break ;
        }
    }
}

function oddSwap(arr, presentIndex){
    for (let i = presentIndex + 1 ; i <arr.length ; i++){
        if(arr[i] % 2 !== 0){
            let element1 = arr[presentIndex] ;
            arr[presentIndex] = arr[i] ;
            arr[i] = element1
            break ;
        }
    }
}