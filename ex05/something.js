let num="5es";
console.log(1 + +num);

const something1 = { name:"something"};
const something2 = { name:"something"};
console.log(something1 === something2);
console.log(something1.name === something2.name);
console.log(something1.name == something2.name);

console.log(3 + "3");
console.log(3 + +"3");
console.log(3 + Number("3"));

const obj = {
    person: {name:"person", age:28},
    cat:{name:"cat", age: 15}
};
const {person, cat} = obj;
console.log(person);
console.log(cat.name);