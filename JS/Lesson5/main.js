// ==============================================
//     -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
// ==============================================
//
// function TegsCreator(titleOfTag, action, attrs) {
//     this.titleOfTag = titleOfTag;
//     this.action = action;
//     this.attrs = attrs;
// }
// let a = new TegsCreator('a','Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок',[{accesskey:'Активация ссылки с помощью комбинации клавиш'},{coords:'Устанавливает координаты активной области'}]);
// let div = new TegsCreator('div','Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого',[{align:'Задает выравнивание содержимого тега <div>'},{title:'Добавляет всплывающую подсказку к содержимому'}]);
// let h1 = new TegsCreator('h1','HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка',[{align:'Определяет выравнивание заголовка'}]);
// let span = new TegsCreator('span','Тег <span> предназначен для определения строчных элементов документа','Для этого тега доступны универсальные атрибуты и события.');
// let input = new TegsCreator('input','Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем',[{accesskey:'Переход к элементу с помощью комбинации клавиш'}]);
// let form = new TegsCreator('form','Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером',[{enctype:'Способ кодирования данных формы'}]);
// let option = new TegsCreator('option','Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>',[{label:'Указание метки пункта списка'}]);
// let select = new TegsCreator('select','Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее',[{form:'Связывает список с формой'}]);
// console.log(a);
// console.log(div);
// console.log(h1);
// console.log(span);
// console.log(input);
// console.log(form);
// console.log(option);
// console.log(select);

// ==============================================
//     - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// function CarCreator(model, mfr, prodYear, maxSpid, engineL) {
//     this.model = model;
//     this.mfr = mfr;
//     this.prodYear = prodYear;
//     this.maxSpid = maxSpid;
//     this.engineL = engineL;
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpid} на годину`);
//     }
//
//     this.info = function () {
//         console.log(`model:${this.model}  mfr:${this.mfr}  prodYear:${this.prodYear}  maxSpid:${this.maxSpid}  engineL:${this.engineL}`);
//     }
//
//     this.increaseMaxSpeed = function (newSpeed) {
//         console.log(this.maxSpid += newSpeed);
//     }
//
//     this.changeYear = function (newValue) {
//         this.prodYear = newValue;
//         console.log(this.prodYear)
//     }
//
//
// }
//
// let bmw = new CarCreator('540', 'Germany', 2019, 280, 3.0);
// bmw.drive()
// bmw.info();
// bmw.increaseMaxSpeed(20);
// bmw.changeYear(2016)




// ==============================================
//     CLASS
//
//     ==============================================
//         - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// class CarCreator{
// constructor(model, mfr, prodYear, maxSpid, engineL) {
//     this.model = model;
//     this.mfr = mfr;
//     this.prodYear = prodYear;
//     this.maxSpid = maxSpid;
//     this.engineL = engineL;
// }
//     drive () {
//         console.log(`їдемо зі швидкістю ${this.maxSpid} на годину`);
//     }
//
//     info() {
//         console.log(`model:${this.model}  mfr:${this.mfr}  prodYear:${this.prodYear}  maxSpid:${this.maxSpid}  engineL:${this.engineL}`);
//     }
//
//     increaseMaxSpeed(newSpeed) {
//         console.log(this.maxSpid += newSpeed);
//     }
//
//     changeYear(newValue) {
//         this.prodYear = newValue;
//         console.log(this.prodYear)
//     }
//     addDriver(driver){
//     this.driver = driver;
//     }
//
// }
// //
// let bmw = new CarCreator('540', 'Germany', 2019, 280, 3.0);
// bmw.drive()
// bmw.info();
// bmw.increaseMaxSpeed(20);
// bmw.changeYear(2016)
// bmw.addDriver({name:'vasia',age:25})
// console.log(bmw.driver)
// ==============================================
//
// ==============================================

//     -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

// class Human{
//     constructor(name,age) {
//         this.name=name;
//         this.age=age;
//     }
// }
// class Cinderella extends Human{
//     constructor(name,age,fotSize) {
//         super(name,age)
//         this.fotSize=fotSize;
//     }
//
// }
//
// class Prince extends Human {
//     constructor(name, age, sizeShoes) {
//         super(name, age);
//         this.sizeShoes = sizeShoes
//     }
//
//     findSinderella(arr) {
//
//         for (const cinderella of arr) {
//             cinderella.fotSize === prince.sizeShoes ? console.log(cinderella):{};
//         }
//     }
// }
//
// let cinderellas = [
// new Cinderella('liza',25,34),
// new Cinderella('anna',23,37),
// new Cinderella('lena',21,41),
// new Cinderella('lora',22,39),
// new Cinderella('kris',27,36),
// new Cinderella('olia',20,37),
// new Cinderella('sveta',30,40),
// new Cinderella('vika',31,35),
// new Cinderella('masha',24,38),
// new Cinderella('katia',19,42)];
//
// let prince = new Prince('jon',30,38);
// prince.findSinderella(cinderellas)

