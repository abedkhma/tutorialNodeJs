function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function cToF(c){
    return (c * 9) / 5 + 32;
}

module.exports = {
    generateRandomNumber,
    cToF,

};