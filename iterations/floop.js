//for loop

// for (let index = 0; index < 10; index++) {
//     const element = index;
//     if(element==5)//conditional inside the loop
//     {
//        // console.log("5 is best number");
//     }
//    // console.log(element);
// }



//nested loop

// for (let i = 0; i <= 10; i++) {
// //    console.log(`outer loop value${i}`);
//    console.log(`multiplication table of ${i}`);
//    for (let j = 0; j <=10; j++) {
//   //console.log(`inner loop value ${j}, outer loop value ${i}`);
//   console.log(` ${i}*${j}=${i*j}`);
//    }
    
// }

// //loop on array
// const myArray=["hulk","thor","spiderman"]

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
// }

//break and continue keywords 
for (let i = 0; i <=20; i++) {
    if(i==5)
    {
        console.log("detected 5");
        //break//it goes out of loop after the break(only prints till found 5)
        continue// it  doesnt execute the further code only in particular condition(only to skip the condition)
    }
   console.log(`value of  i ${i}`);
    
}