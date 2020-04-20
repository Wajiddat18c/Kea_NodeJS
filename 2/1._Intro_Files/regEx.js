// i flag ingores case


const myRegEx = /Hello/i;

const result = myRegEx.test("hello World!");

// console.log(result)

//Pipe = or


const petString = "Anders has a fish"
const petRegEx = /dog|cat|bird|fish|turtle/

// console.log(petRegEx.test(petString));


//Match

const extractString = "Extract the word 'cow' from this string";
const cowRegEx = /cow/;

// console.log(extractString.match(cowRegEx));

// const stringRegEx = /string/

// console.log(extractString.match(stringRegEx));

//Matching multiple with the global flag

// console.log("Repeat, Repeat, Repeat".match(/Repeat/g))

const twinkleStar = "Twinkle, twinkle, little start";

// console.log(twinkleStar.match(/twinkle/ig))


//Windcards

const humString = "That's humbug!"
const hugSring = "I need a hug."

const huRegEx = /hu./;

// console.log(humString.match(huRegEx));
// console.log(hugSring.match(huRegEx));

const excersice = "He's a fun 'un";



// console.log(excersice.match(/.un/g))


//Wildcards II - one of the following latters

// console.log("I found big bugs in my bag".match(/b[aiu]g/g))

// console.log("I found big bugs in my bag".match(/[aeiou]/gi))

//Negated characters sets

// console.log("I found big bugs in my bag".match(/b[^ai]g/g))

// match in a Range

// console.log("837442jk4h242jhjsf".match(/[0-9]/g))

// console.log("837442jk4h242jhjsf".match(/[a-z]/g))


// console.log("837442jk4h242jhjsf".match(/[a-z0-9]/gi))


//Multiple matches
// console.log("Go goo goooooo goooo".match(/go*/gi))
