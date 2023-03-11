users = [
    { name : "Mohammadreza" , family : "Hashemi" , age : 22 , email : "mr.mr.programmer@gmail.com" },
    { name : "shayan" , family : "Jafari" , age : 21 , email : "sh.jafari@gmail.com" },
    { name : "Mohsen" , family : "MohammadAli" , age : 22 , email : "mohsen.mohammadali@gmail.com" },
]

do
{
    name = prompt("Enter your name : ")
    nameLen = name.length
} while ( nameLen > 10 || nameLen < 3 )


do
{
    family = prompt("Enter your family : ")
    familyLen = family.length
} while ( familyLen > 15 || familyLen < 3 )

do
{
    age = prompt("Enter your age : ")
    ageNumber = Number(age)
    
    agelen = age.length
} while ( agelen > 3 || isNaN(ageNumber)==true )

email = prompt("Enter your email : ")

users.push( {name : name , family : family , age : age , email : email} )

users.forEach(function(user) {
    console.log( `name : ${user.name}` )
    console.log( `family : ${user.family}` )
    console.log( `age : ${user.age}` )
    console.log( `email : ${user.email}` )
    
});