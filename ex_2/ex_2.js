// Bài 2
function numberOneTriangle(a) {
    if (a < 1 || a > 10) {
        console.log('Số không hợp lệ!');
        return;
    };
    for (let x = 1; x <= a; x++) {
        let triangle = '';
        for (let y = 1; y <= x; y++) {
            triangle = triangle + '*';
        };
        console.log(triangle);
    };
};

// Ví dụ
numberOneTriangle(6);