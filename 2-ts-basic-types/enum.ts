// Enums -> allow you to define a set of named constants, can make it easier to document intent,
//  or create a set of distinct cases

// without enums, we would do these
const admin = 0;
const readOnly = 1;
const author = 3;

const person1 = {
  name: "John",
  role: readOnly,
};

if (person1.role === readOnly) {
  console.log("Not allowed to change anything");
}

// =============================================================================================
// enum makes it easier
// ADMIN gets number 1, READ_ONLY=2, AUTHOR=3
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person2 = {
  name: "Onesmus",
  role: Role.ADMIN,
};

if (person2.role === Role.ADMIN) {
  console.log("Change whatever you want");
}

// =============================================================================================
// We are not restricted to the default behavior, that start counting from Zero
enum Role2 {
  CEO = 5,
  CTO = 8,
}

// we can also use strings
enum Role3 {
  CEO = "CHIEF EXECUTIVE",
  CTO = "CHIEF TECHNICAL",
}
