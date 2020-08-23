$(document).ready(function () {
  $('#upload-btn').show();
  window.isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
    navigator.userAgent.toLowerCase()
  );
  if (isMobile) {
    $('#logo-mobile').show();
    $('#logo-desktop').hide();
    $('#logo').hide();
    $('#upload-btn').css('font-size', '6rem');
    $('#send-btn').css('font-size', '6rem');
    $('#img').css('width', '90%');
  } else {
    $('#logo-mobile').hide();
    $('#logo-desktop').show();
    $('#logo').show();
  }

  function uploadFile(file) {
    var fd = new FormData();
    fd.append('file', file);

    $.ajax({
      url: 'https://lenadgit.github.io/hackbelarus/?',
      type: 'post',
      data: fd,
      contentType: false,
      processData: false,
      success: function (response) {},
      error: function () {
        alert('Error occured while file uploading');
      },
    });
  }

  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $('#img').attr('src', e.target.result);
        $('#img').show();
        $('#send-btn').css('display', 'block');
        $('#upload-btn').hide();
      };

      reader.readAsDataURL(input.files[0]); // convert to base64 string
    }
  }

  $('#upload').change(function () {
    readURL(this);
  });

  $('#upload-btn').click(function () {
    $('#upload').click();
  });

  $('#send-btn').click(function () {
    var file = $('#upload').prop('files')[0];

    uploadFile(file);
  });
});
