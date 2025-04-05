import { searchImages } from './js/pixabay-api';
import {
  showLoader,
  hideLoader,
  clearGallery,
  renderGallery,
} from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import iconError from './img/bi_x-octagon.png';

const form = document.querySelector('.search-form');

form.addEventListener('submit', async e => {
  e.preventDefault();
  const searchValue = form.elements.searchInput.value.trim();

  if (!searchValue) {
    clearGallery();
    iziToast.show({
      iconUrl: iconError,
      message: 'Please enter what you want to find!',
      messageColor: '#FAFAFB',
      backgroundColor: '#EF4040',
      position: 'topRight'
    });
    return;
  }

  showLoader();
  clearGallery();

  try {
    const images = await searchImages(searchValue);
    renderGallery(images);
  } catch (error) {
    iziToast.show({
      iconUrl: iconError,
      message: `Something went wrong. Please try again later.`,
      messageColor: '#FAFAFB',
      backgroundColor: '#EF4040',
      position: 'topRight'
    });
    console.error(error);
  } finally {
    hideLoader(); 
    form.reset();
  }
});
