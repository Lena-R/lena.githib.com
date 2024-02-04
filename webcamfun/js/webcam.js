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

    var enumeratorPromise = navigator.mediaDevices.enumerateDevices().then(function(devices) {
        var cam = devices.find(function(device) {
          return device.kind === "videoinput";
        });
          var mic = devices.find(function(device) {
            return device.kind === "audioinput";
          });
          //var constraints = {video:cam && mediaConstraints.video, audio:mic};
          //var constraints = { audio: true, video: { width: 1280, height: 720 } }; 
          var constraints = {video:cam, audio:mic};
          console.log("getUserMedia start mediaConstraints=" + JSON.stringify(constraints));
          return navigator.mediaDevices.getUserMedia(constraints)
                    .then(function(stream) {
                      gotUserMedia(stream);
                      const video = document.querySelector('.player');

//video.src = window.URL.video.srcObject(localMediaStream);
video.src = window.URL.createObjectURL(localMediaStream);
    //video.srcObject = localMediaStream;
    video.play();

                    }).catch(function(err) {
                      console.log(err.name);
                    });
        });
};
  
  getVideo();  