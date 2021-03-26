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

// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

// let muss = ['a', 'b', 'c'];
// for (let i = 1; i <= 3; i++) {
//     muss.push(i)
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

//!!!!!!!!!!!! let arr = [1, 2, 3, 4, 5];
// arr.splice(0,0,1, 'a', 'b', 2, 3, 4, 'c', 5, 'e');
// console.log(arr);

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

// let arr = [1,2,3,4,5,6,7,8,9,10];
// for( let i =0; i<arr.length;i++){
//     if (arr[i]%2==false){
//         console.log(arr[i]);
//     }
// }

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший

// let arr1 =[1,2,3,4,5,6,7,8,9,10];
// let arr2 =[];
// for (let value of arr1){
//     arr2.push(value);
// }
// console.log(arr1);
// console.log(arr2);

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

// let arr1 =[1,2,3,4,5,6,7,8,9,10];
// let arr2 =[];
// let a;
// for (let i = 0; i<arr1.length;i++){
//     arr2[i]=arr1[i];
// }
// console.log(arr1);
// console.log(arr2);

// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while

// let arr = [2,17,13,6,22,31,45,66,100,-18];
// let i =0;
// while (i<arr.length){
//     console.log(arr[i]);
//     i++
// }

// 2. перебрати його циклом for

// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i<arr.length;i++){
//     console.log(arr[i]);
// }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = 0;
// while (i < arr.length) {
//     if (arr[i] % 2 !== 0) {
//         console.log(arr[i]);
//
//     }
//     i++
//}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = 0; i < arr.length; i++) {
//     if (i % 2 !== 0) {
//         console.log(arr[i]);
//     }
//
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення

// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = 0;
// while (i < arr.length) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//     }
//     i++
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення

// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"

// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 3 === 0) {
//         arr[i] = 'okten';
//     }
// }
// console.log(arr);

// 8. вивести масив в зворотньому порядку.

// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//
// for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
//
// }

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

//зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//      перебрати його циклом while

// let arr = [2,17,13,6,22,31,45,66,100,-18];
// let i = arr.length-1;
// while (i>=0){
//     console.log(arr[i]);
//     i--
// }

//перебрати його циклом for

// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = arr.length-1; i>=0;i--){
//     console.log(arr[i]);
// }

// перебрати циклом while та вивести  числа тільки з непарним індексом

// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = arr.length - 1;
// while (i >= 0) {
//     if (arr[i] % 2 !== 0) {
//         console.log(arr[i]);
//
//     }
//     i--
// }

// перебрати циклом while та вивести  числа тільки парні  значення

// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = arr.length-1;
// while (i >= 0) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//     }
//     i--
// }

// замінити кожне число кратне 3 на слово "okten"

// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//
// for (let i = arr.length-1; i >=0; i--) {
//     if (arr[i] % 3 === 0) {
//         arr[i] = 'okten';
//     }
// }
// console.log(arr);

// 10
// створити пустий масив та :
//     - заповнити його 50 парними числами за допомоги циклу.

// let arr=[];
// for (let i = 2; i <=100; i=i+2) {
// arr.push(i)
// }
// console.log(arr);

//- заповнити його 50 непарними числами за допомоги циклу.
//debugger

// let arr = [];
// for (let i = 1; i <= 100; i = i + 2) {
//     arr.push(i)
// }
// console.log(arr);

//используя Math.random заполнить массив из ???(сколько хотите) элементов.

// let arr = [];
// for (let i = 0; i < 50; i++) {
//     arr.push(Math.random());
// }
// console.log(arr);

//-------------------------------------
//     let arr = [];
//
// function getRandomArbitrary(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }
//
// for (let i = 0; i < 50; i++) {
//
//     arr.push(getRandomArbitrary(8,732));
//
// }
// console.log(arr);

// вывести на консоль  каждый третий елемент

// for (let i = 2;i<arr.length;i=i+3){
//     console.log(arr[i]);
// }

// вывести на консоль  каждый третий елемент
// но при условии что его значение является парным.

// for (let i = 2;i<arr.length;i=i+3) {
//     if(arr[i]%2===0){
//         console.log(arr[i]);
//     }
//
// }

// вывести на консоль  каждый третий елемент
// но при условии что он имеет парное значение и
// записать их в другой массив.

// let newArr = [];
// for (let i = 2;i<arr.length;i=i+3) {
//     if(arr[i]%2===0){
//         newArr.push(arr[i]);
//     }
// }
// console.log(newArr);

// !!!!!!!!!!5. Вывести каждый елемент массива у которого соседний с права элемент - парный


// 5 масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.

// let arr = [100,250,50,168,120,345,188];
// let sumArr= 0;
// for (let i = 0; i < arr.length; i++) {
//     sumArr +=arr[i];
//
// }
// let result = sumArr/arr.length
//
// console.log(result);

// 3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

// let randomArr = [56,87,34,5,7,4,21,6];
// let newArr = [];
// for (let i = 0; i < randomArr.length; i++) {
//     newArr.push(randomArr[i]=randomArr[i]*5);
// }
// console.log(randomArr);
// console.log(newArr);


// 4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
// додати його в інший масив.

// let arr = ['str',3,'fr',2,false];
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i]==="number"){
//         newArr.push(arr[i]);
//
//     }
//
// }
//
// console.log(arr);
// console.log(newArr);
