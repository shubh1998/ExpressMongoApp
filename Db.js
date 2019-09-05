const mongodb = require('mongodb');

var URL = "mongodb://localhost:27017/EMSDB";

mongodb.connect(URL, (err,con) => {
    if(err) throw err;
    else
        console.log("MongoDB Connected");
    
    var dbo = con.db();

/*    
    //To Insert One Record at a time
    //var newObj = {eid:103,ename:"Amit Kumar",Salary:15000.00};

    //To Insert Multiple Record at a time
    var newObj = [
                {eid:104,ename:"Sumit Kumar",Salary:18000.00},
                {eid:105,ename:"Vishnu Joshi",Salary:21000.00},
                {eid:106,ename:"Sameer Rathi",Salary:25000.00},
                {eid:107,ename:"Raj Kumar",Salary:35000.00}
            ];
    
    dbo.collection('employee').insertMany(newObj, (err) => {
        if(err) throw err;
        else
            console.log("Document Inserted...");
    });
*/

    dbo.collection('employee').find().toArray((err, result) => {
        if(err) throw err;
        else
            console.log(result);
    });
});