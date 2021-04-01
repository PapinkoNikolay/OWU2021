// - створити функцію яка виводить масив

// let arr = [];
//
// function showMass(mass) {
//     console.log(mass); //or console.log(`${mass}`);
// }
//
// // // showMass(arr);
// // - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
// // debugger
// function randomArr(mass, count = 5) {
//     for (let i = 0; i < count; i++) {
//         mass.push(Math.floor(Math.random() * 100));
//     }
//     return mass;
// }
//
// randomArr(arr)
// showMass(arr);
//
//
//


// - створити функцію яка приймає три числа та виводить та повертає найменьше.
// let a = prompt('insert number');
// let b = prompt('insert number');
// let c = prompt('insert number');
//
// function minNumber(a, b, c) {
//     if (a <= b && a <= c) {
//         alert(`${a} min value`);
//         return a;
//     } else if (b <= a && b <= c) {
//         alert(`${b} min value`);
//         return b;
//     } else {
//         alert(`${c} min value`);
//         return c;
//     }

// }
// minNumber(a,b,c)

// - створити функцію яка приймає три числа та виводить та повертає найбільше.
//     let a = prompt('insert number');
//     let b = prompt('insert number');
//     let c = prompt('insert number');
//
//     function minNumber(a, b, c) {
//         if (a >= b && a >= c) {
//             alert(`${a} max value`);
//             return a;
//         } else if (b >= a && b >= c) {
//             alert(`${b} max value`);
//             return b;
//         } else {
//             alert(`${c} max value`);
//             return c;
//         }
//
//     }
//
//     minNumber(a, b, c)

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше


// function minNumber() {
//     console.log(Math.max.apply(Math, arguments));
//     return Math.min.apply(Math, arguments);
// }
//
// let minValue = minNumber(56, 32, 65, 87, 1)
// console.log(minValue);

//-----------------------------------------


//
// function minNumber() {
//
//        let min = arguments[0];
//        let max = min;
//         for (i = 1; i < arguments.length; ++i) {
//             if (arguments[i] > max) max = arguments[i] ;
//             if (arguments[i]  < min) min = arguments[i] ;
//         }
//     console.log(max);
//     return min;
//     }
//
//
// minNumber(32, 32, 65, 4, 87, 87, 11, 398);

// - створити функцію яка виводить масив
// function showArr() {
//     let arr = [];
//     for (let argument of arguments) {
//         arr.push(argument);
//     }
//     return arr;
// }
//
// let result = showArr(54, 23, 564, 23, 12, 43);
// console.log(result);
// - створити функцію яка повертає найбільше число з масиву

// function minValue() {
//     let max = arguments[0];
//     for (let i = 1; i < arguments.length; i++) {
//         (arguments[i] > max) ? max = arguments[i] : {}
//     }
//     return max;
// }
//
// minValue(23, 5, 56, 2, 1, 87);

// - створити функцію яка повертає найменьше число з масиву

// function minValue() {
//     let min = arguments[0];
//     for (let i = 1; i < arguments.length; i++) {
//         (arguments[i] < min) ? min = arguments[i] : {}
//     }
//     return min;
// }
//
// minValue(23, 5, 56, 2, 1, 87);
// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
// let arr = [1, 1, 1, 1];
//
// function sumArr(mass) {
//     let sum=0 ;
//     for (let i = 0; i < mass.length; i++) {
//         sum +=mass[i];
//     }
//     return sum;
// }
//
// sumArr(arr);
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let arr = [10,35,35]
// function averageArr(mass){
//     let sum=0;
//     for (let i = 0; i < mass.length; i++) {
//       sum+=mass[i];
//     }
//     return sum/mass.length;
// }
// averageArr(arr);

// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві


// let arr = ['name',{name1:''},{age:105},{name2:''}]
// function objReturn(mass) {
//     let objCount=[];
//     for (let i = 0; i < mass.length; i++) {
//         (typeof mass[i]==='object')?objCount.push(mass[i]):{}
//     }
//     return objCount.length;
// }
// objReturn(arr)

// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них

// let arr = [{name1:'',},{age:105},{name2:'',mas1:''},{name1:'',},{age:105},{name2:'',mas1:''}];
//
// function fieldsCount(mass){
//     let count=0;
//     for (let i = 0; i < mass.length; i++) {
//          count += Object.keys(mass[i]).length;
//     }
//     return count;
// }
//
// fieldsCount(arr);

// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     Приклад
//     [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

// let mass1 =[1,2,3,4];
// let mass2 =[1,2,3,4];
// function sumArr (arr1,arr2){
//     let newArr = [];
//     for (let i = 0; i < arr1.length; i++) {
//         newArr.push(arr1[i]+arr2[i]);
//     }
//     return newArr;
//
// }
// sumArr(mass1,mass2);

// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// let arr = []
// function replace (mass,i){
//
// }
// replace(arr,5);

// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
debugger
let arr = [0,45,7,0,46,0,345];
function replace (mass){
    let num = [];
    for (let i = 0; i < mass.length; i++) {
        (mass[i]!=0) ? num.push(mass.splice([i],1)):{};
    }
    for (let i = 0; i < num.length; i++) {
        num[i].push(mass);
    }
    return mass;
}
replace(arr);
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
//
// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок
//
// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
//             let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
//             let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// Частковий приклад реультату:
//
//
//
// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//
// 			let rules = [
// 				{
// 					title: 'Первое правило Бойцовского клуба.',
// 					body: 'Никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Второе правило Бойцовского клуба.',
// 					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Третье правило Бойцовского клуба.',
// 					body: 'В схватке участвуют только двое.'
// 				},
// 				{
// 					title: 'Четвертое правило Бойцовского клуба.',
// 					body: 'Не более одного поединка за один раз.'
// 				},
// 				{
// 					title: 'Пятое правило Бойцовского клуба.',
// 					body: 'Бойцы сражаются без обуви и голые по пояс.'
// 				},
// 				{
// 					title: 'Шестое правило Бойцовского клуба.',
// 					body: 'Поединок продолжается столько, сколько потребуется.'
// 				},
// 				{
// 					title: 'Седьмое правило Бойцовского клуба.',
// 					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
// 				},
// 				{
// 					title: 'Восьмое и последнее правило Бойцовского клуба.',
// 					body: 'Новичок обязан принять бой.'
// 				},
//
// 			];
// "
//
// ===========додаткове від віктора========
// 1) Точная степень двойки.
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки,
// или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!


// 2) Deep Copy
// реалізувати глибоке копіювання обєкту за допомогою рекурсій
//
// 3) Flat
// Вирівняти багаторівневий масив в однорівневий
//[1, 3, ['Hello', 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello', 'Wordd', 9, 6, 1, 'oops', 9]

// let arr = [1, 3, ['Hello', 'Wordd', [9,6,1]], ['oops'], 9];
// let arrNew = arr.flat(Infinity);
//
// console.log(arr);
// console.log(arrNew);


//зачистити выдступи окрім пробілу між словами
// let str='         Harry       Poter       '; // Harry Poter
//let str='        Hermiona         Volta       '; // Hermiona Volta
//  let str='       John        Doe            ';  // John Doe

// function concat(txt) {
//     let newArr = [];
//     let strings = txt.split(' ');
//     for (let i = 0; i < strings.length; i++) {
//         if (strings[i] != '') {
//             newArr.push(strings[i]);
//             newArr.push(' ');
//         }
//     }
//     let str = newArr.join('');
//     return str.trim();
// }
//
// let result = concat(str);
// console.log(result);


function ar (name){

}
ar(arr)