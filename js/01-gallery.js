import { galleryItems } from './gallery-items.js';
// Change code below this line

const createGallery = galleryItems.map(item => {
 return `<a class="gallery__link" href="${item.preview}"> <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"
    /> </a>`
}).join('')

const container = document.querySelector(".gallery")

container.insertAdjacentHTML("afterbegin", createGallery); 

container.addEventListener('click', galleryHandler)

function galleryHandler(e) {
  e.preventDefault()

  const dataValue = e.target.dataset.source;
  const instance = basicLightbox.create(`
  <img src = "${dataValue}">`,
    {
      onShow: () => window.addEventListener('keydown', onEscClick),
      onclose: () => window.removeEventListener('keydown', onEscClick)
    }
  );

  instance.show()

  function onEscClick(event) {
    if (event.code === 'Escape') {
      instance.close();
    }
  }
}