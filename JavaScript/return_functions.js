function luckTry() {
    let rand = Math.random();
    return function () {
        if (rand > 0.5) {
            console.log('Congrats! You are lucky');
        }
        else {
            alert("You piece of a shit!");
            alert("Don't Close this window");
            alert("Don't Close this window");
            alert("Don't Close this window");

        }
    }

}

function isBetween(mini, maxi) {
    return function (num) {
        return num >= mini && num <= maxi;
    }
}

const isChild = isBetween(0,18) ;
const isAdult = isBetween(19,40) ; 
const isOld = isBetween(41,80) ;
