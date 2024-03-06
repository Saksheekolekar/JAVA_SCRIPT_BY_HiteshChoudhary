// ==================================getter and setter in class==========================
class user{
    constructor(username,email,password)
    {
        this.username=username
        this.email=email
        this.password=password
    }

get username()//it should have the name same as property
{//it acts like private propert
    return this._username.toUpperCase()//we have to change the name because it cause error as confussin between above and below proprty
}
set username(val){
    this._username=val//nuat have to name the same this.proprty name

}
}
const chai=new user("ram","abc@123","123")
console.log(chai.username);//RAM

// /=================================================propties getter and setter==================
function olddemo(username,email,password)
    {
        this._username=username
        this._email=email
        this._password=password

        Object.defineProperty(this,'email',{  //this sets email name property to object which returns the cappital version of _email
            get:function(){ return this._email.toUpperCase()},
            set:function(val){this._email=val},
        })
    }
    const nchai=new olddemo("shaam","sham@123","123")
// console.log(nchai.email);//SHAM@123
//=============================================get set using object=====================

const obj={
    email:"abc@123",
    _name:"Sakshi",//its importamt to write underscore before property
    get name(){
        return  this._name.toUpperCase();
    }, 
    set name(val){
        this._name=val
    }
}
// console.log(obj.name);