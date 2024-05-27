
////////////////////////////////////////////////
/////---Updates with Aggregation Pipeline---////
////////////////////////////////////////////////


// With the update operations, the aggregation pipeline can consist of the following stages:

//1  $addFields

//2  $set

//3  $project

//4  $unset

//5  $replaceRoot

//6  $replaceWith




// ---------unset--------------//

// The $unset stage has the following syntax:

// To remove a single field, the $unset takes a string that specifies the field to remove:

// { $unset: "<field>" }

// To remove multiple fields, the $unset takes an array of fields to remove.

// { $unset: [ "<field1>", "<field2>", ... ] }





// dbfinition
//-------------- $addFields-----------//
// Adds new fields to documents. $addFields outputs documents that contain all existing fields from the input documents and newly addbd fields.

// The $addFields stage is equivalent to a $project stage that explicitly specifies all existing fields in the input documents and adds the new fields.
// Syntax
// The stage has the following syntax:

// { $addFields: { <newField>: <expression>, ... } }



//------ $project--------------//
// Passes along the documents with the requested fields to the next stage in the pipeline.
//  The specified fields can be existing fields from the input documents or newly computed fields.

// The $project stage has the following prototype form:

// { $project: { <specification(s)> } }


    
    
    // --------------$replaceRoot---------//
    // Replaces the input document with the specified document. The operation replaces all existing fields in the input document, including the _id field. You can promote an existing embeddbd document to the top level, or create a new document for promotion (see example).
    
    // NOTE-
    // You can also use the $replaceWith stage. The $replaceWith stage peforms the same action as the $replaceRoot stage, but the stages have different forms.
    
    // The $replaceRoot stage has the following form:
    
    // { $replaceRoot: { newRoot: <replacementDocument> } }
    