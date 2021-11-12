console.clear()

var runningSum = function(nums) {
    let sum=nums[0]
    let runningSum = []
    for(let i= 1; i<nums.length; i++){
        
        runningSum.push(sum)
        sum=sum+nums[i]
        
        
    }
    runningSum.push(sum)

    return runningSum
};
let result =runningSum([1,1,1,1,1])
console.log(result)