import { Builder, By, Capabilities } from "selenium-webdriver";
import { TestFixture, AsyncTest, Expect } from "alsatian";

// @TestFixture("test")
export default class ExampleEndToEndTests {

    @AsyncTest("check nav title spelled correctly")
    public checkNavTitle() {
        const driver = new Builder().
            withCapabilities(Capabilities.chrome()).
            build();
        
        return new Promise((resolve, reject) => {
            driver.get("localhost:3000").then(() => {
                const headingTitle = driver.findElement(By.css("nav h1"));

                headingTitle.getText().then(headingText => {
                    Expect(headingText).toBe("Alsatian");
                });

                resolve();
            });
        })
    }
}

export class Promise<T> {

   private _resolveCallback: (resolvedValue?: T) => any = () => {};
   private _rejectCallback: (error: Error) => any = () => {};

   public constructor(asyncFunction: (resolve: (resolvedValue?: T) => any, reject: (error: Error) => any) => any) {
      setTimeout(() => {
         try {
            asyncFunction(this._resolve.bind(this), this._reject.bind(this));
         }
         catch (error) {
            this._rejectCallback(error);
         }
      });
   }

   private _resolve(resolvedValue?: T) {
      try {
         this._resolveCallback(resolvedValue);
      }
      catch (error) {
         this._reject(error);
      }

   }

   private _reject(error: Error) {
      this._rejectCallback(error);
   }

   public then(callback: (resolvedValue?: T) => any) {
      this._resolveCallback = callback;
      return this;
   }

   public catch(callback: (error: Error) => any) {
      this._rejectCallback = callback;
      return this;
   }
}