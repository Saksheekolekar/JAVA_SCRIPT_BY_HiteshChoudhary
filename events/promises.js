const first=new Promise(function (resolve,reject) {//simple promise with two parameters where there execution  deoaend situation
    setTimeout(()=>{
        console.log("hello");
        resolve()//this calls then function
    },1000)
})
first.then(()=>{
    console.log("World");
})

// 2]

new Promise(function(resolve,reject){//new promise insted of storing it into variable directly chain it using then
    setTimeout(()=>{
        console.log("second promise");
        resolve()
    },1000)
}).then(()=>{//then part executes after calling resolved
    console.log("second was resolved");
})

// 3]


const third=new Promise(function(r /*resolve*/ ,/*reject*/ m){ //this promise calling resolved by passing value and the variable name doesnt matter here
    setTimeout(()=>{
        r({username:"sakshi",surname:"kolekar"})
    },1000)
})

third.then((user)=>{
    console.log(user);
})

// -------------------------------------------------------------------------------------------------------------------------------
// 4]

const username=new Promise(function (resolve,reject)
 {
    let error = false //this will pass  the result into result section as an object.
    if (!error)
     {
        resolve({user:"a",pass:"123"})
     }
    else 
    {
        let errmsg = "error caught"
        reject(errmsg)
    }
})

    username //extracting the single value from the object using chaining
    .then((users) => {
    return users
    }).then((users) => {
     console.log(users.user);   
    }).catch(function (err) {
        console.log(err);
    }).finally(()=>console.log("promise is eaither resolved or rejected"))//permanent executing block
    
    
// -------------------------------------------------------------------------------------------------------------------------------
// 5]
 const promiseFive=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=true;
        if(!error){
            resolve("fullfilled")
        }
        else{
            reject("error found")
        }
    },1000)
 })

 async function consumefivepromise() {
   try
   { 
    const result=await promiseFive    //await consumes the output from the promise in this u have to handle errors using try catch blacks
    console.log(result);
   }catch(error) //catch will execute the error part
   {
    console.log(error);
   }
}
 consumefivepromise()

// -------------------------------------------------------------------------------------------------------------------------------
// now handling api using fetch and above concept

// fetch("https://api.github.com/users/Saksheekolekar")//act as promise
// .then((response)=>{
//     return response.json()
// }).then((data)=>{
// console.log(data);
// }).catch(function (error) {
//     console.log(error);
// })


async function get() {
   try {
    const data=await fetch("https://api.github.com/users/Saksheekolekar")
    const rdata= await data.json();//await because it also takes a time to convert
    console.log(rdata);
   } catch (error) {
    console.log(error);
   }
}
get()