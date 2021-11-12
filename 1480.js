


console.clear()

var finalValueAfterOperations = function(operations) {

    let x= 0
    for(let i= 0; i<operations.length;i++){
        if(operations[i]==="++X" || operations[i]==="X++"){
            x++

        }
        if(operations[i]==="--X" || operations[i]==="X--"){
            x--

        }
    }
    return x
};
let output = finalValueAfterOperations(["X++","++X","--X","X--"]) 
console.log(output)