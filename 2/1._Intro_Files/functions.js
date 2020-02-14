
// hoisting (kørere function/variabler først og derefter kald)
console.log(addition(2, 10));

// a scope
{
    console.log("This it a Scope");
}
function addition(a, b){
    return a + b;
}
// console.log(addition(2, 6));

function introduce(){
    console.log("Nice to meet you");
}



function findPerson(whatToDoAfterFindingAPerson) {
    console.log("Spotted a person!")
    whatToDoAfterFindingAPerson();
}
function hi() {
    console.log("HELLO");
}


findPerson(introduce);

findPerson(hi);


const aboutMe = function (me) {
    console.log("My hobby is", me.hobby);
}

const meAsObject = {
    hobby: "Fodbold"
};


aboutMe(meAsObject);



const calling = (name) => {
    return "ring ring ring to " + name;
};



const callingLater = (name, calling) => {
    console.log(calling(name));
}

callingLater("Wajid", calling);

//Nested funtion
const lastThing = () => {
    const thisIsJavascrpit = () => {
        console.log("NEsted FUntion");
    }
    thisIsJavascrpit();
}
lastThing();