var users = [
    { id : 1 , name : "ali" , phoneNumer : 09370522995 , age : 22 },
    { id : 2 , name : "reza" , phoneNumer : 09923454312 , age : 21 },
    { id : 3 , name : "mohammad" , phoneNumer : 09923492734 , age : 20 },
    { id : 4 , name : "erfan" , phoneNumer : 09129348524 , age : 10 }
]


var IsBigger = users.every( checkAge )

function checkAge (user)
{
    return user.age > 18 ;
}


if (IsBigger)
{
    alert("گوشی رو بردار زنگ بزن")
}

else 
{
    alert("بچه برو درست رو بخون")
}

