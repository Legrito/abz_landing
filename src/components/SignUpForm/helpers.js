// export const validatevalueData = (name, email, type) => {
//   switch (type) {
//     case "text":
//       if (!value) {
//         return "Name is required";
//       } else if (value.length < 2 || value.length > 60) {
//         return "Name should be 2-60 characters long";
//       }
//       break;
//     case "email":
//       const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
//       if (!emailRegex.test(value)) {
//         return "Invalid email address";
//       }
//       break;
//     case "phone":
//       if (!value.startsWith("+380")) {
//         return "Phone number should start with +380";
//       }
//       break;
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
