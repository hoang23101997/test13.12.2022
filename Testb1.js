let arr = new Array();
let sum = null;
const a = parseInt(prompt('Nhap a: '));
const b = parseInt(prompt('Nhap b: '));
for (let i = a; i <= b; i++) {
    let flag = 0;

    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
    if (i > 1 && flag == 0) {
        arr.push(i);
    }
}

arr.forEach(snt => {
    sum += snt;
});

if (sum == 0) { 
    document.writeln("Không có số nguyên tố giữa a và b");
}
else 
    document.writeln(sum);