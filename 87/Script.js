var users = [
    { id : 1 , userName : "ali" , password : "123456" },
    { id : 2 , userName : "amir" , password : "amir123456" },
    { id : 3 , userName : "amin" , password : "123456amin" },
    { id : 4 , userName : "ashkan" , password : "123ashkan456" },
    { id : 5 , userName : "arash" , password : "arashw9299" },
    { id : 6 , userName : "reza" , password : "131080reza" },
    { id : 7 , userName : "mohammad" , password : "s13101380s" },
]

var gijUserName = prompt("Enter your username : ")

var gijUser = users.find(function(user)
{
    return user.userName == gijUserName

})

if (gijUser != undefined)
{
    alert(`Your password is : ${gijUser.password}`)
}

else
{
    alert("Username not found !")
}