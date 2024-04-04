const students = [
{firstname: 'Emily', lastname: 'Johnson'},
{firstname: 'Oliver', lastname: 'Smith'},
{firstname: 'Sophia', lastname: 'Williams,'},
{firstname: 'Benjamin', lastname: 'Brown,'},
{firstname: 'Ava', lastname: 'Davis,'},
];

const student = students.map(name => name.firstname);

console.log(students);
console.log(student);