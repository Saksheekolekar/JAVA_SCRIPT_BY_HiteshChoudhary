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


```

