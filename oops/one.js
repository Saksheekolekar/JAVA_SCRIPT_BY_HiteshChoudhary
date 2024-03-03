const user={
    usrid:"abc",
    password:"123",
    Email:"abc123@gmail.com",
    greet:function(){
        console.log("wellcome its "+this.usrid);//this referece to the current context
    }
}

// console.log(user.usrid);//abc
// console.log(user.greet());//welcome undefined .not returning anything thats why.
// console.log(this);//{}

function User(userName,userCount,isLoggedIn) {
   this.userName=userName
   this.userCount=userCount
    this.isLoggedIn=isLoggedIn   
    this.greet=function(){
    console.log("welcome");
    }
    return this;//implicitely returns 
}
/* const userOne=User("ram",23,true)
const userTwo=User("sham",13,false) *///..without new it will rewrite the values in existing environment gkobal variable
const userOne=new User("ram",23,true)//User { userName: 'ram', userCount: 23, isLoggedIn: true }
// const userTwo=new User("sham",13,false)//User { userName: 'sham', userCount: 13, isLoggedIn: false }
// console.log(userOne);
// console.log(userTwo);
//new creates the new execution context for the 
/* new empty object created
constructor function is called
this keyword all the values are added in it 
at the end this will given to us */
console.log(User().greet());
console.log(userOne.greet());//welcome
console.log(this);//{}
console.log(userOne.constructor());//this returns whole object. so constructor points to this