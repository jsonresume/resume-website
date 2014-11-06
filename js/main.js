jQuery(function($) {
	highlight();
	renderStats();

	var viewport = $("#viewport");
	var toggle = $("#sidebar-toggle");

	toggle.on("click", function(e) {
		e.preventDefault();
		viewport.toggleClass("lt");
	});
	if(window.location.pathname.indexOf('themes') !== -1) {
		$.ajax('http://registry.jsonresume.org/competition', {
			success: function (data) {
				console.log(data);
				var tbody = $('.leaderboard tbody');

				var leaderboard = data.leaderboard;


				themes = _.filter(themes, function(theme){
					if(theme) {
						return true;
					} else {
						return false;
					}
				});
				themes = _.map(themes, function(theme){
					theme.votes = leaderboard[theme.slug] || 0;
					return theme;
				});
				themes = _.sortBy(themes, function(theme){
					return -theme.votes;
				});
				console.log(themes);
				var rank = 1;
				_.each(themes, function(theme){
					var row = $('<tr/>');
					row.append($('<td/>').text(rank));
					row.append($('<td/>').text(theme.name));
					row.append($('<td/>').text('#' + theme.slug));
					row.append($('<td/>').text(theme.votes));
					row.append($('<td/>').html('<a target="_blank" href="https://twitter.com/intent/tweet?related=jsonresume&text=I%20vote%20for%20the%20%23flat%20resume%20theme%20to%20win%20this%20months%20%24250%20prize%20at%20jsonresume.org%2Fthemes">Tweet your vote</a>'));
					tbody.append(row);
					rank++;
				});
			}
		});
	};

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
