// push, pop, shift, unshift

// find, filter, map

const students = [
  {
    id: 1,
    name: "Filan",
    lastName: "Fisteku",
    gender: "M",
  },
  {
    id: 2,
    name: "Filanja",
    lastName: "Fisteku",
    gender: "F",
  },
];

//find
let student = students.find(function (stud) {
  return stud.id === 2;
});
student.name = "yyyy";

//filter
let maleStudents = students.filter(function (stud) {
  return stud.gender === "M";
});

console.log(maleStudents);

//map
let studentsFullName = students.map(function (stud) {
  return {
    fullName: stud.name + " " + stud.lastName,
  };
});

console.log(studentsFullName);

//push

students.push({
  id: 3,
  name: "Olt",
  lastName: "Thaqi",
  gender: "M",
});

function addStudent(name, lastName, gender) {
  let newStudent = {
    id: students.length + 1,
    name: name,
    lastName: lastName,
    gender: gender,
  };
  students.push(newStudent);
}

addStudent("Arber", "Kuqi", "M");
console.log(students);

function removeSudent(id) {
  // findindex
  // splice to remove element from array
  let studentIndex = students.findIndex(function (stud) {
    return stud.id === id;
  });
  students.splice(studentIndex, 1);
}

removeSudent(1);
console.log(students);

function updateSudent(id, name, lastName, gender) {
  let student = students.find(function (stud) {
    return stud.id === id;
  });
  student.name = name;
  student.lastName = lastName;
  student.gender = gender;
}

console.log(students);
updateSudent(2, "Filan", "Fisteku", "M");
console.log(students);
