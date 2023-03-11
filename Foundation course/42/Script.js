// function make_random()
// {
//     rand = Math.trunc ( ( Math.random() ) * 100000 )
//     return rand
// }

// if ( make_random() > 10000 && make_random() <= 99999  )
// {
//     alert(rand)
// }

// else
// {
//     alert( make_random() )

// }

var stepOne = Math.random() * 100000
var stepTwo = Math.floor( stepOne )

alert( "Your Captcha Code is : " + stepTwo )