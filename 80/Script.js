var todoList = [
    { id : 1 , title : "learn HTML" , status : true },
    { id : 2 , title : "learn CSS" , status : true },
    { id : 3 , title : "learn JS" , status : false },
    { id : 4 , title : "learn Django" , status : false },
]

// console.log(todoList[todoList.length-1].id+1)

console.log("Start : " , todoList)


var selection = prompt("لطفا گزینه مورد نظر خود را وارد کنید :\n\n1.اضافه کردن ToDo جدید\n2.حذف ToDo\n3.انجام ToDo (تغییر وضعیت)\n")

if (selection == 1 || selection == "۱")
{
    addTodo()
}

else if (selection == 2 || selection == "۲")
{
    removeTodo()
}

else if (selection == 3 || selection == "۳")
{
    changeStatus()
}

else
{
    alert("مقدار وارد شده صحیح نمی باشد !")
}


function addTodo()
{
    var title = prompt("لطفا عنوان ToDo جدید را وارد کنید :‌ ")

    var preStatus = prompt("لطفا یکی از گزینه های زیر را به عنوان وضعیت انتخاب کنید :‌\n1.انجام نشده\n2.انجام شده")

    var status

    if (preStatus == 2 || preStatus == "۲")
    {
        status = true
    }

    else
    {
        status = false
    }

    var id = todoList[todoList.length-1].id+1

    var item = { id : id , title : title , status : status }

    todoList.push(item)

}

function removeTodo()
{

    alert("در ادامه لیست ToDo به شما نمایش داده خواهد شد.\nلطفا شماره ToDo خود را به خاطر بسپارید")

    var state

    todoList.forEach(function(item)
    {
        if (item.status == false)
        {
            state == "انجام نشده"
        }

        else
        {
            state = "انجام شده"
        }

        alert(`شماره : ${item.id}\nعنوان :‌ ${item.title}\nوضعیت : ${state}`)

    })

    var whitchOne = prompt("لطفا شماره ToDo مورد نظر خود را وارد کنید :‌ ")


    var test = []


    todoList.forEach(function(item)
    {

        if ( item.id != whitchOne )
        {
            test.push(item)
        }

        else
        {
            alert("‌ToDo مورد نظر حذف شد :)")
        }

    })

    todoList = test

}

function changeStatus()
{
    alert("در ادامه لیست ToDo به شما نمایش داده خواهد شد.\nلطفا شماره ToDo خود را به خاطر بسپارید")

    var state

    todoList.forEach(function(item)
    {
        if (item.status == false)
        {
            state == "انجام نشده"
        }

        else
        {
            state = "انجام شده"
        }

        alert(`شماره : ${item.id}\nعنوان :‌ ${item.title}\nوضعیت : ${state}`)

    })

    var whitchOne = prompt("لطفا شماره ToDo مورد نظر خود را وارد کنید :‌ ")

    var test = []

    todoList.forEach(function(item)
    {

        if ( item.id != whitchOne )
        {
            test.push(item)
        }

        else
        {
            var ID = item.id

            var TITLE = item.title

            var STATUS

            if (item.status)
            {
                STATUS = false
            }

            else
            {
                STATUS = true
            }

            var sample = { id : ID , title : TITLE , state : STATUS }

            test.push(sample)
        }

    })

    todoList = test

}


console.log("End : " , todoList)