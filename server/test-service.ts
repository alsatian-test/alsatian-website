import * as Alsatian from "alsatian";
import * as Express from "express";
import * as TypeScript from "typescript";

export default class TestService {

  public constructor(app: Express.Application) {


    app.post("/api/test", (request: Express.Request, response: Express.Response) => {
      let functionUnderTest: Function;
      let testRunnner = new Alsatian.TestRunner();
      let testFixture: any;

      console.log("testFixture = eval(" + request.body + ");");

      eval("testFixture = eval(" + request.body + ");");

      console.log(testFixture);
      // build fake test set

      // run fake test set
    });
  }
}
