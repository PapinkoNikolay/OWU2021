// // 1) Створити масив з 20 чисел та:
// let numberArr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// //     a) відсортувати його від меншого до більшого.
// let numberArr1 = numberArr.sort((a, b) => {
//     return a - b;
// });
// console.log(numberArr1);
// //     b) відсортувати його від більшого до меншого.
// let numberArr2 = numberArr.sort((a, b) => {
//     return b - a;
// })
// console.log(numberArr2);
// //     c) Відфілтрувати числа які є кратними 3.
// let numberArr3 = numberArr.filter((value) => {
//     return value % 3 === 0
// })
// console.log(numberArr3);
// // d) Відфілтрувати числа які є більшими за 10.
// let numberArr4 = numberArr.filter((value) => {
//     return value > 10
// })
// console.log(numberArr4);
// // e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write
// numberArr.forEach((value) => {
//     document.write(value)
// })
// // f) За допомогою map збільшити кожен елемент в масиві в три рази.
// let numberMap = numberArr.map((value) => value*3);
// console.log(numberMap);
// //     g) Порахувати загальну суму всіх елментів у масиві (reduce)
// let numberReduce = numberArr.reduce((ac,a)=> ac+a);
// console.log(numberReduce);
// //

// 2) Створити масив з 20 стрічок та:

// let strArr = ['one','two','three','for','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen','twenty'];

//     a) Відсортувати його в алфавітному порядку
// let str = strArr.sort();
// console.log(str);
// b) Відсортувати в зворотньому порядку
// let str1 = strArr.sort((a,b)=> {
//     if (a<b){
//         return 1
//     }
//         return -1
//
// });
// console.log(str1);
// c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)
// let strFilter = strArr.filter((value)=>value.length>4)
// console.log(strFilter);
// d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'

//  strArr.forEach((value)=>{
//     console.log(`Sam says ${value}`);
// })


// 3) Все робити тільки за допомогою методів масивів!
//     Дано масив :
//     const users = [
//         {name: 'vasya', age: 31, isMarried: false},
//         {name: 'petya', age: 30, isMarried: true},
//         {name: 'kolya', age: 29, isMarried: true},
//         {name: 'olya', age: 28, isMarried: false},
//         {name: 'max', age: 30, isMarried: true},
//         {name: 'anya', age: 31, isMarried: false},
//         {name: 'oleg', age: 28, isMarried: false},
//         {name: 'andrey', age: 29, isMarried: true},
//         {name: 'masha', age: 30, isMarried: true},
//         {name: 'olya', age: 31, isMarried: false},
//         {name: 'max', age: 31, isMarried: true}
//     ];
// a) відсортувати його за  віком (зростання , а потім окремо спадання)
// let objects = users.sort((a,b)=>{
//     if(a.age>b.age){
//         return 1
//     }
//     return -1
// })
// console.log(objects);
//--------------------------------------------------
// let objects = users.sort((a,b)=>{
//     if(a.age>b.age){
//         return -1
//     }
//     return 1
// })
// console.log(objects);
// b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// let objects = users.sort((a,b)=>{
//     if(a.name.length>b.name.length){
//         return 1
//     }
//     return -1
// })
// console.log(objects);

// ------------------------------------------------------
// let objects = users.sort((a,b)=>{
//     if(a.name.length>b.name.length){
//         return -1
//     }
//     return 1
// })
// console.log(objects);
// c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
// та зберегти це в новий масив (первинний масив залишиться без змін)

// let newUsers = [];
// newUsers = JSON.parse(JSON.stringify(users))
//   newUsers.forEach((value,index)=>{
// value.id=index+1;
//
//  })
//  console.log(users);
// console.log(newUsers);
//
//


// d) відсортувати його за індентифікатором


// e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)
// let arrReduce = users.reduce((acc,value)=>{
//     if(value.isMarried){
//         value.house = true;
//         acc.push(value);
//     }
//     return acc
// },[])
// console.log(arrReduce);
//
// ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
//
// const cars = [
//     {
//         producer: "subaru",
//         model: "wrx",
//         year: 2010,
//         color: "blue",
//         type: "sedan",
//         engine: "ej204x",
//         volume: 2,
//         power: 400
//     },
//     {
//         producer: "subaru",
//         model: "legacy",
//         year: 2007,
//         color: "silver",
//         type: "sedan",
//         engine: "ez30",
//         volume: 3,
//         power: 250
//     },
//     {
//         producer: "subaru",
//         model: "tribeca",
//         year: 2011,
//         color: "white",
//         type: "jeep",
//         engine: "ej20",
//         volume: 2,
//         power: 300
//     },
//     {
//         producer: "subaru",
//         model: "leone",
//         year: 1998,
//         color: "yellow",
//         type: "sedan",
//         engine: "ez20x",
//         volume: 4,
//         power: 140
//     },
//     {
//         producer: "subaru",
//         model: "impreza",
//         year: 2014,
//         color: "red",
//         type: "sedan",
//         engine: "ej204x",
//         volume: 2,
//         power: 200
//     },
//     {
//         producer: "subaru",
//         model: "outback",
//         year: 2014,
//         color: "red",
//         type: "hachback",
//         engine: "ej204",
//         volume: 2,
//         power: 165
//     },
//     {producer: "bmw", model: "115", year: 2013, color: "red", type: "hachback", engine: "f15", volume: 1.5, power: 120},
//     {producer: "bmw", model: "315", year: 2010, color: "white", type: "sedan", engine: "f15", volume: 1.5, power: 120},
//     {producer: "bmw", model: "650", year: 2009, color: "black", type: "coupe", engine: "f60", volume: 6, power: 350},
//     {producer: "bmw", model: "320", year: 2012, color: "red", type: "sedan", engine: "f20", volume: 2, power: 180},
//     {
//         producer: "mercedes",
//         model: "e200",
//         year: 1990,
//         color: "silver",
//         type: "sedan",
//         engine: "eng200",
//         volume: 2,
//         power: 180
//     },
//     {
//         producer: "mercedes",
//         model: "e63",
//         year: 2017,
//         color: "yellow",
//         type: "sedan",
//         engine: "amg63",
//         volume: 3,
//         power: 400},
//     {
//         producer: "mercedes",
//         model: "c250",
//         year: 2017,
//         color: "red",
//         type: "sedan",
//         engine: "eng25",
//         volume: 2.5,
//         power: 230
//     }
// ];
//
// Відфільтрувати масив за наступними крітеріями :
//     - двигун більше 3х літрів

