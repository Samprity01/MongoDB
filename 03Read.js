db.inventory.find()
//reads all the data in corresponding collection

db.inventory.find({ tags: [ 'gray' ]})
//reads only data with specified condition

// find method --->    Results an Array of objects


/// ----1-----///

// To return all documents from the sample_mflix.movies collection:

// use sample_mflix
// =>db.movies.find()

// This operation is equivalent to the following SQL statement:

// =>SELECT * FROM movies

////-----------------------------/////




///------2-----///

// To return all movies where the title equals Titanic from the sample_mflix.movies collection:

// use sample_mflix
// db.movies.find( { "title": "Titanic" } )

// This operation corresponds to the following SQL statement:

// SELECT * FROM movies WHERE title = "Titanic"

//////////-------------------------//////////





// db.inventory.insertMany([
//     { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
//     { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "A" },
//     { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
//     { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
//     { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" }
//  ]);



jitu> db.inventory.find( { tags: { $in: [ "red", "blue" ] } } )
//using in operator





// 3
////---findOne---///////////////


db.inventory.find( { $or: [ { status: "A" }, { qty: { $lt: 30 } } ] } )


// findOne method --->    Results an single of objects of object type