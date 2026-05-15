const { calculateNAV } = require("../src/models/investorModel");

describe("calculateNAV Function", () => {

    test("Should return NAV value for valid investor", async () => {

        const result = await calculateNAV("6789543210");

        expect(result).toBe(-98000);

    });

    test("Should return null for invalid investor", async () => {

        const result = await calculateNAV("9999999999");

        expect(result).toBeNull();

    
    });

});