var questions = [
    { id : 1 , titel : "2+2" , answer : "4" },
    { id : 2 , titel : "2*2" , answer : "4" },
    { id : 3 , titel : "2/2" , answer : "1" },
    { id : 4 , titel : "2%2" , answer : "0" },
    { id : 5 , titel : "2-2" , answer : "0" },
]

var userScore = 0

questions.forEach(function(quest)
{

    userAnswer = prompt(`${quest.titel} = ?`)
    // alert(quest.titel)

    if (userAnswer == quest.answer)
    {
        userScore += 1
    }

})

alert(`Your score is : ${userScore}`)