// let newCar = cars.filter((value)=>value.volume>3)
// console.log(newCar)
// - двигун = 2л
// let newCar = cars.filter((value)=>value.volume==2)
// console.log(newCar)
// - виробник мерс
// let newCar = cars.filter((value)=>value.producer=='mercedes')
// console.log(newCar)
// - двигун більше 3х літрів + виробник мерседес
// let newCar = cars.filter((value)=>value.producer=='mercedes'&&value.volume>3)
//  console.log(newCar)
// - двигун більше 3х літрів + виробник субару
// let newCar = cars.filter((value)=>value.producer=='subaru'&&value.volume>3)
//   console.log(newCar)
// - сили більше ніж 300
// let newCar = cars.filter((value)=>value.power>300)
//    console.log(newCar)
// - сили більше ніж 300 + виробник субару
// let newCar = cars.filter((value)=>value.power>300&&value.producer=='subaru')
// console.log(newCar)
// - мотор серіі ej

// let newCar = cars.filter((value)=>value.engine.startsWith('ej'))
// console.log(newCar)
// - сили більше ніж 300 + виробник субару + мотор серіі ej
// let newCar = cars.filter((value) => value.power > 300 && value.producer === 'subaru' && value.engine.startsWith('ej'))
// console.log(newCar)
// - двигун меньше 3х літрів + виробник мерседес
// let newCar = cars.filter((value) => value.volume < 3 && value.producer === 'subaru')
// console.log(newCar)
// - двигун більше 2л + сили більше 250
// let newCar = cars.filter((value)=>value.volume>2&&value.power>250)
// console.log(newCar)
// - сили більше 250  + виробник бмв
// let newCar = cars.filter((value)=>value.power>250&&value.producer==='bmw')
// console.log(newCar)
//
//
// - взять слдующий массив
// const usersWithAddress = [
//     {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
//     {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
//     {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
//     {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
//     {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
//     {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//     {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
//     {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
//     {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
//     {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
//     {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
// ];
//
//-- Відсортувати їх по ID
// usersWithAddress.sort((a,b)=>{
// if(a.id<b.id){
//     return -1
// }
//     return 1
// })
// console.log(usersWithAddress);
// -- Відсортувати їх по ID в зворотньому порядку
// usersWithAddress.sort((a,b)=>{
//     if(a.id<b.id){
//         return 1
//     }
//     return -1
// })
// console.log(usersWithAddress);
// -- Відсортувати по віку
// usersWithAddress.sort((a,b)=>{
//     if(a.age<b.age){
//         return 1
//     }
//     return -1
// })
// console.log(usersWithAddress);
// -- Відсортувати по віку в зворотньому порядку
// usersWithAddress.sort((a,b)=>{
//     if(a.age<b.age){
//         return -1
//     }
//     return 1
// })
// console.log(usersWithAddress);
// -- Відсорутвати по імені
// usersWithAddress.sort((a,b)=>{
//     if(a.name<b.name){
//         return -1
//     }
//     return 1
// })
// console.log(usersWithAddress);
// -- Відсорутвати по назві вулиці
// usersWithAddress.sort((a,b)=>{
//     if(a.address.street<b.address.street){
//         return 1
//     }
//     return -1
// })
// console.log(usersWithAddress);
// -- Відсорутвати по номеру будинку
// usersWithAddress.sort((a,b)=>{
//     if(a.address.number<b.address.number){
//         return 1
//     }
//     return -1
// })
// console.log(usersWithAddress);
// -- Залигити тільки тих, хто молодший ніж 30 (filter)
// let arr = usersWithAddress.filter((value)=> value.age<30)
// console.log(arr);
// -- Залишити тільки одружених
// let arr = usersWithAddress.filter((value)=> value.isMarried)
//  console.log(arr);
// -- Залишити тільки одружених, які молодні за 30
// let arr = usersWithAddress.filter((value)=> value.isMarried&&value.age<30)
//   console.log(arr);
// -- Залишити лише тих, в кого парні номери будинків.
// let arr = usersWithAddress.filter((value)=> value.address.number%2===0)
// console.log(arr);
// -- Порахувати загальний вік всіх людей. (reduce)

// let arr = usersWithAddress.reduce((acc, a) => {
//     return acc+ a.age
// },0)
// console.log(arr);
// -- Ті, хто одружений і старий за 30 має отримати обєкти child і попасти в новий масив (reduce)
// let reduceArr = usersWithAddress.reduce((acc,value)=>{
//    if(value.isMarried&&value.age>30){
//         value.child=true;
//         acc.push(value)
//    }
//     return acc
// },[])
// console.log(reduceArr);
//
//
// ______________________________________________________________________________________________________________________________________________________
// Додатково
// ______________________________________________________________________________________________________________________________________________________
//
// Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
//     Створити не менше 7 та не більше 20 машинок.
//     Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
//     Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25,
//     то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
//     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
//
//
// Задача: дан отсортированный по возрастанию массив целых чисел.
//     Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
// Пример:
//     Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.