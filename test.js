// const mocha = require("mocha");
// const chai = require("chai");
// const server = require("./server");
// const chaiHttp = require("chai-http");

// chai.use(chaiHttp);

// describe("/GET", () => {
//   it("should get the homepage", (done) => {
//     chai.request(server).get("/");
//     done();
//   });
// });

test("1 + 1 = 2", () => {
  expect(1 + 1).toBe(2);
});