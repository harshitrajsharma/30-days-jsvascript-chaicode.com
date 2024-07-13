// 1. **Variable Types Console log:** Write a script that declares variables of different data types and logs both the value and type of each variable to the console.

function whatisTheType( variablevalue, variablename ){
    console.log(` ${variablename} value is: ${variablevalue} and the type is: ${typeof(variablevalue)}`)
}

let num = 69
let str = "hello"
let bol = false
let nul = null
let undef = undefined
let obj = {
    key: "value"
}
let arr = [1, 2, 3, 4, 5]
let date = new Date()
let functionDec = () => {
    return "hello"
}

whatisTheType( num, "number")
whatisTheType(str, "string")
whatisTheType( bol, "boolean")
whatisTheType( nul, "null")
whatisTheType( undef, "undefined")
whatisTheType( obj, "object")
whatisTheType( arr, "array")
whatisTheType( functionDec, "function")

// Output:
    //  number value is: 69 and the type is: number
    //  string value is: hello and the type is: string
    //  boolean value is: false and the type is: boolean
    //  null value is: null and the type is: object
    //  undefined value is: undefined and the type is: undefined
    //  object value is: [object Object] and the type is: object
    //  array value is: 1,2,3,4,5 and the type is: object
    //  function value is: () => {
    //     return "hello"
    // } and the type is: function