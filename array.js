// Functional Array and Loop
const a = 10;
const b = 20;

const jog = (a, b) => {
  return a + b;
};
const biyog = (a, b) => {
  return a - b;
};
const gun = (a, b) => {
  return a * b;
};
const vag = (a, b) => {
  return a / b;
};

const arr = [jog, biyog, gun, vag];

for (let i = 0; i < arr.length; i++) {
  const result = arr[i](a, b);
  // console.log(result);
}

// Array of Array and Loop
const arr2 = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15]
];

for (let i = 0; i < arr2.length; i++) {
  for (let j = 0; j < arr2[i].length; j++) {
    const result = arr2[i][j];
    // console.log(result);
  }
}

// Another Array of Array traversing by for loop
const arr3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (let i = 0; i < arr3.length; i++) {
  for (let j = 0; j < arr3[i].length; j++) {
    const result = arr3[i][j];
    // console.log(`Position of values find out by for loop: (${[i]}, ${[j]}) = ${result}`);
  }
}

// Matrix solution by for loop
const arr4 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const arr5 = [
  [11, 12, 13],
  [14, 15, 16],
  [17, 18, 19]
];

const outerArray = [];
for (let i = 0; i < arr4.length; i++) {
  const innerArray = [];
  for (let j = 0; j < arr4[i].length; j++) {
    innerArray.push(arr4[i][j] + arr5[i][j]);
  }
  outerArray.push(innerArray);
}
// console.log(outerArray);

// Same solution with loop in the function
const matrixSum = (array1, array2) => {
  const outerArray = [];
  for (let i = 0; i < array1.length; i++) {
    const innerArray = [];
    for (let j = 0; j < array1[i].length; j++) {
      innerArray.push(array1[i][j] + array2[i][j]);
    }
    outerArray.push(innerArray);
  }
  return outerArray;
};

const result = matrixSum(arr4, arr5);
console.log(result);