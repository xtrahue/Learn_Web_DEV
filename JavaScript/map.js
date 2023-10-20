const num = [1, 2, 3, 4, 5, 6, 7, 8];
const evens = num.map(function (x) {
    if (x % 2 == 0) {
        return x;
    }
    else {
        return -1;
    }
})
