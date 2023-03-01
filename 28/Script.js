avr = Number(prompt("معدل خود را وارد کنید : "))

if (avr != NaN && avr <= 20 && avr >= 0 )
{
    avr = Math.floor(avr)

    if ( avr >= 18 && avr <= 20 )
    {
        alert("A")
    }

    else if ( avr >= 15 && avr < 18 )
    {
        alert("B")
    }

    else if ( avr >= 12 && avr < 15 )
    {
        alert("C")
    }

    else 
    {
        alert("شما مشروط شده اید !")
    }
}
else
{
    alert("مقدار وارد شده صحیح نمی باشد !")
}
