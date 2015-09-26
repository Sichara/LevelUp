/**
 * Created by 1 on 25.09.2015.
 */
var country = ['Russia', 'USA', 'Europe'],
    population = [100, 200],
    fruits = ['апельсин', 'банан', 'груша'], //1. Создайте массив с фруктами: апельсин, банан, груша.
    fruits2 = ["яблоко", "апельсин", "груша", "гранат"];

function printPopulation(country, population) {
    var i;
    for (i = 0; (i < country.length) && (i < population.length); i++) {
        console.log(country[i], population[i]);
    }
}

function printPopForEach(country, population) {
    country.forEach(function(item, i) {
        if (i < population.length) console.log(item, population[i]);
    })
}

printPopulation(country, population);
printPopForEach(country, population);

//2. Выведите на экран, сколько на данный момент у вас фруктов в  массиве.
    console.log(fruits.length);
//3. С помощью методов, изученных в предыдущем уроке,  добавьте в конец массива два фрукта - яблоко и ананас,
// а в  начало массива - грейпфрут.
    fruits.push('яблоко', 'ананас');
//4. Выведите на экран, сколько на данный момент у вас фруктов в  массиве.
    console.log(fruits.length);
//5. С помощью методов, изученных в предыдущем уроке,  удалите  из массива последний и первый элемент.
    fruits.pop();
    fruits.shift();
//6. Выведите на экран, сколько на данный момент у вас фруктов в  массиве.
    console.log(fruits.length);

//Ваша задача состоит в том, чтобы с помощью метода splice заменить в массиве
//предпоследний фрукт на "ананас" и вывести весь массив на экран.
    fruits2.splice(fruits2.length - 2, 1, "ананас");
    fruits2.splice(-1, 1, "ананас"); //вариант после дополнительного прочтения материала :)

//Напишите код для вывода alert случайного значения из массива
    console.log(fruits[ Math.round(Math.random() * (fruits.length - 1)) ]);

//Создайте функцию find(arr, value), которая ищет в массиве arr значение value и возвращает его номер,
// если найдено, или -1, если не найдено.
function find(arr, value) {
    return arr.indexOf(value);
}

//У вас есть массив: var students = ["Илья","Greg", "Алина"];
//Вам надо пройтись по каждому элементу этого массива и выяснить в каком элементе массива есть буквы,
//которые не попадают в диапазон русских букв.
function findNotRuLetters(arr) {
    var result = [],
        i;
    for (i = 0; i< arr.length; i++) {
        if (arr[i].search(/[^А-ЯЁ][^а-яё]/) > -1) {result.push(i)}
    }
    return result
}
console.log(findNotRuLetters(["Илья","Greg", "Алина"]));