const IMAGE_MAX_WIDTH = 1200;
const IMAGE_QUALITY = 0.75;

export function compressImage(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let { width, height } = img;

        if (width > IMAGE_MAX_WIDTH) {
          height = Math.round((height * IMAGE_MAX_WIDTH) / width);
          width = IMAGE_MAX_WIDTH;
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        canvas.toBlob(
          (blob) => {
            if (blob) resolve(blob);
            else reject(new Error('Error al comprimir la imagen.'));
          },
          'image/jpeg',
          IMAGE_QUALITY
        );
      };
      img.onerror = () => reject(new Error('Error al procesar la imagen.'));
      img.src = e.target.result;
    };
    reader.onerror = () => reject(new Error('Error al leer el archivo.'));
    reader.readAsDataURL(file);
  });
}
