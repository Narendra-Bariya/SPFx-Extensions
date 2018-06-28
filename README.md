# SPFx-Extensions


1)	Clone this repo by executing the following command in your console:
    
	      git clone https://github.com/Narendra-Bariya/SPFx-Extensions.git
	
2)	Navigate to the cloned repository folder which should be the same as the repository name:

        cd SPFx_AppCust

3)  Now run the following command to install the npm packages:

        npm install
	
	- This will install the required npm packages and dependencies to build and run SharePoint Framework extensions project.

4)  Once the npm packages are installed, run the following command to start nodejs to host your extension and preview that in the   SharePoint Online pages:
	
        gulp serve

Above steps for Application Customizer(SPFx_AppCust). And you need to follow same steps for 
Field Customizers(SPFx_FieldCust) and Command Sets(SPFx_LVCS)

Results: 


Note : If you want upload this app to SharePoint, then you need some changes in following Files:

1)	\SPFx_AppCust\config\serve.json – Change pageUrl as per site Collection Url.
"pageUrl":"https://contoso.sharepoint.com/sites/mySite/SitePages/myPage.aspx"
2)	\SPFx_ AppCust \config\deploy-azure-storage.json – add value as per your Azure Storage.

"account": "Azure Storage Name",
"container": "container name",
"accessKey": "accessKey"
