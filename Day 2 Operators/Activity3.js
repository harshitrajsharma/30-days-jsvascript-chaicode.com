// Activity 3: Comparison Operators
// Task 8: Write a program that compares two numbers using > and < and log the result to the console.
let a = 10
let b = 8
if(a>b) console.log(`${a} is greater than 
    ${b}`)
    else console.log(`${b} is greater than ${a}`)

// Task 9: Write a program that compares two numbers using >= and <= and log the result to the console.
let c = 10
c>=a ? console.log(`${c} is greater than or equals to ${b}`): console.log(``)
b<=a ? console.log(`${b} is less than or equals to ${a}`): console.log(``)

// Task 10: Write a program that compares two numbers using == and === and log the result to the console.
let x = "10"

a == x ? console.log(`Number ${a} == String ${x}`): console.log(``)

a === x? console.log(`Number ${a} === String ${x}`): console.log(`Number ${a} and String ${x} both are not strictly equals [===] `)