// Ej 1
function sum(n1, n2) {
    return n1 + n2;
}

function sub(n1, n2) {
    return n1 - n2;
}

function cal(n1, n2, callback) {
    res = callback(n1, n2);
    console.log(res);
}

cal(5, 3, sum);
cal(5, 3, sub);


// Ej 2
function date(callback) {
    console.log(new Date());
    setTimeout(() => {
        callback(new Date())
    }, 3000);
}

function print(newDate) {
    console.log(newDate)
}

date(print);