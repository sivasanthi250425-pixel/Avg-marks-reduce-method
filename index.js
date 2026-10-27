const marks=[90, 80, 70, 60, 50, 40, 30, 20, 10];
const sum=marks.reduce(function(total,currentvalue){
   return total+currentvalue;
  
})
 console.log("Average marks of students:",sum/marks.length);
