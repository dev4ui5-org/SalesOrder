jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/sample/SalesOrder/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/sample/SalesOrder/test/integration/pages/App",
	"com/sample/SalesOrder/test/integration/pages/Browser",
	"com/sample/SalesOrder/test/integration/pages/Master",
	"com/sample/SalesOrder/test/integration/pages/Detail",
	"com/sample/SalesOrder/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.sample.SalesOrder.view."
	});

	sap.ui.require([
		"com/sample/SalesOrder/test/integration/NavigationJourneyPhone",
		"com/sample/SalesOrder/test/integration/NotFoundJourneyPhone",
		"com/sample/SalesOrder/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});