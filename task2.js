let username = 'Ivan Petrov';
let accountStatus = 'extended'; // Можно менять на 'premium', 'vip' или что-то другое
let cashbackPercentage;

// Определяем кэшбек и статус в одном блоке
if (accountStatus === 'vip') {
    cashbackPercentage = 30;
} else if (accountStatus === 'premium') {
    cashbackPercentage = 20;
} else if (accountStatus === 'extended') {
    cashbackPercentage = 15;
} else {
    // Если статус любой другой, считаем обычным
    cashbackPercentage = 10;
    accountStatus = 'regular'; // Переприсвоение для корректного вывода
}

// Вывод информации (исправленная шаблонная строка)
console.log(`\({username} | (\){accountStatus}) аккаунт`);

// Печатаем размер кэшбека
console.log(`Вы получаете ${cashbackPercentage} % с покупок на бонусный счёт.`);