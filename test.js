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

let sortNumbers = ["201", "202", "203", "204", "205"];
sortNumbers = sortNumbers.sort((a, b)=> a-b);//Strings arrays you need use a.localeCompare(b)
console.log("Sort numbers in array");
console.log(sortNumbers);
console.log(`\n`);

let removeFalsy = [201, 202, 203, 204, 205, "nando", false, undefined, "", 0, NaN, null];
removeFalsy = removeFalsy.filter(Boolean);
console.log("Remove falsy values in array ");
console.log(removeFalsy);
console.log(`\n`);

let arrayNumbers = [201, 202, 203, 204, 205];
console.log("Print the last element in array");
console.log(areNumbers.slice(-1));
console.log(`\n`);

//4
const userActive = {
  status: "Active",
  ratings: "5",
};
const names = {
  name: 'nando',
  age: 31,
  role: 'admin'
}

const newObjectTogether = { ...userActive, ...names }

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


Math.pow(10, 10); //100
10 ** 10; // 100

let stringRepeat = "x";
for (let i = 0; i < 6; i++) {
  stringRepeat += stringRepeat;
}
console.log(stringRepeat); // x x x x x x

var x = "x".repeat(6);
console.log(x);



const value = 9

function bySwitch(value) {
  switch(value){
    case 1:
      return '1'
    case 2:
      return '2'
    case 3:
      return '3'
    case 4:
      return '4'
    case 5:
      return '5'
    case 6:
      return '6'
    case 7:
      return '7'
    case 8:
      return '8'
    case 9:
      return '9'

    default: 
      return 'nothing'
  }
}

function byObjectLiterals(value) {
  const obj = {
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
  }

  return obj[value] || 'nothing'
}

function byIfConditions(value) {
   if(value === 1) return '1'
   if(value === 2) return '2'
   if(value === 3) return '3'
   if(value === 4) return '4'
   if(value === 5) return '5'
   if(value === 6) return '6'
   if(value === 7) return '7'
   if(value === 8) return '8'
   if(value === 9) return '9'


  return 'nothing'
}


function byFor(value) {
  const obj = {
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
  }

  for(let i of Object.values(obj)) {
    if(i === value) return obj[i]
  }
  return 'nothing'

}


console.log(`Testing 1`)
console.time()
console.log(bySwitch(value))
console.timeEnd()

console.log(`Testing 2`)
console.time()
console.log(byObjectLiterals(value))
console.timeEnd()

console.log(`Testing 3`)
console.time()
console.log(byIfConditions(value))
console.timeEnd()

console.log(`Testing 4`)
console.time()
console.log(byFor(value))
console.timeEnd()

/*
Disable right click in HTML

<body oncontextmenu="return false">
    <div></div>
</body>

*/
