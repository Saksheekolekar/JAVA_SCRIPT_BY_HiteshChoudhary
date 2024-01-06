function saymyname() {
    console.log("s");
    console.log("a");
    console.log("k"); //function definaton
    console.log("s");
    console.log("h");
    console.log("i");
}
saymyname //reference //
saymyname() //execution // sakshi

// function addtwono(num1,num2 /*parameters*/){ 
//     console.log(num1+num2);
// }
// addtwono(3,null/*argument*/) //3
// const result=addtwono(3,2) //5
// console.log("Result:",result); //undefined because function doesn't returns any thing


//to avoid above condition we use another method
function addtwono(num1,num2){
    //  let result=num1+num2
    // return result;
    return num1+num2;
    console.log("sakshi"); //it doesnt executed after return code is not considered

}
 
const result=addtwono(3,2) 
 console.log("Result:",result);//Result: 5

//  function loginusername(username){
//     return `${username} is just logged in`
// }
// console.log(loginusername("sakshi"));//sakshi is just logged in

function loginusername(username='ram'){ //not it takes default value as ram even we cant passed to function
    if(username==undefined){console.log("please enter user name");return}
    return `${username} is just logged in` //mst print as "ram is just logged in" after we dont passed value
}
console.log(loginusername("sakshi"));

function calcultecartprice(num1){}