## Atik Tespit Sistemi

cd flask-server -> python -m venv venv -> source venv/Scripts/activate
python server.py

cd mobile
npx 

Atik tespit sistemi atiklarin mobil uygulama ile fotograf alinarak hangi geridonusum kutusuna atilmasi gerektigi hakkinda bilgiler veren, atilacak nesnenin ozelliklerini gosteren sistemdir.

Uygulama mobil ve web tabanli olacak. Suan icin Websitesi hazirlanmistir. Web sitesinin yapiminda Asp .Net, Html, Css, Javascript kullanilmistir. Uygulama MsSql veritabanini kullanacaktir ve Python Api yazilmistir. Yapilanlara gore mobil uygulamanin yapimi ve yapay zekanin hazirlanmasi icin istenilen teknoloji kullanilabilecek. Web sitesi sayesinde alinan fotograf ve kullanici bilgisi api ile Python Api`sine gonderiliyor. Fotograf decode yapilarak eski haline donduruluyor. Python kodumuzda ise veritabanina baglanarak fotograflar getiriyor ve goruntu isleme yontemi ile resimler eslestirilmeye basliyor, sonuc olarak kullaniciya cekilen objenin ne oldugu ve hangi atik kutusuna gitmesi gerektigini Api yolu ile geri gonderiyor.

## Veriler

Karton bardak
Tahta çubuk
Kağıt
PoKartonşet
Meyve suyu kutusu
Pet şişe
Yiyecek ambalajı
Metal şişe
Peçete
Sigara kutusu
Çakmak
Pil
İzmarit
Cam şişe
Maske

---

Live - https://atik-tespit-sistemi.netlify.app

MIT License

Copyright (c) 2021 Zaur Sharifov

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.F

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
