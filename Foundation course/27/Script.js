avr = Number(prompt("معدل خود را وارد کنید : "))

if (avr != NaN && avr <= 20 && avr >= 0 )
{
    avr = Math.floor(avr)

    switch (avr)
    {
        case 20 :
        case 19 :
        case 18 :
            alert("سطح شما برابر است با A")
            break

        case 17 :
        case 16 :
        case 15 :
            alert("سطح شما برابر است با B")
            break
            
        case 14:
        case 13:
        case 12:         
            alert("سطح شما برابر است با C")
            break
        
        default :
            alert("معدل کمتر از 12 مشروط می شود !")  
    }
}

else 
{
    alert("مقدار وارد شده صحیح نمی باشد !")
}
