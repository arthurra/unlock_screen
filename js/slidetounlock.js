$(function() {
	var w = $("#sliders").width();
	var u = w * 0.75;

	$(".slider").draggable({
		axis: 'x',
		containment: 'parent',
		drag: function(event, ui) {
			if (ui.position.left > u) {
				$("body").fadeOut();
			}
		},
		stop: function(event, ui) {
			if (ui.position.left < u + 1) {
				$(this).animate({
					left: 8
				});
			}
		}
	});

	$(".pic").draggable({
		axis: 'x',
		containment: 'parent',
		drag: function(event, ui) {
			if (ui.position.left > u) {
				$("body").fadeOut();
			}
		},
		stop: function(event, ui) {
			if (ui.position.left < u + 1) {
				$(this).animate({
					left: 0
				});
			}
		}
	});
});