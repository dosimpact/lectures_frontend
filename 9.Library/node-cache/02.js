const NodeCache = require("node-cache");
const moment = require("moment");
const myCache = new NodeCache();

// basic example, updateAt based cache invalidate

var NODE_CACHE_USER_TABLE_KEY = "user";
const db = [
  {
    id: 1,
    name: "name",
    updatedAt: "2022-11-10 06:16:59.740000000",
    createdAt: "2022-11-10 06:16:59.740000000",
  },
];
var findUserById = (id) => {
  return db.find((u) => u.id === Number(id));
};

// func :

function getDataWithCaching(id) {
  var cacheKey = `${NODE_CACHE_USER_TABLE_KEY}.${id}`;
  var value = myCache.get(cacheKey);
  var isExpire =
    value === undefined
      ? true
      : moment(value.cacheUpdatedAt).isBefore(moment(value.updatedAt));

  if (!value || isExpire) {
    // get data and caching
    value = findUserById(id);
    value.cacheUpdatedAt = moment().format();
    if (value) myCache.set(cacheKey, value);
  }
  return value;
}

function updateUserById(id, user) {
  const idx = db.findIndex((u) => u.id === Number(id));
  if (idx < 0) return;
  db[idx] = { ...user };

  var cacheKey = `${NODE_CACHE_USER_TABLE_KEY}.${id}`;
  myCache.del(cacheKey);
  return;
}
const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

const bootstarp = async () => {
  console.log(getDataWithCaching(1));
  console.log(getDataWithCaching(1));
  updateUserById(1, {
    ...db[0],
    updatedAt: moment().format(),
  });
  sleep(1);
  console.log(getDataWithCaching(1));
};
bootstarp();
