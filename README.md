```
node -v
npm -v
```

```
node __.js
```

```
node --help
node --v8-options
```

* Checking syntax
```
node --check app.js
node -c app.js
```

* Dynamic evaluation
```
node --print "1+1"
node --eval "1+1"
node -e "console.log(1+1)"
node -p "console.log(1+1)"
node -p "fs.readdirSync('.').filter((f) => /.js$/.test(f))"
```

* preloading modules
```
// preload.js
console.log('Preloaded')
// app.js
console.log('main file')
```
```
node -r ./preload.js app.js
```

* stack trace limit 
```
function f(n=99){
  if(n === 0) throw Error()
  f(n-1)
}

f()
```

```
node app.js
node --stack-trace-limit=101 app.js
node --stack-trace-limit=99999 app.js
```
