let num = parseInt(prompt('Please enter the maximum limit'));
let rand = Math.floor((Math.random() * num) + 1);

let cnt = 1;
let x = prompt('Enter your guess');


while (x != rand) {
    if (x === 'q') {
        break;
    }
    else if (x > num || x <= 0) {
        x = prompt(`Number out of bound. Try within the range ${1} to ${num}`);
    }
    else if (x < rand) {
        x = prompt('Too small, try again')
    }
    else if (x > rand) {
        x = prompt('Too large, try again');
    }
    cnt++;
}

console.log(`It took ${cnt} guesses, SHAME ON YOU!!`);
