const express = require("express");
const Router = express.Router();
const conn = require("./connection");
//const lodash = require("lodash");
//random value generation
//const random = require('random');


var path = require("path");
const{Connection,Request}=require("tedious");
var fs = require('fs');
var findInFiles = require('find-in-files');

Router.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname+'/../../index.html'));
})


const superagent = require('superagent');
Router.get("/getIP", (req,resp)=>{
    var data;
    
    superagent.get('https://checkip.amazonaws.com').end((err, res) => {
        if (err) { 
            return console.log(err); 
        }
        console.log(res.body);
        console.log("res.text = ",res.text);
        // console.log('res = ',res)
        resp.send(res);
    });
    
})

///------------------------------------search wode in doc-------------------------------
// https://www.npmjs.com/package/find-in-files
// fs.readFile('/AAESH_CLASSES/SUMMER2020/AdvanceDB/Assignment_6/KOWSHIK_SOLUTION/public/img', 'utf8', function (err,data) {
    Router.post("/get_data", (req,resp)=>{ 
        var out =[];
        var array = fs.readFileSync(__dirname+'/../img/names.txt').toString().split(/\s+/);
        var a = 0;
        for(var i=0;i<array.length;i++)
        {
            var inputName = String(array[i]);
            // if(i==array.length-1){
            //     var inputName = String(array[i].substring(0,array[i].length));
            // }
            // else{
            //     var inputName = String(array[i].substring(0,array[i].length-1));
            // }
        //   findInFiles.find("[E,e]lizabeth", '.', '.txt$')
        findInFiles.findSync(inputName, '.', 'PrideandPrejudice.txt')
          .then(function(results) {
            //   console.log("results = ", results)
              for (var result in results) {
                  var new_obj ={};
                  var res = results[result];
                  new_obj["name"]=res.matches[0];
                  new_obj["count"]=res.count;
                  new_obj["result"]=result;
                  out.push(new_obj);
                  console.log('found "' + res.matches[0] + '" ' + res.count+ ' times in "' + result + '"');     
              }
              a++;
              if(a==array.length){
                resp.send(out);
              }
          });
        }
        });
        
        
        //code to count each word in a file
        Router.post("/most_frequent", (req,resp)=>{ 
            var file = __dirname+'/../img/numberOfTimes.txt';
            
            // read file from current directory
            fs.readFile(file, 'utf8', function (err, data) {
              if (err) throw err;
              var wordsArray = splitByWords(data);
              var wordsMap = createWordMap(wordsArray);
              var finalWordsArray = sortByCount(wordsMap);
            
              console.log('finalWordsArray = ',finalWordsArray);
              console.log('The word "' + finalWordsArray[0].name + '" appears the most in the file ' +
                finalWordsArray[0].total + ' times');
              resp.send(finalWordsArray);
                
            });
            
            function splitByWords (text) {
              // split string by spaces (including spaces, tabs, and newlines)
              var wordsArray = text.split(/\s+/);
              console.log('wordsArray = ',wordsArray);
              return wordsArray;
            }
            
            function createWordMap (wordsArray) {
              // create map for word counts
              var wordsMap = {};
              wordsArray.forEach(function (key) {
                if (wordsMap.hasOwnProperty(key)) {
                  wordsMap[key]++;
                } else {
                  wordsMap[key] = 1;
                }
              });
              return wordsMap;
            }
            
            function sortByCount (wordsMap) {
              // sort by count in descending order
              var finalWordsArray = [];
              finalWordsArray = Object.keys(wordsMap).map(function(key) {
                return {
                  name: key,
                  total: wordsMap[key]
                };
              });
            
              finalWordsArray.sort(function(a, b) {
                return b.total - a.total;
              });
              return finalWordsArray;
            }
            });


// ----------------------------------------------Form1-------------------------------------------------
// Router.post("/form1", (req,res)=>{
//     var code = req.body.a1;
//     // var year2 = req.body.a2;
//     // var countryCode = req.body.a3;

//     console.log("Country = ",code);
//     var sql=`select * from s where code = '${code}';`;
//     const request =new Request(sql,(err,rowCount,rows)=>{
//         if (err) {
//             console.error(err.message);
//         }else{
         
//             console.log(`${rowCount} row(s) returned`);
//             console.log(rows);
//             res.send(rows);
//         }
//         });
         
//         conn.execSql(request);
// });

// ----------------------------------------------Form2-------------------------------------------------
// Router.post("/form2", (req,res)=>{
//     var year1 = req.body.a1;
//     var year2 = req.body.a2;
//     // var countryCode = req.body.a3;

    
//     var sql=`select * from s where Year between '${year1}' and '${year2}';`;
//     const request =new Request(sql,(err,rowCount,rows)=>{
//         if (err) {
//             console.error(err.message);
//         }else{
         
//             console.log(`${rowCount} row(s) returned`);
//             // console.log(rows);
//             res.send(rows);
//             }
//         });
         
