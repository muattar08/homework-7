let arr = ["hello", 1234, "", false, NaN, 123, true, " ", null];

// Запрашиваем значение для проверки
let userInput = prompt("Введите значение для проверки:");

if (userInput) {
  // Преобразуем введённое значение в нужный тип
  userInput = isNaN(userInput) ? userInput : Number(userInput);

  // Проверка на правдивое значение
  if (arr.includes(userInput) && userInput) {
    alert(userInput + " является правдивым значением.");
  } else {
    alert(userInput + " не является правдивым значением.");
  }

  // Запрос на проверку високосного года
  let userYear = prompt("Введите год для проверки на високосность:");

  if (userYear) {
    userYear = Number(userYear); // Преобразуем в число

    if ((userYear % 4 === 0 && userYear % 100 !== 0) || userYear % 400 === 0) {
      alert(userYear + " — это високосный год.");
    } else {
      alert(userYear + " — это обычный год.");
    }
  } else {
    alert("Вы не ввели год.");
  }

  // Запрос на проверку месяца
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
  } else {
    alert("Вы не ввели месяц.");
  }
} else {
  alert("Вы не ввели значение.");
}
