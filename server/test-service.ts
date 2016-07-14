import * as Alsatian from "alsatian";
import * as Express from "express";
import * as TypeScript from "typescript";
import FileSystem = require("fs");

export default class TestService {

  public constructor(app: Express.Application) {


    app.post("/api/test", (request: Express.Request, response: Express.Response) => {
      let functionUnderTest: Function;
      let testRunnner = new Alsatian.TestRunner();
      let testFixtures: any = {};
      FileSystem.writeFileSync("funky.js", JSON.parse(request.body).testFixture);

      let testSet = new Alsatian.TestSet("./funky.js");

      (testRunnner.run(testSet) as any).then((results: Array<any>) => {
        console.log(results);
        response.send(results);
      })
      // build fake test set

      // run fake test set
    });
  }
}
