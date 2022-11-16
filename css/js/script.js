// Формула, яка генерує довільне число у проміжку чисел
// Math.random() * (max - min) + min;

// Генерація довільного кольору зі списку
// const colors = ['tomato', 'teal', 'orange'];

// const max = colors.length - 1;
// const min = 0;

// const index = Math.random() * (max - min) + min;
// const color = colors[index];

// console.log(сolor);

// document.body.style.backgroundColor = color;

// Знайти у рядку слово, написане у будь-якому регістрі
// const word1 = 'спам';
// const word2 = 'скидка';

// const string1 = 'Привіт, це не спам!';
// const string2 = 'Привіт, наявні СКИДКИ!';

// const normalizeString1 = string1.toLowerCase();
// const normalizeString2 = string2.toLowerCase();

// console.log(normalizeString1.includes(word1));
// console.log(normalizeString2.includes(word2));

// Перевіряє входження числа у відрізок
// const x1 = 10;
// const x2 = 20;
// const number = 5;

// До x1
// console.log(Число ${ number} попадає у відрізок до ${x1}, number < x1);

// Після x2
// console.log(Число ${ number} попадає у відрізок після ${x2}, number < x2);

// Від x1 до x2
// console.log(Число ${ number } попадає у відрізок від ${x1} до ${x2}, number > x1 && number < x2);

// До x1 або після x2
// console.log(Число ${number} попадає у відрізок до ${x1} або після ${x2}, number < x1 II number > x2);

// Перевірка підписки користувача (free, pro, vip, з яких доступ можуть отримати тільки pro і vip )
// const subscription = 'pro';

// const canAccess = subscription !== 'free';
// або
// const canAccess = subscription === 'vip' II subscription === 'pro';

// Конструкція, що задовільняє умову
// const salary = 1500;

// if (salary <= 500) {
//     console.log('Рівень 1');
// } else if (salary > 500 && salary <= 1500) {
//     console.log('Рівень '2');
// } else if (salary > 1500 && salary < 3000) {
//     console.log('Рівень '3');
// } else {
//     console.log('Рівень '4');
// }

// Згенерувати випадкову ЗП та її загальну суму
// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 3;
// let totalSalary = 0;

// for (let i = 1; i <= employees; i += 1) {
//     const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
//     console.log(Заробітня плата працівника номер ${ i } - ${ salary });

//     totalSalary +=salary;
// }
//     console.log('totalSalary:' ${totalSalary});

// Підраховує суму всіх парних чисел в діапазоні від min до max
// const min = 6;
// const max = 13;
// let total = 0;

// for (let i = min; i <= max; i += 1) {

//     if (i % 2 === 0) {
//         console.log('Парне число:', i);

//         total += i;
//     }
// }
// console.log('total:' ${ total });

// або логіка від зворотного
// for (let i = min; i <= max; i += 1) {

//     if (i % 2 !== 0) {
//         console.log('Не парне число:', i);
//         continue;
//     }
//     console.log('Парне число:', i);
//     total += i;
// }
// console.log('total:' ${ total });

// Покупка у магазині (сума / баланс)
// let balance = 10000;
// const payment = 2000;

// console.log(`Загальна вартість замовлення ${payment}. Перевіряємо кількість доступних коштів на рахунку.`);

// if (balance >= payment) {
//     console.log('Ок');

//     balance -= payment;
//     console.log(`На рахунку залишилося ${balance} кредитів.`);

// } else {
//     console.log(`На рахунку не достатньо коштів для проведення операції!`);
// }
// console.log(`Операція завершена!`);

// Підраховує знижку, в залежності від загальної суми витраченого
// const totalSpent = 2000;
// let payment = 500;
// let discount = 0;

// if (totalSpent >= 100 && totalSpent < 1000) {
//     console.log(`Бронзовий партнер, скидка 2%`);
//     discount = 0.02;
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//     console.log(`Срібний партнер, скидка 5%`);
//     discount = 0.05;
// } else if {
//     console.log(`Золотий партнер, скидка 10%`);
//     discount = 0.1;
// } else {
//     console.log(`Не партнер, скидка 0%`);
// }
// payment = payment - payment * discount;

// console.log(`Оформлюємо замовлення на суму ${payment} зі знижкою ${discount * 100}%`);

// totalSpent += payment;
// console.log(`Загальна сума витраченого у магазині ${totalSpent});

// Порахувати загальну суму покупок у магазині
// const cart = [54, 28, 105, 70, 92];
// let total = 0;

// for (const value of cart) {
//     total += value;
// }
// console.log('Total:' total)

// Функція до прикладу вище
// const calculateTotalPrice = function (items) {
// let total = 0;

// for (const value of items) {
//     total += value;
// }
// return total;
// }
// const r1 = calculateTotalPrice([1, 2, 4, 6, 3, 33, 3]);

// Додати таск (збільшимо елемент масиву)
// Якщо елемент масиву  змінюється - використовуємо цикл з лічильником, а якщо не змінбється - цикл for of
// const cart = [54, 28, 105, 70, 92];
// let total = 0;

// for (let i = 0; i < cart.length; i += 1) {
//   cart[i] = Math.round(cart[i] * 1.1);
//   total += value;
// }
// console.log(cart);

// Підраховує суму усіх парних чисел у масиві
// const numbers = [54, 28, 105, 70, 92];
// let total = 0;

// for (const number of numbers) {
//   if (number % 2 === 0) {
//       console.log(Парне число!);
//       total += number;
//     }
// }
// console.log(total);

