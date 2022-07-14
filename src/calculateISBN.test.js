const { calculateISBNChecksum } = require("./calculateISBN");
describe("calculateISBN", () => {
    
  it("should work", () => {
    console.log("Hallo Ansbach");
  });
});

describe("calculateISBNChecksum", () => {
  [
    {input: '3423348968', output: '8'},
    {input: '3423349646', output: '6'},
    {input: '3423345861', output: '1'},
    {input: '3423209690', output: '0'}
  ]
  //Test wird für jede Zeile oben angewandt
  .forEach(({input, output}) => {
    it("should return output", () => {
      expect(calculateISBNChecksum(input)).toBe(output); // nimmt input entgegen und prüft, dass output herauskommt
    })
  })
});