The application you will be building today is a research tool based on data from Etsy.

Etsy (for anyone not familiar) is a peer-to-peer marketplace for vintage and handmade goods.

The objective of the day is to build a collection of JSON endpoints that output useful summary data about Etsy's latest listings (available at https://openapi.etsy.com/v2/listings/active).

Once you are set up with access to the API, here are the endpoints to build:

GET /price - average price of the latest listings, highest price (with the listing), lowest price (with the listing)
GET /quantity - average quantity of per item, highest quantity (with the listing), lowest quantity (with the listing)
GET /materials - top 5 most common materials, and all the listings that contain them
GET /tags - top 5 most common tags, and all the listings that contain them
GET /categories - all category paths, by frequency
GET / - route containing all the above information

Extensions:

- by default, the API returns only 25 listings per query. Extend the above to the 100 recent items, passing the limit as a query string parameter
- create the route POST /report, which takes a query string parameter and e-mails the aggregated JSON from GET / to the email specified