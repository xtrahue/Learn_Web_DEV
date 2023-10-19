function tenTimes(func) {
    for (let i = 1; i <= 10; i++) {
        func();
    }
}

function rollDie() {
    console.log(Math.floor((Math.random() * 6) + 1));
}

tenTimes(rollDie);
