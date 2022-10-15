const array = [
    {
      id: 100,
      name: 'Shubham'
    },
    {
      id: 5,
      name: 'Parth'
    },
    {
      id: 3000,
      name: 'Pratik'
    }
  ];
  let sortedArr = array.sort((a,b) => a.id - b.id);
  console.log(sortedArr);

  /********************** */
  let employees = [
    {name: 'John', salary: 90000, hireDate: "July 1, 2010"},
    {name: 'David', salary: 75000, hireDate: "August 15, 2009"},
    {name: 'Ana', salary: 80000, hireDate: "December 12, 2011"}
];
employees.sort(function (x, y) {
    return x.salary - y.salary;
});

console.table(employees);

/*** Optimising sort using Map */
let rivers = ['Nile', 'Amazon', 'Congo', 'Mississippi', 'Rio-Grande'];
// temporary array holds objects with position
// and length of element
var lengths = rivers.map(function (e, i) {
    return {index: i, value: e.length };
});

// sorting the lengths array containing the lengths of
// river names
lengths.sort(function (a, b) {
   // return +(a.value > b.value) || +(a.value === b.value) - 1;
   return a.value - b.value;
});

// copy element back to the array
var sortedRivers = lengths.map(function (e) {
    return rivers[e.index];
});

console.log(sortedRivers);