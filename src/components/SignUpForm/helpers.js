// export const validatevalueData = (name, email, type) => {
//   switch (type) {
//     case "photo":
//       if (value.type !== "image/jpeg" && value.type !== "image/jpg") {
//         return "Photo should be a jpg/jpeg image";
//       }
//       if (value.size > 5 * 1024 * 1024) {
//         return "Photo size must not exceed 5MB";
//       }
//       const image = new Image();
//       image.onload = function () {
//         if (image.width < 70 || image.height < 70) {
//           return "Photo resolution should be at least 70x70px";
//         }
//       };
//       image.src = URL.createObjectURL(value);
//       break;
//     default:
//       return "Invalid value type";
//   }
// };
