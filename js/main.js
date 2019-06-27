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
  var page = $(window);
  setInterval(function() {
    var max = 0;
    var items = start.find(".feature p");
    items.css("height", "auto").each(function() {
      var h = $(this).height();
      if (h > max) {
        max = h;
      }
    });
    items.height(max);
  }, 240);
}

function renderStats() {
  var stats = $("#stats");
  if (!stats.length) {
    return;
  }

  var previous = 0;
  var options = {
    useEasing: true,
    useGrouping: true,
    separator: ",",
    decimal: "."
  };

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
}
