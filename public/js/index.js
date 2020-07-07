//*******************Form1 Function ********************************
function getIPf() {
  console.log("getIP");
  // var a1 = document.forms["form1"]["a1"].value;
  // var a2 = document.forms["form1"]["a2"].value;
  // var a3 = document.forms["form1"]["a3"].value;
 
  
    fetch('/getIP', 
    {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
      //body: JSON.stringify({a1: a1})
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      console.log("in getIPF data = ",data)
      getIPHtml(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    }); 
    return false;

}

function getIPHtml(data){
    
    console.log("IP = ",data.text)
    document.getElementById("IP").innerHTML = "";
    var mainContainer = document.getElementById("IP");    
    // var div = document.createElement("h3");
    // div.style.padding = '20px';
    document.getElementById("IP").innerHTML = "IP Address = "+data.text;
    // div.innerHTML = "IP Address = "+data.text;
    // mainContainer.appendChild(div); 
    
  

}
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

  //******************************************************************

  //*******************Form2 Function ********************************
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

//******************************************************************

//****************************Form3*********************************
function form3f() {
  var a1 = document.forms["form3"]["a1"].value;
  var a2 = document.forms["form3"]["a2"].value;
  var a3 = document.forms["form3"]["a3"].value;
  console.log(a1 + ""+a2 + ""+a3);
 fetch('/form3', {
   method: 'POST', // or 'PUT'
   headers: {
     'Content-Type': 'application/json',
   },
   body: JSON.stringify({a1: a1,a2: a2,a3: a3}),
 })
 .then(response => response.json())
 .then(data => {
   console.log('Success:', data);
   form3html(data);
 })
 .catch((error) => {
   console.error('Error:', error);
 }); 
 return false;
}

function form3html(data) {  
  // document.getElementById("output_div").innerHTML = "";
  document.getElementById("highChart").innerHTML = "";
 var result =[];
 for(var i=0;i<data.length;i++)
 {
 var data_final ={};
 data_final["x"] = data[i].Year.value;
 data_final["y"] = data[i].Smokers.value;
 result.push(data_final);
 }
 console.log(result);

 $(document).ready(function() {
   var chart = {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false
   };
   var title = {
      text: 'Data in bar chart'   
   };
   var tooltip = {
      pointFormat: '{point.x}: <b>{point.y}</b>'
   };
   var plotOptions = {
      bar: {
         allowPointSelect: true,
         cursor: 'pointer',
         
         dataLabels: {
           
            enabled: true,
           //  format: pointDisplayFormat,
            inside: true,
            crop: false,
            overflow: 'none',
            align: 'right',
           format: '<b>{point.x}</b>: {point.y:} ',
            style: {
               color: (Highcharts.theme && Highcharts.theme.contrastTextColor)||
               'black'
            }
         }
      }
   };
   
   var series = [{
      type: 'bar',
      name: 'Bar display',
      color : 'green',
     //  colorByPoint:true,
      data: result
   }];
   var json = {};   
   json.chart = chart; 
   json.title = title;     
   json.tooltip = tooltip;  
   json.series = series;
   json.plotOptions = plotOptions;
   $('#highChart').highcharts(json);  
}); 
 }

//******************************************************************

// // *******************quiz 3 Form 1 Function ********************************
// function form1q3f() {
//   var a1 = document.forms["form1q3"]["a1"].value;
//   // var lat2 = document.forms["form1_twolat"]["form1_twolat2"].value;
//   if (a1 == "" ) {
//     alert("country code must be filled out");
//     return false;
//   }
//   else{
//     fetch('/form1q3', 
//     {
//       method: 'POST',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify({a1: a1})
//     })
//     .then(response => response.json())
//     .then(data => {
//       console.log('Success:', data);
//       form1q3html(data);
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     }); 
//     return false;
//   }
// }

// //*******************quiz 3 Form 1 Function append html elements********************************
// function form1q3html(data) {
//   console.log("data in function",data)
//   document.getElementById("myData").innerHTML = "";
//   var mainContainer = document.getElementById("myData");
  
//   var div = document.createElement("div");
//     div.style.padding = '20px';
//     div.innerHTML = "The time to do this query = " + data[data.length-1].timeTaken+ " ms";
//     mainContainer.appendChild(div); 

//   for (var i = 0; i < data.length-1; i++) {
//     var div = document.createElement("div");
//     div.style.padding = '20px';
//     div.innerHTML = (i+1)+". Year = "+ data[i].year.value +"; Number of Terrorist Incidents = "+ data[i].NumberTerroristIncidents.value+"; Country Name = "+ data[i].Entity.value;
//     mainContainer.appendChild(div); 
//   }

// }

// // *******************quiz3 Form 2 Function ********************************
// function form2q3f() {
//    var a1 = document.forms["form2q3"]["a1"].value;
//    var a2 = document.forms["form2q3"]["a2"].value;
   
//    if (a1 == "" || a2=="" ) {
//      alert("All entries must be filled");
//      return false;
//    }
//    else{
//      fetch('/form2q3', 
//      {
//        method: 'POST',
//        headers: {'Content-Type': 'application/json'},
//        body: JSON.stringify({a1: a1,a2:a2})
//      })
//      .then(response => response.json())
//      .then(data => {
//        console.log('Success:', data);
//        form2q3html(data);
//      })
//      .catch((error) => {
//        console.error('Error:', error);
//      }); 
//      return false;
//    }
//  }
 
//  //******************* quiz3 Form 2 Function append html elements********************************
//  function form2q3html(data) {
//    console.log("data in function",data)
//    document.getElementById("myData").innerHTML = "";
//    var mainContainer = document.getElementById("myData");
   
