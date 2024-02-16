#PROJECTS RELATED TO DOM

1.CREATING THE BUTTON  WITH COLOUR NAME ,ONCLICKING ON THEM IT WILL CHANGE THE BACKGROUND COLOR OF SCREEN

#SOLUTION CODE:
```javascript 


const button=document.querySelectorAll('.button')
const body=document.querySelector('body')

console.log(button);
button.forEach(function(item)
{
     item.addEventListener('click',function(e){

    
        if(e.target.id=='red')
        {
            body.style.backgroundColor='red'
        }
        if(e.target.id=='yellow')
        {
            body.style.backgroundColor='yellow'
        }
        if(e.target.id=='blue')
        {
            body.style.backgroundColor='blue'
        }
        if(e.target.id=='green')
        {
            body.style.backgroundColor='green'
        }
     })
})
```
2. BMI INDEX CALCULATOR
#SOLUTION CODE:
```javascript
const Form=document.querySelector('form')

Form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let weight = parseInt(document.getElementById("weight").value);
    let height = parseInt(document.getElementById("height").value);
     let result=document.getElementById("result")
   if(weight<=0||isNaN(weight))
   {
    result.innerHTML='"enter valid weigth"'
   }else  if(height<=0||isNaN(height))
   {
    result.innerHTML='"enter valid heigth"'
   }
   else{
    let bmi=weight/((height*height)/10000);
    result.innerHTML=`"BMI IS"  ${bmi}`;
   }

})
```
3.LOCAL TIME CHANGING CLOCK PER SECONDS.

```javascript

const span=document.querySelector('span')

setInterval(()=>{
    let date=new Date();
    span.innerHTML=date.toLocaleString();
},1000)
```

4.GAME:GUESS THE RANDOM NUMBER

```javascript

const ran = parseInt(Math.random()  * 100+1)
console.log(ran);
const textfield = document.querySelector("textarea")
const button = document.querySelector('button')
const td = document.querySelectorAll(".guess")//nodelist
let count = 0;
let  tr=document.querySelectorAll(".guess")


button.addEventListener("click", function (e) {
    
    if (count<10) {
        let guess;
        guess = parseInt(textfield.value);
        if (isNaN(guess) || guess < 0 || guess > 100) {
            textfield.placeholder= "enter valid number between  0-100"

        }
        else {
            if (guess === ran) {
                document.querySelector(".hint").innerHTML="Congratulation you got it right";
                tr[count].innerHTML="won"
                alert("CONGRATULATION YOU WON!!\n     start again");
                location.reload();
            }
            else {
                if(guess>ran)
                {
                    document.querySelector(".hint").innerHTML="Number is Less Than Ur Guess"
                }
                if(guess<ran)
                {
                    document.querySelector(".hint").innerHTML="Number is Greater Than ur Guess"
                }
                tr[count].innerHTML=guess
                count++;
                textfield.value="";

            }
            document.querySelector('.chances').innerHTML =  ` ${10 - count}  Turns Remaining`;
            
        }
    }
    else {
        alert("your chances are over!!better luck next time.")
        close();
        location.reload();
    }
})

```

