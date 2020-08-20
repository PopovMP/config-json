"use strict"

let index   = 0;
let success = 0;
let failed  = 0;
let crashed = 0;

function test(test, message) {
    index++;
    
    try {
        const ans = test();
        if (ans) {
            console.log(index + ". OK");
            success++;
        } else {
            console.error(index + ". Failed: " + message);
            failed++;
        }
    } catch (e) {
        console.error(index + ". Crashed: " + e.message);
        crashed++;
    }
}

function finish() {
    console.log(`Success: ${success} of ${index}, Failed: ${failed}, Crashed: ${crashed}`);
}

// Tests start

const configJson = require("../index.js").init("./test");

test( ()=> configJson.get("key")    === "value"  , "Wrong value" );
test( ()=> configJson.get("answer") === 42       , "Wrong value" );
test( ()=> configJson.get("foo")    === undefined, "Wrong value" );

// Tests end

finish();
