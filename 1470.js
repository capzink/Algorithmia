console.clear()

var shuffle = (nums, n) =>{
    let subNums=[]
    let result=[]
    subNums=nums.slice(n)
    let arrnums=nums.slice(0,n)
    //console.log(nums)
    //console.log(subNums)

    for(let i=0; i<nums.length-n; i++){
        result.push(arrnums[i])
        result.push(subNums[i])
    }
    
       
       
       

        
        return result
    }
      


let result = shuffle([1,2,3,4,4,3,2,1],4)
console.log(result)
    
