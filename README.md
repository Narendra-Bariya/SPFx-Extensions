# SharePoint Framework Extensions examples

SharePoint Framework Extensions enable you to extend the SharePoint user experience within modern pages and document libraries, while using the familiar SharePoint Framework tools and libraries for client-side development.The SharePoint Framework includes three extension types:

* Application Customizers

* Field Customizers

* Command Sets

This repository contains the samples for SharePoint Framework Extensions.


## Have issues or questions?
  - You have issue on specific extension or sample - [use issue list in this repository](https://github.com/Narendra-Bariya/SPFx-Extensions/issues).
  
## Additional resources 
   - [SharePoint Framework Extensions Samples & Tutorial Materials](https://github.com/SharePoint/sp-dev-fx-extensions#sharepoint-framework-extensions-samples--tutorial-materials)
   - [Overview of SharePoint Framework Extensions](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/extensions/overview-extensions)
   - [SharePoint Framework Extensions by Sahil Malik](https://app.pluralsight.com/library/courses/sharepoint-framework-extensions/table-of-contents)
   - [Deploy your SharePoint client-side web part to Azure CDN](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/web-parts/get-started/deploy-web-part-to-cdn)

## Using the samples

To build and start using these projects, you'll need to clone and build the projects.

1)  Clone this repo by executing the following command in your console:
    ```
    git clone https://github.com/Narendra-Bariya/SPFx-Extensions.git
   	```
2)	Navigate to the cloned repository folder which should be the same as the repository name:
    ```
    cd SPFx_AppCust
    ```
3)  Now run the following command to install the npm packages:
    ```
    npm install
	  ```
  	- This will install the required npm packages and dependencies to build and run SharePoint Framework extensions project.

4)  Once the npm packages are installed, run the following command to start nodejs to host your extension and preview that in the SharePoint Online pages:
  	```
    gulp serve
    ```
Above steps for Application Customizer(SPFx_AppCust). And you need to follow same steps for 
Field Customizers(SPFx_FieldCust) and Command Sets(SPFx_LVCS)

## Note

- If you want upload this extensions to SharePoint, then you need some changes in following Files:
1.	config\serve.json – Change pageUrl as per site Collection Url.
```
"pageUrl":"https://contoso.sharepoint.com/sites/mySite/SitePages/myPage.aspx"
```
2.	config\deploy-azure-storage.json – add value as per your Azure Storage.
```
"account": "Azure Storage Name",
"container": "container name",
"accessKey": "accessKey"
```
