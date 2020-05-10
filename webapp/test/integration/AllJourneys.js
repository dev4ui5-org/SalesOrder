jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 SalesOrderSet in the list
// * All 3 SalesOrderSet have at least one ToLineItems

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/sample/SalesOrder/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/sample/SalesOrder/test/integration/pages/App",
	"com/sample/SalesOrder/test/integration/pages/Browser",
	"com/sample/SalesOrder/test/integration/pages/Master",
	"com/sample/SalesOrder/test/integration/pages/Detail",
	"com/sample/SalesOrder/test/integration/pages/Create",
	"com/sample/SalesOrder/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.sample.SalesOrder.view."
	});

	sap.ui.require([
		"com/sample/SalesOrder/test/integration/MasterJourney",
		"com/sample/SalesOrder/test/integration/NavigationJourney",
		"com/sample/SalesOrder/test/integration/NotFoundJourney",
		"com/sample/SalesOrder/test/integration/BusyJourney",
		"com/sample/SalesOrder/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});