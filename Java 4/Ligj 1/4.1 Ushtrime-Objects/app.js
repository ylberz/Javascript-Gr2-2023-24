// create student object with properties:id, name, lastName, gender, birthDate, email, phoneNo;

const student = {
  id: "24001E",
  name: "Filan",
  lastName: "Fisteku",
  gender: "M",
  birthDate: "1999-07-13",
  email: "filan@fisteku@gmail.com",
  phoneNo: "+38349222111",
};

//access properties;

console.log(student.name);
console.log(student["gender"]);
let propertie = "phoneNo";
console.log(student[propertie]);

student.familyMemberPhoneNo = "+38344222111";
console.log(student.familyMemberPhoneNo);

student.name = "Filanja";
student.gender = "F";

console.log(student.name);
console.log(student.gender);

//array of objects in javascript
const students = [
  {
    id: "24001E",
    name: "Filan",
    lastName: "Fisteku",
    gender: "M",
    birthDate: "1999-07-13",
    email: "filan@fisteku@gmail.com",
    phoneNo: "+38349222111",
  },
  {
    id: "24002E",
    name: "Filanja",
    lastName: "Fisteku",
    gender: "F",
    birthDate: "2000-07-13",
    email: "filan@fisteku@gmail.com",
    phoneNo: "+38349222111",
  },
];

const student1 = {
  id: "24001E",
  name: "Filan",
  lastName: "Fisteku",
  gender: "M",
  birthDate: "1999-07-13",
  contact: {
    email: "filan@fisteku@gmail.com",
    phoneNo: "+38349222111",
  },
};
