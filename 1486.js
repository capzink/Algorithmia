console.clear()


var xorOperation = function(n, start) {

    let nums=[];
    let i =0;
    while( i < n ){
        nums.push(start +2*i);
        i++;
    }
    let x=0;
   for (let i in nums){
       x = x ^ nums[i];
       
   }

   return x
   
    
};
let output = xorOperation(10, 5);
console.log(output);