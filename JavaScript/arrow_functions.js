const num = [1, 2, 3, 4, 5, 6, 7];
const add = (x, y) => {
    return x + y;
}

const add2 = (x, y) => (
    x + y
)

const add3 = (x, y) => x + y;

const double_it = x => 2 * x;


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

const summerize = movies.map(function (mov) {
    return `${mov.title} -> IMDB:${mov.score / 10}`;
})


const summerize2 = movies.map((mov) => {
    return `${mov.title} -> IMDB:${mov.score / 10}`;
})

const summerize3 = movies.map((mov) => (
    `${mov.title} -> IMDB:${mov.score / 10}`
))

const summerize4 = movies.map(mov => (`${mov.title} -> IMDB:${mov.score / 10}`))
