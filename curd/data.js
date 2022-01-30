async function postdata() {
  var forData = {
      name : document.getElementById("name").value,
      email : document.getElementById("email").value,
      country : document.getElementById("country").value,
      state : document.getElementById("state").value,
      city : document.getElementById("city").value
  }
 try {
        await fetch("https://61f531ae62f1e300173c4040.mockapi.io/api/user",{
        method : "POST",
        body: JSON.stringify(forData),
        headers: {
            "Content-type": "application/json"
        }
    })
    getData()
    alert("Thanks For Updated your Details")
 } catch (er) {
     alert("Error")
 }
}
async function getData() {
    try {
        let userInput = await fetch("https://61f531ae62f1e300173c4040.mockapi.io/api/user");
        let conUser = await userInput.json();
        let tbody = document.getElementById("tbody");
        tbody.innerText= ""
        conUser.forEach(user => {
         let tr =  document.createElement("tr")           
            tr.innerHTML = 
            `            
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.country}</td>
            <td>${user.state}</td>
            <td>${user.city}</td>
            <td><button onclick = "editData()">edit</button><td> 
            <td><button onclick = "deleteData()">delete</button><td>          
            `
            tbody.appendChild(tr)
        });
    } catch (error) {
        alert("Error")
    }
}
async function editData() {
    try {
        
        alert("Data was edited")
    } catch (error) {
        alert("data not found")
    }
}
async function deleteData() {
    try {
        let del = await fetch("https://61f531ae62f1e300173c4040.mockapi.io/api/user",{
        method : "DELETE",
        body: forData,
        headers: {
            "Content-type": "application/json"
        }
        })

        alert("data was deleted")
    } catch (error) {
        alert("Something Wrong")
    }
}

// get get the data
// Put edit
// post send the data
// delete delete the data