$("#expandable").click(function() {
	var foldStatus = $(this).attr("class");
	if (foldStatus == "folded") {
		$("#content").show(10);
		$(this).removeClass("folded").addClass("unfolded").text("Show");
	} else {
		$("#content").hide(10)
		$(this).removeClass("unfolded").addClass("folded").text("Hide");
	}
});
