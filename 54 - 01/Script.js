userEntry = Number(prompt("Enter your number : "))

sum = 0

while ( userEntry/10 != 0 )
{
    sum += userEntry % 10
    userEntry = Math.floor(userEntry / 10)
}

alert(`sum of Digits is : ${sum}`)