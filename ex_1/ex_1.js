// Bài 1 
function isPrime(num) {
    if (num <= 1) {
        return false;
    };
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        };
    };
    return true;
};
document.getElementById('sum-btn').addEventListener('click', function() {
    let a = parseInt(document.getElementById('a').value);
    let b = parseInt(document.getElementById('b').value);
    let total = 0;
    for (let i = a; i <= b; i++) {
        if (isPrime(i)) {
            total = total + i;
        };
    };
    document.getElementById('result').innerText = `Tổng các số nguyên tố trong khoảng từ ${a} đến ${b} là ${total}`;
});


