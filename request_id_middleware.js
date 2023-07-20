const { AsyncLocalStorage } = require("async_hooks");
const crypto = require("crypto");
const asyncLocalStorage = new AsyncLocalStorage();

const requestIdMiddleware = (req, res, next) => {
  // asyncLocalStorage.run({ traceId: crypto.randomUUID()}, () => next());
  // we can do async here
  // every incoming request will have a random UUID,
  // only exists for the scope of req/res lifecycle
  asyncLocalStorage.run({ traceId: crypto.randomUUID() }, async () => {
    return await next();
  });
};

module.exports = { requestIdMiddleware, asyncLocalStorage };