// Знайти вірний логін
// const logins = ['mangos', 'fangos', 'olangos', 'tarangos'];
// const loginFind = 'fangos';
// let message = 'Користувача ${loginFind} не знайдено!';

// for (const login of logins) {
//   if (login === loginFind) {
//     message = 'Користувача ${loginFind} знайдено!';
//     break;
//     }
// }
// console.log(message);

// Функція для коду вище
// const logins = ['mangos', 'fangos', 'olangos', 'tarangos'];

// const findLogin = function (allLogins, loginToFind) {
// for (const login of allLogins) {
//   if (login === loginFind) {
//     return 'Користувача ${loginFind} знайдено!';
//     }
// }
// return 'Користувача ${loginFind} не знайдено!';
// }
// console.log(loginFind(logins, 'mangos'));

// Або тернаргий оператор
// const findLogin = function (allLogins, loginToFind) {
// return allLogins.includes(loginToFind)
// ? `Користувача ${loginFind} знайдено!`
// : `Користувача ${loginFind} не знайдено!`;

// return message;
// }
// console.log(loginFind(logins, 'mangos'));

// Пошук найменшого числа
// const numbers = [51, 28, 105, 70, 92];
// const smallestNumber = numbers[0];

// for (const number of numbers) {
//   if (number < smallestNumber) {
// smallestNumber = number;
//     }
// }

// console.log(smallestNumber);

// Функція до коду вище
// const findSmallestNumber = function (numbers) {
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//   if (number < smallestNumber) {
// smallestNumber = number;
//     }
// }
// return smallestNumber;

// console.log(findSmallestNumber[51, 28, 105, 70, 92]));

// З'єднати в один рядок
// Aбо метод Join
// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// let string = '';

// for (const friend of friends) {
// string += friend + ',';
// }

// string = string.slice(0, string.length - 1);

// console.log(string);

// Змінює регістр кожного символа в рядку
// const string = 'JavaScript';
// let letters = string.split('');

// for (const letter of letters) {
//   if (letter === letter.toLowerCase()) {
//     console.log('Ця буква у нижньому регістрі!');
//     invertedString += letter.toUpperCase();
//   } else {
//     console.log('Ця буква у верхньому регістрі!');
//     invertedString += letter.toLowerCase();
//   }
// }

// Або тернаргий оператор
// invertedString +=
// letter === letter.toLowerCase()
// ? letter.toUpperCase()
// : letter.toLowerCase();

// console.log(invertedString);

// Функція до коду вище
// const changeCase = function (string) {
// let invertedString = '';

// for (const letter of letters) {
// const isInLowerCase = letter === letter.toLowerCase();

// invertedString += letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase();
// }

// return invertedString;
// }
// console.log(changeCase('krvkmLDSk')));

// Змінити рядок до нижнього регістру з тире між словами
// const title = 'Я люблю Java Script';
// const title1 = title.toLowerCase().split(' ').join('-');

// Функція до коду вище
// const slugify = function (string) {
// return = string.toLowerCase().split(' ').join('-');
// }

// Функція, яка приймає будь-яку кількість аргументів та повертає їх суму
// const add = function (...args) {
//     let total = 0;

//     for (consr arg of args) {
//         total += arg;
//     }
//     return total;
// }

// Функція, яка видає унікальні елементи, які є і у масиві і у arg
// const filterNumber = function (array, ...args) {
//     const uniquElevents = [];

//     for (const element of array) {
// if (args.includes(element)) {
// uniquElevents.push(element)
// }
//     }
// }
//     return uniquElevents;
// }

// Рахує суму елементів двох масивів
// const array1 = [5, 10, 15, 20, 77];
// const array2 = [7, 14, 44, 57];
// let total = 0;

// const numbers = array1.concat(array2);

// for (const number of numbers) {
// total += number;
// }

// console.log(total);

// Видалення елементу з масиву
// const cards = ['Карточка 1', 'Карточка 2', 'Карточка 3', 'Карточка 4', 'Карточка 5'];

// const cardToRemove = 'Карточка 1';
// const index = cards.indexOf(cardToRemove);

// cards.splice(index, 1);

// Додаємо елемент по індекс
// const cardToInsert = 'Карточка 6';
// const index = cards.indexOf(cardToInsert);

// cards.splice(index, 0, cardToInsert);

// Деструктивні методи (оновлюють те, на чому викликаються): push, pop, splice

// Функція для перебору масиву
// const logItems = function (items) {
// for (const item of items) {
// }
// }

// logItems = [7, 14, 44, 57];

// Зробити лічильник +1 .... -1 При натисканні на кнопку і щоб, перультат лічильника виводився у браузері

// const counter = {
//     value = 0;

//     increment() {
//         this.value += 1;
//     }

//     decrement() {
//         this.value -= 1;
//     }

// };

// const decrementBtn = document.querySelector('.is-decrement');
// const incrementBtn = document.querySelector('.is-increment');
// const valueEL = document.querySelector('.is-value');

// decrementBtn.addEventListener('click', function () {
//     counter.decrement();
//     valueEL.textContent = counter.value;
// });

// incrementBtn.addEventListener('click', function () {
//     counter.increment();
//     valueEL.textContent = counter.value;
// });

// HTML
//     <div class="counter">
//         <button class="is-increment">Зменшити</button>
//         <p class="is-value">0</p>
//         <button class="is-decrement">Збільшити</button>
//     </div>
