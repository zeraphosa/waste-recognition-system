let camera_button = document.querySelector("#camera-btn");
let video = document.querySelector("#video");
let click_button = document.querySelector("#click-photo");
let canvas = document.querySelector("#canvas");
camera_button.addEventListener('click', async function() {
   	let stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
	video.srcObject = stream;
});
click_button.addEventListener('click', function() {
   	canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
   	// let image_data_url = canvas.toDataURL('image/jpeg');
	let image_data_url = canvas.toDataURL('/img/jpeg');
   	// data url of the image
   	console.log(image_data_url);
});
var photo_modal = document.getElementById("photoModal");
var photo_btn = document.getElementById("camera-btn");
var photo_span = document.getElementsByClassName("close")[0];
photo_btn.onclick = function() {
  photo_modal.style.display = "block";
}
photo_span.onclick = function() {
  photo_modal.style.display = "none";
}

var pick_modal = document.getElementById("pickModal");
var pick_btn = document.getElementById('pick-btn');
var pick_span = document.getElementsByClassName('close')[1];
pick_btn.onclick = function () {
	pick_modal.style.display = "block";
}
pick_span.onclick = function () {
	pick_modal.style.display = "none";
}


window.onclick = function(event) {
	if (event.target == photo_modal || event.target == pick_modal) {
	  photo_modal.style.display = "none";
	  pick_modal.style.display = "none";
	}
  }
  