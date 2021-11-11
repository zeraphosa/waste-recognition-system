let video = document.querySelector("#video");
let canvas = document.querySelector("#canvas");
let camerabtn = document.querySelector("#start-camera");
let photoshoot = document.querySelector("#click-photo");

camerabtn.addEventListener('click', async function () {
	modal.style.display = "block";
	let stream = await navigator.mediaDevices.getUserMedia({
		video: true,
		audio: false
	});
	video.srcObject = stream;
});
photoshoot.addEventListener('click', function() {
	canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
	let image_data_url = canvas.toDataURL('image/jpeg');
	// data url of the image
	console.log(image_data_url);
});


var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
	modal.style.display = "none";
}
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}