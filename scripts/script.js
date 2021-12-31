let camera_button = document.querySelector("#camera-btn");
let video = document.querySelector("#video");
let click_button = document.querySelector("#click-photo");
let canvas = document.querySelector("#canvas");
camera_button.addEventListener('click', async function () {
	let stream = await navigator.mediaDevices.getUserMedia({
		video: true,
		audio: false
	});
	video.srcObject = stream;
});
click_button.addEventListener('click', function () {
	canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
	let image_data_url = canvas.toDataURL('/img/jpeg');
	let n = 22;
	image_data_url = image_data_url.substring(n);
	// let result = _base64ToArrayBuffer(image_data_url)
	// data url of the image
	location.href = 'http://127.0.0.1:5000/api?photo_byte='+image_data_url;

})
// function _base64ToArrayBuffer(base64) {
// 	var binary_string = window.atob(base64);
// 	var len = binary_string.length;
// 	var bytes = new Uint8Array(len);
// 	for (var i = 0; i < len; i++) {
// 		bytes[i] = binary_string.charCodeAt(i);
// 	}
// 	return bytes.buffer;
// }

var photo_modal = document.getElementById("photoModal");
var photo_btn = document.getElementById("camera-btn");
var photo_span = document.getElementsByClassName("close")[0];
photo_btn.onclick = function () {
	photo_modal.style.display = "block";
}
photo_span.onclick = function () {
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


window.onclick = function (event) {
	if (event.target == photo_modal || event.target == pick_modal) {
		photo_modal.style.display = "none";
		pick_modal.style.display = "none";
	}
}