firstNumber = Number(prompt("Enter your first number : "))
secondNumber = Number(prompt("Enter your second number : "))

if (secondNumber > firstNumber)
{
    if ( firstNumber % 2 != 0 )
    {
        firstNumber++
    }

    i = firstNumber

    while( i < secondNumber )
    {
        console.log(i)
        i += 2
    }

}