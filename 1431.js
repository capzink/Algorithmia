console.clear()

var kidsWithCandies = function(candies, extraCandies) {
    
    var max = Math.max(...candies)
    let candiesWithExtra=candies.map(e =>{
        if((e+extraCandies)>=max){
            return true
        }
        else return false

    })
    

    return candiesWithExtra
};

let result=kidsWithCandies([2,3,5,1,3], 3)
console.log(result)

