## AsyncLocalStorage in practice

### What
- Dead simple AsyncLocalStorage that creates a unique(uuid) request id for every incoming request, and saves it to the in-memory store(thread-local storage)
- the store only accessible in the following call stack (via `next()`)
- Work similar to React context
- (Additional) add some simple benchmarks with AB

### Why
- I don't want to pass a context (ctx) around everytime I need some information
- The scope of the ctx should exist for the lifecycle of the req/res


### More examples
- [x] Capture request id
- [ ] Logging with a trace id
- [ ] Worker pool
- [ ] Your suggestions

### How to run
- clone this repo
- npm install
- npm start
- (open another terminal) ./perf.sh
### Ref
- [The Context Tree Design Pattern](https://www.industrialempathy.com/posts/context-tree-design-pattern/)
- [React context](https://react.dev/learn/passing-data-deeply-with-context)
