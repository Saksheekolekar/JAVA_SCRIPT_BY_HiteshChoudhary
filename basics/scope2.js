function one() { //nested function
    const username = "sakshi"
    function two() {//this function has different scope in memory where different block is allocted to it wheneverwe call this functions
        const website = "youtube"
        console.log(username);
    }
    //after commenting this line it prints  sakshi                     //console.log(website); // error:website is not defined
    two()//line by line execution is done hence two() doesn't executed
}
one()



if (true) {
    const username = "sakshi"
    if (username === "sakshi") {
        const website = "youtube"
        console.log(username + website); //sakshiyoutube
    }
    //console.log(website); //error (website is not defined)because its only accesse inside above if
}
// console.log(username);//error( username is not defined) because its only accesse inside above if




// ===============================+++++++++++++++++++++++++++important+++++++++++++++++++++++++================

function one(num1) {
    return num1 + 1
}
one(3) //return 4


const addtwo = function (num) {//fuction stored inside the variable
    return num + 1
}
addtwo(5)//return 6


//this above both function will executed and returns  the value.

//----------------------------------------------------------------------------------------------------
   //now same above fuctions but  using before calling 
   one(3) //return 4
   function one(num1) {
    return num1 + 1
}


addtwo1(5)//Cannot access 'addtwo1' before initialization

const addtwo1 = function (num) {//fuction stored inside the variable
    return num + 1
}
 //so it cause error due to before calling this will depends on how you declare the function