const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/";
const marcoBase = "http://localhost:3000/marco";

describe("routes : static", () => {

//#1
  describe("GET /", () => {

//#2
    it("should return status code 200", (done) => {

//#3
      request.get(base, (err, res, body) => {
        expect(res.statusCode).toBe(200);

//#4
        done();
      });
    });

  });

  describe("GET /marco", () => {
    it("should return a status code 200", (done) => {
      request.get(marcoBase, (err, res, body) => {
        expect(res.statusCode).toBe(200);
        done();
      });
    });

  it("should return string 'Polo'", (done) => {
    request.get(marcoBase, (err,res, body) =>{
      expect(body).toContain('Polo');
      done();
      });
    });
  });
});

// For this assignment, TDD a route that accepts a
// GET request to /marco. The test should confirm that
// a status code 200 is returned along with the
// expectation that the body of the response should
// contain the string "polo".
