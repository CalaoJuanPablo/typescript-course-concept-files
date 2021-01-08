let nullVariable: null
// nullVariable = 1 /* Error */

let otherVariable = null
// Infiere el tipo como any, no como null.

let undefinedVariable: undefined
// undefinedVariable = 'undefined' /* Error */

let otherUndefinedVariable = undefined
// Infiere el tipo como any, no como undefined

// Null y Undefined como subtipos
let albumName: string
// albumName = null /* Error cuando --strictNullChecks es true */
// albumName = undefined /* Error cuando --strictNullChecks es true */
