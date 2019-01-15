# CLIENT-SERVER ARCHITECTURE
>It describes how client requests are served by the server. It follows the following steps-
* First our web browser requests for the index page and .js page from web server.
* React specifies how this page will be rendered over web browser.
* Now if user once again requests for services, requests first go to the express page.
* Now the express page uses nodejs page to communicate with MongoDB.
* MongoDB is a database server that responds to user's requests.
* Now the server's responds is send back to the web browser in form of JSON.
* Once again react uses express page and render the JSON data over the web browser.
>The whole architecture can be understood by this image

[Click here to see!](https://www.google.com/search?q=client-server+architecture+in+MERN&source=lnms&tbm=isch&sa=X&ved=0ahUKEwi9qpvd4O_fAhUHLo8KHf0SDV0Q_AUIDygC&biw=1375&bih=804#imgrc=FvlMrSH3vtzEfM:)