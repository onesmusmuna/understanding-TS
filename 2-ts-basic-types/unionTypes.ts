function combine1(input1: number, input2: number) {
  const result = input1 + input2;
  return result;
}

const combined1 = combine1(23, 6);

console.log(combined1);

// ===================== combine both numbers && strings ======================================

function combine2(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") result = input1 + input2;
  result = input1.toString() + input2.toString();
  return result;
}

const combined2 = combine2(23, 6);
const combined3 = combine2("Hello ", "world");
const combined4 = combine2("Hello ", 2020);

console.log(combined2);
console.log(combined3);
console.log(combined4);
