//constructor throught singlton
// const a=new Object()

//non singleton
//object literols
 const mysym=Symbol("key1") //symbol

const jsUser={
    name:"Sakshi",
    [mysym]:"mykey1", //to define it must enclosed withn square bracket  [Symbol(key1)]: 'mykey1'
    age:67,
    location:"shrirampur",
    "em ail":"abc@123gmail.com",
    isloggedIn:true,
    lastloggindays:["mon","thus"]
}

//we can print object element by following methods
//console.log(jsUser.em ail); //here not requered
// console.log(jsUser.["em ail"]); //must need to speify quote i.e. "email"  
// console.log(jsUser.[mysym]);//symbols  and key with spacing name must need this type to access

//change value (overide)
jsUser.age=18

//freeze abject
//Object.freeze(jsUser)

jsUser.age= 21 //this will not affect due to freez
// console.log(jsUser);

jsUser.greeting=function(){
    console.log("hello world!!"); //adding the greeting as key and function as value in jsuser
}

// console.log(jsUser.greeting);//[Function (anonymous)]     fun not executed only its reference
// console.log(jsUser.greeting());//hello world!! undefined
  

//now we want to add new fuction using its name value

jsUser.greeting2=function(){
    console.log(`hello js user,name is ${this.name}`); //this referes to current onject
}
console.log(jsUser.greeting2()); //hello js user,name is Sakshi
                                 //undefined