array = []

userEntry = Number(prompt("Enter your number : "))

if (userEntry != -1)
{
    array.push(userEntry)
}

while ( userEntry != -1 )
{
    userEntry = Number(prompt("Enter your number : "))

    if (userEntry != -1)
    {
        array.push(userEntry)
    }
}

console.log(array)

sum = 0

for ( i=0 ; i<array.length ; i++ )
{
    sum = sum + array[i]
}

alert(`Array Average is ${sum / array.length}`)