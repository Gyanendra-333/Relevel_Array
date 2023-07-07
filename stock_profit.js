
function findMaxProfit(array) {

    let buyPrice = 0;
    let sellingPrice = 0;
    let maxProfit = 0;
    let changebuyingPrice = true;

    for (let i = 0; i < array.length; i++) {
        sellingPrice = array[i + 1];
        if (changebuyingPrice) {
            buyPrice = array[i];
        }
        if (sellingPrice < buyPrice) {
            //loss
            changebuyingPrice = true;
        }
        else {
            //profit
            let profit = sellingPrice - buyPrice;
            if (profit > maxProfit) {
                maxProfit = profit;
            }
            changebuyingPrice = false;
        }
    }
    console.log(maxProfit);
}
findMaxProfit([90, 40, 130, 230, 345, 10, 400, 600]);