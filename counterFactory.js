function counterFactory() {
    let counter = 0
    return {
        increment: () => ++counter,
        decrement: () => --counter
    }
}

module.exports = counterFactory;