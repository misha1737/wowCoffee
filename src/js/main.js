if (passport){

document.getElementById("brand-name").innerHTML = passport.product.brand;
document.getElementById("product-name").innerHTML = passport.product.name;

var productProperties = document.getElementById("product-properties");
var lines = [];

for (var p in passport.product.properties) {
  var item = passport.product.properties[p];
  if (item.value != null)
    lines.push("<li><span>" + item.name + ":</span> " + item.value + "</li>");
}

lines.push("<li class='addres'><span>" + states[passport.state] + ":</span> " + passport.ownerName + "</li>");

productProperties.innerHTML = lines.join("");

var varAttrs = document.getElementById("variant-attrs");

if (passport.product.varAttrs) {
  var vList = [];

  for (var v in passport.product.varAttrs) {
    var i = passport.product.varAttrs[v];
    vList.push("<div class='atribute'><p>" + i.name + ":</p><span>" + i.value + "</span></div>");
  }

  varAttrs.innerHTML = vList.join("");
}
else {
  varAttrs.innerHTML = "";
}

var hList = [];
var hRow = [];
for (var i = 0; i < passport.history.length; i++) {
  var his = passport.history[i];
  var date = new Date(Number(his.date));
  var min = date.getMinutes() < 10 ? "0" + date.getMinutes() : "" + date.getMinutes();
  var time = '<div class="datetime"><div class="date">' + months[date.getMonth()] + '<p>' + date.getDate() + '</p></div><span class="time">' + date.getHours() + ':' + min + '</span></div>';
  var title = '<div class="title"><span class="name">' + his.ownerName + '</span><span class="id">#' + his.owner + '</span></div>';
  var action = '<div class="action"><img class="first" src="./../assets/historybasket.svg" alt="" /><span>' + states[his.state] + '</span></div>';
  hRow.push('<div class="element">' + time + '<div class="elementBlock">' + title + action + '</div></div>');
  if ((i+1)%3==0){
    hList.push('<div class="elementsRow">'+hRow.join("")+'</div>');
    hRow=[];
  }else if(passport.history.length==i+1){
    hList.push('<div class="elementsRow">'+hRow.join("")+'</div>');
  }
}

document.getElementById("passport-history").innerHTML = hList.join("");

var images = passport.product.images;

var next = document.querySelector("#next");
var previous = document.querySelector("#previous");
var slider = document.querySelector("#slides");
var curentSlide = 0;

if (images.length < 2) {
  previous.remove();
  next.remove();
}

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
  if(slider.getElementsByTagName("img").length>0){
  slider.getElementsByTagName("img")[i].className = "active";
  }
}

addImage();
curentImage(curentSlide);

next.addEventListener("click", function () {
  curentSlide == images.length - 1 ? (curentSlide = 0) : curentSlide++;
  curentImage(curentSlide);
});
previous.addEventListener("click", function () {
  curentSlide == 0 ? (curentSlide = images.length - 1) : curentSlide--;
  curentImage(curentSlide);

});
}

else{
document.getElementsByTagName("body")[0].innerHTML = '<div class="error"><div class="logo"></div><div class="erroeImage"></div><p>Извините, этой страницы не существует. Вернуться на главную страницу?<p></div>';
}