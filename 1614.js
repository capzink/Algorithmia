console.clear()

const maxDepth = (s) =>{
    let counter =0;
    let counterArray=[];
    for(let i in s){
        
       if(s[i]==='('){
           counter ++
           counterArray.push(counter)
       }
       if(s[i]===')'){
           counter --
       }  
    }
    counterArray.sort((a,b)=>a-b)
    if(counterArray.length!==0)return counterArray.pop()
    else{return 0}
}
console.log(maxDepth('(1+(2*3)+((8)/4))+1'));
console.log(maxDepth('(1)+((2))+(((3)))'));
console.log(maxDepth('1+(2*3)/(2-1)'));
console.log(maxDepth('1+2*3/2-1'));


