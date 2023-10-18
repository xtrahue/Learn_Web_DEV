let x = prompt('Enter what you Wanna Do.');
let our_list = [];

while (x != 'quit') {
    if (x === "new") {
        let task = prompt('Enter the task');
        our_list.push(task);
    }
    else if (x === "delete") {
        let ind = prompt('Enter the task index you wanna delete.');
        our_list.splice(ind, 1);
    }
    else if (x === "show") {
        console.log("<----------Our List----------->");
        for (let it = 0; it < our_list.length; it++) {
            console.log(`${it}) ${our_list[it]}`);
        }
    }
    x = prompt('Enter what you Wanna Do.');
}
