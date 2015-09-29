/**
 * Created by 1 on 25.09.2015.
 */
var country = ['Russia', 'USA', 'Europe'],
    population = [100, 200],
    fruits = ['апельсин', 'банан', 'груша'], //1. Создайте массив с фруктами: апельсин, банан, груша.
    fruits2 = ["яблоко", "апельсин", "груша", "гранат"],
    numbers = [1, 5, 6, 3, 5, 8, 10, 4, 6];

function printPopulation(country, population) {
    var i;
    for (i = 0; (i < country.length) && (i < population.length); i++) {
        console.log(country[i], population[i]);
    }
}

function printPopForEach(country, population) {
    country.forEach(function(item, i) {
        if (i < population.length) console.log(item, population[i]);
    });
}

printPopulation(country, population);
printPopForEach(country, population);

//2. Выведите на экран, сколько на данный момент у вас фруктов в  массиве. fruits = ['апельсин', 'банан', 'груша']
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
//предпоследний фрукт на "ананас" и вывести весь массив на экран. fruits2 = ["яблоко", "апельсин", "груша", "гранат"]
    fruits2.splice(fruits2.length - 2, 1, "ананас");
    fruits2.splice(-1, 1, "ананас"); //вариант после дополнительного прочтения материала :)

//Напишите код для вывода alert случайного значения из массива
    console.log(fruits[ Math.floor(Math.random() * fruits.length) ]);

//Создайте функцию find(arr, value), которая ищет в массиве arr значение value и возвращает его номер,
// если найдено, или -1, если не найдено.
function find(arr, value) {
    return arr.indexOf(value);
}


// Создайте функцию filterRange(arr, a, b), которая принимает массив чисел arr и возвращает новый массив, 
// который содержит только числа из arr из диапазона от a до b. То есть, проверка имеет вид a ≤ arr[i] ≤ b. 
// Функция не должна менять arr. numbers = [1, 5, 6, 3, 5, 8, 10, 4, 6]

function filterRange(arr, a, b) {
    var _arr = [];

    arr.forEach(function (item, i, arr) {
            if (item >= a && item <= b) _arr.push(item);
    }); 

    return _arr;
}

console.log( filterRange(numbers, 4, 7) );

// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
function camelize(str) {
    var arr = str.split('-'),
        i;

    for (i = 1; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
    return arr.join('');
}   

//У вас есть массив: var students = ["Илья","Greg", "Алина"];
//Вам надо пройтись по каждому элементу этого массива и выяснить в каком элементе массива есть буквы,
//которые не попадают в диапазон русских букв.
function findNotRuLetters(arr) {
    var result = [],
        i;
    for (i = 0; i< arr.length; i++) {
        if (arr[i].search(/[^А-ЯЁ]/i) > -1) {
            result.push(i);
        }
    }
    return result;
}
console.log(findNotRuLetters(["Илья","Greg", "Алина"]));