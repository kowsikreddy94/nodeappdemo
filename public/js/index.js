//*******************Form1 Function ********************************
  function form1f() {
    console.log("form1");
    var a1 = document.forms["form1"]["a1"].value;
    // var a2 = document.forms["form1"]["a2"].value;
    // var a3 = document.forms["form1"]["a3"].value;
    if (a1 == "") {
      alert("Fields must be filled");
      return false;
    }
    else{
      fetch('/form1', 
      {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({a1: a1})
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        form1html(data,a1);
      })
      .catch((error) => {
        console.error('Error:', error);
      }); 
      return false;
    }
  }

  function form1html(data,a1) {

        var country = a1;
        document.getElementById("myData").innerHTML = "";
        var mainContainer = document.getElementById("myData");
        
        
        for (var i = 0; i < data.length; i++) {
            var div = document.createElement("div");
            div.style.padding = '20px';
            div.innerHTML = (i+1)+". Country Name = "+ data[i].Entity.value +"; Year = "+ data[i].Year.value+"; Smokers = "+ data[i].Smokers.value;
            mainContainer.appendChild(div); 
        }
  }

  //*******************Form1 Function ********************************
  function form2f() {
    console.log("form2");
    var a1 = document.forms["form2"]["a1"].value;
    var a2 = document.forms["form2"]["a2"].value;
    // var a3 = document.forms["form1"]["a3"].value;
    if (a1 == "" || a2 == "") {
      alert("Fields must be filled");
      return false;
    }
    else{
      fetch('/form2', 
      {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({a1: a1,a2:a2})
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        form2html(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      }); 
      return false;
    }
  }

  function form2html(data) {

        
        document.getElementById("myData").innerHTML = "";
        var mainContainer = document.getElementById("myData");
        
        
        for (var i = 0; i < data.length; i++) {
            var div = document.createElement("div");
            div.style.padding = '20px';
            div.innerHTML = (i+1)+". Country Name = "+ data[i].Entity.value +"; Year = "+ data[i].Year.value+"; Smokers = "+ data[i].Smokers.value;
            mainContainer.appendChild(div); 
        }
  }

  // function retrive_fun() {
//   var num = document.forms["retrive_form"]["retrive_no"].value;
//   if (num == "") {
//     alert("Name must be filled out");
//     return false;
//   }
//   else{
//     fetch('/profile/retrive_redis', {
//       method: 'POST', // or 'PUT'
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({Value: num}),
//     })
//     .then(response => response.json())
//     .then(data => {
//       console.log('Success:', data);
//       retrive_display(data);
//     })
//     .catch((error) => {
//       console.log('Error:', error);
//     }); 
//     return false;
//   }
// }

