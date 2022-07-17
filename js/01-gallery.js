 import { galleryItems } from './gallery-items.js';
// Change code below this line

const createGallery = galleryItems.map(item => {
 return `<a class="gallery__link" href="${item.preview}"> <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"
    /> </a>`
}).join('')
console.log(createGallery)
const container = document.querySelector(".gallery")
container.insertAdjacentHTML("afterbegin", createGallery);    

const modal = document.querySelector(".modal")
function galleryHandler(e) {
  e.preventDefault()
  const dataValue = e.target.dataset.source;
  const instance = basicLightbox.create(`
    <div class="modal">
  <img src = "${dataValue}">
    </div>`
    
  )
  instance.show()
  
}

container.addEventListener('click', galleryHandler)

function onEscClick(event) {
            if (event.code === 'Escape') {
                instance.close()
            }
        }
modal.removeEventListener('keydown', onEscClick);
