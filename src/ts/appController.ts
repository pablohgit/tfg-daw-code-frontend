import * as ko from "knockout";
import Context = require("ojs/ojcontext");

class RootViewModel {
  smScreen: ko.Observable<boolean>;
  appName: ko.Observable<string>;
  userLogin: ko.Observable<string>;
  footerLinks: Array<object>;

  public checkUser: ko.Observable<boolean>;

  constructor() {
    this.appName = ko.observable("Gestion de Inventario");
    this.userLogin = ko.observable("john.hancock@oracle.com");
    this.checkUser = ko.observable(false);
    // footer
    this.footerLinks = [
      { name: "About Oracle", linkId: "aboutOracle", linkTarget: "http://www.oracle.com/us/corporate/index.html#menu-about" },
      { name: "Contact Us", id: "contactUs", linkTarget: "http://www.oracle.com/us/corporate/contact/index.html" },
      { name: "Legal Notices", id: "legalNotices", linkTarget: "http://www.oracle.com/us/legal/index.html" },
      { name: "Terms Of Use", id: "termsOfUse", linkTarget: "http://www.oracle.com/us/legal/terms/index.html" },
      { name: "Your Privacy Rights", id: "yourPrivacyRights", linkTarget: "http://www.oracle.com/us/legal/privacy/index.html" }
    ];

    // release the application bootstrap busy state
    Context.getPageContext().getBusyContext().applicationBootstrapComplete();
  }
}

export default new RootViewModel();
