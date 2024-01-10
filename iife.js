//immidiately invoked function expression (its called immidiately after execuion of program)


//for eg.when we create file of database connection then we write iife because we want immidiate connection
//another eg.multiple time we declare elements in fuction we mey be have chances to pollute by global scope function or sope
//to avoid it we create are scope and immidiately execute it


(function chai(){ //named iife
    console.log("hello");
})();//hellow //all it needs the ;at end because to stop it

(function chai(){
    console.log("hello");
})(); //hellow

((name)=>{//unamed iife
    console.log("hello",name);
})("sakshi") //hellow sakshi


//syntax :   (//defination) (//calling)