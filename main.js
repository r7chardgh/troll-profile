var target = document.getElementById("target");
var button = document.getElementById("button");
var iframeContainer = document.getElementsByClassName("container--iframe");
console.log(target);

button.addEventListener("click", function (e) {
  console.log("click");
  if (target.classList.contains("hide")) {
    target.classList.remove("hide");
    target.innerHTML = `<iframe src="https://www.youtube.com/embed/l60MnDJklnM?autoplay=1" allow="autoplay" frameborder="0"></iframe>`;
  } else {
    target.classList.add("hide");
    target.innerHTML = ``;
  }
});

window.addEventListener("load", (event) => {
if(window.innerHeight > window.innerWidth){
    iframeContainer[0].classList.add('portrait');
}else{
    iframeContainer[0].classList.remove('portrait');
}
});
window.addEventListener("resize", (event) => {
if(window.innerHeight > window.innerWidth){
    iframeContainer[0].classList.add('portrait');
}else{
    iframeContainer[0].classList.remove('portrait');
}
});

//   <div class="container hide"><iframe width='960' height='540'src="https://www.youtube.com/embed/l60MnDJklnM?autoplay=1" frameborder="0"></iframe></div>