//         conn.execSql(request);
// });
// --------------------------------------------Form3 bar-------------------------------------------------
// Router.post("/form3", (req,res)=>{
//     var year1 = req.body.a1;//1980
//     var year2 = req.body.a2;//2012
//     var countryCode = req.body.a3;//2012

//     console.log("year1 = "+year1 + " year2 = "+year2 + " countryCode = "+countryCode);
//     var sql=`select * from s where code = '${countryCode}' and year between '${year1}' and '${year2}';`;
//     const call=new Request(sql,(err,rowCount,rows)=>{
//         if (err) {
//         console.error(err.message);
//         }else{
         
//         console.log(`${rowCount} row(s) returned`);
//         console.log(rows);
//         res.send(rows);
//         }
//         });
         
//         conn.execSql(call);
// });



// ----------------------------------------------scatter-------------------------------------------------
// Router.post("/example_graph", (req,res)=>{
//     var fir = req.body.First;//1980
//     var sec = req.body.Second;//2012
//     var thr = req.body.Third;//2012
//     var sql=`select * from s4 where entity = '${fir}' and year between '${sec}' and '${thr}';`;
//     const call=new Request(sql,(err,rowCount,rows)=>{
//         if (err) {
//         console.error(err.message);
//         }else{
         
//         console.log(`${rowCount} row(s) returned`);
//         console.log(rows);
//         res.json(rows);
//         }
//         });
         
//         conn.execSql(call);
// });



// ----------------------------------------------pie-------------------------------------------------
// Router.post("/pie_example", (req,res)=>{
//     var fir = req.body.First;
//     var sec = req.body.Second;
//     var thr = req.body.Third;
//     var sql=`select * from s4 where entity = '${fir}' and year between '${sec}' and '${thr}';`;
//     const call=new Request(sql,(err,rowCount,rows)=>{
//         if (err) {
//         console.error(err.message);
//         }else{
         
//         console.log(`${rowCount} row(s) returned`);
//         console.log(rows);
//         res.json(rows);
//         }
//         });
         
//         conn.execSql(call);
// });

// //************quiz 3 Form1 function database****************************
// Router.post("/form1q3", (req,res)=>{
    
//     var countryCode = req.body.a1;
//     // var lat2 = req.body.lat2;
    
//     var sql=`select year,NumberTerroristIncidents,Entity from dbo.ti where code = '${countryCode}' order by year asc`;
//     var newobj = {};
//     const starttime = Date.now();
//     const request = new Request(sql,(err,rowCount,rows)=>{
//         if (err) 
//         {
//             //console.log("inside error")
//             console.error(err.message);
//         }
//         else
//         {
//            // console.log(`${rowCount} row(s) returned`);
//             //console.log(rows);
//             newobj["timeTaken"] = Date.now() - starttime;
                
//                 //newobj["data"] = rows;
//             rows.push(newobj);
//             res.json(rows);    
//         }
//     });
//     conn.execSql(request);

// })

// //************quiz3 Form2****************************
// Router.post("/form2q3", (req,res)=>{
    
//     var year1 = req.body.a1;
//     var year2 = req.body.a2;
    
//     var sql= `Select year,NumberTerroristIncidents,Entity from dbo.ti where year between '${year1}' and '${year2}'`;
    
//     const starttime = Date.now();

//     const request = new Request(sql,(error,rowCount,rows)=>{
//         if (error) 
//         {
//             //console.log("inside error")
//             console.error(err.message);
//         }
//         else
//         {
//            console.log(`${rowCount} row(s) returned`);
//             // console.log("Number of data in 1 "+rows[0]);

//             // console.log("Number of data in 2 "+rows[1]);
            
//             var newobj = {};
//             newobj["timeTaken"] = Date.now() - starttime;    
//             //newobj["data"] = rows;
//             rows.push(newobj);
//             res.json(rows);    
//         }
//     });
//     conn.execSql(request);

// })


module.exports = Router;


    // const express = require("express");
    // const Router = express.Router();
    // const conn = require("../connection");
    // var path = require("path");
    // const {Connection,Request}= require("tedious");
    // const randomFloat = require('random-float');

// // for random value generation
// const random = require('random');
// //redis - ref : https://redislabs.com/get-started-with-redis/
// var redis = require("redis");
// var redisHost = 'redis-18761.c56.east-us.azure.cloud.redislabs.com';
// var redisPort = process.argv[3] || 18761;
// var redisAuth = 'oy6wGuEyOGpCMaRIiF27WPNljlpSqkEX';
// // var client = redis.createClient ({
// //     port : redisPort,
// //     host : redisHost
// // });  

// // client.auth(redisAuth, function(err, response){

// //     if(err){
// //         throw err;
// //     }
// //     else{
// //         console.log("Connection estabished to redis");
// //     }
// // });

// Router.get("/", (req,res)=>{
    
//     res.sendFile(path.join(__dirname+'/../home.html'));
//     // res.sendFile(path.join(__dirname+'/../sample1.html'));
// })
