sap.ui.controller("saprun.sber.ext.controller.ObjectPageExt", {
	onInit: function () {
		this.extensionAPI.attachPageDataLoaded(function (oEvent) {
			sap.m.MessageToast.show(oEvent.context.getProperty("CategoryID"));
		});
	},

	onClickActionCategoriesHeader2: function (oEvent) {
		sap.m.MessageToast.show("Hello World!!");
	},
	onClickActionCategoriesSections1: function (oEvent) {
		this.getOwnerComponent().getModel().callFunction("/toActiveStatus",{
			method: "GET",
			success: function() {
				var iStatusNew = 1,
					iStatusActive = 2;
					  
				var iPreviousStatus = this.getOwnerComponent().getModel().getProperty("/Categories(1)/StatusID");
				
				if(iPreviousStatus !== iStatusNew){
					sap.m.MessageToast.show("Status is already in Active state");	
				}else {
					this.getOwnerComponent().getModel().setProperty("/Categories(1)/StatusID", iStatusActive);
					this.getOwnerComponent().getModel().submitChanges();
					this.getOwnerComponent().getModel().refresh();
				}
			}.bind(this),
			error: function() {
				sap.m.MessageToast.show("Error status!!!");
			}
		});                   
	}
});