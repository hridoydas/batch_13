const students = [
  {
    name: "student_a",
    grade: "A",
  },
  {
    name: "student_b",
    grade: "B",
  },
  {
    name: "student_c",
    grade: "A",
  },
  {
    name: "student_a",
    grade: "B",
  },
  {
    name: "student_e",
    grade: "A",
  },
];
function grouping(student) {
  const groupData = Object.groupBy(student, (item) => item.grade);
  console.log(groupData);
}

grouping(students);
