import _ from 'lodash'; 
  
const sum = (a, b) => a + b;
  
const add = _.curry(sum);
  
console.log(add(4,6));   // Outputs 10
console.log(add(4)(6));  // Outputs 10
