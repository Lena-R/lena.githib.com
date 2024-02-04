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
};

function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  //console.log(width, height);
  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
    let pixels = ctx.getImageData(0, 0, width, height);
    //console.log(pixels);
    pixels = redEffect(pixels); //red effect 
    ctx.putImageData(pixels, 0, 0);
    pixels = rgbSplit(pixels);
    ctx.globalAlpha = 0.1;
  }, 16);
};

function takePhoto() {
  snap.currentTime = 0;
  snap.play();

  const data = canvas.toDataURL('image/jpeg');
  //console.log(data);
  const link = document.createElement('a');
  link.href = data;
  link.setAttribute('download', 'cool');
  link.textContent = 'Download Image';
  link.innerHTML = `<img src = "${data}" alt = "nice photo">`;
  strip.insertBefore(link, strip.firstChild);
};

function redEffect(pixels) {
  for(let i = 0; i < pixels.data.length; i+=4) {
    pixels.data[i + 0] = pixels.data[i + 0] + 100; //red
    pixels.data[i + 1] = pixels.data[i + 1] - 50; //green
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5; //blue
  };
  return pixels;
};

function rgbSplit(pixels) {
    for(let i = 0; i < pixels.data.length; i+=4) {
    pixels.data[i - 150] = pixels.data[i + 0] + 100; //red
    pixels.data[i + 100] = pixels.data[i + 1] - 50; //green
    pixels.data[i - 150] = pixels.data[i + 2] * 0.5; //blue
  };
  return pixels;
}

function greenScreen(pixels) {

}

getVideo();

video.addEventListener('canplay', paintToCanvas);

//video.addEventListener('canplay', paintToCanvas);
/////let clk = document.querySelector('.playvideo');
////clk.addEventListener('click', getVideo, false);


//Green Screen
//

