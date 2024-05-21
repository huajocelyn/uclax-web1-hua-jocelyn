/*===================================
||
|| Functions: Destructuring Objects as Arguments
||
===================================*/
console.group("Functions: Destructuring");

const readPerson = ({ first, last, email, colors }) => {
    // const { first, last, email, colors } = personObj;
    console.log(`Hey ${first} ${last}, your email is: ${email}`);

    console.log("Your favorite colors are:");
    colors.forEach((color, idx) => {
        console.log(color);
    });
};

const person1 = {
    first: "Jocelyn",
    last: "Hua",
    email: "jocelyn@me.com",
    colors: ["green", "blue", "yellow"],
};
const person2 = {
    first: "Weibin",
    last: "Zhong",
    email: "weibin@me.com",
    colors: ["white", "red", "black"],
};

readPerson(person1);
readPerson(person2);

console.groupEnd();
