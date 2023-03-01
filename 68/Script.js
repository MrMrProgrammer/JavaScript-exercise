var products = [
    { id : 1 , name : "s21" , number : 2 , price : 21000000 },
    { id : 2 , name : "a73" , number : 1 , price : 19200000 },
    { id : 3 , name : "a33" , number : 0 , price : 12915000 },
    { id : 4 , name : "a71" , number : 7 , price : 16750000 }
]

var cart = [
    { id : 1 , name : "s21" , number : 1 , price : 21000000 },
    // { id : 2 , name : "a73" , number : 1 , price : 19200000 }

]

console.log("products : (Before)")
console.log(products)

console.log("cart : (Before)")
console.log(cart)

// alert(cart.length)

alert( `محصولات :‌ \n ${products[0].name} \n ${products[1].name} \n ${products[2].name} \n ${products[3].name} ` )

var object = prompt("نام کالای مورد نظر خود را وارد کنید : ")

products.forEach( function(obj) {

    if ( obj.name == object)
    {
        if ( obj.number >= 1 )
        {
            cart.push(obj)
            obj.number -= 1
        }

        else 
        {
            alert("موجودی این کالا به اتمام رسیده است")
        }
    }
} )

var sum = 0

cart.forEach( function(obj)
{
    sum += obj.price
})



console.log("products : (After)")
console.log(products)

console.log("cart : (After)")
console.log(cart)

console.log(sum)

alert(`مجموع قیمت سبد خرید شما ${sum} می باشد.`)