var canJump = function(nums){
  let maxJumps =  0;
  let iCanJump = false
  let lastIndex = nums.length - 1 ;
  let maxJump = 0 ;
  
  if(nums.length === 1){
    return true
  }
  
  if(nums[0] === 0){
    return iCanJump
  }
  for(let i = 0 ; i < lastIndex ; i++){
    maxJump = nums[i] + i ;
    if(nums[i] === 0){
      if(maxJumps <= i) {
        break
      } 
    }
    else if(maxJump >= lastIndex){
      iCanJump = true ;
      break
    }
    else if( maxJump > maxJumps){
      maxJumps = maxJump
    }
  }

  return iCanJump ;

}
console.log(canJump([3,2,1,0,4]))
console.log(canJump([2,3,1,1,4]))
console.log(canJump([1,2]))
console.log(canJump([1,0,1,0]))