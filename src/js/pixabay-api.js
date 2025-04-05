import axios from 'axios';

const API_KEY = '47527494-043e5fa64e78cd3667b900e8d';
const BASE_URL = 'https://pixabay.com/api/';

const defaultParams = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
};

async function searchImages(query) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        ...defaultParams,
        q: query,
      },
    });
    return response.data.hits;
  } catch (error) {
    throw new Error(`Failed to fetch images: ${error.response?.status || error.message}`);
  }
}

export {
  API_KEY,
  searchImages,
};
