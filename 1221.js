console.clear()

var balancedStringSplit = function(s) {
    s=s.split('')
    let count=0;
    let pair=0
    for(let i in s){
        if(s[i]==="R"){
            count++

        }
        else if(s[i]==="L"){
            count--
        }

        if(count===0){
            pair++
        }

    }
    console.log(pair);
};

let output= balancedStringSplit("RLRRLLRLRL")