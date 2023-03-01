time = Number(prompt("یک عدد برحسب دقیقه وارد کنبد :"))

h =  Math.floor(time / 60)
min = time % 60

if (isNaN(min) || isNaN(h))
{
    alert("Something went wrong !")
}
else 
{
    alert("زمان برابر است با " + h + " ساعت و " + min + " دقیقه")
}
