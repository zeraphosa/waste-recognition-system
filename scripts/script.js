let cam_video = document.querySelector("#video");
let cam_canvas = document.querySelector("#canvas");
let nav_camera_btn = document.querySelector("#camera-btn");
let take_photo_btn = document.querySelector("#click-photo");
let photo_modal_closebtn = document.getElementsByClassName("close")[0];
let pick_modal_closebtn = document.getElementsByClassName("close")[1];
let pick_modal_btn = document.getElementById("pick-btn");
var photo_modal = document.getElementById("photoModal");
var pick_modal = document.getElementById("pickModal");


// TAKE PHOTO
nav_camera_btn.onclick = async function () {
  photo_modal.style.display = "block";
  let stream = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false,
  });
  video.srcObject = stream;
};

take_photo_btn.onclick = function () {
  cam_canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
  let image_data_url = canvas.toDataURL("/img/jpeg");
  let n = 22;
  image_data_url = image_data_url.substring(n);
  location.href = "http://127.0.0.1:5000/api?photo_byte=" + image_data_url;
  location.href = "http://127.0.0.1:5501/sonuc.html";  
};



// MODAL CLOSE
photo_modal_closebtn.onclick = function() {
    photo_modal.style.display = "none";
}
pick_modal_closebtn.onclick = function() {
    pick_modal.style.display = "none";
}

window.onclick = function (event) {
    if (
      event.target == photo_modal ||
      event.target == pick_modal 
    ) {
      photo_modal.style.display = "none";
      pick_modal.style.display = "none";
    }
  };