// {} this defines as scope of code nested inside it

// if (true) {
//     let a = 10
//     const b = 20                        
//     //var c = 30
// }
// console.log(a);
// console.log(b);
// console.log(c); //30 it creates large problem because var always has global scope
//-----------------------------------------------------------------------------------------------
var c = 300
if (true) {
    let a = 10
    const b = 20
    var c = 30 //due to var c will be redefined         
}

console.log(c); //30
//=============================================================================================
var c = 300
if (true) {
    let a = 10
    const b = 20
    c = 30 //it assigns this value to global c
}

console.log(c); //30

// ================================================================================================================================

let a = 500
if (true) {
    let a = 80
    console.log("inner a value =", a);//inner a value = 80 (this a has block scope this means it is only accesible inside te if block)
    
}
console.log("outer a value =", a);//outer a value = 500(this a has global scope this means it is accesible throght out the code)



//*************scope is different in browser and node (imp)) */