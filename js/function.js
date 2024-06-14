// 1
function add(x, y) {
    return x + y;
}

// 2
const result = add(10, 20); // 제일 마지막의 add 호출
// 3
console.log(result);        // return한 값이 없어서 undefined

// 1-1
function add(x, y, z) {
    console.log(x);
    console.log(y);
    console.log(z);
}

// 4
const result1 = add(10, 20, 30);