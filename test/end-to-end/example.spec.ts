import { Builder, By, Capabilities } from "selenium-webdriver";
import { TestFixture, AsyncTest, Expect } from "alsatian";

// @TestFixture("test")
export default class ExampleEndToEndTests {

    @AsyncTest("check nav title spelled correctly")
    public async checkNavTitle() {
        const driver = new Builder().
            withCapabilities(Capabilities.chrome()).
            build();
        
        await driver.get("localhost:3000");

        const headingTitle = driver.findElement(By.css("nav h1"));

        const headingText = await headingTitle.getText();
        
        Expect(headingText).toBe("Alsatian");
    }
}