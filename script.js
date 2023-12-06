//Random Image
function randomImage() {
  let images = [
    "images/algodones_dunes_california-wallpaper-1920x1080.jpg",
    "images/denmark_forest-wallpaper-1920x1080.jpg",
    "images/field_nature_landscape-wallpaper-1920x1080.jpg",
    "images/flower_field_3-wallpaper-1920x1080.jpg",
    "images/flower_field_nature_landscape-wallpaper-1920x1080.jpg",
    "images/landscape_42-wallpaper-1920x1080.jpg",
    "images/tree_in_a_field_spring_background-wallpaper-1920x1080.jpg",
    "images/tropical_beach_resort-wallpaper-1920x1080.jpg",
    "images/white-christmas-in-winter-82n7x2vx82r8cj9n.jpg",
  ];

  let randomImgIndex;

  randomImgIndex = Math.floor(Math.random() * images.length);
  document.body.style.background = "url('" + images[randomImgIndex] + "')";
  document.body.style.backgroundSize = "cover";
}

document.addEventListener("DOMContentLoaded", randomImage);

//Random Color
// setInterval(() => {
//   let redValue, greenValue, blueValue;

//   redValue = Math.floor(Math.random() * 255);
//   greenValue = Math.floor(Math.random() * 255);
//   blueValue = Math.floor(Math.random() * 255);

//   document.body.style.backgroundColor =
//     "rgb(" + redValue + "," + greenValue + "," + blueValue + ")";
// }, 2000);
