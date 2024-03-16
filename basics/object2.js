//const tinder=new Object() //same as it is only singleton object
// console.log(tinder);  //{}

const tinder = {}

tinder.id = 485
tinder.email = "abc@13456gmail.com"
tinder.isloggedin = false

// console.log(tinder);

const regular = {
    email: "abc@123",
    fullname: { userfullname: { firstname: "sakshi", lastname: "kolekar" } }
}

//console.log(regular.fullname.userfullname.firstname); //sakshi

const obj1 = { a: 1, b: 2 }
const obj2 = { c: 1, d: 2 }
//const obj3={obj1,obj2}                       //{ obj1: { a: 1, b: 2 }, obj2: { c: 1, d: 2 } }
//const obj3 = Object.assign({}, obj1, obj2)   //{ a: 1, b: 2, c: 1, d: 2 }
//console.log(obj3==obj1);                    //false
                                            //when we perform this opertaion it stores the value of result
                                            // in new object and also same value in starting value
const obj3={...obj1,...obj2}                   //{ a: 1, b: 2, c: 1, d: 2 }                 (spread operator)         
console.log(obj3);


//let consider array of object
const arrobj=[
    {
    userid:3849,name:"abc"
},
{},
{}]

// console.log(arrobj[0].name); //abc

// console.log(Object.keys(tinder)); //returns array of keys [ 'id', 'email', 'isloggedin' ]
// console.log(Object.values(tinder));//returns array of values [ 485, 'abc@13456gmail.com', false ]
console.log("entries",Object.entries(tinder))
/*[
    [ 'id', 485 ],
    [ 'email', 'abc@13456gmail.com' ],
    [ 'isloggedin', false ]
  ]*/

//   console.log(tinder.hasOwnProperty(("islogged"))); //false it checks property is exists in given array or not

//----------------------------------------------------------------distructuring of object--------------

const course={courcename:"js hindi",
fees:"5k",
instructor:"abc sir"
}

//const {courcename}=course 
//console.log(courcename); //js course

const {instructor:i}=course//i referse to another name  in js
console.log(i); //abc sir