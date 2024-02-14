
const span=document.querySelector('span')

setInterval(()=>{
    let date=new Date();
    span.innerHTML=date.toLocaleString();
},1000)