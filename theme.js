$(".themeswitch").click(function() {
	var theme = $(".theme").html();
	if(theme == "Light") {
		$("html").css("background-color", "#103166");
		$(".site").css("color", "#ffffff")
	} else {
		$("html").css("background-color", "#ffffff");
		$(".site").css("color", "#000000");
	}
});
