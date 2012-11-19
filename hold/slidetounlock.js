$(function() {
	var w = $("#well").width();
	var d = w * 0.65;

	$("#slider").draggable({
		axis: 'x',
		containment: 'parent',
		drag: function(event, ui) {
			console.log(ui.position.left);
			if (ui.position.left > d) {
				$("#unlock").fadeOut();
			}
		},
		stop: function(event, ui) {
			if (ui.position.left < d + 1) {
				$(this).animate({
					left: 0
				})
			}
		}
	});
});