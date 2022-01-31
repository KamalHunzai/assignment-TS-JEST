
function checkSku (sku: string, stocks: any[], transactions: any[]): any {
    // const stockSku = stocks["default"].map(item => item.sku);
    const stocksSkus = [];
    for(let stock in stocks) {
        stocksSkus.push(stocks[stock]["sku"]);
    }
    const transactionsSkus = [];
    for(let transaction in transactions) {
        transactionsSkus.push(transactions[transaction]["sku"]);
    }

    
   //  const transactionSku = transactions.map(item => item.sku);
    return (stocksSkus.includes(sku) && transactionsSkus.includes(sku)) ? true : false;
 
}
export default checkSku;
