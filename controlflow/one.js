//if statement

const isuserloggedin = true
if (2 !== "2") { //yes!!!!
    console.log("yes!!!!");
}
// <,>,<=,>=,==,===,!=,!==
// ------------------------------------------------------------------------------------------------
const temp = 41
if (temp > 80) {
    console.log("temp greater than 80");
} else {
    console.log("temp less than 80");//temp less than 80
}
// ------------------------------------------------------------------------------------------------
const score = 200
if (score > 100) {
    const power = 'fly'
    console.log(`"user poer is ${power}"`);//"user poer is fly"
}
//console.log(`"user poer is ${power}"`);//power is not defined
//------------------------------short HAND NOTATION-------------------------
const balance = 1000
// if(balance>500)console.log("test"),console.log("test2");//test,test1(not good to use)
if (balance < 500) {
    console.log("balance is less than 500");
} else if (balance < 700) {
    console.log("balance is less than 700");
} else if (balance < 900) {
    console.log("balance is less than 900");
}
else {
    console.log("balance is less than 1200");//balance is less than 1200
}

// -----------------------------------------------------------------------------------------------------------------
const userLoggedIn=true
const loggedInFromGoogle=false
const loggedInFromEmail=true
const debitCard=true
if(userLoggedIn &&debitCard)//if both condition becomes true
{
    console.log("Allow To Buy Coourse!!!");//Allow To Buy Coourse!!!
}

if(loggedInFromEmail||loggedInFromGoogle||guestUser)//any one condition becomes true
{
    console.log("User Logged In!!!");//User Logged In!!!
}