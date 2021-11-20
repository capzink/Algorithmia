console.clear()


const sortSentence = (s) =>{
   s=s.split(' ')
   let orderedString=[]
    for(let i in s){
        let index = s[i][s[i].length-1]
        orderedString[index]=s[i].slice(0,s[i].length-1)
       
    }
   return orderedString.join(' ').trim()
    


}
console.log(sortSentence('is2 sentence4 This1 a3'))