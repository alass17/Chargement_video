
const titleArea = document.getElementById("title"); 
const contentArea = document.getElementById("content"); 
const videoArea = document.getElementById("video"); 
const button = document.getElementById("btn"); 
let number = 0;
let data = [];

function getData() {
  const request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (request.readyState == 4) {
      if(request.status == 200) {
        data = request.response
        }
      }
    }
    request.open("GET", "ajax.json");
    request.responseType = "json";
    request.send(null);
  }
  
function changeVideo() {
  if(data.length < 1){
    getData();
  }
  button.addEventListener('click', e => { 
          titleArea.innerHTML = data[number].title; 
          contentArea.innerHTML = data[number].content; 
          videoArea.setAttribute("src", data[number].url); 
          number == 2 ? number = 0 : number++; 
   })
 
  }
window.onload = changeVideo;


///::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// let data = [];
// let number = 0;
// const titleArea = document.getElementById("title");
// const contentArea = document.getElementById("content");
// const videoArea = document.getElementById("video");
// const button = document.getElementById("btn");

// // let data = [];

// // function getData() {
//   // button.addEventListener('click', e => {
//   //   const request = new XMLHttpRequest();
//   //   request.onreadystatechange = function () {
//   //     if (request.readyState == 4) {
//   //       if (request.status == 200) {
//   //         titleArea.innerHTML = request.response[number].title;
//   //         contentArea.innerHTML = request.response[number].content;
//   //         videoArea.setAttribute("src", request.response[number].url);
//   //         number == 2 ? number = 0 : number++;

//   //         // titleArea.innerHTML = data[number].title; 
//   //         // contentArea.innerHTML = data[number].content; 
//   //         // videoArea.setAttribute("src", data[number].url); 
//   //         // document.getElementById("title").innerHTML = request.response[0].title
//   //         // data = request.reponse
//   //         // console.log (request.response);
//   //       }
//   //     }
//     // }

//      function getData() {
//         const request = new XMLHttpRequest();
//         request.onreadystatechange = function() {
//           request.open("GET", "ajax.json");
//           request.responseType = "json";
//           request.send(null);
//           if (request.readyState == 4) {
//             if(request.status == 200) {
//               data = request.reponse
//               }
//             }
//           }
         
//         }

//         function changeVideo() {
//             if(data.length < 1){
//               getData();
//             }
//             button.addEventListener('click', e => { 
//                     titleArea.innerHTML = data[number].title; 
//                     contentArea.innerHTML = data[number].content; 
//                     videoArea.setAttribute("src", data[number].url); 
//                     number == 2 ? number = 0 : number++; 
//              })
           
//             }

//  window.onload = changeVideo;
            


