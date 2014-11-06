jQuery(function($) {
	highlight();
	equalizeFeatureHeight();
	renderStats();
	enableSidebar();
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

function equalizeFeatureHeight() {
	var start = $("#start");
	if (!start.length) {
		return;	
	}
	
	var width = 0;
	var page = $(window);
	
	setInterval(function() {
		if (page.width() == width) {
			return;
		}
		var max = 0;
		var p = start.find(".feature p");
		p.css("height", "auto");
		p.each(function() {
			var h = p.height();
			if (h > max) {
				max = h;
			}
		});
		p.height(max);
		width = page.width();
	}, 250);
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

function enableSidebar() {
	var viewport = $("#viewport");
	$(".lt").on("touchstart click", function(e) {
		e.stopPropagation();
		e.preventDefault();
		viewport.toggleClass("open");
	});
	$(".inner").on("touchstart click", function(e) {
		if (viewport.hasClass("open")) {
			e.stopPropagation();
			viewport.removeClass("open");
		}
	});
}
