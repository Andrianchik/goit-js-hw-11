import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import iconError from '../img/bi_x-octagon.png';

const lightBox = new SimpleLightbox('.gallery-link', {
  captionsData: 'alt',
  captionDelay: 250,
});

const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');

function showLoader() {
  loader.style.display = 'block';
}

function hideLoader() {
  loader.style.display = 'none';
}

function clearGallery() {
  gallery.innerHTML = '';
}

function renderGallery(images) {
  if (!images.length) {
    iziToast.show({
      iconUrl: iconError,
      message: 'Sorry, there are no images matching your search query. Please try again!',
      messageColor: '#FAFAFB',
      backgroundColor: '#EF4040',
      position: 'topRight'
    });
    return;
  }

  const itemTemplate = images.map(image =>
    `<li class="gallery-item">
      <a class="gallery-link" href="${image.largeImageURL}">
        <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}" />
      </a>
      <div class="image-description">
        <div class="description-item">
          <h3>Likes</h3>
          <p>${image.likes}</p>
        </div>
        <div class="description-item">
          <h3>Views</h3>
          <p>${image.views}</p>
        </div>
        <div class="description-item">
          <h3>Comments</h3>
          <p>${image.comments}</p>
        </div>
        <div class="description-item">
          <h3>Downloads</h3>
          <p>${image.downloads}</p>
        </div>
      </div>
    </li>`
  ).join('\n');

  gallery.innerHTML = itemTemplate;
  lightBox.refresh();
}

export {
  lightBox,
  loader,
  gallery,
  showLoader,
  hideLoader,
  clearGallery,
  renderGallery,
};
