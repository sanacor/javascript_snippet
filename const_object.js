// Const로 선언된 Object의 내부값이 수정되는 것은 허용된다

const a = {};
a.num = 10;
console.log(a);

const b = [];
b.push(20);
console.log(a);