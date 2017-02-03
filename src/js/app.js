var app = new Framework7({
  swipePanel: 'left',
  debug: true

});

var $$ = Dom7


var mainView = app.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

/**
 * Page Filmes
 */

 // Callbacks to run specific code for specific pages, for example for About page:
 app.onPageInit('filmes', function (page) {
     
 });


/**
 * Abrir menu
 */
$$("open-panel-right").on('click', function(e) {
  app.openPanel('right');
});
