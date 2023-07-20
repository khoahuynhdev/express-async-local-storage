const express = require("express");

const {
  requestIdMiddleware,
  asyncLocalStorage,
} = require("./request_id_middleware");

const PORT = 3000;

const app = express();

app.use(requestIdMiddleware);

app.get("/", (req, res) => {
  const store = asyncLocalStorage.getStore();
  res.send({
    meta: {
      reqId: store ? store.traceId : "EMPTY",
    },
    msg: "Hello world!",
  });
})

app.listen(PORT, () => {
  console.log(`Server listening on Port ${PORT}`);
});
