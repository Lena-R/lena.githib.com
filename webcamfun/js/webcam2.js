    navigator.mediaDevices.getUserMedia({ video:true})
      .then(function(stream) {
        myVideoStream = stream;
        // display my local video to me
        myVideo.srcObject = stream;
      })
      .catch(function(err) {
        console.log(err);
      });