const a = { vis: true, b: 1 };
const b = { a };
const c = a;
console.log(a, b, c, a === b, a === c);
