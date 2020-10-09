sap.ui.controller("saprun.sber.ext.controller.ObjectPageExt", {
	onInit: function () {
		this.extensionAPI.attachPageDataLoaded(function(oEvent){
			sap.m.MessageToast.show(oEvent.context.getProperty("CategoryID"));
		});
	},
	
	onClickActionCategoriesHeader1: function (oEvent) {
		
	}
});