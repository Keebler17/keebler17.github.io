function switchTheme() {
	var bg = $("html").css("color");
	document.write(bg);
	if(bg == "#103166") {
		$("html").css("background-color", "#ffffff");
		$(".site").css("color", "#000000");
	} else {
		$("html").css("background-color", "#103166");
		$(".site").css("color", "#ffffff");
	}
}
