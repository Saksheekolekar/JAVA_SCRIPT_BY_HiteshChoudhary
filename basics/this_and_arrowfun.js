const user = {
    username: "sakshi",
    price: 400,
    welcomeMeassage: function () {
        console.log(`${this.username},welcome to website`);
        console.log(this); //this tells about current context  hence it prints ({ username: 'sakshi',  price: 400,welcomeMeassage: [Function: welcomeMeassage]  } )
    }
}
user.welcomeMeassage() //sakshi,welcome to website
user.username = "bharat" //changed context of the object
user.welcomeMeassage()//bharat,welcome to website
console.log(this);//{} because we are in node environment hence it shows empty window
//but if we run it on browser it displays windowsobject because it is referes to the widow object globaly witin browser


//-----------------------------------------------------------------------------------------------------------
function chai() {
    username="sakshi",
    console.log(this);//it contents the so much data like  global vlues and all...so here it contents data
    console.log(`${this.username}`);//sakshi    
}
chai()

const chai1= function () {
    username="abc",
    console.log(this);//it contents the so much data like  global vlues and all...so here it contents data
    console.log(`${this.username}`);//sakshi    
}
chai1()


//  const addtwo=(num1,num2)=>{
//     return num1+num2
//  }
//  console.log(addtwo(4,6));//10


//implicite return(online code)
//const addtwo=(num1,num2)=>  num1+num2  no need to use return keyword explicitly
const addtwo=(num1,num2)=> ( num1+num2)//()=>() this is the form of implicite return


