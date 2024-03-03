//HERE INHERITANCE MEANS THERE IS NO NEED TO USE CALL WHICH MEANS THERE IS NO NEED TO PROVIDE THEM THE "THIS"
// i.e. function.call(this,arg) 

//below there are three classes where they execute from top to bottom in hierarchy and
//  there is compulsory to user supre in each derived class

class User //first class with method logMe()
{
constructor(username)
{
    this.username=username
    console.log("its user");
}
logMe()
{
console.log(`welcome,${this.username}`);
console.log(this);
}
}
class  teacher extends User{ //second inherited class 
    constructor(username,email,password){
       super(username)//call constructor of super class
        this.email=email
        this.password=password
        console.log("its teacher");
    }
    addCourse()
    {
        console.log(`new Course was added by ${this.username}`);
    }
}

class student extends teacher{//third class
constructor()
{
    super()
    console.log("its student");
}
}
 
const stud=new student("sakshi","sakshi@123gmail.com","abc")//its user
                                                            // its teacher
                                                            // its student


// const chai=new User("sakshi","sakshi@123gmail.com","abc")
// chai.logMe()//welcome,sakshi
//           // User { username: 'sakshi' }


//           const greentea=new teacher("sakshi","sakshi@123gmail.com","abc")//teacher can able to user all the property of user
//           greentea.logMe()//welcome,sakshi                               //but user cant have access of teacher
                            // teacher {
                            //     username: 'sakshi',
                            //     email: 'sakshi@123gmail.com',
                            //     password: 'abc'
                            // }
//======================================behind the scene using function===========



function user1(username){
    this.username=username;
   this.logMe=function(){
    console.log(`welcome ${this.username}`);
   }
//    return this;
}

function teacher1(username,email,password) {
    user1.call(this,username)
    this.email=email
    this.password=password
    this.couseName=function() 
   {
    console.log(`course was given by ${this.username}`);
   }
}
const chai1=new teacher1("kolekar","kolekar123@gmail","456")

console.log(chai1);
chai1.logMe()