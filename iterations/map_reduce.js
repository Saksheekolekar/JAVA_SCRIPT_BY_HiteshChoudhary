const coding=["java","cpp","ruby","python"]

 const val=coding.forEach(element => {
    // console.log(element);
    return element//after manually return it prints undefined
 });
//  console.log(val);//undefined without any return manually
//  ----------------------------------for each functon does not return any values ------------------------------

let s=["abc"]
let element=s.filter((val,key,original)=>{ 
  // console.log(val,key,original)

})
// console.log("out",element);
//array reversed

// let a=[30,56,8,2,1]
// for(let i=0;i<=(Math.floor(a.length/2));i++){
   
//   temp=a[i]
//   a[i]=a[a.length-1-i]
//   a[a.length-1-i]=temp
// }
// console.log(a);
// console.log((Math.floor(a.length/2)));

// /=================================================================================================================================
          //filter()
//it always returns an array of elements from the given elements by specified elemets
          const mynum=[1,3,5,3,2,4]
          const val1=mynum.filter((item)=>{
           console.log(item>3);//true false etc
          })
          console.log(val1);//[] due to forgot to return value

          // ---------------------------------------------------
           let Book=[{
            title:"book One",genre:"fictional",published:1981,edition:2004
           },
           {
            title:"book two",genre:"Non-fictional",published:1992,edition:2008
           },
           {
            title:"book three",genre:"Historical",published:1999,edition:2007
           },
           {
            title:"book four",genre:"Non-fictional",published:1989,edition:2010
           },
           {
            title:"book Five  ",genre:"Science",published:2009,edition:2014
           },
           {
            title:"book six",genre:"fictional",published:1987,edition:2010
           },
           {
            title:"book seven",genre:"Historical",published:1986,edition:1996
           },
           {
            title:"book Eight",genre:"Science",published:2011,edition:2016
           }, {
            title:"book Nine",genre:"Non-fictional",published:1981,edition:1989
           }
          ]
           let userbook=Book.filter((bk)=>(bk.genre==="Historical"))//books with only gonre historical
           console.log(userbook);

           userbook=Book.filter((bk)=>(bk.published>1995&&bk.genre=="Historical"))//books with published after 1995 and with gonre hostory             
           console.log(userbook);
//=================================================================================================================================
           //map()
  const mynum1=[3,8,9,1,3,6] //it is same as filter bu it returns boolean values where as map gives direct values
  
   
  const valr=mynum1.map((item)=>{
    return item+6
  })

console.log(valr);
//chaining 
 let chain=mynum.map((num)=>num*10).map((select)=>select+90).filter((item)=>item>=100)//[ 100, 120, 140, 120, 110, 130 ]
 console.log(chain);
 //in this above first maps output is considered as input to second map

 //++++++++++++++++++++++++++++++++++++Reduce()+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

 const mynum2 =[3,8,9,1,3,6]