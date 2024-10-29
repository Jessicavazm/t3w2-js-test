// Import niceLogger module to perform testing 
const {niceLogger} = require("../src/niceLogger.js")

// test (description, () => expect)
test ("niceLogger returns Hello World", () => {
    // test happens here
    // expect(sth).toBe(sth);

    // Lets make a test
    // expect(who?).toBe(what?);
    expect(niceLogger()).toBe("Hello World.");
});
