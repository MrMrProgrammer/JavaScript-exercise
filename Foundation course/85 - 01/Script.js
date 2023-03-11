var firstVar = Number(prompt("Enter your first number : "))

var operator = prompt("Enter the oprate you want :\n1)+\n2)-\n3)x\n4)/\n5)**\n6)%")

var secondVar = Number(prompt("Enter your second number : "))

if (operator == "+" || operator == "1")
{
    alert(`${firstVar} + ${secondVar} = ${firstVar + secondVar}`)
}

else if (operator == "-" || operator == "2")
{
    alert(`${firstVar} - ${secondVar} = ${firstVar - secondVar}`)
}

else if (operator == "x" || operator == "3" || operator == "*")
{
    alert(`${firstVar} x ${secondVar} = ${firstVar * secondVar}`)
}

else if (operator == "/" || operator == "4")
{
    alert(`${firstVar} / ${secondVar} = ${firstVar / secondVar}`)
}

else if (operator == "**" || operator == "5")
{
    alert(`${firstVar} ** ${secondVar} = ${firstVar ** secondVar}`)
}

else if (operator == "%" || operator == "6")
{
    alert(`${firstVar} % ${secondVar} = ${firstVar % secondVar}`)
}
else
{
    alert("مقدار وارد شده صحیح نمی باشد")
}

