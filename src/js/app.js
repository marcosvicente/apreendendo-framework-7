var app = new Framework7;
var $$ = Dom7;


// Abrir menu
$$("open-panel").on('click', function(e) {
  app.openPanel('right');
});
