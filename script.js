let num = 50;

 if (num < 49) {
    console.log('Неверно!'); 
 } else if (num > 100) {
    console.log('Много!'); 
 } else {
    console.log('Верно!');
 }

 (num == 5) ? console.log('Верно!') : console.log('Неверно!'); // Тернарный оператор

 switch (num) { // Єлемент, который подлежит условиям
    case num < 49: // Условие
        console.log('Неверно!'); // Действие
        break; // Контрольный пункт между условиями, при его отсутсвии команды будут выполнятся одна за другой
    case num > 100:
        console.log('Много!');
        break;
    case num > 80:
        console.log('Все ещё много!');
        break;
    case 50:
        console.log('Верно!');
        break;
    default: // Действие, которое выполнится, если не сработают предыдущие
        console.log('Что-то пошло не так!');
 }

/*****************************************************/
                      /*Cycles*/

while (num < 55) {
    console.log(num);
    num++;
}