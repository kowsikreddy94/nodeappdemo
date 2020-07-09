function enter_sentence() {
  console.log("enter_sentence");
   var a1 = document.forms["FormSentence"]["SenId"].value;
  // var a3 = document.forms["form1"]["a3"].value;
    fetch('/enterSentence', 
    {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({Input: a1})
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      enter_sentence_disp(data);
      enter_sentence_disp_red(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    }); 
    return false;
}

function enter_sentence_disp(data) {
  document.getElementById("myData").innerHTML = "";
  //document.getElementById("output_div").innerHTML = "";
      var mainContainer = document.getElementById("myData");
      for (var i = 0; i < data.green.length; i++) {
          if(data.green[i])
          {
          var div = document.createElement("div");
          div.style.padding = '20px';
          div.innerHTML = " word = "+ data.green[i].name;
          mainContainer.appendChild(div); 
          }
      }
}
function enter_sentence_disp_red(data) {
      var mainContainer = document.getElementById("myDataNo");
      for (var i = 0; i < data.red.length; i++) {
          if(data.red[i])
          {
          var div = document.createElement("div");
          div.style.padding = '20px';
          div.innerHTML = " word = "+ data.red[i];
          mainContainer.appendChild(div); 
          }
      }
}
// function enter_sentence_disp(backendData,a1) {
//   // var Inputarray = a1.toString().split(/\s+/);
//   // var mainContainer = document.getElementById("myData");
//   // var mainContainer1 = document.getElementById("myDataNo");
//   // for(var i=0;i<Inputarray.length;i++)
//   // {
//   //   for(var j=0;j<backendData.length;j++)
//   //   {
//   //     if(Inputarray[i] == backendData[j])
//   //     {
//   //       var div = document.createElement("div");
//   //       div.style.padding = '20px';
//   //       div.innerHTML = "Name " + backendData[j].name;
//   //       mainContainer.appendChild(div); 
//   //     }
//   //     else{
//   //       var div1 = document.createElement("div");
//   //       div1.style.padding = '20px';
//   //       div1.innerHTML = "Name " + Inputarray[i].name;
//   //       mainContainer1.appendChild(div1); 
//   //     }
//   //   }
//   // }
//   var red = backendData.red;
//   var green = backendData.green;
//   console.log("red = ",red);
//   console.log(green);

// }


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

function search_name() {
  console.log("get_data");
  // var a1 = document.forms["form1"]["a1"].value;
  // var a2 = document.forms["form1"]["a2"].value;
  // var a3 = document.forms["form1"]["a3"].value;
    fetch('/get_data', 
    {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      //body: JSON.stringify({a1: a1})
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      // console.log("in getIPF data = ",data)
      // getIPHtml(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    }); 
    return false;
}

function search_name() {
  console.log("get_data");
  // var a1 = document.forms["form1"]["a1"].value;
  // var a2 = document.forms["form1"]["a2"].value;
  // var a3 = document.forms["form1"]["a3"].value;
    fetch('/get_data', 
    {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      //body: JSON.stringify({a1: a1})
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      // console.log("in getIPF data = ",data)
      // getIPHtml(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    }); 
    return false;
}

function findFreuencyf() {
  console.log("findFreuencyf");
  // var a1 = document.forms["form1"]["a1"].value;
  // var a2 = document.forms["form1"]["a2"].value;
  // var a3 = document.forms["form1"]["a3"].value;
    fetch('/most_frequent', 
    {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      //body: JSON.stringify({a1: a1})
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      // console.log("in getIPF data = ",data)
      // getIPHtml(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    }); 
    return false;
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
