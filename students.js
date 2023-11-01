const students = [
    { name: "Jane", age: 17, grade: 5 },
    { name: "Bill", age: 17, grade: 4 },
    { name: "Martha", age: 18, grade: 3 },
    { name: "Bob", age: 17, grade: 5 },
    { name: "John", age: 19, grade: 2 },
    { name: "Jane", age: 17, grade: 4 },
    { name: "Jill", age: 19, grade: 5 },
];


const grade = process.argv[2]
console.log(`Students who's grade is ${grade} are:`)
students.forEach((student) => {
   if(student.grade == grade){
    console.log(student.name)
   }
})

