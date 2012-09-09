<!doctype html>
<html>
<head>
<script type="text/javascript" src="webime.js"></script>
<style type="text/css">
@font-face {
  font-family: "Dwipaksara";
  src: url("dwipaksara.ttf");
}

body
{
	font-size: 1em;
	font-family: sans-serif;
}

#bali
{
	font-family: "Dwipaksara";	
	font-size: 22px;
}
</style>
<title>Dwipaksara: Metode Input Web</title>
</head>
<body>
<h1>Dwipaksara</h1>
<h2>Metode input berbasis Web</h2>
<p>Aplikasi web sederhana ini akan mengkonversi kata yang akan diketik di dalam Aksara Latin ke dalam bentuk Aksara Bali yang sesuai. Font Aksara Bali menggunakan font Dwipaksara berbasis standar Unicode</p>
<p>Font hanya akan berjalan baik pada peramban web Firefox versi 11 ke atas dengan mengaktifkan fitur rendering Graphite melalui about:config</p>
Aksara Latin : <br>
<textarea id="latin" cols="100" rows="20" onkeyup="do_latin2bali()"></textarea><br>
Aksara Bali : <br>
<textarea id="bali" cols="50" rows="5"></textarea><br>
<div id="status"></div>
<p>Dikembangkan oleh Putu Wiramaswara Widya (ITS, Surabaya)</p>
</body>
</html>
