class RandomStockValues {
    constructor() {

    }
    getAppleStockValues() {
        const starValue = 230;
        const endValue = 350;
        return Math.floor(Math.random() * (starValue - endValue) + 1) + endValue;
    }
    getGoogleStockValues() {
        const starValue = 320;
        const endValue = 450;
        return Math.floor(Math.random() * (starValue - endValue) + 1) + endValue;
    }
    getMicrosoftStockValues() {
        const starValue = 130;
        const endValue = 220;
        return Math.floor(Math.random() * (starValue - endValue) + 1) + endValue;
    }
}

module.exports = new RandomStockValues();