// STRING PROPERTY!

let str = "Hello, world!"
console.log(str.length);

// STRING METHODS!

let str1 = "Hello"
console.log(str1.charAt(0));
console.log(str1.charAt(1));
console.log(str1.charAt(2));
console.log(str1.charAt(3));
console.log(str1.charAt(4));


let code = "rfa$"
console.log(code.charCodeAt("r"));
console.log(code.charCodeAt("f"));
console.log(code.charCodeAt("a"));
console.log(code.charCodeAt(0));
console.log(code.charCodeAt(1));
console.log(code.charCodeAt(2));
console.log(code.charCodeAt(3));


let strone = "hello"
let strtwo = "world"
let strthree = "my name is"
let strfour = "rafiya"
console.log(strone.concat(' ' , strtwo));
console.log(`${strone} ${strtwo} ${strthree} ${strfour}`);


let includes = "HELLO WORLD"
console.log(includes.includes("HELLO"));
console.log(includes.includes("WORLD"));
console.log(includes.includes("H"));


let endswith = "hello coders"
console.log(endswith.endsWith("e"));
console.log(endswith.endsWith("coders"));


let indexof = "hello coders!"
console.log(indexof.indexOf("!"));
console.log(indexof.indexOf("o"));


let match = "hello, hello, hello, hello, hello"
let result = match.match(/ll/g);
console.log(result);

let match2 = "The rain in Spain stays mainly in the plain."
let result2 = match2.match(/ain/g);
console.log(result2);






















