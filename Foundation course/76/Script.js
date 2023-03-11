var cart = [
    { id : 1 , name : "phone" , price : 7000000 },
    { id : 2 , name : "loptop" , price : 70000000 },
    { id : 3 , name : "hedphone" , price : 1000000 },
    { id : 4 , name : "book" , price : 95000 },
    { id : 5 , name : "notebook" , price : 40000 },
    { id : 6 , name : "pen" , price : 4000 },
]

var sum = 0
var postPrice = 0

cart.forEach(function(item)
{
    sum += item.price

    if (item.price < 100000)
    {
        postPrice += 1000
    }

})

alert(`sum = ${sum}\nPostPrice = ${postPrice}`)