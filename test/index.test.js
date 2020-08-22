"use strict"

const config = require("../index.js");
config.init(__dirname);

test("Have an `init` function", () =>
    typeof config.init === "function"
);

test("Have a `get` function", () =>
    typeof config.get === "function"
);

test("Get a string", () =>
    config.get("key") === "value"
);

test("Get a number", () =>
    config.get("answer") === 42
);

test("Get true", () =>
    config.get("yes") === true
);

test("Get false", () =>
    config.get("no") === false
);

test("Get null", () =>
    config.get("nil") === null
);

test("Get a copy of an array", () =>
    config.get("arr")[0] = 54 &&
    config.get("arr")[0] === 3
);

test("Get a copy of an object", () =>
    config.get("obj")["a"] = 54 &&
    config.get("obj")["a"] === 3
);

test("Get a missing value", () =>
    // It prints an error to the console and returns undefined.
    config.get("foo") === undefined
);

// Tests end

done();

function test(message, test) {
    if (!global.__testResults) {
        global.__testResults = {index: 0, passed: 0, failed: 0};
    }

    __testResults.index++;

    try {
        const ans = test();
        if (ans) {
            console.log(__testResults.index + ". ✅ " + message);
            __testResults.passed++;
        } else {
            console.error(__testResults.index + ". ❌ " + message);
            __testResults.failed++;
        }
    } catch (e) {
        console.error(__testResults.index + ". ❌ " + message + ": " + e.message);
        __testResults.failed++;
    }
}

function done() {
    console.log(`Passed: ${__testResults.passed} of ${__testResults.index}, Failed: ${__testResults.failed}`);
    const failed = __testResults.failed;
    delete global.__testResults;

    if (failed) {
        throw new Error("Tests failed: " + failed);
    }
}
