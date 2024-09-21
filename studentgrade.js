const students = [
    { id: 1, name: "Alice", scores: [85, 90, 92] },
    { id: 2, name: "Bob", scores: [70, 68, 72] },
    { id: 3, name: "Charlie", scores: [60, 65, 58] },
    { id: 4, name: "David", scores: [75, 80, 78] },
  ];
  
  // Function to calculate final grades for students and filter those who passed
  function calculateFinalGrades(students) {
    // Use map to create a new array with final grades calculated for each student
    return students
      .map(student => {
        // Calculate the sum of the student's scores using reduce
        var sumScores = student.scores.reduce((sum, score) => sum + score, 0);
        
        // Calculate the average score by dividing the sum by the number of scores
        var finalGrade = Math.round(sumScores / student.scores.length);
        
        // Return a new object with the student's id, name, and the calculated finalGrade
        return { id: student.id, name: student.name, finalGrade: finalGrade };
      })
      // Use filter to include only students whose final grade is 70 or higher
      .filter(student => student.finalGrade >= 70);
  }
  
  // Call the function to get the students who passed and store in passedStudents
  const passedStudents = calculateFinalGrades(students);
  
  // Log the array of students who passed, showing their id, name, and final grade
  console.log(passedStudents);
  