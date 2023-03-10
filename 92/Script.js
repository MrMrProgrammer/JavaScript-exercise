var i = 3

var timer = setInterval(function()
{
    if (i == 0)
    {
        clearInterval(timer)
        document.getElementById("out").style.backgroundColor = "red" ;
    }

    document.getElementById("timer").innerHTML = i
    i--

} , 1000 )

