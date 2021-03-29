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

// let fc_rules = document.getElementsByClassName('fc_rules');
// for (let i = 0; i < fc_rules.length; i++) {
//     fc_rules[i].style.backgroundColor ='red';
// }
// let content = document.getElementById('content');
// content.style.backgroundColor = 'red';
// let rules = document.getElementById('rules');
// rules.style.backgroundColor = 'red';

// - змініть кожному елементу колір тексту на синій

// let fc_rules = document.getElementsByClassName('fc_rules');
//  for (let i = 0; i < fc_rules.length; i++) {
//      fc_rules[i].style.color ='blue';
//  }
//  let content = document.getElementById('content');
//  content.style.color = 'blue';
//  let rules = document.getElementById('rules');
//  rules.style.color = 'blue';

// - отримати весь список класів елемента з id=rules і вивести їх в console.log
// let classList = document.getElementById('rules').classList;
// console.log(classList);

// - отримати всі елементи з класом fc_rules
// let classList = document.getElementsByClassName('fc_rules');
// for (const classListElement of classList) {
//     console.log(classListElement);
// }

// - поміняти колір тексту у всіх елементів fc_rules на червоний
// let rules = document.getElementsByClassName('fc_rules');
// for (const rule of rules) {
//     rule.style.color = 'red';
// }

// Взяти файл template_2.html та працювати в ньому
// - Напишіть код, який :
// -- змінює колір тексту елемнту з ід main_header на будь-який інший

// let header = document.getElementById('main_header');
// header.style.color = 'red';

// -- робить шириниу елементу ul 400 пікселів
// let ul = document.getElementsByTagName('ul');
// for (const ulItem of ul) {
//     ulItem.style.width='400px';
// }

// -- робить шириниу всіх елементів з класом linkList шириною 50%
// let list = document.getElementsByClassName('linkList');
// for (const listElement of list) {
//  listElement.style.width='50%';
// }

// -- отримує текст який зберігається в елементі з класом listElement2
// let item = document.getElementsByClassName('listElement2');
// let text='';
// for (const itemElement of item) {
//
//     text=itemElement.textContent;
// }
// console.log(text)

// -- отримує всі елементи li та змінює ім колір фону на сірий
// let li = document.getElementsByTagName('li');
// for (const liElement of li) {
//  liElement.style.backgroundColor = 'grey';
// }

// -- отримує всі елементи 'a' та додає їм клас anchor

// let a =document.getElementsByTagName('a');
// for (const aElement of a) {
//     aElement.classList.add('anchor')
//}

// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// let a = document.getElementsByTagName('a');
// for (const aElement of a) {
//     if(aElement.textContent==='link3'){
//         aElement.style.fontSize = '40px';
//     }
// }

// -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let a = document.getElementsByTagName('a');
// for (let aElement of a) {
//     aElement.classList.add('element_' + aElement.textContent);
// }

// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let subHeader = document.getElementsByClassName('sub-header');
// for (const subElement of subHeader) {
//     subElement.style.color = prompt('write the color');
// }

// -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// let subHeader = document.getElementsByClassName('sub-header');
// for (const subElement of subHeader) {
//     if (subElement.textContent === 'content 2 segment') {
//         subElement.style.color = prompt('write the color');
//     }
// }

// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let cont1 = document.getElementsByClassName('content_1');
// for (const cont1Element of cont1) {
//     cont1Element.textContent=prompt();
// }

// -- отримати елементи p та змінити їм paddin на довільне значення
// let p = document.getElementsByTagName("p");
// for (let pElement of p) {
//     pElement.style.padding = '40px';
// }

// -- отримати елементи з класом text2 та змінити їм текст на довільне значення
// let txt2=document.getElementsByClassName('text2');
// for (let txt2Element of txt2) {
//     txt2Element.textContent = prompt();
// }