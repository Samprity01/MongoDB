// db.collection.updateOne(filter, update, options)

//////////////////////////
/// ----> Syntax <-----///
//////////////////////////

// The updateOne() method has the following syntax:

// db.collection.updateOne(
//    <filter>,
//    <update>,
//    {
//      upsert: <boolean>,
//      writeConcern: <document>,
//      collation: <document>,
//      arrayFilters: [ <filterdocument1>, ... ],
//      hint:  <document|string>,
//      let: <document>
//    }
// )


// ******while updating the document if any Object key match is not present , then it automaticatically adds that (key-value pair ) specified
// object to the document*******

//1
db.inventory.updateOne(
    { item: "paper" },
    {
      $set: { "size.uom": "cm", status: "P" },
      $currentDate: { lastModified: true }
    }
 )


 //2

 db.inventory.find({ "qty": { $lt: 50 } },)

 db.inventory.updateMany(
    { "qty": { $lt: 50 } },
    {
      $set: { "size.uom": "in", status: "P" },
      $currentDate: { lastModified: true }
    }
 )



//1 db.collection.updateOne(<filter>, <update>, <options>)

//2 db.collection.updateMany(<filter>, <update>, <options>)

//3 db.collection.replaceOne(<filter>, <update>, <options>)




db.people.insertMany([
  { "_id" : 1, "name" : "Arlene", "age" : 34, "pets" : { "dogs" : 2, "cats" : 1 } },
  { "_id" : 2, "name" : "Sam", "age" : 41, "pets" : { "cats" : 1, "fish" : 3 } },
  { "_id" : 3, "name" : "Maria", "age" : 25 }])







/////////////////
/////////////////
//// Fields//////
/////////////////
/////////////////


Name          Description


1   $currentDate
Sets the value of a field to current date, either as a Date or a Timestamp.

2   $inc
Increments the value of the field by the specified amount.

3   $min
Only updates the field if the specified value is less than the existing field value.

4   $max
Only updates the field if the specified value is greater than the existing field value.

5   $mul
Multiplies the value of the field by the specified amount.

6   $rename
Renames a field.

7   $set
Sets the value of a field in a document.

8   $setOnInsert
Sets the value of a field if an update results in an insert of a document. Has no effect on update operations that modify existing documents.

9   $unset
Removes the specified field from a document.
  





