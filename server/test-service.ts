import * as Alsatian from "alsatian";
import * as Express from "express";

export default class TestService {

  public constructor(app: Express.Application) {
    app.post("/api/test", (request: Express.Request, response: Express.Response) => {
      let functionUnderTest: Function;
      let testRunnner = new Alsatian.TestRunner();
      let testFixture: any;
      console.log(request.body);
      eval("x = " + request.body + "; functionUnderTest = x.function; testFixture = x.testFixture");

      // build fake test set

      // run fake test set
    });
  }
}
