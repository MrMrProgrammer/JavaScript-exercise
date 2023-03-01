var userEnterd = prompt("کلمه مورد نطر خود را وارد کنید :‌")

var arry = userEnterd.split("")
var backUp = userEnterd.split("")

arry.reverse()

console.log(`arry = ${arry}`)
console.log(`backUp = ${backUp}`)

var isSame = arry.every(function(item)
{
    return item == backUp[arry.indexOf(item)]
})

console.log(isSame)


if ( isSame )
{
    alert("کلمه شما از دو طرف یکسان است.")
}

else
{
    alert("نوووچ")
}


// console.log(arry)

// var x1 = [ "ali" , "amir" , "mr"]
// var x2 = [ "ali" , "amir" , "mr"]


