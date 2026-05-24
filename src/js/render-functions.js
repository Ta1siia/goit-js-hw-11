import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a');

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `<li class="gallery-item">
      <a href="${largeImageURL}">
        <img src="${webformatURL}" alt="${tags}">
      </a>
      <div class="image-info">
          <div class="image-info-item">
      <h3>Likes</h3>
      <p>${likes}</p>
    </div>
    <div class="image-info-item">
      <h3>Views</h3>
      <p>${views}</p>
    </div>
    <div class="image-info-item">
      <h3>Comments</h3>
      <p>${comments}</p>
    </div>
    <div class="image-info-item">
      <h3>Downloads</h3>
      <p>${downloads}</p>
    </div>
      </div>
    </li>`
    )
    .join('');
  galleryEl.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  galleryEl.innerHTML = '';
}

export function showLoader() {
  loaderEl.classList.add('is-visible');
}

export function hideLoader() {
  loaderEl.classList.remove('is-visible');
}
