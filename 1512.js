console.clear()

var numIdenticalPairs = function (nums) {
  let counter = 0;
  for (let i = 0; i < nums.length ; i++) {
    for (let j = i+1; j < nums.length; j++) {
      if (nums[i] === nums[j]) counter++;
      console.log(nums[i],nums[j])
    
    }
  }
  return counter;
};
let output = numIdenticalPairs([1,2,3,1,1,3])
console.log(output)