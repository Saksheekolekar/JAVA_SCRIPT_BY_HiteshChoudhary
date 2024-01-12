// const userEmail="abc@123"
// if (userEmail) {
//     console.log("got the useremail");//got the useremail  
// }else{
//     console.log("dont have user email!!");
// }



// const userEmail=""
// if (userEmail) {
//     console.log("got the useremail");
// }else{
//     console.log("dont have user email!!");//dont have user email!!
// }


const userEmail=[]
if (userEmail) {
    console.log("got the useremail");//got the useremail
}else{
    console.log("dont have user email!!");
}




//falsy value
// false,0,-0,BigInt 0n,NaN,null,undefined


//truthy values
// true,"0",'false',[],{},function(){}

if(userEmail.length===0)
{
    console.log("Array is Empty");
}

const emptyobj={}

if(Object.keys(emptyobj).length===0)
{
    console.log("object is Empty");//printed        
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//Nullish Coaliscing Operator(??):null undefined--------------------------------------------------
let val;
val1=7 ?? 8
console.log(val1);//7

let val2;
val2=null??7
console.log(val2);//7

let val3;
val3=null??7
console.log(val3);//7

// in this it takes value other than null and undefined 
// while calling daabase there will be conditions o getting two values at time where one is null or undefined so take take other value
//----------------------------------------------------------------------------------------------------------------------------------
//Terniary Operator
//  condition ? true : false

const coffeprice=900
coffeprice<899? console.log("price is less than 899"): console.log("price is greater than 899");//price is greater than 899