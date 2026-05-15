const sum = require("./testing");

test("If 2 +2 is added result should be 4", () => {
    expect(sum(2, 2)).toBe(4);
});