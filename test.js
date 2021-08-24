/* Tips and tricks in javascript
 1 - Methods console
 2 - Conditions
 3 - Arrays
 4 - Object
 5 - Tips to note further
*/

//1
var obj = [
  {
    name: "nando",
    role: "admin",
    age: 31,
  },
  {
    name: "jess",
    role: "common",
    age: 30,
  },
];
console.log("Methods console.table and time");
console.time();
console.table(obj);
console.timeEnd();
console.log(`\n`);

//2
const arr = ["a", "b", "c"];
const word = "";
const ifExistsValue = "Exists";

console.log("Array with methods includes and indexOf");
console.log(arr.includes("a"));
console.log(arr.indexOf("a") >= 0);
console.log(`\n`);

console.log("Operator Elvis");
console.log(word?.letter?.value); //equals if(word && word.letter)
console.log(`\n`);

let variable = ifExistsValue || "default value"; //equals check up one values exists and with default value

//3
const studentId = [101, 101, 102, 103, 105, 105, 101];
const uniqueId = [...new Set(studentId)];
console.log("Set to uniques values");
console.log(uniqueId);
console.log(`\n`);

const string = "Nando";
const splitString = [...string];
console.log("Split with spread operator");
console.log(splitString);
console.log(`\n`);

const values = [25, 100, 30, 55, 15, 80, 200, 360, 70, 40, 45, 130];
let maxValue = Math.max(...values);
let minValue = Math.min(...values);
console.log("Max and Min value in a array");
console.log(maxValue, minValue);
console.log(`\n`);

let studentsName = ["Ram", "Sita", "Nithya", "Varun ", "Devi"];
console.log("Slice array");
console.log(studentsName.slice(0, 3)); //This is the inner interval
console.log(`\n`);

let areNumbers = ["201", "202", "203", "204", "205"];
areNumbers = areNumbers.map(Number); //Or other primitive type
console.log("Conversion of each value in array to type number");
console.log(areNumbers);
console.log(`\n`);

//4
const userActive = {
  status: "Active",
  ratings: "5",
};
const { status, ratings: rate } = userActive;
console.log("Destructing a Object");
console.log(status, rate);
console.log(`\n`);

console.log("Print a Object by your own key and value");
for (const [key, value] of Object.entries(userActive)) {
  console.log(`Key: ${key} and Value: ${value}`);
}
console.log(`\n`);

console.log("Print a Object by your own entries[key, value], keys and values");
console.log(Object.entries(userActive));
console.log(Object.values(userActive));
console.log(Object.keys(userActive));
console.log(`\n`);

console.log("Another tips");

/* Default approach */
Math.pow(10, 10); //100

10 ** 10; // 100

let stringRepeat = "x";
for (let i = 0; i < 6; i++) {
  stringRepeat += stringRepeat;
}
console.log(stringRepeat); // x x x x x x

var x = "x".repeat(6);
console.log(x);
