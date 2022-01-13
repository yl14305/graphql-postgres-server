const { db } = require("./pgAdaptor");

db.manyOrNone('select * from students')
    .then(res => {
        console.log(res);
    });


// if only one row , use db.one
// db.one('select * from students')
// .then(res => {
//     console.log(res);
// });