function test() {
    if (true) {
        var b = "world";
        var a = "hello";
    }
}

test();

function generateId(employeeList) {

    function formatText(text, prev, next){
        return text.split(prev).join(next);
    }

    const PREFIX = 'Keyvalue';
    const formatedName = formatText(employeeList.employeeName," ","_");
    const formatedDate = formatText(employeeList.joiningDate,'-',"_"); 

    const employeeId = `${PREFIX}_${formatedName}_${formatedDate}`;
    // console.log(employeeId)
    return employeeId;
}

const employeeList = [
    {
        employeeName : "Vishal M",
        joiningDate : "12-04-2021",
        role : "Full Stack"  
    },
    {
        employeeName : "Susan Kurian",
        joiningDate : "12-04-2021",
        role : "Devops"  
    }
]

employeeList.forEach( employee => {
    employee.employeeId = generateId(employee);
});
Object.freeze(employeeList);

console.log(employeeList)