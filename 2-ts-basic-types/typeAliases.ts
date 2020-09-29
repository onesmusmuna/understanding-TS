// type aliases, this is a type we create to store our ty     pes
// Use any name that is not built in to JS || TS

type Combinable = number | string;

function combine(input1: Combinable, input2: Combinable) {
  let result;

  if (typeof input1 === "number" && typeof input2 === "number") result = input1 + input2;
  result = input1.toString() + input2.toString();
  return result;
}
