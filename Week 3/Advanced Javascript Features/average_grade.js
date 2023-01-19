const grade = [90,85,75,95,100,70,80,90]
let sum_of_grades = 0
let average_grade;

for (let i=0; i<grade.length; i++){
        sum_of_grades += grade[i]
        average_grade = sum_of_grades/ (i+1);  
}

console.log(`The average grade is ${average_grade} and the total sum of grades is ${sum_of_grades}`)