const students = [
    { name: "Jane", age: 17, grade: 5 },
    { name: "Bill", age: 17, grade: 4 },
    { name: "Martha", age: 18, grade: 3 },
    { name: "Bob", age: 17, grade: 5 },
    { name: "John", age: 19, grade: 2 },
    { name: "Jane", age: 17, grade: 4 },
    { name: "Jill", age: 19, grade: 5 },
];


const age = process.argv[2];
const grade = process.argv[3];

let answer = false;

students.forEach((student) => {
    if(student.age < age && student.grade < grade){
        answer = true;
    }
})
answer ? console.log(`There are students who are younger than ${age} with a grade worse than ${grade}`)
: console.log(`There are no students who are younger than ${age} with a grade worse than ${grade}`)