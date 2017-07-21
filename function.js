function getTimes(city) {
	var xmlHttp;
	try {
		xmlHttp=new XMLHttpRequest();
	} catch (e) {
		try {
			xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try {
				xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e) {
				return false;
			}
		}
	}
	xmlHttp.onreadystatechange = function() {
		if(xmlHttp.readyState==3) {
			document.getElementById("namaz").innerHTML = '<br><br><center>Lütfen bekleyin...!</center>';
		} else if(xmlHttp.readyState==4) {
			document.getElementById("namaz").innerHTML = xmlHttp.responseText;
		}
	}
	xmlHttp.open("GET","wp-content/plugins/ramazan-imsakiyesi/get.php?city="+city);
	xmlHttp.send(null);
}