```
node -v
npm -v
```
```
npm help
npm install -h
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

* Inspect Mode
```
node --inspect app.js
node --inspect-brk app.js
```

The debugger statement can be used to explicitly pause on the line that the statement appears when debugging.

Let's edit app.js to include a debugger statement on line 3:
```
function f (n = 99) {
  if (n === 0) throw Error()
  debugger
  f(n - 1)
}
f()
```
Using the debugger statement is particularly useful when the line we wish to break at is buried somewhere in a dependency tree: in a function that exists in a required module of a required module of a required module and so on.

* Data types

```
const obj = { myKey: { thisIs: 'a nested object' } }
console.log(obj.myKey)
```

* Function

```
function factory () {
  return function doSomething () {}
}
```

```
setTimeout(function () { console.log('hello from the future') }, 100)
```

```
const obj = { id: 999, fn: function () { console.log(this.id) } }
obj.fn() // prints 999
```

```
const obj = { id: 999, fn: function () { console.log(this.id) } }
const obj2 = { id: 2, fn: obj.fn }
obj2.fn() // prints 2
obj.fn() // prints 999
```

Functions have a call method that can be used to set their this context:
```
function fn() { console.log(this.id) }
const obj = { id: 999 }
const obj2 = { id: 2 }
fn.call(obj2) // prints 2
fn.call(obj) // prints 999
fn.call({id: ':)'}) // prints :)
```

```
const add = (a, b) => a + 1
const cube = (n) => {
  return Math.pow(n, 3)
}

```

```
When defined without curly braces, the expression following the fat arrow (=>) is the return value of the function. Lambda functions do not have their own this context, when this is referenced inside a function, it refers to the this of the nearest parent non-lambda function.

function fn() {
  return (offset) => {
   console.log(this.id + offset)
  }
}
const obj = { id: 999 }
const offsetter = fn.call(obj)
offsetter(1) // prints 1000 (999 + 1)
```

```
While normal functions have a prototype property (which will be discussed in detail shortly), fat arrow functions do not:

function normalFunction () { }
const fatArrowFunction = () => {}
console.log(typeof normalFunction.prototype) // prints 'object'
console.log(typeof fatArrowFunction.prototype) // prints 'undefined'
```

### Package & Dependencies
Major |Minor |Patch

```
npm init -y
npm init

npm install <name>
npm install --save-dev standard
npm install --production

node -p "fs.readdirSync('node_modules').join('\t')"
node -e "require('pino')().info('testing')"
node -p "fs.readdirSync('.').join('\t')"
node -e "fs.rmdirSync('node_modules', {recursive: true})"
```

```
npm run lint
npm run lint && npm test
npm start
```