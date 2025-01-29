db.products.find(
    {
        "category": "Electronics",
        "price": { "$gt": 500 }
    },
    { "_id": 0, "name": 1, "price": 1 } 
).sort({ "price": -1 })
