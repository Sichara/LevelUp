/**
 * Created by 1 on 26.09.2015.
 */
//Добавить класс в строку
var obj = {
    className: 'open menu'
};

function addClass(obj, cls) {
    var arr = obj.className.split(' '),
        i;

    for (i = 0; i < arr.length; i++) {
        if (arr[i] === cls) return;
    }
    arr.push(cls);

    obj.className = arr.join(' ');
}

addClass(obj, 'new'); // obj.className='open menu new'
addClass(obj, 'open'); // без изменений (класс уже существует)
addClass(obj, 'me'); // obj.className='open menu new me'

console.log(obj.className); // "open menu new me"

//Самый длинный полиндром---------------------
function findLongestPalindrome(str) {
    var polyForward = [],
        polyBack = [],
        result = '',
        i,
        j;

    str = str.toLowerCase().replace(/\s/g, '');
    for (i = 0; i < str.length; i++) {
        polyForward = str.slice(i).split('');
        polyBack = polyForward.slice().reverse();
        for (j = 0; j < polyBack.length; j++) {
            if (polyBack.slice(j).join('') === polyForward.slice(0, polyForward.length - j).join('')) {
                result = (result.length < polyBack.slice(j).join('').length) ? polyBack.slice(j).join('') : result;
            }
        }
    }
    return result;
}

findLongestPalindrome('Mama mila mashiny');

//Перевести текст вида border-left-width в borderLeftWidth
function camelize(str) {
    var arr = str.split('-'),
        i;

    for (i = 1; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
    return arr.join('');
}
camelize("background-color");
camelize("list-style-image");
camelize("-webkit-transition");

//Функция removeClass
function removeClass(obj, str) {
    var arr = obj.className.split(' '),
        i;

    for (i = 0; i < arr.length; i++) {
        if (arr[i] === str) {}
    }
}

// https://en.wikipedia.org/wiki/99_Bottles_of_Beer
var BOTTLES_AT_START = 99;
var verseOfTheSong;

for (var currentBottleIndex = BOTTLES_AT_START; currentBottleIndex > 0; currentBottleIndex -= 1) {
    verseOfTheSong = '';
    //form
    verseOfTheSong += currentBottleIndex + ' bottles of beer on the wall, ' + currentBottleIndex + ' bottles of beer.\n';
    verseOfTheSong += 'Take one down, pass it around, ' + (currentBottleIndex - 1) + ' bottles of beer on the wall...';
    //print
    console.log(verseOfTheSong);
}

//Напиши программу, которая загадывает целое число до 50, и просит пользователя число отгадать.
// Каждый раз, когда пользовател вводит число, которое ближе к ответу, чем предыдущее предположение пользователя,
// программа выдает prompt для следующего числа с сообщением "теплее", если новое предположение отдаляется от
// задуманного числа, программа выводит prompt с сообщением "холоднее". После отгадывания числа программа с
// помощью alert показывает количество попыток, за сколько было угадано число.
// Максимальное число попыток: 10 (должно быть настраиваемым). После этого игра считается проиграной, о чем
// сообщается в alert окошке.

var random = Math.random();
var MAX_NUMBER_CHOICE = 50;
var MAX_RETRIES = 10;
var PROGRAM_CHOISE = Math.round(random * MAX_NUMBER_CHOICE);
var messagePromt = 'Я загадала число. Угадывай, пользователь';
var rememberPlayerChoice = 999;
var playerChoice;
var userInput;
var countRetries;

//console.log(PROGRAM_CHOISE);
for (countRetries = 1; countRetries <= MAX_RETRIES; countRetries += 1) {
    userInput = prompt(messagePromt); //в первый раз 'Я загадала число. Угадывай, пользователь'
    playerChoice = parseInt(userInput, 10);

    if (isNaN(playerChoice)) {
        console.log('Вводить надо цифрами');
    } else {
        if (playerChoice === PROGRAM_CHOISE) {
            messagePromt = 'Угадал хитрец за ' + countRetries + ' попыток';
            break;
        } else {
            if (Math.abs(PROGRAM_CHOISE - playerChoice) < Math.abs(PROGRAM_CHOISE - rememberPlayerChoice)) {
                messagePromt = 'Теплее';
                // console.log(Math.abs(PROGRAM_CHOISE - playerChoice), Math.abs(PROGRAM_CHOISE - rememberPlayerChoice));
            } else {
                messagePromt = 'Холоднее';
                // console.log(Math.abs(PROGRAM_CHOISE - playerChoice), Math.abs(PROGRAM_CHOISE - rememberPlayerChoice));
            }
            rememberPlayerChoice = playerChoice;
        }
    }
}
if (countRetries !== MAX_RETRIES) {
    console.log(messagePromt);
} else console.log('Игра проиграна. Вы исчерпали все ' + MAX_RETRIES + ' попытки');

//Просуммировать числа из массива, которые больше 100
function sumOnly100Plus(arr) {
    var result = 0;
    var i;
    for (i = 0; i < arr.length; i += 1) {
        if (typeof arr[i] === 'number' && arr[i] > 100) result += arr[i];
    }
    return result;
}

sumOnly100Plus([100]);

//Отфильтровать элементы массива с нечетным индексом
function extractOddItems(arr) {
    return arr.filter(function(item, index) {
        if (!(index % 2 === 0)) return item;

    });
}
console.log(extractOddItems([1, 2, 3, 4, 5, 6, 7, 8, 9]));