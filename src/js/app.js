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
 * Page filmes
 */
mainView.router.load({pageName: 'filme'});


/**
 * Page  Historia
 */
 mainView.router.load({pageName: 'historia'});



/**
 * Abrir menu
 */
$$("open-panel-right").on('click', function(e) {
  app.openPanel('right');
});

/**
 * Submit Ajax
 */
 
