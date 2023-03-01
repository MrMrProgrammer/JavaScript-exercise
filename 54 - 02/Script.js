userEntry = prompt("Enter your number : ")
userNumber = Number(userEntry)

sum = 0

if ( isNaN(userNumber) )
{
    alert("The entered value is NOT CORRECT !")
}

else
{
    alert( `Length of your number is ${userEntry.length} ` )

}
