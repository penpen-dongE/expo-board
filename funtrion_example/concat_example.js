a = [1, 2, 3];
b = a;

console.log(a == b);
console.log(a === b);

b.push(4);
console.log(b);
console.log(a);

c = b.concat(5);
console.log("----");
console.log(c);
console.log(b);