import { Sorter } from '../index';

test('Order Numbers', () => {
    const sorter = new Sorter();
    let numbers = [2, 3, 1];
    let orderedNumbers = [1, 2, 3];
    expect(sorter.getOrdered(numbers)).toStrictEqual(orderedNumbers);
});


test('Order Negatives', () => {
    const sorter = new Sorter();
    let numbers = [-2, 3, 1];
    let orderedNumbers = [-2, 1, 3];
    expect(sorter.getOrdered(numbers)).toStrictEqual(orderedNumbers);
});