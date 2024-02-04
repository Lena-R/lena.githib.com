//selectors
const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

//the next four lines set the canvas to the same size as the video
const width = video.videoWidth;
const height = video.videoHeight;
canvas.width = width;
canvas.height = height;

function getVideo() {
  navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(localMediaStream => {
      console.log(localMediaStream);
      
      video.srcObject = localMediaStream;
      video.play();
    })
    .catch(err => {
      console.error(`OH NO!!!`, err);
    });
}

function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  //console.log(width, height);
  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
  }, 16)
};

function takePhoto() {
  
}


getVideo();

//video.addEventListener('canplay', paintToCanvas);
/////let clk = document.querySelector('.playvideo');
////clk.addEventListener('click', getVideo, false);

//return the timer in case we ever need it
//return setInterval(() => {
  //ctx.drawImage(video, 0, 0, width, height);


//get the pixels from the canvas
//let pixels = ctx.getImageData(0, 0, width, height);

//red effect
//pixels = redEffect(pixels);

//pixels = rgbSplit(pixels);
//ctx.globalAlpha = 0.1;

//Green Screen
//pixels = greenScreen(pixels);

//Put the pixels back
//ctx.putImageData(pixels, 0, 0);
//}, 16);

//function takePhoto() {

//}

//08^00