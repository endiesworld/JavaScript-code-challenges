/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let memory = {}
    let copy = []
    nums.forEach((element, index) => {
        if(memory[element] === undefined){
            memory[element] = index
        }
        else {
            copy.push(element)
        }
            
        })
        return copy.sort(comparator) ;

        function comparator(a , b) {
            return a -b
        }
};




/**
var findDuplicates = function(nums) {
    let copy = []
        nums.forEach((element, index) => {
            if (index !== nums.lastIndexOf(element) && copy.indexOf(element) < 0){

                copy.push(element)
            };
        })
        return copy.sort(comparator) ;

        function comparator(a , b) {
            return a -b
        }
};
*/