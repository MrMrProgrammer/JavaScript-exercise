userBirthDay = Number(prompt("سن خود را وارد کنید :‌"))

userAge = 1401 - userBirthDay

if ( isNaN(userAge) || userBirthDay > 1401 )
{
    alert("مقدار وارد شده صحیح نمی باشد !")
}

else
{
    alert( "سن شما برابر می باشد با = " + userAge  )
}

