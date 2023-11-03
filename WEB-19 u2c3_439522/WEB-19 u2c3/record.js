// fill in javascript code here

let myForm = document.querySelector("form");
let inputName = document.getElementById("name");
let EmployeeID= document.getElementById("employeeID");
let Department = document.getElementById("department");
let Experiance = document.getElementById("exp");
let EmailAddress = document.getElementById("email");
let MobileNumber = document.getElementById("mbl");
let Role = document.getElementById("role");
let Delete = document.getElementById("delete");
let tbody = document.querySelector("tbody");
let AllData = [];
 

myForm.addEventListener("submit",function(e)
{
    e.preventDefault();
    let Data = {};
    Data.input1 = inputName.value;
    Data.input2 = EmployeeID.value;
    Data.input3 = Department.value;
    Data.input4 = Experiance.value;
    Data.input5 = EmailAddress.value;
    Data.input6 = MobileNumber.value;
    Data.input7 = Role.value;
    Data.input8 = Delete.value;
    AllData.push(Data);

    tbody.innerHTML = null;

    AllData.map((element) =>
    {
        let row = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        let td6 = document.createElement("td");
        let td7 = document.createElement("td");
        let td8 = document.createElement("td");
        let deleteBtn = document.createElement("button");
        
        td1.innerText = element.input1;
        td2.innerText = element.input2;
        td3.innerText = element.input3;
        td4.innerText = element.input4;
        td5.innerText = element.input5;
        td6.innerText = element.input6;
        td7.innerText = element.input7;
        td8.innerText = element.input8;

        
        deleteBtn.innerText = "Delete";
        deleteBtn.addEventListener("click", () => {
          AllData.innerText= "Delete";
          tbody.removeChild(row);
        });

        row.append(td1,td2,td3,td4,td5,td6,td7,td8,deleteBtn);
        tbody.append(row);
    })
})