let username = 'Ivan Petrov';
let accountStatus = 'extended';
let cashbackPercentage;

if (accountStatus === 'vip') {
    cashbackPercentage = 30;
} else if (accountStatus === 'premium') {
    cashbackPercentage = 20;
} else if (accountStatus === 'extended') {
    cashbackPercentage = 15;
} else {
    cashbackPercentage = 10;
    accountStatus = 'regular';
}

console.log(username + ' | (' + accountStatus + ') аккаунт');

console.log(`Вы получаете ${cashbackPercentage} % с покупок на бонусный счёт.`);