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
