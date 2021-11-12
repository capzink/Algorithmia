console.clear()

var decompressRLElist = function(nums) {
    let arr=[]
    let k=[]
    for(let i = 0 ;i <nums.length; i+=2){
       arr[i]=(nums.slice(i,i+2))
       if(arr.indexOf(arr[i]%2===1)){
           k.push(arr[i])
       }
       
    }
    let resarr=[]
    
    for(let i in k){
        let count=0
        for(let j in k){
            while(count<k[i][0]){
                resarr.push(k[i][1])
                count++
            }
          


        }
    }
  
    return resarr



    
};
let sult=decompressRLElist([1,2,3,4])
console.log(sult)