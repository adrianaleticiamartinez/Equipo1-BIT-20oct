const MongoLib = require('../lib/mongo');

class UserQuery {
    constructor(){
        this.collection = 'usuarios';
        this.mongoDB = new MongoLib();
    }

    async getUser(usuario, auth) {
        const query =  usuario && auth && { $and: [ {"usuario": { $eq: usuario }}, {"auth": {$eq:`${auth}`}} ]};
        const user = await this.mongoDB.get(this.collection, query);
        return user || [];
    }

}

module.exports = UserQuery;