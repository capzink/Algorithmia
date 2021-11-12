console.clear()

var decode = function(encoded, first) {
    let arr=[];
    let=count=first
    for(let i =0; i<encoded.length; i++){
        
        arr.push(Math.abs(encoded[i]^count))
        count=arr[i]
        
        
       
    }
    
    arr.unshift(first)
    return arr
    
};
let result =decode([1,2,3],1)
console.log(result)