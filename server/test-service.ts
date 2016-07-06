import * as Alsatian from "alsatian";
import { app } from "./app";


app.post("/api/test", (request: Express.Request, response: Express.Response) => {
  let functionUnderTest: Function;
  let testRunnner = new Alsatian.TestRunner();
  let testFixture: any;
  eval("x = " + request.body + "; functionUnderTest = x.function; testFixture = x.testFixture");

  // build fake test set

  // run fake test set
});
