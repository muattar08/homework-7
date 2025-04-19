let arr = ["hello", 1234, "", false, NaN, 123, true, " ", null];

// 1 задание
let userInput = prompt("Введите значение для проверки:");

if (userInput) {
  userInput = isNaN(userInput) ? userInput : Number(userInput);

  if (arr.includes(userInput) && userInput) {
    alert(userInput + " является правдивым значением.");
  } else {
    alert(userInput + " не является правдивым значением.");
  }

  // 2 задание
  let userYear = prompt("Введите год для проверки на високосность:");

  if (userYear) {
    userYear = Number(userYear);

    if ((userYear % 4 === 0 && userYear % 100 !== 0) || userYear % 400 === 0) {
      alert(userYear + " — это високосный год.");
    } else {
      alert(userYear + " — это обычный год.");
    }
  }

  // 3 задание
  let userMonth = prompt("Введите месяц для проверки количества дней:");

  if (userMonth) {
    let daysInMonth;

    switch(userMonth) {
      case "Февраль":
        daysInMonth = 28;
        break;
      case "Апрель":
      case "Июнь":
      case "Сентябрь":
      case "Ноябрь":
        daysInMonth = 30;
        break;
      case "Январь":
      case "Март":
      case "Май":
      case "Июль":
      case "Август":
      case "Октябрь":
      case "Декабрь":
        daysInMonth = 31;
        break;
      default:
        alert("Некорректное название месяца.");
        break;
    }

    if (daysInMonth) {
      alert(userMonth + " имеет " + daysInMonth + " дней.");
    }
  }
}
