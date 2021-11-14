// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function  destructivelyAppendCat(name){
    cats.push("Ralph");
}
cats;
function destructivelyPrependCat(name){
    cats.unshift("Bob");
}
cats;
function destructivelyRemoveLastCat(name){
    cats.pop();
}
cats;
function destructivelyRemoveFirstCat(name){
    cats.shift();
}
cats;

const copyOfCats=[...cats];
function  appendCat(name){
    copyOfCats.push("Broom")
    return copyOfCats;
}

const crazyCatsCopy=[...cats];
function prependCat(name){
    crazyCatsCopy.unshift("Arnold")
    return crazyCatsCopy;
}
const removeCat=[...cats];
function removeLastCat(name){
removeCat.pop();
return removeCat;
}
const firstCat=[...cats];
function removeFirstCat(name){
    firstCat.shift();
    return firstCat;
}


