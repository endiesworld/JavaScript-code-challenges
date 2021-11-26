// JavaScript does not allow negative indexing.

var searchInsert = function(nums, target) {
    let searchForIndex = function(){
        let nums_len = nums.length;
        if (nums[0] - target >= 1)
            return 0 
        if (target - nums[nums.length - 1]  >= 1)
            return  nums.length  
    }
    target_position = undefined;
    index = undefined;  
    (nums.indexOf(target) >= 1) ? target_position = nums.indexOf(target) : index = searchForIndex()
    return target_position ? target_position : index
};

console.log(searchInsert([1,3,5,6], 7))