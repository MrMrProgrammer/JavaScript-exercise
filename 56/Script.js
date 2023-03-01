num = Number(prompt("Enter your number : "))
sum = 0

if ( isNaN(num) != true )
{
    sum = num
}

while ( num != 0 && isNaN(num) != true )
{
    num = Number(prompt("Enter your number : "))
    if (isNaN(num) != true)
    {
        sum += num
    }
    else
    {
        break
    }
}

alert(`sum of your numbers is ${sum}`)