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