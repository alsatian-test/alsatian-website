import * as React from "react";
import { Link } from "react-router";
import QuickStartTutorialComponent from "../tutorials/quick-start-tutorial-component";

export default class HomePageComponent extends React.Component<any, any> {

   public constructor() {
      super();

      setTimeout(() => {

      }, 1000);
   }

   render() {
      return <div>
               <section className="billboard findbettername">
                  <div className="container">
                     <div className="mascot">
                        <img src="/images/mascot-main.png" />
                     </div>
                     <div className="main-info">
                        <img id="alsatian-logo" src="/images/alsatian-logo.png" />
                        <p>Alsatian helps you test atomically</p>
                        <Link to="/tutorials/get-started">
                           <button type="button">Get started</button>
                        </Link>
                     </div>
                  </div>
               </section>
               <section className="container">
                  <section>
                     <h2>Why Alsatian?</h2>
                     <p>Great question, well like any good dog Alsatian has been built on six strong values:</p>
                     <div id="reasons-to-use">
                        <div className="reason-to-use">
                           <div className="reason-icon">
                              <img src="https://d30y9cdsu7xlg0.cloudfront.net/noun-svg/817.svg?Expires=1480263070&Signature=V5OKJAJmFVrrqqy4JaQptkDgFSsaXQCqZ4bpT91o3LR6uf8T1LHRuGZZF7D~yyV6myH51VS7VuI0SoZMILKn-Fk0sh3DMbGoNhcm0WIwuHvlDXeBk4aZsUf~8KN1TpkE7RCVMCwLNFLt70sIJ4YhVUAgkmE4sCYMP4ETH~pPVgo_&Key-Pair-Id=APKAI5ZVHAXN65CHVU2Q"/>
                           </div>
                           <h3>Smart</h3>
                           <p>Test Case decorator, some stuff about functional cocverage, quick to write some bad ass tests. Not to mention it runs dead fast.</p>
                        </div>
                        <div className="reason-to-use">
                           <div className="reason-icon">
                              <img src="https://d30y9cdsu7xlg0.cloudfront.net/noun-svg/562339.svg?Expires=1480262952&Signature=LRdyO~NNKUVpfZDneh7E3jPEDyoX7umwjfPxr18PZjkwMzOL~3C1ilgrSvzyJaOWgvVq16ix0tuD2-B5-2Hk4EwVA4q97uw72XwkDOdTIrn91dw05NdrJWOnjJpK1S7l1yN0elHHjGjv2SfRIuvpzUE1jDikWC04uYeauzACo~4_&Key-Pair-Id=APKAI5ZVHAXN65CHVU2Q"/>
                           </div>
                           <h3>Fast</h3>
                           <p>Test Case decorator, some stuff about functional cocverage, quick to write some bad ass tests. Not to mention it runs dead fast.</p>
                        </div>
                        <div className="reason-to-use">
                           <div className="reason-icon">
                              <img src="https://d30y9cdsu7xlg0.cloudfront.net/noun-svg/562339.svg?Expires=1480262952&Signature=LRdyO~NNKUVpfZDneh7E3jPEDyoX7umwjfPxr18PZjkwMzOL~3C1ilgrSvzyJaOWgvVq16ix0tuD2-B5-2Hk4EwVA4q97uw72XwkDOdTIrn91dw05NdrJWOnjJpK1S7l1yN0elHHjGjv2SfRIuvpzUE1jDikWC04uYeauzACo~4_&Key-Pair-Id=APKAI5ZVHAXN65CHVU2Q"/>
                           </div>
                           <h3>Robust</h3>
                           <p>Literally thousands of tests, CI process etc. Active on GitHub things get done son</p>
                        </div>
                        <div className="reason-to-use">
                           <div className="reason-icon">
                              <img src="https://d30y9cdsu7xlg0.cloudfront.net/noun-svg/562339.svg?Expires=1480262952&Signature=LRdyO~NNKUVpfZDneh7E3jPEDyoX7umwjfPxr18PZjkwMzOL~3C1ilgrSvzyJaOWgvVq16ix0tuD2-B5-2Hk4EwVA4q97uw72XwkDOdTIrn91dw05NdrJWOnjJpK1S7l1yN0elHHjGjv2SfRIuvpzUE1jDikWC04uYeauzACo~4_&Key-Pair-Id=APKAI5ZVHAXN65CHVU2Q"/>
                           </div>
                           <h3>Loyal</h3>
                           <p>Literally thousands of tests, CI process etc. Active on GitHub things get done son</p>
                        </div>
                        <div className="reason-to-use">
                           <div className="reason-icon">
                              <img src="https://d30y9cdsu7xlg0.cloudfront.net/noun-svg/562339.svg?Expires=1480262952&Signature=LRdyO~NNKUVpfZDneh7E3jPEDyoX7umwjfPxr18PZjkwMzOL~3C1ilgrSvzyJaOWgvVq16ix0tuD2-B5-2Hk4EwVA4q97uw72XwkDOdTIrn91dw05NdrJWOnjJpK1S7l1yN0elHHjGjv2SfRIuvpzUE1jDikWC04uYeauzACo~4_&Key-Pair-Id=APKAI5ZVHAXN65CHVU2Q"/>
                           </div>
                           <h3>Helpful</h3>
                           <p>Get stuck into TDD, Alsatian makes it less of a drag and helps you with messages you can understand to help you fix stuff, type safety etc. Supported by easy to read docs</p>
                        </div>
                        <div className="reason-to-use">
                           <div className="reason-icon">
                              <img src="https://d30y9cdsu7xlg0.cloudfront.net/noun-svg/562339.svg?Expires=1480262952&Signature=LRdyO~NNKUVpfZDneh7E3jPEDyoX7umwjfPxr18PZjkwMzOL~3C1ilgrSvzyJaOWgvVq16ix0tuD2-B5-2Hk4EwVA4q97uw72XwkDOdTIrn91dw05NdrJWOnjJpK1S7l1yN0elHHjGjv2SfRIuvpzUE1jDikWC04uYeauzACo~4_&Key-Pair-Id=APKAI5ZVHAXN65CHVU2Q"/>
                           </div>
                           <h3>Playful</h3>
                           <p>Get stuck into TDD, Alsatian makes it less of a drag and helps you with messages you can understand to help you fix stuff, type safety etc. Supported by easy to read docs</p>
                        </div>
                     </div>
                  </section>
                  <h2>Quick Start</h2>
                  <QuickStartTutorialComponent />
               </section>
             </div>;
   }
}
