console.clear()
var restoreString = function(s, indices) {
    s=s.split('')
    let arr=[]
    
    for(let i in s){
        arr[indices[i]]=s[i]
       
        console.log(arr)
        
    }
    
    return arr.join('')

}
let output = restoreString("codeleet", [4,5,6,7,0,2,1,3])
console.log(output)