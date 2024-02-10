const body=document.querySelector("body")
const buttons=document.querySelectorAll(".button")
 buttons.forEach(function(button){
    button.addEventListener('click',function(e)
    {
     if(e.target.id==="blue")
     body.style.backgroundColor="blue"
     if(e.target.id==="green")
     body.style.backgroundColor="green"
     if(e.target.id==="red")
     body.style.backgroundColor="red"
     if(e.target.id==="yellow")
     body.style.backgroundColor="yellow"
   
    })
 })