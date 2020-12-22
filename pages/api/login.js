// import { createHash } from 'crypto'
import '../../imports/server/mongo'

export default (req, res) => {
  const { username, password } = req.headers
  if (!(username && password)) {
    res.status(400).end()
  }

  // const hashedPassword = createHash('sha256').update(password).digest().toString('utf8')

  // const user = global.db.collection('accounts').find({ username, password: hashedPassword })
}
