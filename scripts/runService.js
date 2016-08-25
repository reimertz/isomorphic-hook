const exec = require('child_process').exec
const fs = require('fs')

const accessKey =  process.env.HOOK_ADMIN_ACCESS_KEY
const hookConfig = JSON.parse(fs.readFileSync('./hook.config.json'))

exec(`open https://hook.io/${hookConfig.resource.owner}/${hookConfig.resource.name}?private_access_token=${accessKey}`)


