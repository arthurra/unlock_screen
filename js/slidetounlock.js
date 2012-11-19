$(function() {
	var w = $("#well").width();
	var d = w * 0.75;

	$("#slider").draggable({
		axis: 'x',
		containment: 'parent',
		drag: function(event, ui) {
			if (ui.position.left > d) {
				$("#unlock").fadeOut();
			}
		},
		stop: function(event, ui) {
			if (ui.position.left < d + 1) {
				$(this).animate({
					left: 0
				});
			}
		}
	});
});