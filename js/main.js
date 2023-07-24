let offset = 0;
let timer;
autoSlider();
const sliderLine = document.querySelector('.slider');
const countBtn1 = document.querySelector('.one-real');
const countBtn2 = document.querySelector('.two-real');
const countBtn3 = document.querySelector('.tree-real');
const countBtn4 = document.querySelector('.four-real');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

countBtn1.addEventListener('change', function(){
      offset = 0;
  sliderLine.style.left = -offset + '%';
});

countBtn2.addEventListener('change', function(){
  offset = 25;
sliderLine.style.left = -offset + '%';
});

countBtn3.addEventListener('change', function(){
  offset = 50;
sliderLine.style.left = -offset + '%';
});

countBtn4.addEventListener('change', function(){
  offset = 75;
sliderLine.style.left = -offset + '%';
});

function sliderNext () {
  offset = offset + 25;
  if (offset > 75) {
      offset = 0;
      countBtn1.checked = true;
  }
  if(offset == 75){
    countBtn4.checked = true;
  }
  if(offset == 50){
    countBtn3.checked = true;
  }
  if(offset == 25){
    countBtn2.checked = true;
  }
  if(offset == 0){
    countBtn1.checked = true;
  }
  sliderLine.style.left = -offset + '%';
  autoSlider();
}

  nextBtn.addEventListener('click', function (){
  clearTimeout(timer);
  offset = offset + 25;
  if (offset > 75) {
      offset = 0;
      countBtn1.checked = true;
  }
  if(offset == 75){
    countBtn4.checked = true;
  }
  if(offset == 50){
    countBtn3.checked = true;
  }
  if(offset == 25){
    countBtn2.checked = true;
  }
  if(offset == 0){
    countBtn1.checked = true;
  }
  sliderLine.style.left = -offset + '%';
  autoSlider();
  });


  function autoSlider (){
    timer = setTimeout(sliderNext, 6000);
  }

  prevBtn.addEventListener('click', function () {
    clearTimeout(timer);
    offset = offset - 25;
    if (offset < 0) {
        offset = 75;
        countBtn3.checked = true;
    }
    sliderLine.style.left = -offset + '%';
    autoSlider();
  });


  prevBtn.addEventListener('click', function() {
    if(offset == 75){
      countBtn4.checked = true;
    }
    if(offset == 50){
      countBtn3.checked = true;
    }
    if(offset == 25){
      countBtn2.checked = true;
    }
    if(offset == 0){
      countBtn1.checked = true;
    }

  });

const playVideo = document.querySelector('.play');
const videoBg = document.querySelector('.video-bg');
const muteVideo = document.querySelector('.mute-btn');
const videoContainer = document.querySelector('.video-content');


playVideo.addEventListener('mouseover', function() {
  if(videoBg.paused){
    videoBg.style.filter = "brightness(60%)";
  } else {
    videoBg.style.filter = "brightness(100%)";
  }
});
playVideo.addEventListener('mouseout', function() {
  if(videoBg.paused){
    videoBg.style.filter = "brightness(50%)";
  } else {
    videoBg.style.filter = "brightness(100%)";
  }
});


playVideo.addEventListener('click', function(){
  if(videoBg.paused){
    videoBg.play();
    playVideo.style.opacity = "0";
    videoBg.style.filter = "brightness(100%)";
  }  else {
    videoBg.style.filter = "brightness(50%)";
    videoBg.pause();
    playVideo.style.opacity = "0.8";
  }
});

videoBg.addEventListener('click', function(){
  if(videoBg.play){
    videoBg.pause();
    videoBg.style.filter = "brightness(50%)";
    playVideo.style.opacity = "0.8";
  } else {
    videoBg.play();
    videoBg.style.filter = "brightness(100%)";
    playVideo.style.opacity = "0";
  }
});

videoBg.volume = 0;

muteVideo.addEventListener('click', function(){
  if(videoBg.volume == 1.0){
    videoBg.volume = 0;
    muteVideo.style.backgroundImage = "url(./img/idle.png)";
  } else {
    videoBg.volume = 1.0
    muteVideo.style.backgroundImage = "url(./img/wondicon-ui-free-speaker_111240.svg)";
  }
});


let browseOffset = 0;
const browsePrev = document.querySelector('.browse-prev');
const browseNext = document.querySelector('.browse-next');
const browseLine = document.querySelector('.browse-slider');

browseNext.addEventListener('click', function(){
  browseOffset = browseOffset + 100;
  if (browseOffset > 100) {
    browseOffset = 100;
  }
  browseLine.style.left = -browseOffset + '%';
  if(browseOffset == 0){
    browseNext.classList.add("browse-active");
    browsePrev.classList.remove("browse-active");
    browsePrev.style.rotate = "0deg";
}
  if(browseOffset > 0){
    browseNext.classList.remove("browse-active");
    browsePrev.classList.add("browse-active");
    browsePrev.style.rotate = "180deg";
  }
});

browsePrev.addEventListener('click', function () {
  browseOffset = browseOffset - 100;
  if (browseOffset < 0) {
    browseOffset = 0;
  }
  browseLine.style.left = -browseOffset + '%';
  if(browseOffset == 0){
    browseNext.classList.add("browse-active");
    browsePrev.classList.remove("browse-active");
    browsePrev.style.rotate = "0deg";
}
  if(browseOffset > 0){
    browseNext.classList.remove("browse-active");
    browsePrev.classList.add("browse-active");
    browsePrev.style.rotate = "180deg";
  }
});


let supOffset = 0;
let supTimer;
supAutoSlider();
const supPrev = document.querySelector('.comment-prev');
const supNext = document.querySelector('.comment-next');
const comSlider = document.querySelector('.comment-slider');

supPrev.addEventListener('click', function(){
  clearTimeout(supTimer);
  supOffset = supOffset - 100;
  if(supOffset < 0){
    supOffset = 300;
  }
  comSlider.style.left = -supOffset + '%';
  supAutoSlider();
})

function supportNext (){
  supOffset = supOffset + 100;
  if(supOffset > 300){
    supOffset = 0;
  }
  comSlider.style.left = -supOffset + '%';
  supAutoSlider();
}
function supAutoSlider (){
  supTimer = setTimeout(supportNext, 6000);
}
supNext.addEventListener('click', function() {
  clearTimeout(supTimer);
  supOffset = supOffset + 100;
  if(supOffset > 300){
    supOffset = 0;
  }
  comSlider.style.left = -supOffset + '%';
  supAutoSlider();
});

const detailsBtn = document.querySelector('.details-form-btn');
const checkBtn = document.querySelector('.real-btn');
const text = document.querySelector('.agree');

detailsBtn.addEventListener('click', function() {
  if(checkBtn.checked == false){
    text.style.display = "inline-block";
    event.preventDefault();
  } else {
    text.style.display = "none";
    location.reload();
  }
})

const button = document.querySelector('.scrollup');

button.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    left: 0,
  });
});
