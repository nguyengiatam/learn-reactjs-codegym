const student = [
    {
        name: "Nguyen Van A",
        sex: "female"
    },
    {
        name: "Nguyen Van B",
        sex: "female"
    },
    {
        name: "Nguyen Van C",
        sex: "female"
    }
];

let result = student.every(element => element.sex === 'female');
console.log(result);