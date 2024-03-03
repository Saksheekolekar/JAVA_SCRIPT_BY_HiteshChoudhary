//call stack 
//wehen we call setusername method from createuername method.it will realease the value after execution 
//so we cant get user name for our method ..so by using call we send it the this of our method to 
//store its value before releasing its environment.
function setUsername(username) {
    this.username=username;
      
}
function createUsername(userName,email,password) {
    setUsername.call(this,userName)//call pass the current refence to another method to store its value
    this.email=password
    this.password=password
}
const me=new createUsername("ram","abc@123",113)
console.log(me);//createUsername { email: 113, password: 113 } //before call
console.log(me);// createUsername { username: 'ram', email: 113, password: 113 }//after call