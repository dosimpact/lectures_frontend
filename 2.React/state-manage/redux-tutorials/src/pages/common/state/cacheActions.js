export const CACHE_WRITE = "CACHE_WRITE";
export const CACHE_EXPIRE = "CACHE_EXPIRE";

export const cacheWrite = (key, data) => {
  return {
    type: CACHE_WRITE,
    payload: { key, data },
  };
};

export const cacheExpire = (key) => {
  return {
    type: CACHE_EXPIRE,
    payload: { key },
  };
};
