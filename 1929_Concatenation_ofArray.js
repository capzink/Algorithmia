console.clear()

var getConcatenation = function(nums) {
    var newnums=nums.slice()
    var ans = nums.concat(newnums)

    return ans
    
};
let result = getConcatenation([1,2,1])
console.log(result)