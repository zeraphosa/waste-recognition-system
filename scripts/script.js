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
	// data url of the image
	console.log(image_data_url);
	const byteCharacters = atob(image_data_url);
	const byteNumbers = new Array(byteCharacters.length);
	for (let i = 0; i < byteCharacters.length; i++) {
		byteNumbers[i] = byteCharacters.charCodeAt(i);
	}
	const byteArray = new Uint8Array(byteNumbers);
	const blob = new Blob([byteArray], {
		type: contentType
	});
	const b64toBlob = (b64Data, contentType = '', sliceSize = 512) => {
		const byteCharacters = atob(b64Data);
		const byteArrays = [];

		for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
			const slice = byteCharacters.slice(offset, offset + sliceSize);

			const byteNumbers = new Array(slice.length);
			for (let i = 0; i < slice.length; i++) {
				byteNumbers[i] = slice.charCodeAt(i);
			}

			const byteArray = new Uint8Array(byteNumbers);
			byteArrays.push(byteArray);
		}

		const blob = new Blob(byteArrays, {
			type: contentType
		});
		return blob;
	}
	const blob = b64toBlob(b64Data, contentType);
	const blobUrl = URL.createObjectURL(blob);

	window.location = blobUrl;
	// location.href = 'http://127.0.0.1:5000/api?id=${image_data_url}';

});

function _base64ToArrayBuffer(image_data_url) {
	var binary_string = window.atob(image_data_url);
	var len = binary_string.length;
	var bytes = new Uint8Array(len);
	for (var i = 0; i < len; i++) {
		bytes[i] = binary_string.charCodeAt(i);
	}
	return console.log(bytes.buffer);
}

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