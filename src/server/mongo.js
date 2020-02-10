const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// TODO
const env = require('./env/environment');

// eslint-disable-next-line max-len
const mongoUri = `mongodb://${env.dbName}:${env.key}@${env.dbName}.documents.azure.com:${env.cosmosPort}/?ssl=true`;

function connect() {
    return mongoose.connect(mongoUri, { useNewUrlParser: true});
    // return mongoose.connect(mongoUri, { useMongoClient: true });
}

module.exports = {
    connect,
    mongoose
}