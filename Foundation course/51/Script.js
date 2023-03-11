var userNumber = prompt("Enter your number : ")

var number = Number(userNumber)

var sum = 0

for ( i=0 ; i<userNumber.length ; i++ )
{
    remain = number % 10
    
    sum += remain

    number =  Math.floor(number / 10)
    
}

alert( `sum of your number is '${sum}'file:///M:/Programming/JavaScript/%D8%B3%D8%A8%D8%B2%D9%84%D8%B1%D9%86/%D8%AA%D9%85%D8%B1%DB%8C%D9%86/51/index.html` )

