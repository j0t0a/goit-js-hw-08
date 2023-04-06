import { galleryItems } from './gallery-items.js';
// Change code below this line

import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery')

const imageElements = galleryItems.map( item => {

  const galleryItem = document.createElement('div')
  galleryItem.classList.add('gallery__item')

  const galleryLink = document.createElement('a')
  galleryLink.classList.add('gallery__link')
  galleryLink.href = (item.original)
  galleryLink.addEventListener('click', function(event){
    event.preventDefault()
  })

  const galleryImage = document.createElement('img')
  galleryImage.classList.add('gallery__image')
  galleryImage.src = item.preview
  galleryImage.dataset.source = item.original
  galleryImage.alt = item.description

  galleryLink.append(galleryImage)
  galleryItem.append(galleryLink)

  return galleryItem
})

gallery.append(...imageElements)

new SimpleLightbox('.gallery a', {
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250
});
