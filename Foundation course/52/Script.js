// len = prompt("Enter your number : ").length

// alert(`len of your number is '${len}'`)

//================================================================================

// alert(`len of your number is '${prompt("Enter your number : ").length}'`)

//================================================================================

userEntry = prompt("Enter your number : ")

num = Number(userEntry)

if ( isNaN(num) )
{
    alert("The entered value is NOT CORRECT !")
}

else
{
    alert(`len of your number is '${userEntry.length}'`)
}