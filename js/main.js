jQuery(() => {
  highlight();
  equalizeFeatureHeight();
  enableSidebar();
  getResumeSchema();
});

/**
 * Apply the class "active" to the current page in the navigation bar.
 */
function highlight() {
  $("#nav a").each(function() {
    const self = $(this);
    const href = self.attr("href");
    const path = window.location.pathname;

    if (path === href) {
      self.addClass("active");
      self.siblings().removeClass("active");
    }
  });
}

function equalizeFeatureHeight() {
  const start = $("#start");

  if (!start.length)
    return;

  setInterval(() => {
    let max = 0;
    const items = start.find(".feature p");

    items.css("height", "auto").each(function() {
      const h = $(this).height();

      if (h > max)
        max = h;
    });

    items.height(max);
  }, 240);
}

function enableSidebar() {
  const viewport = $("#viewport");

  $(".lt").on("touchstart click", (e) => {
    e.stopPropagation();
    e.preventDefault();
    viewport.toggleClass("open");
  });

  $(".inner").on("touchstart click", (e) => {
    if (viewport.hasClass("open")) {
      e.stopPropagation();
      viewport.removeClass("open");
    }
  });
}

function getResumeSchema() {
  var url = 'https://raw.githubusercontent.com/jsonresume/resume-schema/master/sample.resume.json';
  var schemaContainer = $('#resume-schema-template');
  var schemaVersion = $('#resume-schema-version');
  
  if(schemaContainer.length){
    $.getJSON(url, function(data) {
      var version = data.meta.version.replace("v", "Version");
      delete data['$schema'];
      delete data['meta'];
      var jsonString = JSON.stringify(data, null, 2);
      schemaContainer[0].textContent = jsonString;
      schemaVersion[0].textContent = version;
    });
  }
  
}

