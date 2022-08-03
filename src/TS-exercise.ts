/* eslint-disable no-console */
type Drink = {
  drink: string,
  price: number
};

const drinks: Drink[] = [{
  drink: 'Vodke',
  price: 8.5,
}, {
  drink: 'Whiskey',
  price: 12,
}, {
  drink: 'Liquor',
  price: 16,
}, {
  drink: 'Beer',
  price: 100,
}];

const sortArr = (ArrInObj: Drink[]) => {
  const sortPrice = ArrInObj.sort((a, b): number => a.price - b.price);
  return sortPrice;
};

console.log(sortArr(drinks));
