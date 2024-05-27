// Sort and Replace A Document
// Create a sample scores collection with the following documents:


// db.scores.insertMany([
//    { "_id" : 1, "team" : "Fearful Mallards", "score" : 25000 },
//    { "_id" : 2, "team" : "Tactful Mooses", "score" : 23500 },
//    { "_id" : 3, "team" : "Aquatic Ponies", "score" : 19250 },
//    { "_id" : 4, "team" : "Cuddly Zebras", "score" : 15235 },
//    { "_id" : 5, "team" : "Garrulous Bears", "score" : 18000 }
// ]);



// By including an ascending sort on the score field, the following example replaces the document with the lowest score among those documents that match the filter:

// db.scores.findOneAndReplace(
//    { "score" : { $lt : 20000 } },
//    { "team" : "Observant Badgers", "score" : 20000 },
//    { sort: { "score" : 1 } }
// )



// The operation returns the original document that has been replaced:

// { "_id" : 4, "team" : "Cuddly Zebras", "score" : 15235 }

// See Replace A Document for the non-sorted result of this command.

// Project Specific Fields in Return Document
// Create a sample scores collection with the following documents:

// db.scores.insertMany([
//    { "_id" : 1, "team" : "Fearful Mallards", "score" : 25000 },
//    { "_id" : 2, "team" : "Tactful Mooses", "score" : 23500 },
//    { "_id" : 3, "team" : "Aquatic Ponies", "score" : 19250 },
//    { "_id" : 4, "team" : "Cuddly Zebras", "score" : 15235 },
//    { "_id" : 5, "team" : "Garrulous Bears", "score" : 18000 }
// ])

// The following operation uses projection to only display the team field in the returned document:

// db.scores.findOneAndReplace(
//    { "score" : { $lt : 22250 } },
//    { "team" : "Therapeutic Hamsters", "score" : 22250 },
//    { sort : { "score" : 1 }, projection: { "_id" : 0, "team" : 1 } }
// )

// The operation returns the original document with only the team field:

// { "team" : "Cuddly Zebras" }



db.collection.find().limit(1)   //limits the first document
db.collection.find().limit(2)   //limits the first 2 documents
db.collection.find().limit(3)   //limits the first 3 documents

db.collection.find().skip(1)    //skips the first Document
db.collection.find().skip(2)    //skips the first 2 Documents
db.collection.find().skip(3)    //skips the first 3 Documents

db.people.find().sort({age:1})        // Ascending Ordbr
db.people.find().sort({age:-1})       // dbsending Ordbr




/////////////////////////////////////////
///////////////////////////////////////
//////////////////////////////////////////
// Acheving Pagination using MongoDB find and limit//
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////



///////////////////
/////////e.g.//////
///////////////////

page no - 1 to 10 
no of blocks per page(n)=8

// formula
db.blogs.find().skips((n-1)*page_no).limit(n)

page_no =1  db.blogs.find().skip(0).limit(n)
page_no =2  db.blogs.find().skip(8).limit(n)
