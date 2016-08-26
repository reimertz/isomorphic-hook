# isomorphic-hook

an isomorphic hook boilerplate based on hook.io

## motivation
I love hook.io but I found it to be kind of hard to work with complex hooks. Wouldnät it be awesome if there was an easy way to create a hook, mess around with it locally, and then deploy it all from the CLI? Now you can.

beware: there is a risk there is a better way of doing this, if so, please point it out so I can either improve this project, or just depricate it.

## prerequisites
 - create an account at [hook.io](http://hook.io)
 - generate an access key with full access  [hook.io/keys](http://hook.io/keys)
 - add `EXPORT HOOK_ADMIN_ACCESS_KEY='<insert access key here>'` to your .bash_profile
 - don't forget to `source .bash_profile'`
 
## install
```
npm install
```

## run
```
subl hook.config.json  # change the name if you haven't already
npm start              # boots up an live server mimicking the live hook.io enviroment
npm deploy             # deploys you hook to hook.io/username/hook-name
npm delete             # duh
```
