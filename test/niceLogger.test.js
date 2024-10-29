// Import niceLogger module to perform testing 
const {niceLogger, messageRepeater} = require("../src/niceLogger.js")


// Segregate all test cases for one functionally
describe ("niceLogger Function tests", () => {
    
    // different test cases
    test ("niceLogger returns Hello World", () => {
        // test happens here
        // expect(sth).toBe(sth);
    
        // Lets make a test
        // expect(who?).toBe(what?);
        expect(niceLogger()).toBe("Hello World.");
    });

    test ("niceLogger returns Hello World", () => {
        // test happens here
        // expect(sth).toBe(sth);
    
        // Lets make a test
        // expect(who?).toBe(what?);
        expect(niceLogger()).toBe("Hello World.");
    });

    test ("niceLogger returns Hello World", () => {
        // test happens here
        // expect(sth).toBe(sth);
    
        // Lets make a test
        // expect(who?).toBe(what?);
        expect(niceLogger()).toBe("Hello World.");
    });
});


// another describe block for messageRepeater fn
describe ("messageRepeater Function tests", () => {

    test("messageRepeater repeats words correctly", () => {

    });

    test("messageRepeater repeats numbers correctly", () => {

    });

    test("messageRepeater repeats arrays correctly", () => {

    });

});
