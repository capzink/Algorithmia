console.clear()
var maximumWealth = function(accounts) {
    let resultSum=[]
 for(let i = 0 ; i<accounts.length; i++){
     let subAccount=accounts[i]
     let sum=0
     for(let j = 0 ; j<subAccount.length; j++){
         sum+=subAccount[j]
         
         

     }
     resultSum.push(sum)
    

 }
 resultSum.sort((a, b) => a-b);
    let LargestAccount=0
    for(var k =0 ; k<resultSum.length;k++){
        LargestAccount=resultSum[k]

    }
    return LargestAccount

};
accounts = [[2,8,7],[7,1,3],[1,9,5]]
let result= maximumWealth(accounts)
console.log(result)