function StudentMarkSheets(students, details) {
  const studentsMarkSheets = students.map((student) => {
    const detail = details.find((det) => det.Roll === student.Roll);
    const subjectMarks = detail.subjects;
    const overallMarks = Object.values(subjectMarks).reduce(
      (sum, mark) => sum + mark,
      0
    );
    const status = overallMarks >= 200 ? "pass" : "fail";

    return {
      name: student.name,
      Roll: student.Roll,
      ...subjectMarks,
      total: overallMarks,
      status,
    };
  });

  return studentsMarkSheets;
}

const students = [
  { name: "Dhishan Debnath", Roll: 1 },
  { name: "Animesh Gupta", Roll: 2 },
  { name: "Tapas Sen", Roll: 3 },
  { name: "Misti Dutta", Roll: 4 },
  { name: "Chini Misra", Roll: 5 },
];

const Details = [
  { Roll: 5, subjects: { math: 35, english: 56, chemistry: 76, computer: 68 } },
  { Roll: 3, subjects: { math: 33, chemistry: 12, computer: 50, english: 35 } },
  { Roll: 1, subjects: { math: 55, english: 75, chemistry: 76, computer: 94 } },
  { Roll: 4, subjects: { english: 12, chemistry: 85, computer: 68, math: 45 } },
  { Roll: 2, subjects: { math: 55, english: 56, computer: 48, chemistry: 12 } },
];

console.log(StudentMarkSheets(students, Details));
