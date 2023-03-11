console.log(1)
console.log(2)
setTimeout(() => {
    console.log('time waiting')
}, 4000)
console.log(4)
console.log(5)
console.log(6)
function doSomething (){
    console.log(3);
}
// fetch
function getFetch(getURL){
    fetch(getURL)
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err.message)
    })
}

// Await
async function getUsers(url){
    try{
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
    }
    catch(err){
        console.logo(err);
    }
}

let num = 0;
 const  intervalId =  setInterval(() => {
    console.log(num++)
},1000)