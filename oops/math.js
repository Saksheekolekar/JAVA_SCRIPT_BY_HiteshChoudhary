console.log(typeof(Math.PI));

//here we are foing to discuss why the math.pi does not change there value.

console.log(Object.getOwnPropertyDescriptor(Math,"PI"));
//{
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }
const user={
    name:"sakshi",
    pass:"qwe",
    isLoggedin:true
}

console.log(Object.getOwnPropertyDescriptor(user,"name"));
/* {
    value: 'sakshi',
    writable: true,
    enumerable: true,
    configurable: true
  }
 */
 for (const key in user) {//as all the properties are true so we can iterate it u can see resullt below
    console.log(key); 
 }//o/p:name
// pass
// isLoggedin


//now consider the we have decided to make the property false just to make the name not iterate .
Object.defineProperty(user,"name",{
    enumerable: false  //now the name cant be iterated.
})

for (const key in user) {
    //as the above false property effects on the name to not iterator it
    console.log(key);
} 
// output:pass
// isLoggedin