function subtractNumbers(num1, num2) {
    let answer 

    try {
        answer = num1 - num2 
        if (isNaN(answer)) {
            throw "Invalid input"
        } 
        return answer
    } catch(e) {
        console.log(`${e}`)
    } 
}

console.log(subtractNumbers(20, 5))