const testData = [
  {
    name: 'gojo satoru',
    salary: 10,
    designation: 'associate engineer',
  },
  {
    name: 'haruka nakamuras',
    salary: 100,
    designation: 'senior specialist engineer',
  },
  {
    name: 'prince charles',
    salary: 5,
    designation: 'IT technician',
  },
  {
    name: 'makoto shinkai',
    salary: 50,
    designation: 'devops engineer',
  },
];

const sortEmployees = (employees: typeof testData) => {
  return employees.sort((firstEmployee, secondEmployee) => {
    return firstEmployee.salary - secondEmployee.salary;
  });
};

console.log(sortEmployees(testData));
