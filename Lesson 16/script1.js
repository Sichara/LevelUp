/**
 * Created by 1 on 24.09.2015.
 */
var obj = {
        'name' : 'Alex',
        'age' : 28
    },
    objClone = cloneObject(obj),
    objString = cloneStringKeys(obj);

//1. �������� ������� ���������� ������
function cloneObject(obj) {
    var key,
        _obj = {};

    for (key in obj) {
        _obj[key] = obj[key];
    }
    return _obj;
}

//2.������� ���������� ������ ����� � ����� ������
function cloneStringKeys(obj) {
    var key,
        _obj = {},
        str = '';

    for (key in obj) {
        if (typeof obj[key] == 'string') _obj[key] = obj[key];
    }

    return _obj;
}

//3. ������� ���������� �����
function cloneNumKeys(obj) {
    var key,
        _obj = {},
        str = '';

    for (key in obj) {
        if ( !isNaN(obj[key]) ) _obj[key] = Number(obj[key]);
    }

    return _obj;
}

//4. ������� ����������� �������� ��������
function sumNumbersObj (obj) {
    var key,
        result = 0;

    for (key in obj) {
        result += !isNaN(Number(obj[key])) ? Number(obj[key]) : 0;
    }
    return result;
}