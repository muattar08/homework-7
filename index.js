// 1. Первое задание
let arr = prompt("Введите значения через запятую").split(",");
let truthyValues = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] && arr[i] !== "NaN" && arr[i] !== "null" && arr[i] !== "false" && arr[i] !== "") {
    truthyValues.push(arr[i]);
  }
}
alert(truthyValues.join(", "));

// 2. Второе задание
let yearsInput = prompt("Введите года через запятую").split(",");
let leapYears = [];
let nonLeapYears = [];

for (let i = 0; i < yearsInput.length; i++) {
  let year = parseInt(yearsInput[i]);
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    leapYears.push(year);
  } else {
    nonLeapYears.push(year);
  }
}
alert(leapYears.join(", "));
alert(nonLeapYears.join(", "));

// 3. Третье задание
let months = prompt("Введите месяцы через запятую").split(",");
let months31 = ["Январь", "Март", "Май", "Июль", "Август", "Октябрь", "Декабрь"];
let months30 = ["Апрель", "Июнь", "Сентябрь", "Ноябрь"];
let month28 = ["Февраль"];
let month29 = ["Февраль"];

let result31 = [];
let result30 = [];
let result28 = [];
let result29 = [];

for (let i = 0; i < months.length; i++) {
  if (months31.includes(months[i])) {
    result31.push(months[i]);
  }
  if (months30.includes(months[i])) {
    result30.push(months[i]);
  }
  if (month28.includes(months[i])) {
    result28.push(months[i]);
  }
  if (month29.includes(months[i])) {
    result29.push(months[i]);
  }
}
alert(result31.join(", "));
alert(result30.join(", "));
alert(result28.join(", "));
alert(result29.join(", "));
