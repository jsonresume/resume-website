jQuery(function($) {
	highlight();
	renderStats();
});

function highlight() {
	$("#nav a").each(function() {
		var self = $(this);
		if (window.location.pathname.indexOf(self.attr("href")) !== -1) {
			self.addClass("active");
			self.siblings().removeClass("active");
		}
	});
}

function renderStats() {
	var stats = $("#stats");
	if (!stats.length) {
		return;
	}

	var previous = 0;
	var options = {
		useEasing : true, 
		useGrouping : true, 
		separator : ',', 
		decimal : '.' 
	}

	$.ajax('http://registry.jsonresume.org/stats', {
		success: function (data) {
			previous = data.views;
			var demo = new countUp("myTargetElement", 0, data.views*1, 0, 2, options);
			demo.start();

			var demo2 = new countUp("myTargetElementh", 0, data.resumeCount*1, 0, 2, options);
			demo2.start();

			var demo3 = new countUp("myTargetElementu", 0, data.userCount*1, 0, 2, options);
			demo3.start();
		}
	});

	var pusher = new Pusher('30c6be5ae705d6b4af61');
	var channel = pusher.subscribe('test_channel');
	channel.bind('my_event', function(data) {
		console.log(data);
		console.log(previous*1, data.views*1);
		var demo = new countUp("myTargetElement", previous*1, data.views*1, 0, 2, options);
		demo.start();
		previous = data.views*1;
	});
}
