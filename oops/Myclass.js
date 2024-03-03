// class user{
//     constructor(username,password,email){//by default it compulsory to define
//         this.username=username
//         this.password=password
//         this.email=email
//     }
//     encryptPassword(){//method
//         return `${this.username}`
//     }
//     changeUsername()
//     {
//         return`${this.username.toUpperCase()}`
//     }
// }

// const chai=new user("sakshi","123","abc@!23")//creating object

// console.log(chai.changeUsername());//SAKSHI
// console.log(chai.encryptPassword());//sakshi

//===============================behind the scene same above functionality using function=====================
function user(username,password,email){
    this.username=username
    this.password=password
    this.email=email
} 

user.prototype.encryptPassword=function(){//method
    return `${this.username}`
}

user.prototype.changeUsername=function()
{
    return`${this.username.toUpperCase()}`
}

const chai=new user("sakshi","123","abc@!23")//creating object

console.log(chai.changeUsername());//SAKSHI
console.log(chai.encryptPassword());//sakshi

