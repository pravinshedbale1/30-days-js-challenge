let year = 2021;
if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
  console.log("Year is leap ", year);
} else {
  console.log("Year is not leap ", year);
}
