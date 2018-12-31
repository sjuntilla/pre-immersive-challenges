module.exports = function halfLife(initialQuantity, quantityRemaining, time) {
    const halfs = 0;
    const halved = initialQuantity / 2;
    while (quantityRemaining > halved) {
        halved++;
    }
}