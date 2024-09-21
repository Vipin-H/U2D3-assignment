const students = [
    { name: "Alice", age: 21 },
    { name: "Bob", age: 19 },
    { name: "Charlie", age: 23 },
    { name: "David", age: 20 }
];

// Function to sort students based on a provided condition function
function sortStudentsByCondition(students, conditionFn) {
    return students.slice().sort(conditionFn);
}

// Sorting function that sorts students by age in descending order
function sortByAgeDescending(a, b) {
    return b.age - a.age;
}

// Sorting the students array by age in descending order
const sortedstudents = sortStudentsByCondition(students, sortByAgeDescending);

// Output the sorted array of students
console.log(sortedstudents);
