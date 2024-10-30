function niceLogger() {
    console.log("Hello World!!");
    return "Hello World.";
}

function sampleFunction() {
    console.log("This is a sample function.")
}

function messageRepeater(messageToRepeat) {
    // message repeater functionally
    if (Array.isArray(messageToRepeat)) {
        // sth
        return [...messageToRepeat, ...messageToRepeat, ...messageToRepeat]
    } 
    else {
        let stringMessageToRepeat = messageToRepeat.toString();
        return stringMessageToRepeat + stringMessageToRepeat + stringMessageToRepeat;
    }
}


// Export modules
module.exports = {
    // Name of the function, if multiple functions separate by comma
    niceLogger,
    sampleFunction,
    messageRepeater
}
