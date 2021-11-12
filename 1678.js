console.clear()

var interpret = function(command) {
    let goalParser=[]
    command=command.split('')
    for(let i=0; i<command.length; i++){
       
        if(command[i]==="G") {
            goalParser.push('G')
        }
        
        if(command[i]==='(' && command[i+1]===')'){
            goalParser.push('o')
            
        }
        if(command[i]==='(' && command[i+1]==='a'){
            goalParser.push('al')
            
        }
        
    }
    goalParser=goalParser.join('')
     return goalParser
    
};
let result= interpret("(al)G(al)()()G")
console.log(result)
