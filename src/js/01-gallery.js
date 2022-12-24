// Add imports above this line

import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const gallery = document.querySelector('.gallery');

const createMurcupImages = galleryItems
  .map(({ preview, original, description }) => {
    const murcup = `<li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`;
    return murcup;
  })
  .join('');

gallery.insertAdjacentHTML('beforeend', createMurcupImages);

let slider = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 200,
});
