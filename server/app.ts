import * as Express from "express";

let app: Express.Application = Express();

import TestService from "./test-service";

new TestService(app);

export { app };
