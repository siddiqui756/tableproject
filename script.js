var data = [
    {StudentId: 121, StudentName: "John", StudentDivision: "It", StudentRollNo: "12345"},
    {StudentId: 125, StudentName: "Nick", StudentDivision: "It", StudentRollNo: "123"},
    {StudentId: 127, StudentName: "Sam", StudentDivision: "It", StudentRollNo: "123"},
    {StudentId: 120, StudentName: "Tom", StudentDivision: "It", StudentRollNo: "12345"},
];


var btn = document.querySelector("button");
btn.onclick = function () {

            var newStudentID = parseInt(document.getElementById("newStudetnId").value)
            var newStudetnName = (document.getElementById("newStudetnName").value)
            var newStudetnDivision = (document.getElementById("newStudetnDivision").value)
            var newStudetntRollNo = parseInt(document.getElementById("newStudetntRollNo").value);
        
            data.push({
                StudentId: newStudentID,
                StudentName: newStudetnName,                
                StudentDivision: newStudetnDivision,
                StudentRollNo: newStudetntRollNo,
            })

            updateTable(data);
}


function updateTable(data){
    var data4 = document.getElementById("data2");
    // console.log(data4);

    const tbody = data4.querySelector("tbody")
    // console.log(tbody);

   
    tbody.innerHTML = '';

    data.forEach(value => {
        var newRow = document.createElement("tr")

        newRow.innerHTML = 
        `<td>${value.StudentId}</td>
        <td>${value.StudentName}</td>
        <td>${value.StudentDivision}</td>
        <td>${value.StudentRollNo}</td>`;
        tbody.appendChild(newRow)
    })
    // console.log(data);
}
updateTable(data)




var btn2 = document.getElementById("daTa");
btn2.addEventListener("click", function () {
    var notes = document.getElementById("newStudetnId").value
    
    var num = data.filter ( (val) => { return val.StudentId == notes} )
    
    updateTable(num)
})




var btn3 = document.getElementById("DATa")
btn3.addEventListener("click", function () {
    var data4 = document.getElementById("data2");

    const tbody = data4.querySelector("tbody")

    tbody.innerHTML = '';

    data.forEach(value => {
        var newRow = document.createElement("tr")

        newRow.innerHTML = 
        `<td>${value.StudentId}</td>
        <td>${value.StudentName}</td>
        <td>${value.StudentDivision}</td>
        <td>${value.StudentRollNo}</td>`;
        tbody.appendChild(newRow)
    })
})

