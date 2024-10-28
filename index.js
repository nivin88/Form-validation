const arr = [];
var editIndex = -1;
var form = document.getElementById("form");
form.addEventListener("submit", function validation(event) {        // submit function
  event.preventDefault();
  let fname = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  if (fname === "") {
    document.getElementById("form").style.boxShadow="15px 10px 26px";
    document.getElementById("nameerror").innerHTML =
      "This Field is Required...";
    document.getElementById("nameerror").style.color = "red";
    document.getElementById("nameerror").value
      "2px 2px 2px  black";
  } else {
    document.getElementById("nameerror").innerHTML = "";
  }

  if (age === "") {
    document.getElementById("form").style.boxShadow=" 15px 10px 26px";
    document.getElementById("ageerror").innerHTML = "This Field is Required...";
    document.getElementById("ageerror").style.color = "red";
    document.getElementById("ageerror").value
  } else {
    document.getElementById("ageerror").innerHTML = "";
  }
  if (editIndex !== -1 &&fname !== "" && age !== "") {
   
    arr[editIndex].name = fname;
    arr[editIndex].age = age;
    editIndex=-1
  } else if(fname !== "" && age !== "") {
   
    let obj = {
      name: fname,
      age: age,
    };
    arr.push(obj);
  }
  if (fname !== "" && age !== "") {
    document.getElementById("form").style.boxShadow=" 0px 0px 10px 3px goldenrod"
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
  }
  table();
});


function table() {               // table function
  let datas = "";
  for (let i = 0; i < arr.length; i++) {
    datas += "<tr>";
    datas += "<td>" + (i + 1) + "</td>";
    datas += "<td>" + arr[i].name + " </td>";
    datas += "<td>" + arr[i].age + " </td>";
    datas +=
      "<td><button onclick='edit(" +
      i +
      ")'>Edit</button> <button onclick='del(" +
      i +
      ")'>Delete</button> </td>";
    datas += "</tr>";
  }
  document.getElementById("tbody").innerHTML = datas;
}



function edit(editIt) {                       // edit function
  for (let i = 0; i < arr.length; i++) {
    if (editIt == i) {
      editIndex = i;
      document.getElementById("name").value = arr[i].name;
      document.getElementById("age").value = arr[i].age;
    }
  }
 
}




function del(deleted) {             // delete function
  arr.splice(deleted, 1);
  table();
}

