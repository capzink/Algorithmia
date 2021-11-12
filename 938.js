console.clear()

const rangeSumBST = (root, low, high)=>{

let filter =[] //root.filter(e=> e >=low && e<= high);
for(let i in root){
    if(root[i]>=low && root[i]<= high){
        filter.push(root[i])
        
    }
}
let sum=0;
let result = filter.map(e => sum=e+sum)
return result.pop()

}
let output=rangeSumBST([10,5,15,3,7,null,18],7, 15)
console.log(output);