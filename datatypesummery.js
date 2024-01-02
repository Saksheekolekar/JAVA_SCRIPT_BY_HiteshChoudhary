//how the data is stored into memory on this basis it divided into two types primitive and non primitive

//1)primitive (7)=call by value when ever we call them they gives copy of it instead of memory location
//string ,int,boolean,null.undefined,symbol,BigInt

//js is static r dynamic type of language??
let stringvalue="2"
let booleanvalue=true
let temp=null
let works
let count=90
let id=Symbol('123')
let anotherid=Symbol('123')
console.log(id==anotherid);//false because symbol gives unique value
let bignumber=919287837674743n
console.log(typeof bignumber); //bigint

//2)REFERENCE DATATYPE/NON PRIMITIVE DATATYPE= ARRAY,OBJECT,FUNCTION
let a=[30,80,'bc']

 const exobject={
    "name":"ram","std":"12th",
 }

 const fun=function(){
    console.log("hello world");
    
 }

 //all above are form of objects
 //---------------------------------------------------------------------------------------------------------------------------------


 //memory  allocation ,there are two types of memory stack and heap

 //stack(primitive,copy of object is provied)         heap(non primitive,changes are made in original value)


 let firstvalue="jayshreeram"
 let secondvalue=firstvalue
  secondvalue="ramkrushnahari"
  console.log(firstvalue);//jayshreeram
  console.log(secondvalue);//ramkrushnahari

  let first={ score:40,grade:"A"}
  
  let second=first
  second.score=60
  console.log(first);//{ score: 60, grade: 'A' }
  console.log(second);//{ score: 60, grade: 'A' }





  
//-----------------------------------------------------------------------------------------------------------------------------------
  let 