// Import niceLogger module to perform testing 
var {niceLogger, messageRepeater} = require("../src/niceLogger.js")


// Segregate all test cases for one functionally
describe ("niceLogger Function test", () => {
    
    // different test cases
    test ("niceLogger returns Hello World", () => {
        // test happens here
        // expect(sth).toBe(sth);
    
        // Lets make a test
        // expect(who?).toBe(what?);
        expect(niceLogger()).toBe("Hello World.");
    });

    test ("niceLogger returns Hello World", () => {
        
        // mock function
        niceLogger = jest.fn();
        
        niceLogger.mockReturnValue("Hello World.");
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
        let repeatedMessage = messageRepeater("hello");

        expect(repeatedMessage).toBe("hellohellohello");
        expect(repeatedMessage).toHaveLength(15);
    });

    test("messageRepeater repeats numbers correctly", () => {
        let repeatedMessage = messageRepeater(1);

        expect(repeatedMessage).toBe("111");
        expect(repeatedMessage).toHaveLength(3);
    });

    test("messageRepeater repeats arrays correctly", () => {
        let repeatedMessage = messageRepeater(["Hello", "World"]);

        expect(repeatedMessage).toEqual(["Hello", "World", "Hello", "World", "Hello", "World"]);
        expect(repeatedMessage).toHaveLength(6);
    });

    test("messageRepeater repeats null or whitespace correctly", () => {
        let repeatedMessage = messageRepeater("");

        expect(repeatedMessage).toEqual("");
        expect(repeatedMessage).toHaveLength(0);
    });
});


// Globals methods

beforeEach(() => {
    console.log("A test has been started!");
});

afterEach(() => {
    console.log("A test has finished!");
});

beforeAll(() => {
    console.log("Testing will begin now!");
    // for APIs, the possible commands we could run are:
    // get JWT from the API
    // store JWT for all tests to use
    // connection successful, make sure API is active and ready
    // connection successful, make sure database is available and running
});

afterAll(() => {
    console.log("All tests have been completed!");
    // For APIs, delete all the resources that were created.
});