console.log("HELLO!!!");
setTimeout(() => {
    console.log("...Why are you still here !!!");
}, 3000)

console.log("Fuck off");



//interval-->repeat something after an interval ;
const id = setInterval(() => {
    console.log(Math.random());
}, 2000)

//can stop it using clearInterval(id)
