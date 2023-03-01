function showAvr ()
{
    num1 = Number(prompt("عدد اول را وارد کنید : "))
    num2 = Number(prompt("عدد دوم را وارد کنید : "))
    num3 = Number(prompt("عدد سوم را وارد کنید : "))

    sum = num1 + num2 + num3

    avr = Math.round(sum / 3)

    alert("میانگین برابر است با " + avr)
}

var x = showAvr()