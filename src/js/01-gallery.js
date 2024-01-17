import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

const markup = galleryItems
    .map((imageInfo) => `<li class="gallery__item">
  <a class="gallery__link" href="${imageInfo.original}" >
    <img
      class="gallery__image"
      src="${imageInfo.preview}"
      data-source="${imageInfo.original}"
      alt="${imageInfo.description}"
    />
  </a>
</li>`)
    .join("");

gallery.insertAdjacentHTML("beforeend", markup);

const galleryLinks = document.querySelectorAll('.gallery__link');

const handleClick = (event) => {
    const targetEvent = event.target;

    if (targetEvent.nodeName !== 'IMG') {
        return;
    }

    const instance = basicLightbox.create(`<img src="${targetEvent.dataset.source}" alt="${targetEvent.alt}">`)

    instance.show();
};

const handleClickLink = (event) => {
    event.preventDefault();
}

galleryLinks.forEach(galleryLink => {
    galleryLink.addEventListener('click', handleClickLink);
});

gallery.addEventListener('click', handleClick);
