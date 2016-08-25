//const rp = require('request-promise')
import sdk from 'hook.io-sdk'
import fs from 'fs'

const accessKey =  process.env.HOOK_ADMIN_ACCESS_KEY
const hookConfig = JSON.parse(fs.readFileSync('./hook.config.json'))
const API = sdk.createClient({
            protocol: 'https',
            hook_private_key: accessKey,
            promises: true
          })

if(!accessKey) throw new Error('No access Key!')
if(!hookConfig) throw new Error('No config!')

const data = Object.assign({
  'source': fs.readFileSync('./hook.js').toString().replace('default function', 'default async function'),
  'isPrivate': true,
  'language':'es7',
}, hookConfig.resource)



function deleteHook() {
  return API.hook.destroy(`${data.owner}/${data.name}`)
    .then((res) => {
      if (res.error) return console.log(res.message)
      else {
        console.log(res.status)
      }
    })
    .catch(console.log)
}

//update doesn't work so remove-create.. ;-;
function deleteAndDeploy() {
  return API.hook.destroy(`${data.owner}/${data.name}`)
    .then((res) => {
      if (res.error) return console.log(res.message)
      else {
        console.log(res.status)
        deployHook()
      }
    })
    .catch(console.log)
}

function deployHook() {
  API.hook.create(data.name, data)
    .then((res) => {
      if (res.error) {
        if(res.type === 'duplicate-key') {
          console.log('hook already exists, deleting, then creating the new version..')
          deleteAndDeploy()
        }
        else console.log(res.message)
      }
      else console.log(res.status)
    })
    .catch(console.log)
}

if (process.argv.includes('deploy')) deployHook()
else if (process.argv.includes('delete')) deleteHook()