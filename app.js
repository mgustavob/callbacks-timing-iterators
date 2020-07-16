function greeting(name, callback) {
    let sentence = 'Hello, my name is ' + name+ ' ';
    let otherSentence = callback();
    return sentence + otherSentence;
}


function anotherGreeting() {
    let sentence = 'I forgot my last name';

    return sentence;
}

let myName = 'Martin';
console.log(greeting(myName, anotherGreeting));


function printArray(array, callback) {
    for (let i = 0; i < array.length; i++) {
        let number = array[i];

        console.log(number);
    }
    callback(array);
}

function printArrayAgain(array) {
    for (let i = 0; i < array.length; i++) {
        let number = array[i];

        console.log(number);
    }
}

const numbsArray = [1,2,3,4,5,6,7,8,9,5,6]
printArray(numbsArray, printArrayAgain);

//exercise

function calculator(num1, num2, callbackOne, callbackTwo) {
    let result = callbackOne(num1, num2) + callbackTwo(num1, num2);

    return result
}
function addNumbers(num1, num2) {
    let result = num1 + num2;

    return result;
}

function subtractNumbers(num1, num2) {
    let result = num1 - num2

    return result;
}

console.log(calculator(5,77, addNumbers, subtractNumbers));

function superHero (name1, callback1, callback2) {
    let resl = "Hello my name is " +name1+ " my superpower is " +callback1()+ " and " +callback2();
    return resl;
}
function powerOne () {
    let pOne= "that you killed my Father!";
    return pOne;
}

function powerTwo () {
    let pTwo = "Prepare to Die!"

}

console.log(superHero("Indigo Montoya", powerOne, powerTwo))


function sonic (superPowerOne, superPowerTwo) {

    let allSuperPowers = superPowerOne() + ' and ' + superPowerTwo();

    return allSuperPowers;
}

function superSpeed() {

}
