let nos=[1,2,3,4,5];
console.log("The initial array is:",nos);
//shift method
let fno=nos.shift();
console.log("Array after shift:",nos);
console.log("The number that got shifted:",fno);
//unshift
nos.unshift(23);
console.log("Array after unshift:",nos);
let nums=[1,2,3,4,5];
nums.splice(1,1);
console.log("Array after splice:",nums);
nums.splice(2,1,10);//indexno,number of elements to replace,element to be replace
console.log("After splice insertion:",nums);
nums.splice(2,1,10,11,12,13);//indexno,number of elements to replace,element to be inserted
console.log("After splice insertion:",nums);
nums.splice(0,1);
console.log("After splice insertion:",nums);
nums.splice(4,0,6);
console.log("After splice insertion:",nums);
