var app = new Framework7({
  swipePanel: 'left',
  debug: true

});

var $$ = Dom7


var mainView = app.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    // dynamicNavbar: true
});



/**
 * Abrir menu
 */
$$("open-panel-right").on('click', function(e) {
  app.openPanel('right');
});
