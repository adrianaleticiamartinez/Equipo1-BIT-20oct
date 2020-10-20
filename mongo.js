const { MongoClient, ObjectId } = require('mongodb');
const { config } = require('./config/index');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPass);
const DB_NAME = config.dbName;

const mongo_uri = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${DB_NAME}?retryWrites=true&w=majority`;

class MongoLib {
    cosntructor() {
        this.clien = new MongoClient(mongo_uri, { useNewUrlParser: true });
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
}