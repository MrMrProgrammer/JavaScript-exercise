first = Number(prompt("Enter your first number : "))
second = Number(prompt("Enter your second number : "))

num = first

conter = 0

while ( conter < second-1 )
{
    num *= first
    conter++
}

alert( `${first} ^ ${second} = ${num} ` )