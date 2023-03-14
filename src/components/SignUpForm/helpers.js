export const validateImageSize = file => {
  const img = new Image();
  img.src = window.URL.createObjectURL(file);
  return new Promise((resolve, reject) => {
    img.onload = function () {
      console.log(img.width, img.height < 70);
      if (img.width < 70 || img.height < 70) {
        reject("Error message");
      } else {
        resolve("Image uploaded");
      }
    };
  });
};
