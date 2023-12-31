1. put products
PUT /products

// 2. post product
POST /products/_doc
{
    "name": "Awesome T-Shirt",
    "description": "This is an awesome t-shirt for casual wear.",
    "price": 19.99,
    "category": "Clothing",
    "brand": "Example Brand"
}

POST /products/_doc
{
    "name": "T-Shirt",
    "description": "This is a t-shirt for casual wear.",
    "price": 10.99,
    "category": "Clothing",
    "brand": "Example Brand"
}

// 2. get products
GET /products/_search?pretty 
{ 
    "query": 
    { 
        "match": { 
            "name": "t-shirt" 
            } 
    } 
}

// Get movies
GET /movies/_search?pretty 

// DELETE /products/_doc/iChN34kB2pxr6vtDAPa5

