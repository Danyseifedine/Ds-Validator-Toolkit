import { _STR_ } from "./dist/index.mjs";
import { VALIDATE_STRING } from "./dist/index.mjs";

let a = _STR_.isRequired("", true)
console.log(a)


const name = "dany"
let c = VALIDATE_STRING(name, {
    blacklistWords: ['dany'],
    blacklistWordsError: `cant contain the word ${name}`,
})
console.log(c)

