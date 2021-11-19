console.clear()

const countKDifference = (nums, k) => {
    let counter =0
  for (let i in nums) {
      for (let j in nums){
          if(Math.abs(nums[i] - nums[j]=== k)) {
              counter ++
          }
          
        }
    }
    return counter
}
console.log(countKDifference([3,2,1,5,4],2))

//[3,2,1,5,4], k = 2