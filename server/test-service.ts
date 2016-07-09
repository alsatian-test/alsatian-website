import * as Alsatian from "alsatian";
import * as Express from "express";
import * as TypeScript from "typescript";

export default class TestService {

  public constructor(app: Express.Application) {


    app.post("/api/test", (request: Express.Request, response: Express.Response) => {
      let functionUnderTest: Function;
      let testRunnner = new Alsatian.TestRunner();
      let testFixture: any;

      eval("testFixture = " + JSON.parse(request.body).testFixture);

      testFixture.function();
      // build fake test set

      // run fake test set
    });
  }
}
