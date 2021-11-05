(function ($) {
	var BannerSlider = function () {
		$('.banner-slider .owl-carousel').owlCarousel({
			loop: true,
			autoplay: true,
			margin: 30,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			smartSpeed: 5000,
			nav: true,
			dots: true,
			autoplayHoverPause: false,
			items: 1,
			navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
		});
	};
	var AboutSlider = function () {
		$('.about-slider .owl-carousel').owlCarousel({
			loop: true,
			autoplay: true,
			margin: 30,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			smartSpeed: 1000,
			nav: false,
			dots: true,
			autoplayHoverPause: false,
			items: 1,
			navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
		});
	};
	BannerSlider();
	AboutSlider();
})(jQuery);


let camera_button = document.querySelector("#start-camera");
let video = document.querySelector("#video");
let click_button = document.querySelector("#click-photo");
let canvas = document.querySelector("#canvas");

camera_button.addEventListener('click', async function() {
   	let stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
	video.srcObject = stream;
});

click_button.addEventListener('click', function() {
   	canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
   	let image_data_url = canvas.toDataURL('image/jpeg');

   	// data url of the image
   	console.log(image_data_url);
});


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("start-camera");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// index.js
'use strict';

const assert = require('assert');
const python = require('python-bridge');

const py = python(); // return value

const {
  ex, // no return value
  end,
} = py;

const list = [3, 4, 2, 1];

ex`import math`

async function pyscript() {
  try {
    let math = await py`math.sqrt(9)`;
    let sort = await py`sorted(${list})`;

    assert.eqaul(math, 3);
    assert.deepEqual(sort, list.sort());

  } catch (e) {
    console.log(e)
  }
  end();
}

(async () => {
  pyscript();
  console.log("Python works in JavaScript");
})().catch(error => {
  console.log("error");
  console.error(error);
});