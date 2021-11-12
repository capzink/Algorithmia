console.clear()
var smallerNumbersThanCurrent = function(nums) {
    let posibilities=[]
    
    for (let i = 0; i < nums.length; i++) {
        let count=0
        for (let j = 0; j < nums.length; j++) {
            let t =nums[i]>nums[j]
            if(t){
                count++
                console.log(nums[i], nums[j])
                
                
            }
            
        }
        posibilities.push(count)
        
    }
    return posibilities
    
};
let result = smallerNumbersThanCurrent([8,1,2,2,3])
console.log(result)