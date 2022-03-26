'use strict';
const count = 17;
const size = 17.1;
console.log(`value: ${count}, type: ${typeof count}}`);
console.log(`value: ${size}, type: ${typeof size}}`);


const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);


const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}}`);
const helloBob = `hi ${brendan}`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other  value


// null 
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}}`);

// undefined
let x = undefined;
console.log(`value: ${x}, type: ${typeof x}}`);

// symbol, create unique identifiers for objects (식별자)
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false

// Symbol.for (스트링이 같다면 동일한 식별자)
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true


// Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}}`); // hello string
text = 1;
console.log(`value: ${text}, type: ${typeof text}}`); // 1 number 
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}}`); // 75 string
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}}`); // 4 number
console.log(text.charAt(0)) // error


// object, real-life objext, data structure
const ellie = { name: 'ellie', age: 20 };  // ellie는 변경 불가능하나, ellie.name ellie.age 등은 변강 가능