// Feature 1: Arithmetic Operations Script: Write a script that performs basic arithmetic operations ( addition, subtraction, multiplication, division, remainder ) on two numbers and logs the results.

function arthOperation(a, b){
    console.log(`Multiplication: `, a*b);
    console.log(`Addition: `, a+b);
    console.log(`Subtraction: `, a-b);
    console.log(`Division: `, a/b);
    console.log(`Remainder: `, a%b);
}

arthOperation(20,5);

// Feature 2: Comparison and Logical Operators Script: Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results.

function comparisonOperations(a, b){
    if(a>b) console.log(`${a} is Greater ${b}`)
        else console.log(`${b} is greater than ${a}`)

    if(a>=b) console.log(`${a} is greater than or equals to ${b}`)

    if(b>=a) console.log(`${b} is greater than or equals to ${a}`)

    if(a!=b) console.log(`${a} is not equal to ${b}`)
}

comparisonOperations(58, 23)


// Feature 3: Ternary Operator Script: Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result.

function ternaryOperation(a){
    a % 2 == 0 ? console.log("Even") : console.log("Odd")
}

ternaryOperation(68)