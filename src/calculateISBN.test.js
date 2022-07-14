const { calculateISBNChecksum } = require("./calculateISBN");
describe("calculateISBN", () => {
  it("should work", () => {
    console.log("Hallo Ansbach");
  });
});

describe("calculateISBNChecksum", () => {
  [
    { input: "3423348968", output: "8" },
    { input: "3423349646", output: "6" },
    { input: "3423345861", output: "1" },
    { input: "3423209690", output: "0" },
  ]
    //Test wird für jede Zeile oben angewandt
    .forEach(({ input, output }) => {
      it("should return output", () => {
        expect(calculateISBNChecksum(input)).toBe(output); // nimmt input entgegen und prüft, dass output herauskommt
      });
    });
});

//Tests für ISBN-Nummern, die ein X am Ende enthalten
describe("calculateISBNCheckSum", () => {
  [
    { input: "342334976X", output: "10" },
    { input: "164780342X", output: "10" },
    { input: "395051032X", output: "10" },
  ]
    .forEach(({ input, output }) => {
      it("should return 10 for output", () => {
        expect(calculateISBNChecksum(input)).toBe(output);
    });
  });
});

//Tests für die Länge der eingegebenen ISBN
describe("calculateISBNChecksum", () => {
  [
    { input: "3423348962348"},
    { input: "34233496246"},
    { input: "342334861"},
    { input: "34232090"}
  ]
    .forEach(({ input }) => {
      it("should return Error", () => {
        expect(calculateISBNChecksum(input)).toBe("Die ISBN darf nur aus 10 Ziffern bestehen"); // nimmt input entgegen und prüft, dass output herauskommt
      });
    });
});