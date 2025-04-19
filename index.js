// 1.первое задание 
let arr = [1234, " ", "hello", NaN, true, " ", false, " ", null];
let chistySpisok = arr.filter(value => value); 
console.log("Правдивые значения:", chistySpisok);


// 2. второе задание
let years = [2000, 2001, 2002, 2003, 2004, 2100, 2400];

let visokosnyeGoda = years.filter(year =>
  (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)  
);

let nonVisokosnyeGoda = years.filter(year =>
  (year % 4 !== 0 || year % 100 === 0) && (year % 400 !== 0)  
);

console.log("Високосные года:", visokosnyeGoda);
console.log("Не високосные года:", nonVisokosnyeGoda);


// 3. третье задание
let months30 = ["Апрель", "Июнь", "Сентябрь", "Ноябрь"];
let months31 = ["Январь", "Март", "Май", "Июль", "Август", "Октябрь", "Декабрь"];
let months28 = ["Февраль"];

console.log("Месяцы с 30 днями:", months30);
console.log("Месяцы с 31 днем:", months31);
console.log("Месяцы с 28 днями:", months28);
