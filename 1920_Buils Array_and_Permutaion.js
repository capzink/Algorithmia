console.clear()
var buildArray = function(nums) {
    let ans=[]
    for(let i=0; i<nums.length;i++){
        ans.push(nums[nums[i]])
        
    }
    return ans


    
};
let nums = buildArray([0,2,1,5,3,4])
console.log(nums)