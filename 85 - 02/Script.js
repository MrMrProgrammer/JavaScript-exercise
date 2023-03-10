var userEnterd = prompt("Enter what you want :")

var splited = userEnterd.split(" ")

if (splited[1] == "+")
{
    alert(`${Number(splited[0])} + ${Number(splited[2])} = ${Number(splited[0]) + Number(splited[2])} `) 
}

else if (splited[1] == "-")
{
    alert(`${Number(splited[0])} - ${Number(splited[2])} = ${Number(splited[0]) - Number(splited[2])} `) 
}


else if (splited[1] == "*")
{
    alert(`${Number(splited[0])} * ${Number(splited[2])} = ${Number(splited[0]) * Number(splited[2])} `) 
}


else if (splited[1] == "/")
{
    alert(`${Number(splited[0])} / ${Number(splited[2])} = ${Number(splited[0]) / Number(splited[2])} `) 
}


else if (splited[1] == "**")
{
    alert(`${Number(splited[0])} ** ${Number(splited[2])} = ${Number(splited[0]) ** Number(splited[2])} `) 
}


else if (splited[1] == "%")
{
    alert(`${Number(splited[0])} % ${Number(splited[2])} = ${Number(splited[0]) % Number(splited[2])} `) 
}

else
{
    alert("مقدار وارد شده معتبر نمیاشد!")
}