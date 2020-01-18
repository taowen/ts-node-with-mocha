// node.js require()
// to make typescript compile without error
declare const require: any;
describe("Test1", () => {
  it("Test1", async () => {
    // uncomment to make breakpoint in someTestHelper working
    // await new Promise(resolve => setTimeout(resolve, 100));
    require("./someTestHelper").someTestHelper();
  });
});
