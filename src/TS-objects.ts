type Student = {
  name: string,
  surname: string,
  age: Number,
  employed: boolean,
  weight?:number,
  height?:number
};

const student1: Student = {
  name: 'Alius',
  surname: 'Grigaliūnas',
  age: 23,
  employed: false,
  weight: 72,
  height: 187,
};

const student2: Student = {
  name: 'Olandas',
  surname: 'Nyderauskas',
  age: 24,
  employed: true,
  height: 185,
};

const student3: Student = {
  name: 'Nicolas',
  surname: 'Ingenting',
  age: 31,
  employed: false,
};
const student4: Student = {
  name: 'Simba',
  surname: 'Liutauskas',
  age: 16,
  employed: false,
};

type CreateFullname = (student:Student) => string;

const createFullname: CreateFullname = ({ name, surname }) => `${name} ${surname}`;

const broship = (bro1:Student, bro2:Student) => {
  const bro1FullName = createFullname(bro1);
  const bro2FullName = createFullname(bro2);
  console.log(`${bro1FullName} is good bros with ${bro2FullName}`);
};

broship(student2, student3);

const IsAdult = (student:Student) => {
  const studentAge = student.age;
  if (studentAge > 18) {
    return 'is an adult';
  }
  return 'is not an adult';
};

console.log({
  [createFullname(student1)]: IsAdult(student1),
  [createFullname(student2)]: IsAdult(student2),
  [createFullname(student3)]: IsAdult(student3),
  [createFullname(student4)]: IsAdult(student4),
});

const isFullyDescribedPerson = (student:Student) => {
  const studentHeight = student.height;
  const studentWeight = student.weight;
  if (studentHeight === undefined) {
    return 'has no body';
  } if (studentWeight === undefined) {
    return 'has no body';
  }
  return 'I have da body';
};

isFullyDescribedPerson(student1);

console.log({
  [createFullname(student1)]: isFullyDescribedPerson(student1),
  [createFullname(student2)]: isFullyDescribedPerson(student2),
  [createFullname(student3)]: isFullyDescribedPerson(student3),
  [createFullname(student4)]: isFullyDescribedPerson(student4),
});

// const students:Student[] = [{
//   name: 'Alius',
//   surname: 'Grigaliūnas',
//   age: 23,
//   employed: false,
//   weight: 72,
//   height: 187,
// }, {
//   name: 'Olandas',
//   surname: 'Nyderauskas',
//   age: 15,
//   employed: true,
//   height: 185,
// },
// ];

// const allStudents = students.map((singleStudent) => {
//   const fullName = `${singleStudent.name} ${singleStudent.surname}`;
//   if (singleStudent.age > 18) {
//     return `${fullName} Pilnai suaugęs`;
//   }
//   return `${fullName} nepilnai Suauges`;
// });

// console.log(allStudents);
