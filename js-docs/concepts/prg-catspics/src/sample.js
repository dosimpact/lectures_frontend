const request = async (url: string) => {
  try {
    const result = await fetch(url);
    return result.json();
  } catch (e) {
    console.warn(e);
  }
};

const api = {
  fetchGif: (keyword) => {
    return request(`${API_ENDPOINT}/api/gif/search?q=${keyword}`);
  },
  fetchGifAll: () => {
    return request(`${API_ENDPOINT}/api/gif/all`);
  },
};
