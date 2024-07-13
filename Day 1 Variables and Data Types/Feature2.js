// **Reassignment Demo:** Create a script that demonstartes the difference in behaviour between `let` and `const` when it comes to reassignment.

// let Demonstartion

let sthing = "hey hello there"
console.log(`Initial value of let is: ${sthing}`)

sthing = "Now, the value is changed. Magic, Wallaha"
console.log(`Value after reassigning: ${sthing}`);

// Now its const's turn

const cthing = "Chai aur Code is one of the best"
console.log(`Initial value of const is: ${cthing}`)

try {
    cthing = "Umm its good but not that best"
} catch (error) {
    console.log(error.message) 
}

// Output:

    // Initial value of let is: hey hello there
    // Value after reassigning: Now, the value is changed. Magic, Wallaha
    // Initial value of const is: Chai aur Code is one of the best

    // Assignment to constant variable.