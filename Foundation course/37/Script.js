var userName = prompt("Enter your USERNAME :")
var passWord = prompt("Enter your PASSWORD :")

if ( userName.length < 3 && passWord.length < 8 )
{
    alert( "your USERNAME and PASSWORD are too short !" )

}

else if ( userName.length < 3 )
{
    alert("your USERNAME is too short")
}

else if ( passWord.length < 8 )
{
    alert("your PASSWORD is too short")
} 

else
{
    alert("Login was Successful")
}