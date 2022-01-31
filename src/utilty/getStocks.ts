const getStocks = function (sku: string, transactions: any[]): any {
  for (const transaction in transactions) {
    if (transactions[transaction].sku == sku) {
      return { sku: transactions[transaction].sku, qty: transactions[transaction].qty };
    }
  }
};
export default getStocks;
