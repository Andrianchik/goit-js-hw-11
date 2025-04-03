const API_KEY = '47527494-043e5fa64e78cd3667b900e8d';
const searchesOptions = {
  key: API_KEY,
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
};

function searchImages() {
	const url = `https://pixabay.com/api/?${new URLSearchParams(searchesOptions)}`;
	return fetch(url).then(res => {
		if (!res.ok) {
			throw new Error(res.status)
		};
		return res.json();
	});
};

export {
	API_KEY,
	searchesOptions,
	searchImages,
}