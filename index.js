// 1.первое задание 
let arr = ["hello", 1234, "", false, NaN, 123, true, " ", null];
let truthyValues = arr.filter(value => value); 
console.log("Правдивые значения:", truthyValues);


// 2. второе задание
let years = [2000, 2001, 2002, 2003, 2004, 2100, 2400];

let leapYears = years.filter(year =>
  (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)  
);

let nonLeapYears = years.filter(year =>
  (year % 4 !== 0 || year % 100 === 0) && (year % 400 !== 0)  
);

console.log("Високосные года:", leapYears);
console.log("Не високосные года:", nonLeapYears);


// 3. третье задание
let months30 = ["Апрель", "Июнь", "Сентябрь", "Ноябрь"];
let months31 = ["Январь", "Март", "Май", "Июль", "Август", "Октябрь", "Декабрь"];
let months28 = ["Февраль"];

console.log("Месяцы с 30 днями:", months30);
console.log("Месяцы с 31 днем:", months31);
console.log("Месяцы с 28 днями:", months28);
