const slider1 = document.getElementById("glide1");
//FIX ME：変数の名前を変更する

if (slider1)
  new Glide(slider1, {
    type: "carousel",
    startAt: 0,
    autoPlay: true,
    perView: 1,
    animationDuration: 800,
    animationTimingFunc: "linear",
  }).mount();
