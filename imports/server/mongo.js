import { MongoClient } from 'mongodb'
import config from '../../config.json'
import { createHash } from 'crypto'

(async () => {
  const mongo = new MongoClient(config.mongoUrl)
  global.db = (await mongo.connect()).db('chillclips')
  if (!global.db.accounts) {
    global.db.createCollection('accounts')
    const hashedPassword = createHash('sha256').update('admin').digest().toString('utf8')
    global.db.accounts.insertOne({ username: 'admin', password: hashedPassword })
  }
})()
