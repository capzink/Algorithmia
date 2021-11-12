console.clear()

var countMatches = function(items, ruleKey, ruleValue) {
    
    let arr=[]
    for(let i in items){
        let subItems = items[i]
    
            if(ruleKey==="color" && ruleValue===subItems[1]){
                arr.push(items[i])
            }
            else if(ruleKey==="type" && ruleValue===subItems[0]){
                arr.push(items[i])
            }
            else if(ruleKey==="name" && ruleValue===subItems[2]){
                arr.push(items[i])
            }
    }
    return arr.length
    
};

let output = countMatches ([["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]],"color", "silver")
console.log(output);