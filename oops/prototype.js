//prototypal inheritance(by default beack in property)
let name="sakshi"
console.log(name.length);//6

let Name="sakshi    "
console.log(Name.length);//10 THIS IS NOT TRUE LENGHT


//now we want to create new peoperty for each string as true length

// consider following example
 let MyHeros=["hulk","thor"]  //Array

 let heroPower={         //object
    "thor":"hammer",
    "hulk":"body",
    getthorpower:function () {
       console.log(`thor power is ${this.thor}`); 
    }
 }
//factory function (bydefault function)

Object.prototype.sakshi=function () { //this will be used by every one
    console.log("sakshi is present in all object");
    
}

 MyHeros.sakshi()//sakshi is present in all object
 heroPower.sakshi()//sakshi is present in all object


//  now  we want to give poer to only array

Array.prototype.heysakshi=function(){
    console.log("hey sakshi");
}
MyHeros.heysakshi()//hey sakshi
// heroPower.heysakshi()//here is not accesible due to herarchy of object



//========================================================inheritance===========================
const teacher = { makevideo: true }

const techSupport = {
    makeAvailable: false,
    __proto__ :teacher//this is oldre format to add prototype
}

const taSupport = {
    makeAssignment: "js Assignment",
    fullTime: true
}
teacher.__proto__=taSupport

console.log(techSupport.makevideo);//true
console.log(teacher.fullTime);//true
console.log(taSupport.makevideo);//undefined

//modern syntax
Object.setPrototypeOf(teacher,taSupport)//teacher acce property of tasupport
console.log(taSupport.makevideo);

let anotheruser="kolekar"
let anotherUser="   s.kolekar    "


String.prototype.trueLength=function(){
    return this.trim().length
}
console.log(anotheruser.trueLength());//7
console.log(anotherUser.trueLength());//9
console.log("jay".trueLength());//3