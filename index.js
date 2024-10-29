const arr = JSON.parse(localStorage.getItem("userData")) || [];
var editIndex = -1;
var form = document.getElementById("form");

window.onload = function() {
  table();
};

form.addEventListener("submit", function validation(event) {        // submit function
  event.preventDefault();
  let fname = document.getElementById("name").value;
  let password = document.getElementById("password").value;
  if (fname === "") {
    document.getElementById("form").style.boxShadow="15px 10px 26px";
    document.getElementById("nameerror").innerHTML =
      "This Field is Required...";
    document.getElementById("nameerror").style.color = "red";
    // document.getElementById("nameerror").value
      "2px 2px 2px  black";
  } else {
    document.getElementById("nameerror").innerHTML = "";
  }

  if (password === "") {
    document.getElementById("form").style.boxShadow=" 15px 10px 26px";
    document.getElementById("passworderror").innerHTML = "This Field is Required...";
    document.getElementById("passworderror").style.color = "red";
    // document.getElementById("ageerror").value
  } else {
    document.getElementById("passworderror").innerHTML = "";
  }
  if (editIndex !== -1 && fname !== "" && password !== "") {
   
    arr[editIndex].name = fname;
    arr[editIndex].password = password;
    editIndex=-1
  } else if(fname !== "" && password !== "") {
   
    let obj = {
      name: fname,
      password: password,
    };
    arr.push(obj);
  }
  if (fname !== "" && password !== "") {
    document.getElementById("form").style.boxShadow=" 0px 0px 10px 3px goldenrod"
    document.getElementById("name").value = "";
    document.getElementById("password").value = "";
    saveToLocalStorage();
  }
  table();
});


function table() {               // table function
  let datas = "";
  for (let i = 0; i < arr.length; i++) {
    datas += "<tr>";
    datas += "<td>" + (i + 1) + "</td>";
    datas += "<td>" + arr[i].name + " </td>";
    datas += "<td>" + arr[i].password + " </td>";
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
      document.getElementById("password").value = arr[i].password;
    }
  }
 
}




function del(deleted) {             // delete function
  arr.splice(deleted, 1);
  saveToLocalStorage();
  table();
}

function saveToLocalStorage() {
  localStorage.setItem("userData", JSON.stringify(arr));
}
