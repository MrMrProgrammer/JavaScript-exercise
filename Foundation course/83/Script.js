// var state = {
//     tehran : ["tehran" , "shahriyar" , "lavasan"],
//     gilan : ["rasht" , "astara" , "fooman" ],
//     khorasan_e_razavi : [ "mashhad" ]
// }

// // var userEnterd = Array(prompt("Enter your STATE : "))

// var sample = "tehran"

// console.log(state.Array(sample))


// var states = [ ["تهران" , ["تهران" , "لواسان" , "شهریار"]] , ["گیلان" , ["رشت" , "فومن"]] ]

// var userEnterd = prompt("Enter your STATE : ")


// states.forEach(function(item)
// {
//     if (item[0] == userEnterd)
//     {
//         item.forEach(function(one)
//         {
//             console.log(one)
//         })
//     }

// })

var cities = {
    tehran : ["tehran" , "shahriyar" , "rudehen" , "bomehen"],
    gilan : ["rasht" , "fooman" , "astara" ],
    shiraz : ["fars" , "shiraz" , "shiraz pars" ]
}

var userEnterd = prompt("enter your city : ")

console.log(cities[userEnterd])