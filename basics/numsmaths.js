const score=400
console.log(score);
const balance=new Number(100)
// console.log(balance);
// console.log(balance.toFixed(4)); //shows the  4 decimal  values

const othernum=34676781.09
// console.log(othernum.toPrecision(5)); //3.4677e+7

const hundreads=100000000
//console.log(hundreads.toLocaleString('en-In'));

//-------------------------------------------maths--------------------------------------------------------------------------------------

   console.log(Math);//BY DEFAULTJS LIBRARY
   console.log(Math.abs(-3));//3 only negative values turns into positive
   console.log(Math.floor(4.9));//4
   console.log(Math.round(4.5));//5
   console.log(Math.ceil(3.2));//4

   console.log(Math.min(20,56,3,8)); //3
   console.log(Math.max(20,56,3,8)); //56

    console.log(Math.random()); //IT GIVES  ALWAYS NUMBER BETWEEN 0-1


    //LETS CONSIDER WE HAVE TO PRINT RANDOM NUMBER BETWEEN 0-10
    console.log((Math.random()*10)+1);    //(VAL*10)+1

    //LET CONSIDER FOLLOWING FORMULA TO GET RANDOM NUMBER BETWEEN FOLLOWING LIMITS
    //VAL*(MAX-MIN+1)+MIN
    const MAX=30
    const min=20
    console.log(Math.round((Math.random())*(MAX-min+1)+min)); //value between 20-30