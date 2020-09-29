// Partial  and Readonly

// Partial, is a built-in generic type
// It suggest that, the properties may || may-not be there
// Makes all properties optional

interface CourseGoal {
  title: string;
  description: string;
  date: Date;
}

function myCourseGoal(title: string, description: string, date: Date): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.date = date;

  return courseGoal as CourseGoal;
}

// we have converted it into CourseGoal, with type casting.
// Because it was returning type CourseGoal and NOT type Partial<CourseGoal>

// ========================================================================================

// We want to create a readonly array

const savedNames: Readonly<string[]> = ["Onesmus", "Muna"];

// savedNames.push("Jane") Errors out
// savedNames.pop("Muna") Errors out
