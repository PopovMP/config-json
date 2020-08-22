"use strict";

const stats = {
    index: 0,
    passed: 0,
    failed: 0
};

/**
 * Resets the stats and shows teh message
 * @param {string} message
 */
function init(message) {
    console.log(message);

    stats.index = 0;
    stats.passed = 0;
    stats.failed = 0;
}

/**
 * Performs a test
 *
 * @param { string } message
 * @param { function() } testFunction -
 */
function test(message, testFunction) {
    stats.index++;

    try {
        const ans = testFunction();
        if (ans) {
            console.log(stats.index + ". ✅ " + message);
            stats.passed++;
        } else {
            console.error(stats.index + ". ❌ " + message);
            stats.failed++;
        }
    } catch (e) {
        console.error(stats.index + ". ❌ " + message + ": " + e.message);
        stats.failed++;
    }
}

/**
 * Called at the end of testing.
 * It resets the stats.
 * It throws error on failed tests.
 */
function done() {
    console.log(`Passed: ${stats.passed} of ${stats.index}, Failed: ${stats.failed}`);
    const failed = stats.failed;

    if (failed) {
        throw new Error("Tests failed: " + failed);
    }
}

module.exports = {
    init,
    test,
    done
}
