// function pow(x, n) {
//     let result = 1;
  
//     // multiply result by x n times in the loop
//     for (let i = 0; i < n; i++) {
//       result *= x;
//     }
  
//     return result;
//   }
  
//   console.log( pow(2, 3) ); //Output: 8


// function pow(x,n){
//     if(n===1){
//         return x*1
//     }
//     else{
//         return x* pow(x,n-1)
//     }
// }
// console.log(pow(2,3)); Output : 8;


// let company = {
//     sales: [{
//       name: 'John',
//       salary: 1000
//     }, {
//       name: 'Alice',
//       salary: 1600
//     }],
  
//     development: {
//       sites: [{
//         name: 'Peter',
//         salary: 2000
//       }, {
//         name: 'Alex',
//         salary: 1800
//       }],
  
//       internals: [{
//         name: 'Jack',
//         salary: 1300
//       }]
//     }
//   };
// // The function to do the job
// function sumSalaries(department) {
//     if (Array.isArray(department)) { // case (1)
//       return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
//     } else { // case (2)
//       let sum = 0;
//       for (let subdep of Object.values(department)) {
//         sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
//       }
//       return sum;
//     }
//   }
  
//   console.log(sumSalaries(company)); // 7700