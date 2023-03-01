sum = 0

for ( i=0 ; i<5 ; i++)
{
    sum += Number(prompt( `Enter The ${i+1} Number : `))
}

alert( "Average of your number is : " + sum/5 )