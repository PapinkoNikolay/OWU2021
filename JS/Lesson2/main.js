//1 --створити масив та вивести його в консоль:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу

// let numArray = [1,2,3,4,5];
// console.log(numArray);
// let strMass = ['q','w','e','r','t'];
// console.log(strMass);
// let array = ['str',1,2,true,false];
// console.log(array);

//2 -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let array = [];
// array[0] = 'q';
// array[1] = 'w';
// array[2] = 'e';
// array[3] = 'r';
// console.log(array);

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 0; i <= 10; i++) {
//
//     document.write(`<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam consequuntur deserunt
//         dicta eaque eos eveniet labore maxime modi nam nisi odio omnis pariatur placeat, qui rerum sit, vero,
//         voluptatum!</div>`);
// }

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i <= 10; i++) {
//     document.write(`${i} <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam consequuntur deserunt
//         dicta eaque eos eveniet labore maxime modi nam nisi odio omnis pariatur placeat, qui rerum sit, vero,
//         voluptatum!</div>`);
// }

//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i = 0;
//
// while (i <= 20) {
//     document.write(`<h1>Lorem</h1>`);
//     i++
// }

//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i = 0;
// while (i <= 20) {
//     document.write(`${i} <h1>Lorem</h1>`);
//     i++
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let array = [1,2,3,4,5,6,7,8,9,10];
// for (let value of array){
//     console.log(value);
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let array = ['q','w','e','r','t','y','u','i','o','p'];
// for (let value of array){
//     console.log(value);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let array = ['q','w',true,false,1,2,null,'i',undefined,'p'];
// for (let value of array){
//     console.log(value);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let array = ['q','w','e','r','t',true,'u',false,'o',true];
// for (let value of array){
//     if (typeof value ==='boolean')
//         console.log(value);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let array = [1,2,'re',4,5,6,'u',false,'o',true];
// for (let value of array){
//     if (typeof value ==='number')
//         console.log(value);
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let array = [1,2,'re',4,5,6,'u',false,'o',true];
// for (let value of array){
//     if (typeof value ==='string')
//         console.log(value);
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let array = [];
// array[0] = 3;
// array[1] = true;
// array[2] = 'wetwe';
// array[3] = 345;
// array[4] = false;
// array[5] = 'ewqrw';
// array[6] = 324;
// array[7] = 4;
// array[8] = 'l';
// array[9] = 5;
//
// for (let value of array) {
//     console.log(value);
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i <= 10; i++) {
//     console.log(`${i},`);
//     document.write(`${i},`);
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0 ; i <=100; i++){
//     console.log(`${i},`);
//     document.write(`${i},`);
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i<=100;i+=2){
//     console.log(`${i},`);
//     document.write(`${i},`);
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i<=100;i+=2) {
//     console.log(`${i},`);
//     document.write(`${i},`);
// }
// --------------------------------------
// for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(`${i},`);
//         document.write(`${i},`);
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 0; i <= 100; i++) {
//     if (i % 2 !== 0) {
//         console.log(`${i},`);
//         document.write(`${i},`);
//     }
// }

// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)

// for (let m = 1; m <= 2; m++) {
//     for (let i = 1; i < 60; i++) {
//         console.log(`${i} sec`);
//     }
// console.log(`------------------`);
//     console.log(`${m} min`);
// console.log(`------------------`);
// }

// - Відтворити роботу годинника, відрахувавши  2 години  (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)

// for (let h = 1; h <= 2; h++) {
//     for (let m = 1; m < 60; m++) {
//         console.log(`------------------`);
//         console.log(`${m} MINUTE`);
//         console.log(`------------------`);
//         for (let i = 1; i < 60; i++) {
//             console.log(`${i} sec`);
//         }
//     }
//     console.log(`------------------`);
//     console.log(`${h} HOUR`);
//     console.log(`------------------`);
// }

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

// let array = ['a', 'b', 'c'];
// let str = '';
// for (let i = 0; i < array.length; i++) {
//     str = str + array[i];
//
// }
// console.log(str);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

// let array = ['a', 'b', 'c'];
// let i =0;
// let str = '';
// while (i<array.length){
//     str = str+array[i];
//     i++;
// }
// console.log(str);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

 // let array = ['a', 'b', 'c'];
 // let str='';
 //
 // for (let value of array){
 //     str=str+value;
 // }
 // console.log(str);

//!!!!!!!!!!!!!!!!!!// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

 // let muss = ['a', 'b', 'c'];
 // for (let i = 0; i <= muss.length; i++) {
 //     muss.push(muss[i])
 // }
 // console.log(muss);

// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].

// let array = [1,2,3];
// array.reverse();
// console.log(array);
// ----------------------------
// let mass = [1,2,3];
// let mass1=[];
// for (let i = 0;i<mass.length;i++){
//     mass1.unshift(mass[i]);
// }
// console.log(mass1);

// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.

// let arr = [1,2,3];
// arr.push(4);
// arr.push(5);
// arr.push(6);
// console.log(arr);

// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.

// let arr = [1,2,3];
// arr.unshift(4);
// arr.unshift(5);
// arr.unshift(6);
// console.log(arr);

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()

// let arr = ['js', 'css', 'jq'];
// let value=arr.shift();
// console.log(value);

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()

// let arr = ['js', 'css', 'jq'];
// let value = arr.pop();
// console.log(value);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].

// let arr = [1,2,3,4,5];
// let newArr = arr.slice(-2);
// console.log(newArr);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].

// let arr = [1,2,3,4,5];
// let newArr = arr.slice(0,2)
// console.log(newArr);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].

// let arr = [1,2,3,4,5];
// arr.splice(1,2)
// console.log(arr);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].

// let arr = [1,2,3,4,5]
// arr.splice(3,-2,'a','b','c');
// console.log(arr);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

let arr = [1, 2, 3, 4, 5];
arr.splice(1,-6,'a','b',-2,'c',-0,'e');
console.log(arr);