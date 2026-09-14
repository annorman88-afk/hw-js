// Задача 2: Расчет кэшбека по статусу аккаунта

// 1. Создаем переменные
let username = 'Ivan Petrov'; // Имя пользователя (тестовые данные). Можете поменять на 'Anastasia Norm' для проверки.
let accountStatus = 'extended'; // Статус аккаунта (тестовые данные: 'vip', 'premium', 'extended', или любое другое)
let cashbackPercentage; // Переменная для хранения процента кэшбека

// 2. Определяем размер кэшбека и корректируем статус для вывода
// Используем if-else if-else конструкцию для определения кэшбека.
// Если статус не соответствует 'vip', 'premium' или 'extended',
// то устанавливаем его как 'regular' и процент кэшбека как 10%.
if (accountStatus === 'vip') {
    cashbackPercentage = 30;
} else if (accountStatus === 'premium') {
    cashbackPercentage = 20;
} else if (accountStatus === 'extended') {
    cashbackPercentage = 15;
} else {
    // Любое другое значение accountStatus считается обычным аккаунтом
    cashbackPercentage = 10;
    accountStatus = 'regular'; // Перезаписываем accountStatus, чтобы в выводе было 'regular'
}

// 3. Печатаем информацию о пользователе и его статусе
// Используем шаблонные строки (обратные кавычки ``) для форматирования вывода.
// Переменные вставляются с помощью ${имя_переменной}.
// Убираем лишние слеши и кавычки, оставляем только необходимые скобки.
console.log(`({username} | {accountStatus}) аккаунт`);

// 4. Печатаем размер кэшбека
console.log(`Вы получаете ${cashbackPercentage} % с покупок на бонусный счёт.`);