//prototypal behaviour of js


//js does not giveup ,it search till the parent node
//object is the root of all
//
function multiply(num) {
    return num*num
    
}
multiply.power=4 //function is function and also object ..at the end object is null so js search for value till finding object and null further at the end
/* console.log(multiply(8));//64
console.log(multiply.power);//4
console.log(multiply.prototype);//{} */

function createUsername(userName,score) {
    this.userName=userName
    this.score=score;  
}


//now i want to add new method to above one
createUsername.prototype.increment=function(){
    // score++//this cause problem for multiple uses it get confused which score should increment
   return this.score++//this will increment the score of current executing one
}

const abc= createUsername("abc",34)//without new gives error because it needs to define that which object to create.

// abc.increment()//Cannot read properties of undefined (reading 'increment') THIS ERROR DUE TO WE CANT ADD IT TO PROTOTYPE

// console.log(abc.increment());//34 after adding new to it
console.log(abc.prototype);//{ increment: [Function (anonymous)] }

/*  Here is the  what happenes behind  the scene of new keyword is used:

a new object is created: 
the new keyword initiated the creation of a new javascript object.

a prototype is linked:
the newly created object gets linked to the prototype property
of the constructor function,this means that it has access to properties and
 methods defined on the constructors prototype

the constructor is called:
 the constructo function is called with the specified argument 
and this is bound to the newly created object.of no
explicite return value  is return from the constructor,the js assume to be this
the newly crated  object to be the intended return value

the new object is returned:
afyer the constructor funtion has been called,
if it doesn't return non premitive value(object,array,function etc)the newly created object is returned*/
