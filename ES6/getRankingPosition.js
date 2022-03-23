const student = [
    {
        name: "A",
        score: 8
    },
    {
        name: "B",
        score: 3
    },
    {
        name: "C",
        score: 9
    }
];

student.sort((student1, student2) => student1.score - student2.score);
let position = student.findIndex(element => element.name === 'A');
console.log(position);