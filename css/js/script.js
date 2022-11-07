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
