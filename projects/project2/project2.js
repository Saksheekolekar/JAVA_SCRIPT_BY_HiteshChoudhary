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