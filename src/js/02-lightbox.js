import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

const markup = galleryItems
    .map((imageInfo) => `<li class="gallery__item">
   <a class="gallery__link" href="${imageInfo.original}">
      <img class="gallery__image" src="${imageInfo.preview}" alt="${imageInfo.description}" />
   </a>
</li>`)
    .join("");

gallery.insertAdjacentHTML("beforeend", markup);

const handleClickLink = (event) => {
    event.preventDefault();
}

const galleryLinks = document.querySelectorAll('.gallery__link');

galleryLinks.forEach(galleryLink => {
    galleryLink.addEventListener('click', handleClickLink);
});

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250
});
