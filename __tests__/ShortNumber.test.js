import ShortNumber from "../src/utils/ShortNumber";

it('should return M or K in large number ', () => {
  expect(ShortNumber('1000')).toEqual('1K')
});
