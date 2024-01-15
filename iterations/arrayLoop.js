//for of loop  (array)(it returns values)

const arr=[1,3,2,4,5]
for (const item of arr) { //prints each element  of an array
    console.log(item);
    
}

const greeting="helo world!!!"
for (const greet of greeting) {

    console.log(`Each Char Is ${greet}`);
    
}
//-----------------------------------------------Map-------------------------------------------------------------------
const map=new Map()
map.set('name','abc')//must have to define values in quote
map.set('age',68)
map.set('add','shrirampur')
console.log(typeof(map));//object (but have unique keys and insertion order is maintained)
for (const [key,val] of map) {//instead of square bracket if we took only key it will prints each key values separate array foreg.[ 'name', 'abc' ]
    console.log(key,"=",val)//it iterates as key  value pair
    
}

//--------------------------------------------Object------------------------------------------------
const myObject={//it cant be iterate using forof loop
    "name":"sakshi",
    "age":70
}


for (const key in myObject)  //forin loop (this returns keys)
{
console.log(`my ${key} is ${myObject[key]}`);
}

//------------------------------------------------------------------For Each In Array----------------------------------------------------------------------------
const coding=["java","cpp","ruby","python"]

coding.forEach((item)=>{//using arrow fuction 
    console.log(item);
})


coding.forEach(show);//using reference of external defined function

function show(num){
    console.log(num);
}

coding.forEach(function (item,index,originalarray){//using a function  for ech provides tree values as value,index and original array
    console.log(item,index,originalarray);
})

//------------------------------------------------------------for each on [{},{},{}]------------------------

const mycoding=[
    {
        languageName:"java",
        fileExtention:".java"
    },
    {
        languageName:"python",
        fileExtention:".py"
    }, {
        languageName:"php",
        fileExtention:".php"
    }
]

mycoding.forEach(
    (item)=>//as item represents the oeach object
    {
        console.log(item.fileExtention);
    }
)

