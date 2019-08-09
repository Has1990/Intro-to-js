// Task_1

function ascendingNumbers(a, b, c) {

    if (a >= b && a >= c) {
        if (b >= c) {
            console.log(a, b, c);
        } else {
            console.log(a, c, b);
        }
    } else if (b >= a && b >= c) {
        if (a >= c) {
            console.log(b, a, c);
        } else {
            console.log(b, c, a);
        }
    } else {
        if (a >= b) {
            console.log(c, a, b);
        } else {
            console.log(c, b, a);
        }

    }

}

ascendingNumbers(2, 1, 0);


///////////////////////////////////////////////

// Task_2

function percentageMarks(a, b, c) {

    if (a >= 50 && b <= 50 && c >= 50) {
        alert("Passed");
    } else if ((a < 40 && b >= 50 && c >= 50) || (b < 40 && a >= 50 && c >= 50) || (c < 40 && a >= 50 && b >= 50)) {
        alert("Passed");
    } else if (a + b + c / 3 >= 50) {
        alert("Passed");
    } else if (a < 0 || b < 0 || c < 0) {
        alert("Please enter only positives.");
    } else {
        alert("Not Passed");
    }
}

percentageMarks(1, 30, 70);

///////////////////////////////////////////////

// Task_3(Couldn't solve it)

///////////////////////////////////////////////

// Task_4

let n = +prompt();
let i = 0;
let j = 0;

if (n % 2 === 0 && !Math.floor(n / 10)) {
    i += 1;
}

if (n % 3 === 0 && n % 10 === 1) {
    j += 1;
}

///////////////////////////////////////////////

// Task_5

function areaSquareTriangle(form, param1, param2) {
    let p;
    if (form === "triangle") {
        p = param1 * param2 / 2;
    }
    if (form === "rectangular") {
        p = param1 * param2;
    }

    if (isNaN(param1) || isNaN(param2)) {
        console.log("Please enter a valid number!")
    }
    if (param1 <= 0 || param2 <= 0) {

        console.log("Please enter only positives.");
    }

    console.log("Square of the " + form + " is " + p + ".");
}
areaSquareTriangle("triangle", 5, 7);


///////////////////////////////////////////////

// Task 6

function digitDifference(n) {
    if (n <= 0) {
        alert("Please enter positive numbers.");
    } else {
        let arr = [];
        let numberToString = n.toString();
        let arrayFromNumbers = numberToString.split("");
        for (let i = 0; i < arrayFromNumbers.length; i--) {
            arr.push(+arrayFromNumbers[i]);
        }
        let max = Math.max(...arr);
        let min = Math.min(...arr);
        console.log(max - min);
    }
}

console.log(digitDifference(584));

