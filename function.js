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
function addtwono(num1, num2) {
    //  let result=num1+num2
    // return result;
    return num1 + num2;
    console.log("sakshi"); //it doesnt executed after return code is not considered

}

const result = addtwono(3, 2)
console.log("Result:", result);//Result: 5

//  function loginusername(username){
//     return `${username} is just logged in`
// }
// console.log(loginusername("sakshi"));//sakshi is just logged in

function loginusername(username = 'ram') { //not it takes default value as ram even we cant passed to function
    if (username == undefined) { console.log("please enter user name"); return }
    return `${username} is just logged in` //mst print as "ram is just logged in" after we dont passed value
}
console.log(loginusername("sakshi"));//sakshi is just logged in

// function calcultecartprice(...num1) { //here ... act as rest operator (khudravikreta)  it takes all the values and put it into single array
//     return num1
// }
// console.log(calcultecartprice(30, 40, 9, 70)); //[ 30, 40, 9, 70 ]

function calcultecartprice(val1, val2, ...num1) { //here ...  30 is stored in val1 ,40 stored in val2 and remains went into ...num1
    return num1
}
console.log(calcultecartprice(30, 40, 9, 70)); //[  9, 70 ]


//lets handle object in function
const myobject = {
    username: "sakshi", age: 30
}

function handleobject(getobject){
    console.log(`username is ${getobject.username} and age is ${getobject.age}`);

}
handleobject(myobject)//username is sakshi and age is 30
handleobject({ username:"ram",age:80})//username is ram and age is 80

//lets handle array in function
const definedarray=[8,3,91,3]

function secondval(getarray){
    return getarray[1]
}
console.log(secondval(definedarray));//3
console.log(secondval([79,50,23,8]));//50
