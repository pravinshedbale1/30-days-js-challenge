// Task 4
let dayOfWeek = 7;

switch (dayOfWeek) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("Wednesday");
    break;

  case 4:
    console.log("Thursday");
    break;

  case 5:
    console.log("Friday");
    break;

  case 6:
    console.log("Saturday");
    break;

  case 7:
    console.log("Sunday");
    break;

  default:
    console.log("Invalid day");
}

// Task 5
let score = 80;
switch (true) {
  case score < 35:
    console.log("F");
    break;
  case score < 40:
    console.log("D");
    break;
  case score < 60:
    console.log("C");
    break;
  case score < 80:
    console.log("B");
    break;
  case score <= 100:
    console.log("A");
    break;
}
