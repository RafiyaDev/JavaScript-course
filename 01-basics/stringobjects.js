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


let replace = "HELLO WORLD HERE I'M"
let changes = replace.replace("WORLD", "CODERS")
console.log(changes);
let replace2 = "HELLLLLO CODERS"
console.log(replace2.replace("HELLLLLO", "HELLO"));


let search = "The rain in SPAIN stays mainly in the plain"
console.log(search.search("rain"));
let search2 = "HELLO"
let changes2 = search2.search("LL")
console.log(changes2);


let slice = "hello world"
console.log(slice.slice(0, 8));


let split = "hello, world!"
console.log(split.split(", "));
let split2 = "hello, coders, coders!"
console.log(split2.split(", ",));


let startswith = "hello i'm here!"
console.log(startswith.startsWith("hell"))


let substring = "Hello, world!"
console.log(substring.substring(0, 8));


let toLowercase = "HELLO WORLD! MY NAME IS ---"
console.log(toLowercase.toLocaleLowerCase());


let toUppercase = "hello world! my name is ---"
console.log(toUppercase.toLocaleUpperCase());


let trim = "    (hello, world!)   ";
console.log(trim.trim());


let trimstart = "      hello, world!     "
console.log(trimstart.trimStart());


let trimend = "    hellow, world     "
console.log(trimend.trimEnd());
let trimend2 = "    hello, world     "
console.log(trimend2.trimEnd());
console.log(trimend.trimStart());


let valueof = new String("Hello, world!")
console.log(valueof.valueOf());

























