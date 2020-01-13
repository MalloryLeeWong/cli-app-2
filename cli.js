#!/usr/bin/env node

// add shebang line to assign the interpreter of the JS file which looks up the locally installed node

// get provided args from command line
// args start at index 2, first 2 elements are node and filename
const [,, ...args] = process.argv

// print hello world passing in args
console.log(`Hello World ${args}`)
