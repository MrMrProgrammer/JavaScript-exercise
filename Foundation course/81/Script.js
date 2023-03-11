var managerMenu = [
    { employeeId : 1 , employeeName : "aidaA" , tasks : ["learning html" , "learning css"] },
    { employeeId : 2 , employeeName : "bahar" , tasks : ["learning python" , "learning django"] },
    { employeeId : 3 , employeeName : "aidaM" , tasks : ["learning wordpress"] },
    { employeeId : 3 , employeeName : "aidaM" , tasks : ["learning wordpress"] },
    { employeeId : 1 , employeeName : "mahshid" , tasks : ["learning html" , "learning css"] }
]

var nameOfEmployee = prompt("نام کارمند مورد نظر خود را وارد کنید :‌ ")

managerMenu.forEach(function(emp)
{
    if (emp.employeeName == nameOfEmployee)
    {
        alert(`لیست کارهای این کارمند در زیر آمده است :‌\n${emp.tasks}`)

        var newTask = prompt("کار جدید این کارمند را وارد کنید :‌ ")

        emp.tasks.push(newTask)

    }
})


console.log(managerMenu)
