function upIt(name) {
    try {
        console.log(name.toUpperCase());
    } catch (e) {
        console.log("Please enter an alphabet only string");
    }
}
