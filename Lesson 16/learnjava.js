/**
 * Created by 1 on 26.09.2015.
 */
//Добавить класс в строку
var obj = {
    className: 'open menu'
};

function addClass(obj, cls) {
    var store = {},
        arr = obj.className.split(' '),
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

console.log( obj.className ); // "open menu new me"

//Самый длинный полиндром---------------------
function findLongestPalindrome(str) {
    var polyForward = [],
        polyBack = [],
        result = '',
        i,
        j;

    str = str.toLowerCase().replace(/\s/g,'');
    for (i = 0; i < str.length; i++){
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

function removeClass(obj, str) {
    var arr = obj.className.split(' '),
        i;

    for (i = 0; i < arr.length; i++) {
        if (arr[i] === str) {}
    }
}