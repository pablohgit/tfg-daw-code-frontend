import * as ko from "knockout";
import { whenDocumentReady } from "ojs/ojbootstrap";
import "ojs/ojbutton";
import "ojs/ojknockout";
import "ojs/ojmenu";
import "ojs/ojtoolbar";
import rootViewModel from "./appController";

function init(): void {
  // bind your ViewModel for the content of the whole page body.
  ko.applyBindings(rootViewModel, document.getElementById("globalBody"));
}

whenDocumentReady().then(function () {
  // if running in a hybrid (e.g. Cordova) environment, we need to wait for the deviceready
  // event before executing any code that might interact with Cordova APIs or plugins.
  if (document.body.classList.contains("oj-hybrid")) {
    document.addEventListener("deviceready", init);
  } else {
    init();
  }
});
