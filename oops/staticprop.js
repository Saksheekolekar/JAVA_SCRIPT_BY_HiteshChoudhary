class user{
    constructor(username){
        this.username=username
    }
     static logme()//this restrict function to access in any way
    {
        console.log(`USERNAME: ${this.username}`);
    }
}
//we cant able to access it 
new user("sakshi").logme()//(intermediate value).logme is not a function