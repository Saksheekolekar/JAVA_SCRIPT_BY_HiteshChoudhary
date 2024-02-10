const a=[39,50,439,4,4]
const b=["apple","bat","cat"] //arrays are stores multiple element of same or different datatypes
const c=[4,5,'app']
//inexed array
//shallow copy while copy operation
//zero indexed array
//console.log(a);
//methods
  const myarray=new Array(30,60,40)
//  console.log(myarray.push(7));//returns new lenght of an array
//  console.log(myarray.pop());//returns new element
//  console.log(myarray.unshift(9));//returns new lenght of an array
//  console.log(myarray.shift());//returns new element



 //questionear methods
 
//  console.log(myarray.includes(6)); //false
//  console.log(myarray.indexOf(30)); //0


 //interview qiuestion 
    //what is difference between slice() nad splice() functiion??


    // console.log("original array =",myarray);//[30,60,40]


      const myarray1=myarray.slice(1,3);
    // console.log("sliced array=",myarray1);//[60,40] //it does not affects on the original array
    // console.log( "original array after slice",myarray);//[30,60,40]

    const myarray2=myarray.splice(1,3);
    // console.log("spliced array=",myarray2);//[60,40] //it removes the portion from original array
    // console.log( "original array after splice",myarray);//[30]


    //--------------------------------------------------------------------------------------------------------------------------
    const male=["ram","sham","bharat"]
    const female=["seeta","geeta"]



    // female.push(male)
    // console.log(female); // [ 'seeta', 'geeta', [ 'ram', 'sham', 'bharat' ] ]  

    // const newarray=female.concat(male)
    // console.log(newarray);//[ 'seeta', 'geeta', 'ram', 'sham', 'bharat' ]

    // const spread=[...a,...b] //spread operator spread individual as element
    // console.log(spread);//[ 39, 50, 439, 4, 4, 'apple', 'bat', 'cat' ]

    const anotheraray=[49 , 8,21,2,1, [3,5,2,1,[2,2]],57,[3,3,2]]
     const singlediamentionarray=anotheraray.flat(Infinity)
     console.log(singlediamentionarray);
/*[
  49, 8, 21, 2, 1,  3,
   5, 2,  1, 2, 2, 57,
   3, 3,  2
]*/

console.log(Array.isArray("31hu2"));//FALSE
console.log(Array.from("3DST4W"));//[ '3', 'D', 'S', 'T', '4', 'W' ]
console.log(Array.from({NAME:"SAKSHI",addr:"shrirampur"}));//FAILURE IT GIVES EMPTY ARRAY                interesting(need to specify the keys or values to convert into array)


let score=383
let score1=922
let score2=89
console.log(Array.of(score2,score1,score));//[ 89, 922, 383 ]

console.log(Array.isArray);

    