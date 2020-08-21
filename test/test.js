"use strict"

const configJson = require("../index.js");
configJson.init(__dirname);

test("Have an `init` function", () =>
    typeof configJson.init === "function"
);

test("Have a `get` function", () =>
    typeof configJson.get === "function"
);

test("Get a string value", () =>
    configJson.get("key") === "value"
);

test("Get a numeric value", () =>
    configJson.get("answer") === 42
);

test("Get true", () =>
    configJson.get("yes") === true
);

test("Get false", () =>
    configJson.get("no") === false
);

test("Get null", () =>
    configJson.get("nil") === null
);

test("Get a copy of an array", () =>
    configJson.get("arr")[0] = 54 && configJson.get("arr")[0] === 3
);

test("Get a copy of an object", () =>
    configJson.get("obj")["a"] = 54 && configJson.get("obj")["a"] === 3
);

test("Requesting a missing value prints an error", () =>
    configJson.get("foo") === undefined
);

// Tests end

done();

function test(message, test) {
    if (!global.__testResults) {
        global.__testResults = {index: 0, success: 0, fail: 0};
    }

    global.__testResults.index++;

    try {
        const ans = test();
        if (ans) {
            console.log(global.__testResults.index + ". ✅ " + message);
            global.__testResults.success++;
        } else {
            console.error(global.__testResults.index + ". ❌ " + message);
            global.__testResults.fail++;
        }
    } catch (e) {
        console.error(global.__testResults.index + ". ❌ " + message + ": " + e.message);
        global.__testResults.fail++;
    }
}

function done() {
    const message = `Success: ${global.__testResults.success}` +
        ` of ${global.__testResults.index}` +
        `, Failed: ${global.__testResults.fail}`;
    delete global.__testResults;
    console.log(message);
}
