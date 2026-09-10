// 1. Создаем переменные
const product = "Печенье «Юбилейное», 1 кг";
const inBasket = true;
const quantity = 5;

// 2. Условие: если товар в корзине, выводим информацию
if (inBasket === true) {
    console.log(`${quantity} x ${product}`);
}