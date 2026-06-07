function jsname() {
  let Js = prompt("Какое правильное название для JS", "Введите название ");
  if (Js == "ECMAScript") alert("Верно");
  else alert("Не знаете? ECMAScript!");
}

function jsnumber() {
  let numbers = prompt("Введите число");
  if (numbers > 0) alert("1");
  if (numbers < 0) alert("-1");
  if (numbers == 0) alert("0");
}

function sumNumb() {
  let value = prompt("Введите число 1");
  let value2 = prompt("Введите число 2");
  let results = 4;
  value & (value2 < results) ? alert("Мало") : alert("Много");
}

function writeName() {
  let login = prompt("Введите имя");
  login == "Сотрудник"
    ? alert("Привет")
    : login == "Директор"
    ? alert("Здравствуйте")
    : login == ""
    ? alert("Нет логина")
    : alert("");
}

function sumProducts() {
  let studentDiscount = 0.15;
  let pensionerDiscount = 0.2;
  let noDiscount = 0;
  let productPrice = prompt("Введите цену продукта");
  let discount = prompt(
    'Введите свою категорию скидки: "Студент", "Пенсионер", "Нет скидки"'
  );
  if (discount == "Студент") {
    alert(
      "Ваша цена со скидкой: " + (productPrice - productPrice * studentDiscount)
    );
  } else if (discount == "Пенсионер") {
    alert(
      "Ваша цена со скидкой: " +
        (productPrice - productPrice * pensionerDiscount)
    );
  } else if (discpunt == "Нет скидки") {
    alert("Ваша цена:" + productPrice);
  }
}

function checkRole() {
  let role = prompt("Введите вашу роль: Админ, Модератор, Пользователь");
  let isBanned = false;
  if (isBanned) {
    alert("Доступ запрещен");
  } else if (role == "Админ" || role == "админ") {
    alert("Здравствуйте, Админ");
  } else if (role == "Модератор" || role == "модератор") {
    alert("Здравствуйте, Модератор");
  } else {
    alert("Здравствуйте, Пользователь");
  }
}

function sayHello() {
  let userName = prompt("Введите ваше имя");
  const message = `Привет, ${userName}`;
  console.log(message);
  return userName;
}

function square() {
  let numb = prompt("Введите число");
  alert(numb * numb);
  return numb;
}

function isEven() {
  let numb = Number(prompt("Введите число"));
  if (numb % 2 === false) {
    alert("Четное");
  } else {
    alert("Нечетное");
  }
  return numb;
}

function greetName(name) {
  alert(`Привет, ${name}!`);
}

function add(a, b) {
  alert(a + b);
  return a + b;
}

function checkAge(age) {
  if (age >= 18) {
    alert("Доступ разрешен");
  } else {
    alert("Доступ запрещен");
  }
  return age >= 18;
}

function multiply(x, y) {
  return x * y;
}

function maxOftwo(a, b) {
  return a > b ? a : b;
}

function getRectangleArea(width, height) {
  return width * height;
}

function xor(a, b) {
  if (a && b == true) return false;
  else {
    return true;
  }
}

function longer(str1, str2) {
  if (str1.length > str2.length) {
    return str1;
  } else return str2;
}

function formatName(first, last) {
  return first + last;
}

function limit(value, min, max) {
  if (value < min) return min;
  else if (value > max) return max;
  else return value;
}
