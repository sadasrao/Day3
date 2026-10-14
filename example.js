// const students = [
//   { name: 'Alice', age: 20, grade: 'A' },
//   { name: 'Bob', age: 22, grade: 'B' },
//   { name: 'Charlie', age: 21, grade: 'A' }
// ];

// const getStudentNames = (students) => {
//   return students.map(student => student.name);
// }

// const studentNames = getStudentNames(students);
// console.log(studentNames); // Output: ['Alice', 'Bob', 'Charlie']

// const getAverageAge = (students) => {
//   const totalAge = students.reduce((sum, student) => sum + student.age, 0);
//   return totalAge / students.length;
// }

// const averageAge = getAverageAge(students);
// console.log(averageAge); // Output: 21  
// const getStudentsByGrade = (students, grade) => {
//   return students.filter(student => student.grade === grade);
// }
// const studentsWithGradeA = getStudentsByGrade(students, 'A');
// console.log(studentsWithGradeA); 
// // Output: [{ name: 'Alice', age: 20, grade: 'A' }, { name: 'Charlie', age: 21, grade: 'A' }]
// const getStudentCountByGrade = (students) => {
//   return students.reduce((count, student) => {
//     count[student.grade] = (count[student.grade] || 0) + 1;
//     return count;
//   }, {});   
// }
// const studentCountByGrade = getStudentCountByGrade(students);
// console.log(studentCountByGrade); 
// // Output: { A: 2, B: 1 }

// const students={name:'Alice',age:20,grade:'A', greet: function() { console.log(`Hello, my name is ${this.name}`); }};
// students.greet(); // Output: Hello, my name is Alice
// students.name = 'Bob';
// students.greet(); // Output: Hello, my name is Bob
// students.updateGrade = function(newGrade) { this.grade = newGrade; };
// students.updateGrade('B');
// console.log(students.grade); // Output: B
// students.adddepartment = function(department) { this.department = department; };
// students.adddepartment('Computer Science');
// console.log(students.department); // Output: Computer Science
// students.method = function() { console.log(`I am ${this.name} and I study ${this.department}`); };
// students.method(); // Output: I am Bob and I study Computer Science

arr=[120,60,899];
console.log(arr.reduce((a,b)=>a+b,0));

const name=["Sadas","Jeevesh","Sadas"];
console.log(name.find((element)=>element==="Sadas"));

const students={name:'Alice',age:20,grade:'A', greet: function() { console.log(`Hello, my name is ${this.name}`); }};
students.greet(); // Output: Hello, my name is Alice

async function getUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    users.map(user => console.log(user.name));
}

getUsers();