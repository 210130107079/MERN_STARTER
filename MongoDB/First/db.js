const {MongoClient} = require('mongodb') 
let dbConnection
const url = 'mongodb://localhost:27017/bookstore';


module.exports = 
{
    connectToDb: (callback) => 
    {
        MongoClient.connect('mongodb://localhost:27017/bookstore')
            .then((client)=>{
                dbConnection = client.db()
                return callback()
            }).catch((err)=>{
                console.log(err);
                return callback(err)
            })
    },
    getDb: () => dbConnection
}