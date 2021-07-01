let n = +prompt('vvedite n', 0);

function fib(n) {
    return ( n <= 1) ? n : fib(n-2) + fib(n-1);
} 

alert( fib(n) );