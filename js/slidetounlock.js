$(function() {
	var w = $(#well).width;

	$("#slider").draggable({
		axis: 'x',
		containment: 'parent',
		drag: function(event, ui) {
			if (ui.position.left > 470) {
				$("body").fadeOut();
			}
		},
		stop: function(event, ui) {
			if (ui.position.left < 471) {
				$(this).animate({
					left: 0
				})
			}
		}
	});
});