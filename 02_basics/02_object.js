console.log("Object in Javascript ");

// const student={
//     name:"Shubham Shinde",
//     age:20,
//     email:"shubhamshinde8746@gmail.com",
//     address:"Sillod Maharashtra",
// }


// console.log(student.name);
// console.log(student.age);
// console.log(student.email)
// console.log(student["address"]);

// console.log(student);



// const obj1={
//     1:"A",
//     2:"B",
//     3:"C"
// };

// const obj2={
//     4:"D",
//     5:"E",
//     6:"G"
// };

// const obj3={...obj1,...obj2};
// console.log(obj3);

// console.log(Object.keys(obj1));

// console.log(obj1.hasOwnProperty('1'));

console.log("Destructuring objects ");

const course={
    courseName:"Java Full stack",
    price:19900,
    courseInstructor:"hitesh sir"
}

const {courseInstructor: instrucotor} = course;
console.log(instrucotor);

