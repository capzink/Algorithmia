console.clear()

const ParkingSystem = function(big, medium, small){
    this.arr=[big,medium,small]
}

ParkingSystem.prototype.checkSpace = function (carType) {
  this.arr[carType - 1]--;
  return !(this.arr[carType - 1] < 0);
};

// //ParkingSystem.prototype.addCar = function(carType) {
//      switch(carType){
//         case 1:
//             if(this.big){
//                 this.big -= 1; 
//                 return true;
//             }
//             else{
//                 return false;
//             }
//             break;
//         case 2:
//             if(this.medium){
//                 this.medium -= 1;
//                 return true;}
//             else{
//                 return false;
//             }
//             break;
//         case 3:
//             if(this.small){
//                 this.small -= 1;
//                 return true;
//             }
//             else{
//                 return false;
//             }
//             break;
//            }
// };
