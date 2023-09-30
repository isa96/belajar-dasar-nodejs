import util from "util";

const firstName = "Aaa";
const lastName = "Bbb";

console.info(`Hello ${firstName} ${lastName}`);
console.info(util.format("Hello %s %s", firstName, lastName));

const person = {
    firstName: "Aaa",
    lastName: "Bbb"
};

console.info(`Person : ${JSON.stringify(person)}`);
console.info(util.format("Person : %j", person));