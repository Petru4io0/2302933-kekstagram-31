const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const imageUploadInput = document.querySelector('.img-upload__input');
const imageUploadPreview = document.querySelector('.img-upload__preview img');

imageUploadInput.addEventListener('change', (evt) => {
  const file = evt.target.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((type) => fileName.endsWith(type));

  if (matches) {
    imageUploadPreview.src = URL.createObjectURL(file);
  }
});
