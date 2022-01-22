console.clear()

const sumOddLengthSubarrays = ( array )=>{
    let sum = 0 
    let range = 0
    
    while(range < array.length){
        for(let i = 0 ; i+range<=array.length ; i ++){
            for(let x = 0 ; x <range + 1; x ++){
                sum+=array[x]
            }
            
        }
        
        range +=2
    }
return sum
    }
console.log(sumOddLengthSubarrays([1,4,2,5,3]));