const request = require("supertest");

const app = require("../src/server");

describe("GET Investor API", () => {

    test("valid API call", async () => {

        const result = await request(app)
            .get("/api/investor/INV001");

        expect(result.statusCode).toBe(200);

    });

    test("invalid API call", async () => {

        const result = await request(app)
            .get("/api/investor/INV999");

        expect(result.statusCode).toBe(404);

    });

});