//    var div = document.createElement("div");
//      div.style.padding = '20px';
//      div.innerHTML = "The time to do this query = " + data[data.length-1].timeTaken+ " ms";
//      mainContainer.appendChild(div); 
 
//    for (var i = 0; i < data.length-1; i++) {
//      var div = document.createElement("div");
//      div.style.padding = '20px';
//      div.innerHTML = (i+1)+". Year = "+ data[i].year.value +"; Number of Terrorist Incidents = "+ data[i].NumberTerroristIncidents.value+"; Country Name = "+ data[i].Entity.value;
//      mainContainer.appendChild(div); 
//    }
 
//  }

//  // *******************quiz3 Form 3 Function ********************************
// function form3q3f() {
//    var a1 = document.forms["form3q3"]["a1"].value;
//    var a2 = document.forms["form3q3"]["a2"].value;
   
//    if (a1 == "" || a2=="" ) {
//      alert("All entries must be filled");
//      return false;
//    }
//    else{
//      fetch('/form3q3', 
//      {
//        method: 'POST',
//        headers: {'Content-Type': 'application/json'},
//        body: JSON.stringify({a1: a1,a2:a2})
//      })
//      .then(response => response.json())
//      .then(data => {
//        console.log('Success:', data);
//        form3q3html(data);
//      })
//      .catch((error) => {
//        console.error('Error:', error);
//      }); 
//      return false;
//    }
//  }
 
//  //******************* quiz3 Form 3 Function append html elements********************************
//  function form3q3html(data) {
//    console.log("data in function",data)
//    document.getElementById("myData").innerHTML = "";
//    var mainContainer = document.getElementById("myData");
   
//    var div = document.createElement("div");
//      div.style.padding = '20px';
//      div.innerHTML = "The time to do this query = " + data[data.length-1].timeTaken+ " ms";
//      mainContainer.appendChild(div); 
 
//    for (var i = 0; i < data.length-1; i++) {
//      var div = document.createElement("div");
//      div.style.padding = '20px';
//      div.innerHTML = (i+1)+". Count = "+ data[i].count.value +"; Country Name = "+ data[i].name.value;
//      mainContainer.appendChild(div); 
//    }
 
//  }

//  // *******************quiz3 Form 4 Function ********************************
// function form4q3f() {
//    var a1 = document.forms["form4q3"]["a1"].value;
//    var a2 = document.forms["form4q3"]["a2"].value;
//    var a3 = document.forms["form4q3"]["a3"].value;

//    if (a1 == "" || a2=="" ||a3 =="") {
//      alert("All entries must be filled");
//      return false;
//    }
//    else{
//      fetch('/form4q3', 
//      {
//        method: 'POST',
//        headers: {'Content-Type': 'application/json'},
//        body: JSON.stringify({a1: a1,a2:a2,a3:a3})
//      })
//      .then(response => response.json())
//      .then(data => {
//        console.log('Success:', data);
//        form4q3html(data);
//      })
//      .catch((error) => {
//        console.error('Error:', error);
//      }); 
//      return false;
//    }
//  }
 
//  //******************* quiz3 Form 4 Function append html elements********************************
//  function form4q3html(data) {
//    console.log("data in function",data)
//    document.getElementById("myData").innerHTML = "";
//    var mainContainer = document.getElementById("myData");
   
//    var div = document.createElement("div");
//      div.style.padding = '20px';
//      div.innerHTML = "The total time taken = " + data[data.length-1].totalTime+ " ms";
//      mainContainer.appendChild(div); 
 
//    for (var i = 0; i < data.length-1; i++) {
//      var div = document.createElement("div");
//      div.style.padding = '20px';
//      div.innerHTML = "Time taken for query "+(i+1)+" = "+ data[i].timeTaken+" ms";
//      mainContainer.appendChild(div); 
//    }
 
//  }

//  // *******************quiz3 Form 5 Function ********************************
// function form5q3f() {
//    var a1 = document.forms["form5q3"]["a1"].value;
//    var a2 = document.forms["form5q3"]["a2"].value;
//    var a3 = document.forms["form5q3"]["a3"].value;
   
//    if (a1 == "" || a2=="" ||a3 == "") {
//      alert("All entries must be filled");
//      return false;
//    }
//    else{
//      fetch('/form5q3', 
//      {
//        method: 'POST',
//        headers: {'Content-Type': 'application/json'},
//        body: JSON.stringify({a1: a1,a2:a2,a3:a3})
//      })
//      .then(response => response.json())
//      .then(data => {
//        console.log('Success:', data);
//        form5q3html(data);
//      })
//      .catch((error) => {
//        console.error('Error:', error);
//      }); 
//      return false;
//    }
//  }
 
//  //******************* quiz3 Form 3 Function append html elements********************************
//  function form5q3html(data) {
//    console.log("data in function",data)
//    document.getElementById("myData").innerHTML = "";
//    var mainContainer = document.getElementById("myData");
   
//    var div = document.createElement("div");
//      div.style.padding = '20px';
//      div.innerHTML = "The total time taken = " + data[data.length-1].totalTime+ " ms";
//      mainContainer.appendChild(div); 
 
//    for (var i = 0; i < data.length-1; i++) {
//      var div = document.createElement("div");
//      div.style.padding = '20px';
//      div.innerHTML = "Time taken for query "+(i+1)+" = "+ data[i].timeTaken+" ms";
//      mainContainer.appendChild(div); 
//    }
 
//  }