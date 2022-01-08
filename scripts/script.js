let camera_button = document.querySelector("#camera-btn");
let video = document.querySelector("#video");
let click_button = document.querySelector("#click-photo");
let canvas = document.querySelector("#canvas");
camera_button.addEventListener("click", async function () {
  let stream = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false,
  });
  video.srcObject = stream;
});
click_button.addEventListener("click", function () {
  canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
  let image_data_url = canvas.toDataURL("/img/jpeg");
  let n = 22;
  image_data_url = image_data_url.substring(n);
  // let result = _base64ToArrayBuffer(image_data_url)
  // data url of the image
  location.href = "http://127.0.0.1:5000/api?photo_byte=" + image_data_url;

  //   loadJSON("http://127.0.0.1:5000/api/sonuc", myData , "jsonp");

  let url = "http://127.0.0.1:5000/api/sonuc";
  fetch(url)
    .then((response) => response.json())
	.then((data) => {
		console.log(data);
		document.querySelector('#header1').innerText = data.header1;
		document.querySelector('#header2').innerText = data.header2;
		document.querySelector('#content1').innerText = data.content1;
		document.querySelector('#header3').innerText = data.header3;
		document.querySelector('#content2').innerText = data.content2;
		document.querySelector('#warning').innerText = data.warning;
	})

});



// .then((data) => {
// 	console.log(data.header1);
// 	document.querySelector("#sonuc").innerText = data;
//   });



// function loadJSON(path, success, error) {
//   var xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         success(JSON.parse(xhr.responseText));
//       } else {
//         error(xhr);
//       }
//     }
//   };
//   xhr.open("GET", path, true);
//   xhr.send();
// }
// function myData(Data)
// {
// 	document.querySelector('#sonuc').innerText = Data

//   // Output only the details on the first post
//   console.log(Data[0]);

// }
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
};
photo_span.onclick = function () {
  photo_modal.style.display = "none";
};

var pick_modal = document.getElementById("pickModal");
var pick_btn = document.getElementById("pick-btn");
var pick_span = document.getElementsByClassName("close")[1];
pick_btn.onclick = function () {
  pick_modal.style.display = "block";
};
pick_span.onclick = function () {
  pick_modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == photo_modal || event.target == pick_modal) {
    photo_modal.style.display = "none";
    pick_modal.style.display = "none";
  }
};
