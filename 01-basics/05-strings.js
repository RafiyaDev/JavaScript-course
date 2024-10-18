const name = "rafiya"
const age =  50

//console.log(name + age + "hello");

console.log(`hello my name is ${name} and my Age is ${age}`);

//const nameOne = "RAFIYAKHAN"
//const ageOne = 60
//const id = 2017827868
//const email = "rafiyak@gmail.com"

//console.log(`hello my name is ${nameOne} and my age is ${ageOne} and my id is ${id} and my email is ${email}`)



const gameName = new String("RAFIYAKHAN")

//console.log(gameName);
//console.log(gameName.__proto__);

console.log(gameName.length);
//console.log(gameName.toUpperCase);
console.log(gameName.charAt(2));
console.log((gameName.indexOf('F')));
console.log(gameName.slice(-8,  8))
console.log(gameName.substring(0, 4))

///----------------------------------------///

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 8)
console.log(anotherString);

const newStringone = "       rafiya  "
console.log(newStringone);
console.log(newStringone.trim());

const url = "http:/hitedsh.com/hitesh%20choudhary"

console.log(url.replace('%20', ' '));

console.log(url.includes('rafitya'));
console.log(url.includes('hitesh'));

