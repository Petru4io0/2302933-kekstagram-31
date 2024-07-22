import {getData} from './api.js';
import {showErrorMessage} from './util.js';
import {renderGallery} from './gallery.js';
import './image-upload-form.js';
import {renderPhotos} from './thumbnails.js';
import {showFilters} from './filters.js';

const bootstrap = async () => {
  try {
    const photos = await getData();
    renderGallery(photos);
    renderPhotos(photos);
    showFilters();
  } catch (error) {
    showErrorMessage(error.message);
  }
};

bootstrap();

