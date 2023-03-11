var database = [
    { id : 1 , name : "task 1" , des : "this is my task one" , status : 0 },
    { id : 2 , name : "task 2" , des : "this is my task two" , status : 0 },
    { id : 3 , name : "task 3" , des : "this is my task three" , status : 0 },
    { id : 4 , name : "task 4" , des : "this is my task four" , status : 0 },
]


function isOrNot()
{
    const item = document.getElementById('task-box');
    const have = item.classList.contains('remove');
    if (have)
    { noRemove() }
    else
    { remove() }
}

function remove()
{
    document.getElementById("task-box").classList.add('remove');
    document.getElementById("btn-delete").innerHTML = "&nbsp;Show&nbsp;" 
}

function noRemove()
{
    document.getElementById("task-box").classList.remove('remove');
    document.getElementById("btn-delete").innerHTML = "Delete&nbsp;" 

}



function check()
{
    const item = document.getElementById('task-box');
    const have = item.classList.contains('checked');
    if (have)
    { removeChecked() }
    else
    { checked() }
}

function checked()
{ 
    document.getElementById("task-box").classList.add('checked');
    document.getElementById("btn-complete").innerHTML = "InComplete"
    document.getElementById("btn-complete").classList.add('change-btn');

}

function removeChecked()
{
    document.getElementById("task-box").classList.remove('checked');
    document.getElementById("btn-complete").innerHTML = "Complete"
    document.getElementById("btn-complete").classList.remove('change-btn');
}


function addItem()
{
    var idItem = database.length + 1
    var nameItem = document.getElementById("name").value;
    var desItem = document.getElementById("des").value;
    var statusItem = 0

    var obj = { id : idItem , name : nameItem , des : desItem , status : statusItem }

    database.push(obj)

}

console.log(database)