number = Number(prompt("عدد را وارد کنید :‌"))

function checkOddOrEven (number)
{
    if (number % 2 == 0)
    {
        alert( number + " زوج می باشد")
    } 
    else 

    {
        alert( number + " فرد می باشد")
    }
}

if (isNaN(number) != true)
{
    checkOddOrEven(number)
}

else
{
    alert("مقدار وارد شده صحیح نمی باشد")
}