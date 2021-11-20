console.clear()

const minMovesToSeat =(seats, students)=>{
    let count= 0;
    
    
    seats.sort((a,b)=>a-b)
    students.sort((a,b)=>a-b)
    

    for(let i =0; i<students.length;i++){
        console.log(students[i], seats[i]);
        count += Math.abs(students[i]-seats[i])
        Math.abs(count)
    }

  return count
}

console.log(minMovesToSeat([3,20,17,2,12,15,17,4,15,20],
    [10,13,14,15,5,2,3,14,3,18]))
console.log(' ');
console.log(minMovesToSeat([4,1,5,9],[1,3,2,6]))
