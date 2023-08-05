// 1. put products
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



