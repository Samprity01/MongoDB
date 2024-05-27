
db.inventory.insertMany([
    { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
    { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "A" },
    { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
    { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
    { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" }
 ]);



// 1
// AND operator
//explicit usage of AND in MongoDB


// The following example retrieves all documents in the inventory collection where the status equals "A" and qty is less than ($lt) 30:

db.inventory.find( { status: "A", qty: { $lt: 30 } } )

// MongoDB Shell

// The operation uses a filter predicate of { status: "A", qty: { $lt: 30 } }, which corresponds to the following SQL statement:

SELECT * FROM inventory WHERE status = "A" AND qty < 30




// 2
// OR operator


// The following example retrieves all documents in the collection where the status equals "A" or qty is less than ($lt) 30:

db.inventory.find( { $or: [ { status: "A" }, { qty: { $lt: 30 } } ] } )

// MongoDB Shell

// The operation uses a filter predicate of { $or: [ { status: 'A' }, { qty: { $lt: 30 } } ] }, which corresponds to the following SQL statement:

SELECT * FROM inventory WHERE status = "A" OR qty < 30




