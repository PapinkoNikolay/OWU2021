//1- присвоить каждому из следующих значений свою переменную: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false Вывести каждую при помощи console.log , alert, document.write

// str1 = 'hello';
// str2 = 'owu';
// str3 = 'com';
// str4 = 'ua';
// num1 = 1;
// num2 = 10;
// num3 = -999;
// num4 = 123;
// num5 = 3.14;
// num6 = 2.7;
// num7 = 16;
// boolean1 = true;
// boolean2 = false;
// console.log(`${str1} ${str2} ${str3} ${str4} ${num1} ${num2} ${num3} ${num4} ${num5} ${num6} ${num7} ${boolean1} ${boolean2}`);
// alert(`${str1} ${str2} ${str3} ${str4} ${num1} ${num2} ${num3} ${num4} ${num5} ${num6} ${num7} ${boolean1} ${boolean2}`);
// document.write(`${str1} ${str2} ${str3} ${str4} ${num1} ${num2} ${num3} ${num4} ${num5} ${num6} ${num7} ${boolean1} ${boolean2}`);

//2- переопределить каждую переменную из задания 1 дав им произвольные значения Вывести каждую при помощи console.log , alert, document.write

// str1 = 'q';
// str2 = 'w';
// str3 = 'e';
// str4 = 'r';
// num1 = 2;
// num2 = 3;
// num3 = 4;
// num4 = 5;
// num5 = 6;
// num6 = 7;
// num7 = 8;
// boolean1 = false;
// boolean2 = true;
// console.log(`${str1} ${str2} ${str3} ${str4} ${num1} ${num2} ${num3} ${num4} ${num5} ${num6} ${num7} ${boolean1} ${boolean2}`);
// alert(`${str1} ${str2} ${str3} ${str4} ${num1} ${num2} ${num3} ${num4} ${num5} ${num6} ${num7} ${boolean1} ${boolean2}`);
// document.write(`${str1} ${str2} ${str3} ${str4} ${num1} ${num2} ${num3} ${num4} ${num5} ${num6} ${num7} ${boolean1} ${boolean2}`);

//3- Создать 3 числовых и 3 стринговых константы. Вывести каждую при помощи console.log , alert, document.write

// const num1=1;
// const num2=2;
// const num3=3;
// const str1='q';
// const str2='w';
// const str3='e';
// console.log(`${num1} ${num2} ${num3} ${str1} ${str2} ${str3}`);
// alert(`${num1} ${num2} ${num3} ${str1} ${str2} ${str3}`);
// document.write(`${num1} ${num2} ${num3} ${str1} ${str2} ${str3}`);

//4- при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО. Для фамилии имени и отчества создать разные переменные. Вывести каждую при помощи console.log , alert, document.write

// let firstName=prompt('Введите фамилию','');
// let secondName=prompt('Введите имя','');
// let thirdName=prompt('Введите отчество','');
// console.log(`${firstName} ${secondName} ${thirdName}`);
// alert(`${firstName} ${secondName} ${thirdName}`);
// document.write(`${firstName} ${secondName} ${thirdName}`);

//5- Взять переменные из задания 4 и сконкатенировать их в одной переменной person.

// let person = firstName+' '+secondName+' '+thirdName;

//6 - Взять задние 4 и 5 и применить его к ФИО всех членов своей семьи.

// let firstName = prompt('Введите ФИО отца', '');
// let secondName = prompt('Введите ФИО матери', '');
// let family = firstName+' '+secondName;

//7- при помощи prompt() получить 3 числа. Привести их к числовому типу при помощи +. вывести их в консоль.

// let num1 = prompt();
// let num2 = prompt();
// let num3 = prompt();
// console.log(+num1);
// console.log(+num2);
// console.log(+num3);

//8- при помощи prompt() получить 4 числа. Привести их к числовому типу при помощи parseInt. Сложить их между собой записав результат в переменную result и вывести в консоль браузера

// let num1 = parseInt(prompt());
// let num2 = parseInt(prompt());
// let num3 = parseInt(prompt());
// let num4 = parseInt(prompt());
// let result = num1+num2+num3+num4;
// console.log(result);

//9- при помощи prompt()  получить 3 числа с плавающей точекой. при помощи parseFloat привести их к соответсвующему типу. Сложить их между собой записав результат в переменную result и вывести в консоль браузера

// let num1 = parseFloat(prompt());
// let num2 = parseFloat(prompt());
// let num3 = parseFloat(prompt());
// let result = num1+num2+num3+num4;
// console.log(result);

//10- при помощи prompt()  получить 3 числа с плавающей точекой. Округлить их при помощи Math.round Сложить их между собой записав результат в переменную  и вывести в консоль браузера

// let num1 = parseFloat(prompt());
// let num2 = parseFloat(prompt());
// let num3 = parseFloat(prompt());
// let result = Math.round(num1+num2+num3);
// console.log(result);

