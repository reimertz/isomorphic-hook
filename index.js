import hook from './hook'
import sdk from 'hook.io-sdk'
import fs from 'fs'

import express from 'express'
import timeout from 'connect-timeout'

const app = express()
const accessKey =  process.env.HOOK_ADMIN_ACCESS_KEY
const API = sdk.createClient({
  protocol: 'https',
  hook_private_key: accessKey,
  promises: true
})
let hookObject = JSON.parse(fs.readFileSync('./hook.config.json'))
    hookObject.fs = fs
    hookObject.datastore = API.datastore
    hookObject._data = {}

const r = hookObject.resource

app.use(timeout(r.customTimeout));

app.get(`/${r.owner}/${r.name}/${r.path}`, (req, res) => {

  hookObject.params = req.params
  hookObject.req = req
  hookObject.res = res

  hook(hookObject)
}).listen(4000)
