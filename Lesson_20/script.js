/**
 * Created by 1 on 16.10.2015.
 */
(function () {
    var timerBox = document.querySelector('.timer');
    var showSmallTimeFlag = true;
    var timeFull;
    var timeSmall;

    function printTimer(time) {
        timerBox.innerHTML = time;
    }

    function getFullTime() {
        var fullDate = new Date();
        var hours = fullDate.getHours();
        var minutes = fullDate.getMinutes();
        var seconds = fullDate.getSeconds();

        (Number(hours) < 10) ? hours = '0' + hours : false;
        (Number(minutes) < 10) ? minutes = '0' + minutes : false;
        (Number(seconds) < 10) ? seconds = '0' + seconds : false;

        return hours + ':' + minutes + ':' + seconds;
    }

    function getSmallTime() {
        var fullDate = new Date();
        var hours = fullDate.getHours();
        var minutes = fullDate.getMinutes();

        (Number(hours) < 10) ? hours = '0' + hours : false;
        (Number(minutes) < 10) ? minutes = '0' + minutes : false;

        return hours + ':' + minutes;
    }

    function toggleTime() {
        if (showSmallTimeFlag) {
            showSmallTimeFlag = false;
            printTimer(getFullTime());
            startFullTime();
            stopTime(timeSmall);
        } else {
            showSmallTimeFlag = true;
            startSmallTime();
            printTimer(getSmallTime());
            stopTime(timeFull);
        }
    }

    function stopTime(timeToStop) {
        clearInterval(timeToStop);
    }

    function startFullTime() {
        timeFull = setInterval(function () {
            printTimer(getFullTime());
        }, 1000);
    }

    function startSmallTime() {
        timeSmall = setInterval(function () {
            printTimer(getSmallTime());
        }, 1000);
    }

    toggleTime();
    timerBox.addEventListener('click', toggleTime);
})();