//11- при помощи prompt()  получить 2 целых числа. Привести их к целочисленному типу. Первое число - это число которое будут возводить в степень. Второе число - это число которое является степенью. При помощи Math.pow возвести первое число в степень второго числа.

// let num1 = parseInt(prompt());
// let num2 = parseInt(prompt());
// let result = Math.pow(num1, num2);
// console.log(result);

//12- При помощи оператора опредеоения типа typeof определить типы следующих переменных и вывести их в консоль let a = 100; let b = '100'; let c = true; let d = undefined;

// let a = 100;
// let b = '100';
// let c = true;
// let d = undefined;
// console.log(typeof (a));
// console.log(typeof (b));
// console.log(typeof (c));
// console.log(typeof (d));

//-13 Поставьте соответствующий оператор в выражениях что бы получился соответсвующий результат.
// В одинаковых выражениях в задании не использовать два одинаковых оператора.
//     Каждое выражение вложить в свою переменную

// 5 < 6 -> true
// 5 > 6 -> false
// 5 == 6 -> false
// 5 >= 6 -> false
// 10 == 10 -> true
// 10 === 10 -> true
// 10 < 10 -> false
// 10 != 10 -> false
// 10 !== 10 -> false
// 123 === '123' -> false
// 123 == '123' -> true

//14 Дополнительно:
//     - Посмотрев на следюующие выражения, скажите, каков будет вывод в консоль

// console.log(132 > 100 && 45 < 12 ); false
// console.log(34 > 33 && 23 < 90 ); true
// console.log(99 > 100 && 45 > 12 ); false
// console.log(132 > 100 || 45 < 12 ); true
// console.log(111 > 11 || 45 < 111 ); true
// console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) ); true
// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) ); true
// console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) ); false
 //console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 )); true
// console.log(!!'-1');true
// console.log(!!-1);true
// console.log(!!'0');true
// console.log(!!'null');true
// console.log(!!'undefined');true
// console.log(!!(3/'owu'));false
// console.log((111 > 11 || 45 < 111) ||  !!'0');true
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 ));false

//15 Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true».
// При помощи оператора typeof убедитесь, что значения переменных принадлежат типам: string, number и  boolean.

// str = 'Привет';
// num = 123;
// flag = true;
// txt = 'true';
// console.log(typeof(str));
// console.log(typeof(num));
// console.log(typeof(flag));
// console.log(typeof(txt));

//16 Создайте переменные a1, a2, a3, a4, a5. При помощи математических операторов (сложение, вычитание и т.д.) найдите значения выражений:
//     5 + 3,
//     5 - 3,
//     5 * 3,
//     5 / 3,
//     5 % 3
//17 поместив результат каждого выражения в соответствующую переменную. Например, let a1 = 5 + 3.

// let a1 = 5+3;
// let a2 = 5-3;
// let a3 = 5*3;
// let a4 = 5/3;
// let a5 = 5%3;
//
// console.log(`${a1} ; ${a2} ; ${a3} ; ${a4} ; ${a5}`);

//18 Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений:
//     5 % 3,
//     3 % 5,
//     5 + '3',
//     '5' - 3,
//     75 + 'кг'

// let a6 = 5 % 3;
// let a7 = 3 % 5;
// let a8 = 5 + '3';
// let a9 = '5' - 3;
// let a10 = 75 + 'кг';
//
// console.log(`${a6} ; ${a7} ; ${a8} ; ${a9} ; ${a10}`);

//19 Напишите код, который находит площадь прямоугольника высота 23см. ( переменная height),
// шириной 10см (переменная width), значение площади должно хранится в числовой переменной s.

// let height = 23;
// let width = 10;
// let s = height*width;

//20 Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
//     результат поместите в переменную v.

// let heightC = 10;
// let dC = 4;
// let v = dC*heightC;

//21 У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
// Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).

// let n = 3;
// let m = 4;
// let k = Math.sqrt((n**2)+(m**2));
// console.log(k);

//22 Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log

// let str = 'Hello world';
// document.write(str);
// alert(str);
// console.log(str);

// 23 Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).
// alert('Papinko\nNikolay\nIvanovich');

// 24 Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//     Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//     Вывести в документ содержимое переменной concatenation спомощью document.write

// let str1= 'Кто';
// let str2='ты';
// let str3='такой?';
// document.write(str1+' '+str2+' '+str3);

//25 С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert

// let a = parseInt(prompt());
// let b = parseInt(prompt());
// let sum = a+b;
// alert(sum);

//26 С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
// Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert

// let firstName = prompt('введите имя:','');
// let secondName = prompt('введите фамилию','');
// let age = prompt('введите возраст','');
// alert(`Доброго вечера ${firstName} ${secondName}, мои поздравления что вам ${age}`);


