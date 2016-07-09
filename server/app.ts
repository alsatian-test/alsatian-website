import * as Express from "express";
import * as BodyParser from "body-parser";

let app: Express.Application = Express();

app.use(BodyParser.text());
app.use(BodyParser.json());

import TestService from "./test-service";

new TestService(app);

export { app };
