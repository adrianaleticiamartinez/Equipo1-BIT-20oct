const { MongoClient } = require('mongodb');
const { config } = require('../config/index');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPass);
const DB_NAME = config.dbName;

const mongo_uri = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${DB_NAME}?retryWrites=true&w=majority`;
console.log(mongo_uri);

class MongoLib {
    cosntructor() {
        this.client = new MongoClient(mongo_uri, { useNewUrlParser: true });
        this.dbName = DB_NAME;
    }

    connect() {
      if (!MongoLib.connection) {
        MongoLib.connection = new Promise((resolve, reject) => {
          this.client.connect(err => {
            if (err) {
              reject(err);
            }
  
            console.log('Connected succesfully to mongo');
            resolve(this.client.db(this.dbName));
          });
        });
      }
  
      return MongoLib.connection;
    }

  get(collection, query) {
    return this.connect().then(db => {
      return db
        .collection(collection)
        .find(query)
        .toArray();
    });
  }

}


module.exports = MongoLib;