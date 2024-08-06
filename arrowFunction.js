const greet = (name) => {
  return `Hello, ${name}!`;
};

console.log(greet(`Khaled`));

const sum = (num1, num2) => {
  const result = num1 + num2;
  return result;
};
console.log(sum(1, 2));

const squares = (num1) => {
  const result = num1 ** 2;
  return result;
};
console.log(squares(5));

const names = [`Khaled`, "saleh", "mohammad"];

names.forEach((name) => {
  console.log(name);
});

const numbers = [2, 3, 5, 9, 6, 1, 12, 9];

let min = numbers[0];
numbers.forEach((num) => {
  if (min > num) {
    min = num;
  }
});
console.log(min);
