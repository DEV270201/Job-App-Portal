const fetchData = () => Promise.resolve('peanut butter');

test('the data is peanut butter', async () => {
  await expect(fetchData()).resolves.toBe('peanut butter');
});
