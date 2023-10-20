//Executes a reducer function on each element of the the array resulting in a single value 


const arr = [15, 4, 8, 98, 3, 12, 29];
const total = arr.reduce((accumulator, currentValue) => accumulator + currentValue);

const mini = arr.reduce((min, curr) => {
    if (curr < min) {
        return curr;
    }
    return min;
})

const movies = [
    {
        title: "Pathan",
        score: 92
    },
    {
        title: "Jawan",
        score: 93
    },
    {
        title: "Animal",
        score: 98
    },
    {
        title: "ZNMD",
        score: 98
    }
]

const most_rated = movies.reduce((bestMovie, currMovie) => {
    if (currMovie.score > bestMovie.score) {
        return currMovie;
    }
    return bestMovie;
})

//we can also intialize the accumulator with a given value

const total_and_val = arr.reduce((acc, curr) => (acc + curr), 30);


