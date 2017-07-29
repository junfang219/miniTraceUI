$("#expandable").click(function() {
	var foldStatus = $(this).attr("class");
	if (foldStatus == "folded") {
		$("#content").show(500);
		$(this).removeClass("folded").addClass("unfolded").text("Show");
	} else {
		$("#content").hide(500)
		$(this).removeClass("unfolded").addClass("folded").text("Hide");
	}
});
