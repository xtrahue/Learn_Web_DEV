const num = [1, 2, 3, 4, 5, 6, 7];

function print(x) {
    console.log(x);
}

num.forEach(print);

num.forEach(function (x) {
    console.log(x);
})
