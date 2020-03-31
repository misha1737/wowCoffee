var images = [
  "./assets/wowCoffe-1.png",
  "./assets/wowCoffe-2.png",
  "./assets/wowCoffe-3.png"
];
var next = document.querySelector("#next");
var previous = document.querySelector("#previous");
var slider = document.querySelector("#slides");
var curentSlide = 0;

function addImage() {
  for (i in images) {
    slide = document.createElement("img");
    slide.src = images[i];
    document.querySelector("#slides").appendChild(slide);
  }
}
function curentImage(i) {
  var slides = slider.getElementsByClassName("active");
  if (slides.length > 0) {
    slides[0].className = "";
  }
  slider.getElementsByTagName("img")[i].className = "active";
}

addImage();
curentImage(curentSlide);

next.addEventListener("click", function() {
  curentSlide == images.length - 1 ? (curentSlide = 0) : curentSlide++;
  curentImage(curentSlide);
});
previous.addEventListener("click", function() {
  curentSlide == 0 ? (curentSlide = images.length - 1) : curentSlide--;
  curentImage(curentSlide);
});
