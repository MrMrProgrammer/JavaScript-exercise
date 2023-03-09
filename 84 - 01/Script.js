var questions = [
    {
        id : 1 ,
        text : "کدام مورد جزء شهر های استان تهران نیست؟" ,
        options : [
            {
                optionId : 1 ,
                optionText : "تهران"
            } ,
            {
                optionId : 2 ,
                optionText : "شهریار" ,

            },
            {
                optionId : 3 ,
                optionText : "رشت"
            },
            {
                optionId : 4 ,
                optionText : "رودهن"
            }],
        key : 3 
    },

    {
        id : 2 ,
        text : "کدام گزینه جز، استان های ایران نیست؟" ,
        options : [
            {
                optionId : 1 ,
                optionText : "تهران"
            } ,
            {
                optionId : 2 ,
                optionText : "گیلان" ,

            },
            {
                optionId : 3 ,
                optionText : "شیراز"
            },
            {
                optionId : 4 ,
                optionText : "نیویورک"
            }],
        key : 4
    },



]

questions.forEach(function(quest)
{
    console.log( quest.text + " - " + quest.id )
    
    quest.options.forEach(function(item)
    {
        console.log(item.optionId + ") " + item.optionText)
    })

    console.log("\n")

})


