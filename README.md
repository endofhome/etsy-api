# Etsy API "Craftathon" project

### Brief

Consume the Etsy API, manipulate the data provided and create new endpoints serving JSON data. 

### Approach

We used JavaScript on a Node Express server. Tests are written with Mocha, Chai and Nock to mock some of the Etsy API calls.

### Testing

To run the tests from the root directory:
``` npm test ```

### Run server

To spin up the server from the root directory: 
 ``` node app.js ```

### Usage

Available endpoints are:

``` /price ```

``` /materials ```

``` /tags ```