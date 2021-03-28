
// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу

// const objects = {
//     dog: {
//         name: 'Fredi',
//         type: 'dog',
//         age: 15,
//         color: 'white',
//         isAlive: true,
//     },
//
//     human: {
//         name: 'Jack',
//         type: 'human',
//         age: 27,
//         color: 'white',
//         isAlive: true,
//     },
//     car: {
//         name: 'Passat',
//         type: 'car',
//         age: 3,
//         color: 'gray',
//         isAlive: false,
//     },
//     apartment: {
//         name: 'town_house',
//         type: 'building',
//         age: 1,
//         color: 'white',
//         isAlive: false,
//     },
//     book: {
//         "name": 'Harry_Potter',
//         "type": 'book',
//         "age": 3,
//         "color": 'colored',
//         "isAlive": false,
//     }
//
// }

// -- Створити масив та вивести його в консоль:
//     - з 5 собак
// - 3 5 людей
// - з 5 автомобілів

// let arrDog = [];
// let arrHum = [];
// let arrCar = [];
//
// for (let i = 0; i < 5; i++) {
//     arrDog.push(objects["dog"]);
//     arrHum.push(objects["human"]);
//     arrCar.push(objects["car"]);
// }
// console.log(arrDog);
// console.log('------------');
// console.log(arrHum);
// console.log('------------');
// console.log(arrCar);
// console.log('------------');

// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка

// const objects = {
//     house:{
//         type:'build',
//         name:'town_house',
//         age:'1',
//         adress:{
//             town:'Vinnitsa',
//             street:'soborna str',
//         },
//         number : [1,2,3]
//
//     },
//     driver:{
//         type:'human',
//         name:'Jack',
//         age:'29',
//         adress:{
//             town:'LA',
//             street:'washington str',
//         },
//         number : [1,2,3]
//     },
//     toy:{
//         type:'object',
//         name:'lego',
//         age:'1',
//         adress:{
//             town:'Vinnitsa',
//             street:'danila galickogo str',
//         },
//         number : [1,2,3]
//     },
//     table:{
//         type:'object',
//         name:'table',
//         age:'1',
//         adress:{
//             town:'Lviv',
//             street:'Bandery str',
//         },
//         number : [1,2,3]
//     },
//     bag:{
//         type:'object',
//         name:'leather bag',
//         age:'1',
//         adress:{
//             town:'Lviv',
//             street:'Bandery str',
//         },
//         number : [1,2,3]
//     },
//
// }

// Дан массив:
//     let users = [
//         {name: 'vasya', age: 31, status: false},
//         {name: 'petya', age: 30, status: true},
//         {name: 'kolya', age: 29, status: true},
//         {name: 'olya', age: 28, status: false},
//         {name: 'max', age: 30, status: true},
//         {name: 'anya', age: 31, status: false},
//         {name: 'oleg', age: 28, status: false},
//         {name: 'andrey', age: 29, status: true},
//         {name: 'masha', age: 30, status: true},
//         {name: 'olya', age: 31, status: false},
//         {name: 'max', age: 31, status: true}
    //];
// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// - статус Андрія
// - статус Максима
// - ім'я передостаннього об'єкту
// - ім'я третього об'єкта
// - вік Олега
// - вік Олі
// - вік + ім'я 5го об'єкта
// - вік + сатус Анни

// console.log(users[7].status);
// console.log(users[4].status);
// console.log(users[10].name);
// console.log(users[2].name);
// console.log(users[6].age);
// console.log(users[3].age);
// console.log(users[4].age+' '+users[4].name);
// console.log(users[5].age+' '+users[4].status);

// -Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.

// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"

// let text = document.getElementById('content');
// console.log(text);

// - отримує текст з блоку з id "rules"
// let text1 = document.getElementById('rules');
// console.log(text1);

// - замініть текст параграфа з id 'content' на будь-який інший
// text.innerText='Hello world';

// - замініть текст параграфа з id 'rules' на будь-який інший
// text1.innerText = 'Hello World';

// - змініть кожному елементу колір фону на червоний
// let body = document.getElementById('items');
// body.style.backgroundColor='#ff0000';
//---------------------------------------
