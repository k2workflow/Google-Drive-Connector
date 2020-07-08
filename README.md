## K2 Google Drive Connector

This connector for K2 Cloud integrates with Google Drive. It allows you to download and upload files, copy, move, and delete files, manage folders, manage tags, and search for files and folders. Note that this connector only works for Google Drive instances that are not shared, i.e. the files and folders live in the Google Drive instance.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Features

  - Download and upload files
  - Search for files and folders
  - Update and delete files and folders
  - Manage tags (metadata) on files and folders
  - RollupJS configuration for TypeScript

Note that while the .js or .jssp file can be modified, this is minified/bundled JavaScript and it is not recommended that you modify the files directly. Please log tickets using the [K2 Partner and Customer Portal](https://portal.k2.com) and log any feature requests on our [Ideas portal](https://ideas.k2.com/ideas).

## Getting the Google Drive Connector to work in your K2 environment

Before you see SmartObjects and run methods on them, you must do the following:

 - Create a Google App in your Google Developers Console
 - Create a secret for your app and copy the secret and the ID of the app for configuring an OAuth resource in K2
 - Create an OAuth Resource Type in K2 Management
 - Create an OAuth Resource in K2 Management based on the new resource type
 - Create a Google Drive service type with the bundled .js or .jssp file
 - Create a service instance for the type using the OAuth resource you created

 ### Creating the Google Drive App
 
 For information about doing this see [How to get Google app Client ID and Client Secret](https://theonetechnologies.com/blog/post/how-to-get-google-app-client-id-and-client-secret)

 
  ### Creating the OAuth Resource Type in K2

  Next, create the OAuth resource type in K2. Follow these steps:
  
  1. Browse to K2 Management and expand the **Authentication** node
  2. Expand the **OAuth** node
  3. Click **Resource Types** and then click **New**
  4. Give your resource type a name and set the **Refresh Token Expiration Days** value to something you're comfortable with. K2 recommends setting this to a high value, such as 365 or greater.
  5. Add the following parameters to your resource type:
  * Resource type parameters
    + redirect_uri: for all requests set it to true
    + client_id: for all requests set it to true
    + access_type: for **Authorization Request** set it to true
    + response_type: for **Authorization Request** set it to true
    + prompt: for **Authorization Request** set it to true
    + grant_type: for **Token Request** & **Refresh Request** set it to true, **Token Default Value** = authorization_code, **Refresh Default Value** = refresh_token
    + client_secret: for **Token Request** & **Refresh Request** set it to true
    + scope: for all requests set it to true
  6. Save all of your changes

   Once you've created your OAuth resource type, you can create your OAuth Resource.

   ### Creating the OAuth Resource in K2

  Once you have your resource type created, create your resource that you'll use to configure your service instance. Follow these steps:
  
  1. Browse to K2 Management and expand the **Authentication** node
  2. Expand the **OAuth** node
  3. Click **Resources** and then click **New**
  4. Give your resource type a name, select **Google Drive** as the Resource Type (or whatever you called it above), and then paste the authorization endpoint (https://accounts.google.com/o/oauth2/v2/auth) into the **Authorization Endpoint** field, the token endpoint (https://oauth2.googleapis.com/token) into the **Token Endpoint**, and the token endpoint (https://oauth2.googleapis.com/token) into the **Refresh Token Endpoint** 
  5. Add the following parameters to your resource:
  * Resource parameters
    + redirect_uri: your K2 Cloud redirect URI, such as https://kyg4qhn.onk2qa.com/identity/token/oauth/2 
    + client_id: the client ID of your Google app for all three request values
    + access_type: **Authorization Value** = offline
    + response_type: **Authorization Value** = code
    + prompt: **Authorization Value** = select_account
    + grant_type: **Token Value** = authorization_code, **Refresh Value** = refresh_token
    + client_secret: **Token Value** & **Refresh Value** = your client secret
    + scope: https://www.googleapis.com/auth/drive
  6. Save the resource and confirm that it's similar to the following figure

  ![Example OAuth Resource for Google Drive](/OAuthResource.png)

  Once you've created your OAuth resource, you can now use it to configure a service instance, but you must first create your service type.

  ### Creating your Google Drive Connector Service Type

  Download the index.js or index.jssp from the repo.

  Once you have your index.jssp file for the Google Drive Connector, create your service type using the example form from the Help topic or one you've built yourself.

  When your service type is created, register a service instance using the OAuth resource you created, and generate SmartObjects.


### License

MIT, found in the [LICENSE](./LICENSE) file.

[www.k2.com](https://www.k2.com)