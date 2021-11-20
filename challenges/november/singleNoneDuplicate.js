/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let even_index = 0;
    let single_number = nums[even_index]

    while (even_index < nums.length - 1){
        if( single_number != nums[even_index + 1]){
            break
        }
        even_index += 2;
        single_number = nums[even_index]
    }
    
    return single_number;
};

console.log(singleNonDuplicate([1,1,2,3,3,4,4,8,8]))