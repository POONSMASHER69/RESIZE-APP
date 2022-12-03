function resize() {
  const fileInput = document.getElementById('file');
  const file = fileInput.files[0];
  const widthInput = document.getElementById('width');
  const width = widthInput.value;
  const heightInput = document.getElementById('height');
  const height = heightInput.value;

  const reader = new FileReader();
  reader.onload = function(event) {
    const image = new Image();
    image.onload = function() {
      const resizedImage = resizeImage(image, width, height);
      const preview = document.getElementById('preview');
      preview.src = resizedImage;
      preview.style.display = 'block';

      const download = document.getElementById('download');
      download.href = resizedImage;
      download.style.display = 'block';
    };
    image.src = event.target.result;
  };
  reader.readAsDataURL(file);
}

function resizeImage(image, width, height) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = width;
  canvas.height = height;

  ctx.drawImage(image, 0, 0, width, height);

  return canvas.toDataURL();
}
