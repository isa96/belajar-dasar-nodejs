const buffer = Buffer.from("Aaa Bbb Ccc");

console.info(buffer);
console.info(buffer.toString());

buffer.reverse();
console.info(buffer.toString());