import {getData} from './api.js';
import {showErrorMessage} from './util.js';
import {renderGallery} from './gallery.js';

const userPictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesList = document.querySelector('.pictures');

const similarListFragment = document.createDocumentFragment();

const renderPhotos = (photos) => {
  photos.forEach(({id, url, description, likes, comments}) => {
    const userPictureElement = userPictureTemplate.cloneNode(true);

    userPictureElement.dataset.pictureId = id;
    userPictureElement.querySelector('.picture__img').src = url;
    userPictureElement.querySelector('.picture__img').alt = description;
    userPictureElement.querySelector('.picture__likes').textContent = likes;
    userPictureElement.querySelector('.picture__comments').textContent = comments.length;

    similarListFragment.appendChild(userPictureElement);
  });

  picturesList.appendChild(similarListFragment);
};

const bootstrap = async () => {
  try {
    const photos = await getData();
    renderGallery(photos);
    renderPhotos(photos);
  } catch (error) {
    showErrorMessage(error.message);
  }
};

bootstrap();

export {picturesList};
