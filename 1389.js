console.clear()
var createTargetArray = function(nums, index) {
    let target=[]
    for (let i in nums){
     
    
      target.splice(index[i],0,nums[i])  
    }
    return target
};

Input: nums = [0,1,2,3,4], index = [0,1,2,2,1]
createTargetArray(nums,index)