const scores = {
    rohit: 58,
    gill: 56,
    kohli: 121,
    shreyas: 21,
    rahul: 45,
    hardik: 34
}

for (let it in scores) {
    console.log(`${it} scored ${scores[it]}.`);
}
