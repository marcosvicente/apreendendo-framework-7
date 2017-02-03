var app = new Framework7({
  swipePanel: 'left',
  debug: true
});

var $$ = Dom7

/**
 * Abrir menu
 */
$$("open-panel-right").on('click', function(e) {
  app.openPanel('right');
});
