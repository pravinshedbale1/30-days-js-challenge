// Activity 1
var personAge = 25;
let companyName = "Oracle";

console.log("personAge", personAge);
console.log("companyName", companyName);

//Activity 2
const isEmployed = true;
console.log("isEmployed", isEmployed);

//Activity 3
let orgName = "Persistent";
let orgEmpCount = 25000;
let isOrgPublic = true;
let orgLeaderShip = { ceo: "Sandeep", founder: "Anand", cto: "Amey" };
let orgPresence = ["Pune", "Mumbai", "Bangalore", "Hyderabad"];

console.log("Type of orgName", typeof orgName);
console.log("Type of orgEmpCount", typeof orgEmpCount);
console.log("Type of isOrgPublic", typeof isOrgPublic);
console.log("Type of orgLeaderShip", typeof orgLeaderShip);
console.log("Type of orgPresence", typeof orgPresence);

//Activity 4
let currentOfficeLocation = "Hyderabad";
console.log("currentOfficeLocation before reassignment", currentOfficeLocation);

currentOfficeLocation = "Pune";
console.log("currentOfficeLocation after reassignment", currentOfficeLocation);

//Activity 5
const orgHeadquarter = "Pune";
orgHeadquarter = "Mumbai";

/*
---------OUTPUT----------
personAge 25
companyName Oracle
isEmployed true
Type of orgName string
Type of orgEmpCount number
Type of isOrgPublic boolean
Type of orgLeaderShip object
Type of orgPresence object
currentOfficeLocation before reassignment Hyderabad
currentOfficeLocation after reassignment Pune

orgHeadquarter = "Mumbai";
               ^
TypeError: Assignment to constant variable.
*/
