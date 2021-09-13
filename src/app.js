import express from 'express'
const app = express();
import mainroutes from './route'
import { configObject } from './utils/config_variables'
app.use(express.urlencoded({ extended: 'false' }))
app.use(express.json())

app.use('/v2', mainroutes);





app.listen(configObject.port, () => {
  console.log(`App running on port ${configObject.port}`)
})