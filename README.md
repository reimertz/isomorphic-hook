# isomorphic-hook

an isomorphic hook boilerplate based on hook.io


## prerequisites
 - create an account at [hook.io](http://hook.io)
 - generate an access key with full access  [hook.io/keys](http://hook.io/keys)
 - add `EXPORT HOOK_ADMIN_ACCESS_KEY='<insert access key here>' to your .bash_profile
 
## install
```
npm install
```

## run
```
subl hook.config.json  # change the name if you plan to have several hooks running
npm start              # boots up an live server mimicking the live hook.io enviroment
npm deploy             # deploys you hook to hook.io/username/hook-name
npm delete             # duh
```
