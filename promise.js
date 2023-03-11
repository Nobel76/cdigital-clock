// const getData = new Promise((resolve, reject) =>{
//     resolve(566665);
// })
// getData.then(data => console.log(data + 2))

// const { reject } = require("async")


// const getData = new Promise((resolve, reject) =>{
//     // resolve(566665);
//     reject('No data available')
// })
// getData
// .then(data => console.log(data + 2))
// .catch(err => console.log('ERR' , err))


const randomData = new Promise((resolve, reject) => {
    const num = Math.random()*10;
    console.log(num)
    if(num < 5  ){
        resolve(56665);
    }
    else{
        reject('No random data found')
    }
})
randomData
.then(data = console.log(data + 2))
.catch(err => console.log('ERR', err))
