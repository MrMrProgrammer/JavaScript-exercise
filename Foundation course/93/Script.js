function s()
{
    alert("fuck you")

    // document.getElementById("min").innerHTML = 0
    // document.getElementById("s").innerHTML = 0

    // document.getElementById("box").style.backgroundColor = "red";
    // clearInterval(stop)

}


var min = +prompt("Enter Min : ")
var s = +prompt("Enter S : ")

s--

document.getElementById("min").innerHTML = min
document.getElementById("s").innerHTML = s

var stop = setInterval(function()
{
    document.getElementById("min").innerHTML = min
    document.getElementById("s").innerHTML = s

    
    if (s == 0)
    {
        s = 59
        min--
    }
    
    s--

    if (s == 0 && min ==0)
    {

        document.getElementById("min").innerHTML = 0
        document.getElementById("s").innerHTML = 0

        document.getElementById("box").style.backgroundColor = "red";
        clearInterval(stop)
    }

} , 1000)




function show()
{
    document.getElementById("min").innerHTML = 0
    document.getElementById("s").innerHTML = 0

    document.getElementById("box").style.backgroundColor = "red";
    clearInterval(stop)
}






















// document.getElementById("s").innerHTML = s
// document.getElementById("min").innerHTML = min

// min--

// var daghigheh

// var saniyeh = setInterval(function()
// {
//     if (s == 0)
//     {
//         if (min == 0)
//         {
//             S = 0
//             document.getElementById("s").innerHTML = S
//             clearInterval(saniyeh)
//         }

//         document.getElementById("min").innerHTML = min
//         min--

//         s = 59


//     }

//     document.getElementById("s").innerHTML = s
//     s--
// } , 100 )

// document.getElementById("s").innerHTML = 0
// function minesOfMin ()
// {


//     daghigheh = setInterval(function()
//     {
//         if(min == 0)
//         {
//             clearInterval(daghigheh)
//         }

//         document.getElementById("min").innerHTML = min
//         min--
//     } )

// }