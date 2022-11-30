let button = document.getElementById("button");
const catFactDiv = document.getElementById('catFact');
const catFactApi = "https://meowfacts.herokuapp.com/";

// button.addEventListener('click', function (catFactApi){
//   fetch(catFactApi) 
//       .then((response) => response.json()) 
//       .then((data) => cons );
// })

// let response = await fetch(catFactApi)
// // consle.olog(response)
// response.then(res => res.json()).then((data => {
//     console.log(data)
// }))
    

// button.addEventListener('click', () => {
    
//       catFactDiv.innerText = data[0]  
//   })
button.addEventListener('click',datast)

function datast(){
  fetch(catFactApi) 
        .then((response) => response.json()) 
        .then((data) => 
        (catFactDiv.innerHTML= `<h3>${data.data}</h3>` ));
}

document.getElementById("exent").addEventListener('click', function(){
  console.log('help me')
});
