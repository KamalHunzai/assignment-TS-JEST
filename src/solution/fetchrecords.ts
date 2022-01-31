import * as stocks from '@src/data/stock.json';
import * as transactions from '@src/data/transactions.json';
import checkSku from '@src/utilty/checkSku';
import getStocks from '@src/utilty/getStocks';
function fetchrecords(sku: string): any {
  const hasSku = checkSku(sku, stocks, transactions);
  if (hasSku) {
    return getStocks(sku, transactions);
  }
  return { error: "No Matching SKU's Found" };
}

export default fetchrecords;
