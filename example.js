let bool = 5 > 2;
console.log(bool);

let bool1 = 1 === 1;
console.log(bool1);

let bool2 = 1 !==2;
console.log(bool2);

let bool3 = "Pawel" === "Jowita";
console.log(bool3);

let isBiggerThan10 = (number) => {
    if(number > 10) {
        console.log("Liczba jest większa od 10")
    }

    else{
        console.log("Liczba nie jest większa  od 10")
    }
};
isBiggerThan10 (20)
isBiggerThan10 (4)