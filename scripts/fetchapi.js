let url = "http://127.0.0.1:5000/api/sonuc";
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    document.querySelector("#header1").innerText = data.header1;
    document.querySelector("#header2").innerText = data.header2;
    document.querySelector("#content1").innerText = data.content1;
    document.querySelector("#header3").innerText = data.header3;
    document.querySelector("#content2").innerText = data.content2;
    document.querySelector("#warning").innerText = data.warning;
  });