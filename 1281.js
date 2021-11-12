console.clear()


var subtractProductAndSum = function(n) {
    let str=n.toString()
    let sum=0
    let mult=1
    str=str.split('')
    for(let i in str){
        sum=sum+Number(str[i])
        mult=mult*Number(str[i])
       

    }

    return mult-sum


    
}
let result=subtractProductAndSum(4421)
console.log(result)