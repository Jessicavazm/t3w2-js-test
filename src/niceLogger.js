function niceLogger() {
    console.log("Hello World!!");
    return "Hello World.";
}

function sampleFunction() {
    console.log("This is a sample function.")
}

// Export fn
module.exports = {
    // Name of the function, if multiple functions separate by comma
    niceLogger,
    sampleFunction
}
