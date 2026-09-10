// 1. Создаем переменные
let accountStatus = 'premium'; // Можно поменять на 'premium', 'vip' или любое другое значение
const username = 'Ivan Petrov';
let cashbackPercentage; // Эта переменная будет заполняться по условию

// 2. Определяем размер кэшбека по статусу
if (accountStatus === 'vip') {
    cashbackPercentage = 30;
} else if (accountStatus === 'premium') {
    cashbackPercentage = 20;
} else if (accountStatus === 'extended') {
    cashbackPercentage = 15;
} else {
    // Любое другое значение считаем обычным аккаунтом
    cashbackPercentage = 10;
}

// 3. Печатаем информацию о пользователе и статусе
// Для получения названия статуса, которое нужно вывести, мы можем использовать переменную cashbackPercentage
// (10% -> regular, 15% -> extended, 20% -> premium, 30% -> vip)
let statusDisplayName;
if (cashbackPercentage === 30) {
    statusDisplayName = 'vip';
} else if (cashbackPercentage === 20) {
    statusDisplayName = 'premium';
} else if (cashbackPercentage === 15) {
    statusDisplayName = 'extended';
} else {
    statusDisplayName = 'regular';
}

console.log(`\({username} | (\){statusDisplayName}) аккаунт`);

// 4. Печатаем размер кэшбека
console.log(`Вы получаете ${cashbackPercentage} % с покупок на бонусный счёт.`);