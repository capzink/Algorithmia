console.clear()


const mostWordsFound = (array)=>{
    let max = 0
    let count=0
for(let i = 0 ; i<array.length ; i++){
    count = array[i].split(' ').length
    if(count>max){
        max= count
    }
}
    return max

}

console.log(
  mostWordsFound([
    "alice and bob love leetcode",
    "i think so too",
    "this is great thanks very much",
  ])
);
